// Uso: node armar-mapa.mjs <script.md> <salida.html>
// Cuenta palabras por bloque, calcula los tiempos a 150 palabras por minuto, controla la duración objetivo
// y genera el mapa mental (plantilla-mapa.html con los datos del script). Sale con código 1 si la duración se desvía más de 5 %.
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WPM = 150;
const TOLERANCE = 0.05;

const [src, out] = process.argv.slice(2);
if (!src || !out) throw new Error("uso: node armar-mapa.mjs <script.md> <salida.html>");

const md = readFileSync(src, "utf8").replace(/\r\n/g, "\n");
const tema = md.match(/^# (.+)$/m)?.[1].trim();
const minutos = Number(md.match(/Duración objetivo:\s*([\d.,]+)\s*min/i)?.[1].replace(",", "."));
if (!tema || !minutos) throw new Error('el script necesita "# Tema" y una línea "Duración objetivo: N min"');

// Solo se dice lo que está antes del primer "---"; lo de abajo (preguntas probables) no cuenta.
const spoken = md.split(/^---$/m)[0];
const words = (t) => t.replace(/[*_`>#]/g, " ").split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

let t = 0;
const bloques = spoken.split(/^## /m).slice(1).map((part) => {
  const [head, ...rest] = part.split("\n");
  const raw = rest.join("\n").trim();
  const palabras = words(raw);
  const desde = t;
  t += (palabras / WPM) * 60;
  return {
    titulo: head.trim().replace(/^\d+\.\s*/, ""),
    palabras,
    desde: Math.round(desde),
    hasta: Math.round(t),
    claves: [...raw.matchAll(/\*\*(.+?)\*\*/g)].map((m) => m[1]),
    texto: raw.replace(/\*\*/g, ""),
  };
});
if (!bloques.length) throw new Error('el script no tiene bloques "## "');

const total = bloques.reduce((n, b) => n + b.palabras, 0);
const objetivo = minutos * WPM;
const desvio = (total - objetivo) / objetivo;
const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, "0")}`;

for (const b of bloques) console.log(`${mmss(b.desde)}–${mmss(b.hasta)}  ${String(b.palabras).padStart(4)} palabras  ${b.titulo}  [${b.claves.length} claves]`);
console.log(`Total: ${total} palabras ≈ ${mmss(t)} (objetivo ${objetivo} ≈ ${minutos} min, desvío ${(desvio * 100).toFixed(1)} %)`);

const data = { tema, minutos, wpm: WPM, bloques };
const template = readFileSync(join(import.meta.dirname, "plantilla-mapa.html"), "utf8");
const html = template
  .replace(/(<script type="application\/json" id="oral">)[\s\S]*?(<\/script>)/, (_, a, b) => `${a}\n${JSON.stringify(data, null, 1).replace(/</g, "\\u003c")}\n${b}`)
  .replace(/<title>[^<]*<\/title>/, `<title>Oral ${tema.replace(/[<&]/g, "")}</title>`);
writeFileSync(out, html);
console.log(`mapa escrito en ${out}`);

if (Math.abs(desvio) > TOLERANCE) {
  console.error(`AJUSTAR: el script se desvía ${(desvio * 100).toFixed(1)} % del tiempo pedido (tolerancia ±${TOLERANCE * 100} %).`);
  process.exit(1);
}
