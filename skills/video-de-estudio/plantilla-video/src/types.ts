// `at` is a phrase copied verbatim from the scene narration: the element appears when the narrator says it.
export type Item = { text: string; label?: string; sub?: string; at?: string };

export type Visual =
  | { kind: "title"; kicker: string; title: string; subtitle?: string }
  | {
      kind: "definition";
      label?: string;
      term: string;
      // Concatenated into one paragraph; `key` parts get highlighted when spoken.
      parts: { text: string; key?: boolean; at?: string }[];
      foot?: Item;
    }
  | { kind: "points"; title: string; items: Item[]; numbered?: boolean; note?: Item }
  | {
      kind: "compare";
      title: string;
      cols: { label: string; at?: string; items: Item[] }[];
      diff?: Item;
    }
  | { kind: "tree"; root: string; nodes: { label: string; at?: string; items?: string[] }[]; note?: Item }
  | { kind: "flow"; title: string; steps: (Item & { stage?: string })[]; note?: Item }
  | { kind: "case"; title: string; story: Item[]; verdict?: Item }
  | { kind: "quiz"; question: string; options?: string[]; correct?: number; answer?: Item[] };

export type Scene = {
  id: string;
  section?: string; // inherited from the previous scene when omitted
  narration: string;
  visual: Visual;
  pauseAfter?: number; // seconds of silence after the narration
};

export type Unit = {
  id: string; // composition id, e.g. "U1"
  number: string; // "I"
  title: string;
  scenes: Scene[];
};

export type Manifest = {
  unit: string;
  scenes: { id: string; file: string; duration: number; marks: Record<string, number> }[];
};
