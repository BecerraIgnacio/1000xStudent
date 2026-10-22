---
name: to-flashcards
description: Convierte material de estudio en una web de flashcards (una página HTML por unidad) con repaso espaciado, filtro por tema y progreso guardado. Usar cuando piden flashcards, tarjetas de memoria o practicar recuperación activa a partir de un apunte.
---

# To flashcards

Genera un mazo de flashcards y lo entrega como una web lista para practicar en el celular. [ejemplo-flashcards.html](ejemplo-flashcards.html) es la app terminada, con el mazo de una unidad real. Para un mazo nuevo, copiala y reemplazá **solo** el bloque `<script type="application/json" id="deck">`: la interfaz, el estilo y la lógica no se tocan.

La app muestra la pregunta, el estudiante responde en voz alta y después la da vuelta. Con "No la sabía" la tarjeta vuelve al principio de la fila; con "La sabía" sube de nivel. Cada ronda empieza por las más débiles. El progreso se guarda en el navegador.

## Pasos

### 1. Mapear

Leé la unidad y listá lo **examinable**:
- definiciones;
- elementos y requisitos (listas cerradas);
- clasificaciones;
- procedimientos y etapas;
- plazos y números;
- cada par de conceptos que se confunden (los **vecinos**).

Si el material ya pasó por la skill `apuntes-de-estudio`, partí de su mapa.

Listo cuando: cada bloque temático tiene su lista de conceptos y cada concepto examinable tiene su vecino, o "ninguno".

### 2. Escribir las tarjetas

Seguí las reglas de abajo. Apuntá a 30 a 50 tarjetas por unidad.

Listo cuando se cumplen las tres:
- cada concepto examinable tiene al menos una tarjeta;
- cada par de vecinos tiene su tarjeta "Diferencia";
- al menos 1 de cada 5 tarjetas es un "Caso".

### 3. Verificar fidelidad

Compará cada respuesta con el material. Si el mazo es largo o el material es técnico o legal, lanzá un subagente revisor de solo lectura que reporte solo errores sustantivos: datos falsos, condiciones o excepciones omitidas, números alterados o respuestas que corresponden al vecino.

Listo cuando: cada respuesta sale del material o lleva "complemento" en su `why`, con la fuente.

### 4. Armar y publicar

Copiá el ejemplo, reemplazá el bloque `deck` y cambiá el `<title>` a "Flashcards <Unidad>". Antes de publicar, validá el JSON del mazo y la sintaxis del script: extraé ambos con un script corto de Node y corré `JSON.parse` y `new Function`. Guardá el archivo junto al material (por ejemplo, `unidades/unidad-N/flashcards.html`) y publicalo como Artifact, siguiendo las reglas de la herramienta Artifact.

Listo cuando: el JSON y el script validan y el link publicado abre.

## El mazo

```json
{
  "id": "materia-u1",
  "materia": "Nombre de la materia",
  "unidad": "Unidad I",
  "titulo": "Título de la unidad",
  "cards": [
    { "s": "Tema", "t": "Diferencia", "q": "Frente", "a": "Dorso", "why": "Opcional" }
  ]
}
```

- `id`: único por mazo. Es la clave del progreso guardado, así que cambiarlo reinicia el progreso.
- `s`: el tema. Genera los filtros, en el orden en que aparece.
- `t`: uno de los cinco tipos de la tabla de abajo.
- `q`: el frente; `a`: el dorso.
- `why`: opcional; se muestra como "Por qué: …".
- Ordená las tarjetas como se estudia el tema: por bloque y, dentro de cada bloque, de lo básico a lo aplicado.

## Reglas de las tarjetas

### Una tarjeta, un recuerdo

Cada tarjeta pide recordar **una** cosa: un concepto, una distinción o una lista corta. Si el dorso necesita dos ideas independientes, son dos tarjetas.

### Tipos

| Tipo | Frente | Dorso |
|---|---|---|
| Definición | "¿Qué es X?" | La formulación del material, en una o dos oraciones, sin parafrasear lo técnico |
| Diferencia | "X vs. Y" | Una oración por concepto, con el criterio que los separa; en `why`, la pregunta guía o un ejemplo de cada uno |
| Caso | Una situación concreta y nueva, terminada en una pregunta | El resultado; en `why`, el porqué y, si sirve, por qué no es el vecino |
| Lista | "¿Cuáles son los N …?", con N en el frente | Los N ítems en una línea, separados por comas. Si son más de 6, partila |
| Dato | Un requisito, un plazo, un autor, una excepción | El dato, y su contexto en `why` |

### Frente

- El frente obliga a **recordar**, no a reconocer. Preguntá lo que hay que traer de memoria. La pregunta no puede contener la respuesta ni dejarla deducir.
- Si el frente admite "sí" o "no", el `why` dice por qué. Si no, el estudiante adivina.
- Si la tarjeta se refiere a algo del material que no es universal ("según el apunte", "la opinión casi unánime que cita el material"), el frente lo dice.

### Dorso

- La respuesta entra en dos líneas en el celular. Lo que no entra va en `why`, o en otra tarjeta.
- En las tarjetas "Caso", el `why` es obligatorio: sin el porqué, la tarjeta enseña a memorizar resultados.

### Casos

Al menos 1 de cada 5 tarjetas es un "Caso". Usá situaciones del mundo del estudiante (su carrera, su vida) donde el concepto se aplique sin nombrarlo, y que se resuelvan con lo que se ve en la unidad.

### Enumeraciones largas

Agrupalas como en el material, o por un criterio que ayude a recordar (por ejemplo, autores por familia de teoría). Hacé una tarjeta por familia, no una por elemento suelto.

### Fidelidad

- El material es la fuente.
- Lo agregado de afuera lleva "Complemento:" en el `why`, con su fuente.
- Lo desactualizado pero examinable va "según el material".
