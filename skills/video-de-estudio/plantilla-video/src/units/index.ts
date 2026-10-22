import type { Manifest, Unit } from "../types.ts";
// Registrá cada unidad después de generar su manifest (node scripts/tts.ts u1):
// import m1 from "../manifests/U1.json";
// import { unit as u1 } from "./u1.ts";

export const units: { unit: Unit; manifest: Manifest }[] = [
  // { unit: u1, manifest: m1 as Manifest },
];
