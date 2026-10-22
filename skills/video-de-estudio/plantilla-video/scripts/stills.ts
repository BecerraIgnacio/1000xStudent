// Usage: node scripts/stills.ts U1 100 2000 ...  → ../.stills/U1-<frame>.png (visual QA)
import { bundle } from "@remotion/bundler";
import { renderStill, selectComposition } from "@remotion/renderer";
import { join } from "node:path";

const [id, ...frames] = process.argv.slice(2);
const serveUrl = await bundle({ entryPoint: join(import.meta.dirname, "..", "src", "index.ts") });
const composition = await selectComposition({ serveUrl, id });
for (const f of frames) {
  const output = join(import.meta.dirname, "..", "..", ".stills", `${id}-${f}.png`);
  await renderStill({ serveUrl, composition, frame: Number(f), output, scale: 0.5 });
  console.log(output);
}
