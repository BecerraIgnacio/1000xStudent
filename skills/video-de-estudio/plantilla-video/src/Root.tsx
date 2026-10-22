import { Composition } from "remotion";
import { FPS, layout } from "./layout.ts";
import { UnitVideo } from "./UnitVideo.tsx";
import { units } from "./units/index.ts";

export const Root = () => (
  <>
    {units.map(({ unit, manifest }) => (
      <Composition
        key={unit.id}
        id={unit.id}
        component={UnitVideo}
        defaultProps={{ unit, manifest }}
        durationInFrames={layout(unit, manifest).reduce((n, t) => n + t.frames, 0)}
        fps={FPS}
        width={1920}
        height={1080}
      />
    ))}
  </>
);
