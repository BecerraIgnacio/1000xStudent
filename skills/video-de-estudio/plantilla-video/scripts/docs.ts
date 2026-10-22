// Usage: node scripts/docs.ts u1 → ../unidades/unidad-1/{guion.md, guion-elevenlabs.txt, storyboard.md}
// Both documents are generated from the same scene data the video uses, so they never drift apart.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import type { Item, Manifest, Unit, Visual } from "../src/types.ts";
import { FPS, layout } from "../src/layout.ts";

const arg = process.argv[2];
if (!arg) throw new Error("usage: node scripts/docs.ts <unit>");
const unit: Unit = (await import(`../src/units/${arg}.ts`)).unit;
const manifest: Manifest = JSON.parse(readFileSync(join(import.meta.dirname, "..", "src", "manifests", `${unit.id}.json`), "utf8"));
const timed = layout(unit, manifest);
const out = join(import.meta.dirname, "..", "..", "unidades", `unidad-${arg.slice(1)}`);
mkdirSync(out, { recursive: true });

const tc = (frames: number) => {
  const s = Math.floor(frames / FPS);
  return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
};
const item = (i: Item) => `${i.label ? `**${i.label}**: ` : ""}${i.text}${i.sub ? ` (${i.sub})` : ""}${i.at ? ` — aparece en «${i.at}»` : ""}`;

const describe = (v: Visual): string[] => {
  switch (v.kind) {
    case "title": return [`Título: **${v.title}**`, v.subtitle ?? ""];
    case "definition": return [`Definición de **${v.term}** con resaltado progresivo:`, ...v.parts.filter((p) => p.key).map((p) => `- «${p.text}» se resalta en «${p.at}»`), ...(v.foot ? [`- Recuadro: ${item(v.foot)}`] : [])];
    case "points": return [`Lista «${v.title}»:`, ...v.items.map((i) => `- ${item(i)}`), ...(v.note ? [`- Nota: ${item(v.note)}`] : [])];
    case "compare": return [`Comparación lado a lado «${v.title}»:`, ...v.cols.flatMap((c) => [`- Columna **${c.label}**`, ...c.items.map((i) => `  - ${item(i)}`)]), ...(v.diff ? [`- Diferencia clave: ${item(v.diff)}`] : [])];
    case "tree": return [`Árbol «${v.root}»:`, ...v.nodes.map((n) => `- **${n.label}**${n.at ? ` — aparece en «${n.at}»` : ""}: ${(n.items ?? []).join("; ")}`), ...(v.note ? [`- Nota: ${item(v.note)}`] : [])];
    case "flow": return [`Diagrama de flujo «${v.title}»:`, ...v.steps.map((s, i) => `${i + 1}. ${s.stage ? `[${s.stage}] ` : ""}${item(s)}`), ...(v.note ? [`- Nota: ${item(v.note)}`] : [])];
    case "case": return [`Caso «${v.title}»:`, ...v.story.map((i) => `- ${item(i)}`), ...(v.verdict ? [`- Resultado: ${item(v.verdict)}`] : [])];
    case "quiz": return [v.answer ? `Respuesta a: «${v.question}»` : `Pregunta de recuperación (pausa para pensar): «${v.question}»`, ...(v.options ?? []).map((o, i) => `- ${"ABCD"[i]}) ${o}${v.answer && v.correct === i ? " ✔" : ""}`), ...(v.answer ?? []).map((i) => `- ${item(i)}`)];
  }
};

const guion = [`# Unidad ${unit.number} — ${unit.title}: guion de narración`, "", `Cada bloque es un clip de audio independiente (ElevenLabs).`, ""];
const story = [`# Unidad ${unit.number} — ${unit.title}: storyboard`, "", `Duración total: ${tc(timed.at(-1)!.start + timed.at(-1)!.frames)} · 1920×1080 · ${FPS} fps`, ""];
let section = "";
unit.scenes.forEach((s, i) => {
  const t = timed[i];
  if (t.section !== section) {
    section = t.section;
    guion.push(`## ${section}`, "");
    story.push(`## ${section}`, "");
  }
  guion.push(`**[${s.id}]** ${s.narration}`, "");
  story.push(`### ${tc(t.start)}–${tc(t.start + t.frames)} · ${s.id} · ${s.visual.kind}`, "", ...describe(s.visual).filter(Boolean), "", `> ${s.narration}`, "");
});

writeFileSync(join(out, "guion.md"), guion.join("\n"));
writeFileSync(join(out, "guion-elevenlabs.txt"), unit.scenes.map((s) => s.narration).join("\n\n") + "\n");
writeFileSync(join(out, "storyboard.md"), story.join("\n"));
console.log(`docs written to ${out}`);
