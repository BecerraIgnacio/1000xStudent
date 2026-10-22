// Usage: node scripts/tts.ts u1 [--check]
// Generates one mp3 per scene with ElevenLabs (cached by text hash) and writes src/manifests/<unit>.json
// with each scene's duration and the time at which every `at` phrase is spoken.
import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Manifest, Scene, Unit } from "../src/types.ts";

const VOICE = "QK4xDwo9ESPHA4JNUpX3"; // Tomas - Argentina & Uruguaya
const MODEL = "eleven_v4";
const ROOT = join(import.meta.dirname, "..");

const [unitArg, flag] = process.argv.slice(2);
if (!unitArg) throw new Error("usage: node scripts/tts.ts <unit> [--check]");
const unit: Unit = (await import(`../src/units/${unitArg}.ts`)).unit;
const check = flag === "--check";

const ats = (v: unknown): string[] =>
  v && typeof v === "object"
    ? Object.entries(v).flatMap(([k, x]) => (k === "at" && typeof x === "string" ? [x] : ats(x)))
    : [];

// Validate: every `at` phrase must appear in its scene narration.
let errors = 0;
for (const s of unit.scenes) {
  for (const a of ats(s.visual)) {
    if (!s.narration.toLowerCase().includes(a.toLowerCase())) {
      console.error(`[${s.id}] phrase not in narration: "${a}"`);
      errors++;
    }
  }
}
const ids = unit.scenes.map((s) => s.id);
if (new Set(ids).size !== ids.length) throw new Error("duplicate scene ids");
if (errors) process.exit(1);

const hashOf = (s: Scene) =>
  createHash("sha1").update(`${MODEL}|${VOICE}|${s.narration}`).digest("hex").slice(0, 10);
const audioDir = join(ROOT, "public", "audio", unit.id);
mkdirSync(audioDir, { recursive: true });
const name = (s: Scene) => `${s.id}-${hashOf(s)}`;
const pending = unit.scenes.filter((s) => !existsSync(join(audioDir, `${name(s)}.json`)));
const chars = (xs: Scene[]) => xs.reduce((n, s) => n + s.narration.length, 0);
console.log(`${unit.id}: ${unit.scenes.length} scenes, ${chars(unit.scenes)} chars total, ${pending.length} to generate (${chars(pending)} chars)`);
if (check) process.exit(0);

const key = readFileSync(join(ROOT, "..", ".env"), "utf8").match(/ELEVENLABS_API_KEY=(\S+)/)?.[1];
if (!key) throw new Error("ELEVENLABS_API_KEY missing in ../.env");

type Alignment = { characters: string[]; character_start_times_seconds: number[]; character_end_times_seconds: number[] };

async function generate(s: Scene) {
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE}/with-timestamps?output_format=mp3_44100_128`,
      {
        method: "POST",
        headers: { "xi-api-key": key!, "Content-Type": "application/json" },
        body: JSON.stringify({ text: s.narration, model_id: MODEL, language_code: "es" }),
      },
    );
    if (res.ok) {
      const j = (await res.json()) as { audio_base64: string; alignment: Alignment };
      writeFileSync(join(audioDir, `${name(s)}.mp3`), Buffer.from(j.audio_base64, "base64"));
      writeFileSync(join(audioDir, `${name(s)}.json`), JSON.stringify(j.alignment));
      console.log(`  ok ${s.id}`);
      return;
    }
    const body = await res.text();
    if (attempt >= 4 || (res.status !== 429 && res.status < 500)) throw new Error(`${s.id}: ${res.status} ${body}`);
    await new Promise((r) => setTimeout(r, 2000 * attempt));
  }
}

const queue = [...pending];
await Promise.all(
  Array.from({ length: 3 }, async () => {
    for (let s; (s = queue.shift()); ) await generate(s);
  }),
);

// Drop audio from older versions of the narration.
const keep = new Set(unit.scenes.flatMap((s) => [`${name(s)}.mp3`, `${name(s)}.json`]));
for (const f of readdirSync(audioDir)) if (!keep.has(f)) rmSync(join(audioDir, f));

const manifest: Manifest = {
  unit: unit.id,
  scenes: unit.scenes.map((s) => {
    const a: Alignment = JSON.parse(readFileSync(join(audioDir, `${name(s)}.json`), "utf8"));
    const spoken = a.characters.join("").toLowerCase();
    const marks: Record<string, number> = {};
    for (const phrase of ats(s.visual)) {
      const i = spoken.indexOf(phrase.toLowerCase());
      if (i < 0) throw new Error(`[${s.id}] phrase not found in alignment: "${phrase}"`);
      marks[phrase] = a.character_start_times_seconds[i];
    }
    return { id: s.id, file: `audio/${unit.id}/${name(s)}.mp3`, duration: a.character_end_times_seconds.at(-1)!, marks };
  }),
};
mkdirSync(join(ROOT, "src", "manifests"), { recursive: true });
writeFileSync(join(ROOT, "src", "manifests", `${unit.id}.json`), JSON.stringify(manifest, null, 1));
console.log(`manifest written: src/manifests/${unit.id}.json`);
