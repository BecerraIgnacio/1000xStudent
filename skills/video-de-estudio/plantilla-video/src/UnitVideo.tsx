import { loadFont } from "@remotion/google-fonts/Inter";
import { AbsoluteFill, Audio, interpolate, Sequence, staticFile, useCurrentFrame } from "remotion";
import { layout, type Timed } from "./layout.ts";
import { C, SceneTiming } from "./timing.tsx";
import type { Manifest, Unit } from "./types.ts";
import { VisualView } from "./visuals.tsx";

const { fontFamily } = loadFont("normal", { weights: ["400", "600", "700"], subsets: ["latin"] });

const Progress = ({ timed, total }: { timed: Timed[]; total: number }) => {
  const frame = useCurrentFrame();
  const sections: { name: string; from: number; to: number }[] = [];
  for (const t of timed) {
    const last = sections.at(-1);
    if (last?.name === t.section) last.to = t.start + t.frames;
    else sections.push({ name: t.section, from: t.start, to: t.start + t.frames });
  }
  return (
    <div style={{ position: "absolute", left: 120, right: 120, bottom: 46, display: "flex", gap: 8 }}>
      {sections.map((s, i) => (
        <div key={i} style={{ flex: (s.to - s.from) / total, height: 8, background: C.line, borderRadius: 4, overflow: "hidden" }}>
          <div style={{ height: "100%", background: C.accent, width: `${interpolate(frame, [s.from, s.to], [0, 100], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}%` }} />
        </div>
      ))}
    </div>
  );
};

const SceneFrame = ({ frames, children }: { frames: number; children: React.ReactNode }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 8, frames - 8, frames], [0, 1, 1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  return <AbsoluteFill style={{ padding: "150px 120px 110px", opacity }}>{children}</AbsoluteFill>;
};

export const UnitVideo = ({ unit, manifest }: { unit: Unit; manifest: Manifest }) => {
  const timed = layout(unit, manifest);
  const total = timed.reduce((n, t) => n + t.frames, 0);
  const frame = useCurrentFrame();
  const current = timed.findLast((t) => frame >= t.start) ?? timed[0];
  return (
    <AbsoluteFill style={{ background: C.bg, fontFamily }}>
      <div style={{ position: "absolute", top: 54, left: 120, right: 120, display: "flex", justifyContent: "space-between", fontSize: 26, color: C.muted }}>
        <span>
          <b style={{ color: C.ink }}>Unidad {unit.number}</b> · {unit.title}
        </span>
        <span>{current.section}</span>
      </div>
      {unit.scenes.map((s, i) => {
        const t = timed[i];
        const m = manifest.scenes.find((x) => x.id === s.id)!;
        return (
          <Sequence key={s.id} from={t.start} durationInFrames={t.frames} name={s.id}>
            <SceneTiming.Provider value={{ lead: t.lead, audioEnd: t.audioEnd, marks: m.marks }}>
              <SceneFrame frames={t.frames}>
                <VisualView v={s.visual} />
              </SceneFrame>
              <Sequence from={t.lead} layout="none">
                <Audio src={staticFile(m.file)} />
              </Sequence>
            </SceneTiming.Provider>
          </Sequence>
        );
      })}
      <Progress timed={timed} total={total} />
    </AbsoluteFill>
  );
};
