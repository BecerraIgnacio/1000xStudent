---
name: video-de-estudio
description: Produce videos de estudio con Remotion y narración de ElevenLabs, un video por unidad, con visuales sincronizados con la palabra que los nombra. Usar cuando piden videos educativos o explicativos para estudiar, o convertir un guion de estudio en video.
---

# Video de estudio

Un video por unidad: 1920×1080 a 30 fps, voz sintetizada y visuales que aparecen cuando el narrador los nombra. El motor está en [`plantilla-video/`](plantilla-video/); su README tiene los comandos.

Esta skill produce el video. El contenido (qué se explica y cómo) sale del método de la skill `apuntes-de-estudio`: si el guion todavía no existe, seguí esa skill para mapear y escribir, y volvé acá para producir.

## Montaje

1. Copiá `plantilla-video/` a `<proyecto>/videos/` y corré `npm install` adentro (Node 22.6+ ejecuta los `.ts` de `scripts/` sin compilar).
2. Poné la clave en `<proyecto>/.env`, un nivel arriba de `videos/`: `ELEVENLABS_API_KEY=...`.
3. Voz y modelo: constantes `VOICE` y `MODEL` en `scripts/tts.ts`. Por defecto, Tomás (`QK4xDwo9ESPHA4JNUpX3`, "Tomas - Argentina & Uruguaya") con `eleven_v4`. Si el usuario nombra otra voz, buscala por API (`GET /v2/voices?search=` en su librería, `GET /v1/shared-voices?search=&language=es` en la pública) y probá una frase corta antes de usarla.
4. Consultá el saldo antes de generar: `GET /v1/user/subscription` (`character_limit - character_count`).

## Escribir una unidad

Cada unidad es un archivo de datos `videos/src/units/uN.ts`; [`ejemplo-unidad.ts`](ejemplo-unidad.ts) es una unidad terminada y la referencia de forma. Con varias unidades, redactalas en paralelo con subagentes, uno por unidad, y que cada uno lea el ejemplo primero.

Una escena tiene:
- `id`;
- `section`, que se hereda si se omite;
- `narration`: lo que se escucha;
- `visual`: lo que se ve;
- `pauseAfter`, opcional.

Los tipos visuales están en `src/types.ts` y mapean uno a uno con las formas visuales del método:
- `definition`: resaltado progresivo;
- `compare`: lado a lado con `diff`;
- `tree`: árbol;
- `flow`: flujo con `stage`;
- `case`: caso con `verdict`;
- `points`: lista;
- `quiz`: pregunta;
- `title`: título.

Reglas del formato:
- **`at` sincroniza**: es una frase copiada literal de la narración de esa escena, y el elemento aparece cuando se dice. Se usa la primera aparición (sin distinguir mayúsculas), así que elegí frases que aparezcan por primera vez donde querés el elemento.
- **Recuperación en pares**: escena `X-q` (pregunta, con pausa automática de 4 s y barra de "pensalo") y escena `X-a`, que repite la pregunta, revela la respuesta y, si hay opciones, marca la correcta con `correct`.
- **Densidad de pantalla**: hasta 6 ítems por lista, flujo vertical de hasta 6 pasos y textos cortos. Si una escena no entra, son dos escenas.
- **Primera y última escena**: la primera es `title`; la última, `repaso`, con `pauseAfter: 2`.
- **Extensión**: como referencia, en una materia universitaria cada unidad tuvo 15.000 a 23.000 caracteres de narración, unos 17 a 25 minutos.

## Pipeline por unidad

```bash
node scripts/tts.ts uN --check   # gratis: valida cada `at` y cuenta caracteres
node scripts/tts.ts uN           # genera el audio faltante y src/manifests/UN.json
# registrar la unidad en src/units/index.ts
npx tsc --noEmit
node scripts/docs.ts uN          # ../unidades/unidad-N/{guion.md, guion-elevenlabs.txt, storyboard.md}
node scripts/stills.ts UN <frames...>   # capturas en ../.stills para control visual
npx remotion render UN ../unidades/unidad-N/unidad-N.mp4 --concurrency=6
```

- **Créditos**: el audio se cachea por hash del texto, así que corregir una escena regenera solo esa escena. Corré `--check` y compará el total contra el saldo antes de cada generación. Hacé la revisión de fidelidad de `apuntes-de-estudio` **antes** del primer `tts` sin `--check`.
- **Control visual**: renderizá capturas del final de las escenas con más texto (las más largas en `JSON.stringify(visual)`) y miralas. Lo que suele fallar: etiquetas de etapa que no entran, listas que tocan la barra de progreso y columnas desparejas.
- **Render**: tarda unos 14 minutos por cada 20 minutos de video. Varias unidades pueden renderizarse en paralelo repartiendo la concurrencia entre los núcleos. Corré los renders en segundo plano.
- **Verificación final**: `npx remotion ffprobe <mp4>`. La duración tiene que coincidir con la "Duración total" del storyboard.

Listo cuando: cada unidad tiene su MP4 con la duración del storyboard y las capturas de las escenas más densas se ven sin desbordes.

## Entregables por unidad

En `unidades/unidad-N/`:
- `unidad-N.mp4`;
- `guion.md` y `guion-elevenlabs.txt`, generados;
- `storyboard.md`, generado, con timecodes y el momento en que aparece cada elemento.

El cuestionario y las notas sobre el material los define `apuntes-de-estudio`.
