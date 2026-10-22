---
name: machete
description: Arma un machete de repaso en HTML (una página por unidad) con el 20 % del material que resuelve el 80 % del examen, un bloque "Si tenés 5 minutos" y un autotest. Usar cuando piden un machete, un resumen o una hoja de repaso, o repasar para un examen con poco tiempo.
---

# Machete

Una página para **repasar**, no para aprender desde cero. El estudiante la recorre en el celular antes del examen: en 5 minutos tiene lo central y en 20 cubre todo lo que se pregunta. [ejemplo-machete.html](ejemplo-machete.html) es la referencia terminada de forma, estilo y largo: copiá su CSS y su JavaScript tal cual y cambiá solo el contenido.

## Pasos

### 1. Elegir el 20 %

Leé la unidad completa y marcá lo **examinable**:
- definiciones;
- clasificaciones y sus criterios;
- requisitos y elementos (listas cerradas);
- procedimientos y etapas;
- plazos y números;
- cada par de conceptos que se confunden (los **vecinos**).

Lo que es solo contexto (historia, citas, desarrollos sin consecuencia práctica) queda afuera, o en una línea de texto chico.

Listo cuando: tenés la lista de bloques temáticos de la unidad y, en cada bloque, sus definiciones, listas y vecinos.

### 2. Escribir el contenido

Seguí las reglas de cada pieza (abajo). Escribí primero los bloques, después la tabla de confusiones y el autotest, y por último "Si tenés 5 minutos", que destila todo lo anterior.

Listo cuando: cada bloque del paso 1 tiene su sección, cada par de vecinos aparece en la tabla de confusiones y cada línea de "5 minutos" sale de una sección.

### 3. Verificar fidelidad

Releé cada definición, lista, número y respuesta del autotest contra el material. Si la unidad es larga o el material es técnico o legal, lanzá un subagente revisor de solo lectura que compare el machete con la fuente y reporte solo errores sustantivos.

Listo cuando: cada dato del machete está en el material o marcado "complemento" con su fuente.

### 4. Armar y publicar

Copiá `ejemplo-machete.html`, reemplazá el contenido y guardalo junto al material (por ejemplo, `unidades/unidad-N/machete.html`). Publicalo como Artifact, para que el estudiante pueda abrirlo en el celular, siguiendo las reglas de la herramienta Artifact.

Listo cuando: el link publicado abre y no hay scroll horizontal a ancho de celular.

## Las piezas

En este orden en la página:

### Encabezado e índice

- **Encabezado**: la línea "Unidad N · Título", el título grande y una frase: lo resaltado es lo que más se pregunta o se confunde.
- **Índice fijo** de chips, uno por sección. El chip de la sección visible se marca solo.

### Si tenés 5 minutos

Es lo más valioso de la página: si el estudiante solo lee esto, tiene que poder responder las preguntas básicas de la unidad.
- 5 a 8 líneas numeradas, **una por bloque**, en el orden de las secciones.
- Cada línea es una **fórmula**: el concepto y su vecino en la misma línea, con la distinción en negrita. Ejemplos: "Fuente **formal** = cómo se manifiesta la norma. Fuente **material** = por qué existe." o "Estado de derecho = ordenamiento + justo + vigente + sanciona."
- Una línea entra en una oración o dos. Si no entra, el bloque está mal recortado.

### Secciones

Una por bloque, cada una con la forma que pide su estructura:

| Estructura | Forma (clases del ejemplo) |
|---|---|
| Definición | `.label` "Concepto" + `h2` + `p.def` con `<mark>` en sus 2 a 4 elementos clave |
| Dos o tres vecinos | `.cols` (borde superior azul y naranja) + `.box.ok` "La diferencia" |
| Clasificación | `.tree` con nodos agrupados por criterio |
| Procedimiento | `.flow` con etapas rotuladas en `.stage`; el paso final en `.step.end` |
| Elementos con descripción | tabla de dos columnas |
| Requisitos | `ol` numerada, con la palabra clave de cada requisito en mayúscula o negrita |
| Trampa o caso | `.box.warm` con rótulo "Ojo" o "Caso" |
| Dato menor o complemento | `p.small` |

Largo de cada pieza:
- **Definición**: la formulación del material, en una o dos oraciones, sin parafrasear lo técnico. Los elementos que la definen van en `<mark>`, y el resaltado se reserva para eso.
- **Columnas y casos**: 2 a 4 ítems por columna, cada ítem de una línea. La diferencia, en una línea o como pregunta guía ("¿quiénes son las partes?").
- **Ejemplos**: uno por concepto, en una línea, dentro de la misma sección.

### Lo que más se confunde

Una tabla de dos columnas: el par de vecinos y cómo distinguirlos **en una línea**. Incluye todos los pares de la unidad.

### Autotest

- 8 a 10 `<details>`. El rótulo dice "Pensalo" y al abrirse pasa a "Respuesta", en verde.
- La mayoría son **casos nuevos** ("Un ministerio dicta una resolución sobre ascensores. ¿Es ley?"), no preguntas de memoria.
- La respuesta va en una o dos líneas: el resultado y **por qué**, y, cuando sirve, por qué no es el vecino.
- Cubrí cada bloque al menos una vez.

### Barra de progreso

Barra segmentada fija abajo, con un segmento por sección que se llena al bajar. Ya viene en el JavaScript del ejemplo.

## Estilo

El mismo de los videos de estudio:
- fondo papel y tarjetas blancas;
- tipografía Inter;
- azul para la explicación, naranja para el segundo concepto y las trampas, verde para la diferencia y las respuestas;
- resaltador amarillo.

Es solo modo claro y está diseñado primero para celular. Todo sale de los tokens del `:root` del ejemplo.

## Fidelidad

- El material es la fuente.
- Lo agregado de afuera va como "complemento", con su fuente.
- Lo que el material dice pero está desactualizado se marca "según el material".
