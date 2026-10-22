import type { CSSProperties, ReactNode } from "react";
import { useContext } from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { C, SceneTiming, useActive, useAt, useIn } from "./timing.tsx";
import type { Item, Visual } from "./types.ts";

const Reveal = ({ at, children, style }: { at?: string; children: ReactNode; style?: CSSProperties }) => {
  const p = useIn(at);
  return <div style={{ opacity: p, transform: `translateY(${(1 - p) * 18}px)`, ...style }}>{children}</div>;
};

const H = ({ children }: { children: ReactNode }) => (
  <div style={{ fontSize: 58, fontWeight: 700, color: C.ink, marginBottom: 44, lineHeight: 1.15 }}>{children}</div>
);

const Box = ({ tone, label, children }: { tone: "accent" | "warm" | "ok" | "plain"; label?: string; children: ReactNode }) => {
  const [fg, bg] =
    tone === "accent" ? [C.accent, C.accentSoft] : tone === "warm" ? [C.warm, C.warmSoft] : tone === "ok" ? [C.ok, C.okSoft] : [C.muted, C.card];
  return (
    <div style={{ background: bg, borderLeft: `8px solid ${fg}`, borderRadius: 14, padding: "26px 34px", fontSize: 38, lineHeight: 1.4, color: C.ink }}>
      {label && <div style={{ fontSize: 26, fontWeight: 700, color: fg, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{label}</div>}
      {children}
    </div>
  );
};

// Inline "Label:" prefix used by notes, diffs and verdicts ("Ejemplo: ...").
const ItemBox = ({ item, tone, fallback }: { item: Item; tone: "accent" | "warm" | "ok" | "plain"; fallback?: string }) => (
  <Reveal at={item.at} style={{ marginTop: 36 }}>
    <Box tone={tone} label={item.label ?? fallback}>
      {item.text}
      {item.sub && <div style={{ fontSize: 30, color: C.muted, marginTop: 8 }}>{item.sub}</div>}
    </Box>
  </Reveal>
);

const List = ({ items, numbered, size = 40, focus = true }: { items: Item[]; numbered?: boolean; size?: number; focus?: boolean }) => {
  const frame = useCurrentFrame();
  const { audioEnd } = useContext(SceneTiming);
  // Highlight the item being explained; once the narration ends, show everything evenly.
  const spoken = useActive(items.map((i) => i.at));
  const active = focus && frame < audioEnd ? spoken : -1;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: size * 0.5 }}>
      {items.map((it, i) => (
        <Reveal key={i} at={it.at}>
          <div
            style={{
              display: "flex",
              gap: 22,
              alignItems: "baseline",
              fontSize: size,
              lineHeight: 1.3,
              color: C.ink,
              opacity: active === -1 || active === i ? 1 : 0.6,
              borderLeft: `6px solid ${active === i ? C.accent : "transparent"}`,
              paddingLeft: 20,
            }}
          >
            <span style={{ color: C.accent, fontWeight: 700, minWidth: size * 0.9 }}>{numbered ? `${i + 1}.` : "•"}</span>
            <div>
              {it.label && <span style={{ fontWeight: 700 }}>{it.label}: </span>}
              {it.text}
              {it.sub && <div style={{ fontSize: size * 0.72, color: C.muted, marginTop: 6 }}>{it.sub}</div>}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

const Title = ({ v }: { v: Extract<Visual, { kind: "title" }> }) => {
  const p = useIn(undefined, 20);
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", opacity: p }}>
      <div style={{ fontSize: 34, fontWeight: 700, color: C.accent, letterSpacing: 4, textTransform: "uppercase" }}>{v.kicker}</div>
      <div style={{ fontSize: 104, fontWeight: 700, color: C.ink, lineHeight: 1.05, marginTop: 20, maxWidth: 1500 }}>{v.title}</div>
      {v.subtitle && <div style={{ fontSize: 42, color: C.muted, marginTop: 34, maxWidth: 1400, lineHeight: 1.35 }}>{v.subtitle}</div>}
    </div>
  );
};

const Mark = ({ text, at }: { text: string; at?: string }) => {
  const p = useIn(at, 14);
  return (
    <span style={{ backgroundImage: `linear-gradient(${C.mark}, ${C.mark})`, backgroundSize: `${p * 100}% 100%`, backgroundRepeat: "no-repeat", fontWeight: p > 0.5 ? 600 : 400, borderRadius: 4 }}>
      {text}
    </span>
  );
};

const Definition = ({ v }: { v: Extract<Visual, { kind: "definition" }> }) => (
  <div>
    {v.label && <div style={{ fontSize: 28, fontWeight: 700, color: C.accent, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>{v.label}</div>}
    <H>{v.term}</H>
    <div style={{ fontSize: 46, lineHeight: 1.55, color: C.ink, maxWidth: 1650 }}>
      {v.parts.map((p, i) => (p.key ? <Mark key={i} text={p.text} at={p.at} /> : <span key={i}>{p.text}</span>))}
    </div>
    {v.foot && <ItemBox item={v.foot} tone="plain" />}
  </div>
);

const Points = ({ v }: { v: Extract<Visual, { kind: "points" }> }) => (
  <div>
    <H>{v.title}</H>
    <List items={v.items} numbered={v.numbered} size={v.items.length > 5 ? 38 : 44} />
    {v.note && <ItemBox item={v.note} tone="accent" />}
  </div>
);

const Compare = ({ v }: { v: Extract<Visual, { kind: "compare" }> }) => {
  const tones = [C.accent, C.warm, C.ok];
  return (
    <div>
      <H>{v.title}</H>
      <div style={{ display: "flex", gap: 40 }}>
        {v.cols.map((col, i) => (
          <Reveal key={i} at={col.at ?? col.items[0]?.at} style={{ flex: 1 }}>
            <div style={{ background: C.card, borderRadius: 18, borderTop: `10px solid ${tones[i]}`, padding: "30px 36px", height: "100%", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
              <div style={{ fontSize: 42, fontWeight: 700, color: tones[i], marginBottom: 24 }}>{col.label}</div>
              <List items={col.items} size={v.cols.length > 2 ? 32 : 36} focus={false} />
            </div>
          </Reveal>
        ))}
      </div>
      {v.diff && <ItemBox item={v.diff} tone="ok" fallback="La diferencia" />}
    </div>
  );
};

const Tree = ({ v }: { v: Extract<Visual, { kind: "tree" }> }) => {
  const active = useActive(v.nodes.map((n) => n.at));
  const cols = v.nodes.length <= 4 ? v.nodes.length : 3;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ background: C.ink, color: "#fff", fontSize: 44, fontWeight: 700, padding: "20px 44px", borderRadius: 16 }}>{v.root}</div>
      <div style={{ width: 4, height: 40, background: C.line }} />
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: 28, width: "100%", borderTop: `4px solid ${C.line}`, paddingTop: 36 }}>
        {v.nodes.map((n, i) => (
          <Reveal key={i} at={n.at}>
            <div style={{ background: active === i ? C.accentSoft : C.card, border: `3px solid ${active === i ? C.accent : C.line}`, borderRadius: 16, padding: "22px 26px", height: "100%" }}>
              <div style={{ fontSize: 36, fontWeight: 700, color: C.ink }}>{n.label}</div>
              {n.items?.map((x, j) => (
                <div key={j} style={{ fontSize: 28, color: C.muted, marginTop: 10, lineHeight: 1.3 }}>{x}</div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      {v.note && <div style={{ width: "100%" }}><ItemBox item={v.note} tone="accent" /></div>}
    </div>
  );
};

const Flow = ({ v }: { v: Extract<Visual, { kind: "flow" }> }) => {
  const active = useActive(v.steps.map((s) => s.at));
  const horizontal = v.steps.length <= 4;
  return (
    <div>
      <H>{v.title}</H>
      <div style={{ display: "flex", flexDirection: horizontal ? "row" : "column", gap: horizontal ? 0 : 10, alignItems: horizontal ? "stretch" : undefined }}>
        {v.steps.map((s, i) => {
          const newStage = s.stage && s.stage !== v.steps[i - 1]?.stage;
          const on = active === i;
          return (
            <Reveal key={i} at={s.at} style={{ display: "flex", flexDirection: horizontal ? "row" : "column", flex: horizontal ? 1 : undefined, alignItems: horizontal ? "center" : undefined }}>
              {horizontal && i > 0 && <div style={{ fontSize: 56, color: C.muted, padding: "0 14px" }}>→</div>}
              <div style={{ display: "flex", gap: 26, alignItems: "center", flex: 1 }}>
                {!horizontal && (
                  <div style={{ width: 300, fontSize: 24, fontWeight: 700, color: C.warm, textTransform: "uppercase", letterSpacing: 1, textAlign: "right", overflowWrap: "anywhere" }}>
                    {newStage ? s.stage : ""}
                  </div>
                )}
                <div
                  style={{
                    flex: 1,
                    height: horizontal ? "100%" : undefined,
                    background: on ? C.accentSoft : C.card,
                    border: `3px solid ${on ? C.accent : C.line}`,
                    borderRadius: 16,
                    padding: horizontal ? "28px 28px" : "10px 26px",
                  }}
                >
                  {horizontal && s.stage && <div style={{ fontSize: 24, fontWeight: 700, color: C.warm, textTransform: "uppercase", letterSpacing: 2, marginBottom: 8 }}>{s.stage}</div>}
                  <div style={{ fontSize: horizontal ? 38 : 32, fontWeight: 700, color: C.ink }}>{s.label ?? s.text}</div>
                  {s.label && <div style={{ fontSize: horizontal ? 30 : 26, color: C.muted, marginTop: 4, lineHeight: 1.3 }}>{s.text}</div>}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
      {v.note && <ItemBox item={v.note} tone="accent" />}
    </div>
  );
};

const Case = ({ v }: { v: Extract<Visual, { kind: "case" }> }) => (
  <div>
    <div style={{ fontSize: 28, fontWeight: 700, color: C.warm, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>Caso</div>
    <H>{v.title}</H>
    <List items={v.story} size={40} />
    {v.verdict && <ItemBox item={v.verdict} tone="ok" fallback="Resultado" />}
  </div>
);

const Quiz = ({ v }: { v: Extract<Visual, { kind: "quiz" }> }) => {
  const frame = useCurrentFrame();
  const { audioEnd } = useContext(SceneTiming);
  const answerStart = useAt()(v.answer?.[0]?.at);
  const showCorrect = v.answer && frame >= answerStart;
  // While there is no answer, a bar fills during the silence: time to think.
  const think = !v.answer ? interpolate(frame, [audioEnd, audioEnd + 90], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }) : 0;
  return (
    <div>
      <div style={{ fontSize: 28, fontWeight: 700, color: C.accent, letterSpacing: 3, textTransform: "uppercase", marginBottom: 12 }}>{v.answer ? "Respuesta" : "Pensalo"}</div>
      <div style={{ fontSize: 54, fontWeight: 700, color: C.ink, lineHeight: 1.25, marginBottom: 40, maxWidth: 1650 }}>{v.question}</div>
      {v.options && (
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {v.options.map((o, i) => {
            const right = showCorrect && v.correct === i;
            return (
              <div key={i} style={{ fontSize: 38, padding: "16px 28px", borderRadius: 14, background: right ? C.okSoft : C.card, border: `3px solid ${right ? C.ok : C.line}`, opacity: showCorrect && !right ? 0.5 : 1 }}>
                <b style={{ color: C.accent, marginRight: 18 }}>{"ABCD"[i]}</b>
                {o}
              </div>
            );
          })}
        </div>
      )}
      {v.answer && (
        <div style={{ marginTop: 36 }}>
          <List items={v.answer} size={36} />
        </div>
      )}
      {!v.answer && (
        <div style={{ marginTop: 60, height: 10, background: C.line, borderRadius: 5, width: 600 }}>
          <div style={{ height: "100%", width: `${think * 100}%`, background: C.accent, borderRadius: 5 }} />
        </div>
      )}
    </div>
  );
};

export const VisualView = ({ v }: { v: Visual }) => {
  switch (v.kind) {
    case "title": return <Title v={v} />;
    case "definition": return <Definition v={v} />;
    case "points": return <Points v={v} />;
    case "compare": return <Compare v={v} />;
    case "tree": return <Tree v={v} />;
    case "flow": return <Flow v={v} />;
    case "case": return <Case v={v} />;
    case "quiz": return <Quiz v={v} />;
  }
};
