// Plain TS (no JSX) so Node scripts can share the exact timing the video uses.
import type { Manifest, Unit } from "./types.ts";

export const FPS = 30;
const LEAD = 0.4; // seconds of visual before the voice starts

export type Timed = { start: number; frames: number; lead: number; audioEnd: number; section: string };

export const layout = (unit: Unit, manifest: Manifest): Timed[] => {
  let start = 0;
  let section = "";
  return unit.scenes.map((s) => {
    const m = manifest.scenes.find((x) => x.id === s.id);
    if (!m) throw new Error(`scene ${s.id} missing from manifest: run npm run tts`);
    section = s.section ?? section;
    const pause = s.pauseAfter ?? (s.visual.kind === "quiz" && !s.visual.answer ? 4 : 0.8);
    const lead = Math.round(LEAD * FPS);
    const audioEnd = lead + Math.ceil(m.duration * FPS);
    const frames = audioEnd + Math.round(pause * FPS);
    const t = { start, frames, lead, audioEnd, section };
    start += frames;
    return t;
  });
};
