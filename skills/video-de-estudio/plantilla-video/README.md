# Videos — Legislación para Ingenieros

Remotion + ElevenLabs (`eleven_v4`, voz Tomas). La clave va en `../.env` (`ELEVENLABS_API_KEY=...`).

Cada unidad es un archivo de datos en `src/units/uN.ts`: escenas con narración y visual. Los elementos visuales con `at` aparecen cuando el narrador dice esa frase (sincronizado con los timestamps de ElevenLabs).

```bash
node scripts/tts.ts u1 --check   # valida frases `at` y cuenta caracteres (gratis)
node scripts/tts.ts u1           # genera audio faltante (caché por hash del texto) y src/manifests/U1.json
node scripts/docs.ts u1          # ../unidades/unidad-1/{guion.md, guion-elevenlabs.txt, storyboard.md}
npx remotion studio              # previsualizar
npx remotion render U1 ../unidades/unidad-1/unidad-1.mp4
node scripts/stills.ts U1 300 900   # capturas para control visual → ../.stills
```

Al agregar una unidad nueva, registrala en `src/units/index.ts` después de generar su manifest.
Editar la narración de una escena solo regenera el audio de esa escena.
