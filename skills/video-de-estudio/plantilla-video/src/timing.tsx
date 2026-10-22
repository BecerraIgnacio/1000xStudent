import { createContext, useContext } from "react";
import { Easing, interpolate, useCurrentFrame, useVideoConfig } from "remotion";

export const C = {
  bg: "#F4F2ED",
  card: "#FFFFFF",
  ink: "#1A1D23",
  muted: "#5B6170",
  line: "#D9D5CC",
  accent: "#2340C4",
  accentSoft: "#E3E8FB",
  warm: "#B4441A",
  warmSoft: "#FBE6DC",
  ok: "#17795E",
  okSoft: "#DDF2EA",
  mark: "rgba(255, 205, 0, 0.55)",
};

// Per-scene timing: when the narration starts (frames) and when each `at` phrase is spoken (seconds into the audio).
export const SceneTiming = createContext({ lead: 0, audioEnd: 0, marks: {} as Record<string, number> });

// Frame (relative to the scene) at which a phrase is spoken; 0 when there is no phrase.
export const useAt = () => {
  const { lead, marks } = useContext(SceneTiming);
  const { fps } = useVideoConfig();
  return (at?: string) => (at === undefined ? 0 : Math.max(0, lead + Math.round((marks[at] - 0.1) * fps)));
};

export const useIn = (at?: string, frames = 12) => {
  const frame = useCurrentFrame();
  const start = useAt()(at);
  return interpolate(frame, [start, start + frames], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
};

// Index of the most recently revealed item (the one being explained right now), -1 before the first.
export const useActive = (ats: (string | undefined)[]) => {
  const frame = useCurrentFrame();
  const t = useAt();
  if (ats.every((a) => a === undefined)) return -1;
  let active = -1;
  ats.forEach((a, i) => {
    if (frame >= t(a)) active = i;
  });
  return active;
};
