---
name: apuntes-de-estudio
description: Método para convertir material de una materia (apunte, PDF, Markdown, diapositivas) en apuntes de estudio de máxima claridad y cero relleno, para preparar un examen. Usar cuando piden estudiar o preparar un examen a partir de material, explicar los temas de una materia, o un cuestionario de práctica.
---

# Apuntes de estudio

Transforma material en apuntes que **enseñan**: el estudiante tiene que poder explicar cada concepto con sus palabras, dar un ejemplo nuevo, distinguirlo del concepto vecino y responder una pregunta de examen sin memorizar.

El método (cómo se explica) es el mismo en todos los formatos. El formato (video, machete, cuestionario) es solo el envase.

## Pasos

### 1. Mapear el material

Leé el material completo. Dividilo en unidades (las del propio material, si existen) y, dentro de cada unidad, listá los conceptos en **orden de dependencia**: primero lo que otros conceptos usan.

Para cada concepto anotá:
- su **vecino**: el concepto con el que se confunde;
- si es **examinable** o solo contexto.

Anotá aparte las contradicciones, ambigüedades, errores y normas o datos posiblemente desactualizados del material.

Listo cuando: cada unidad tiene su lista ordenada de conceptos, cada concepto examinable tiene vecino (o "ninguno") y la lista de problemas del material está escrita.

### 2. Elegir formato

Si el pedido no lo dice, entregá por unidad: **video + cuestionario + notas sobre el material**. Si el estudiante tiene poco tiempo o pide repasar, hacé el **machete**. Cada formato es otra skill, con su propio procedimiento:

- Video (Remotion + ElevenLabs): skill `video-de-estudio`
- Machete HTML de repaso: skill `machete`
- Flashcards para practicar: skill `to-flashcards`
- Guion para un examen oral: skill `script-oral`

El cuestionario y las notas se definen abajo.

### 3. Escribir con el método

Aplicá el método de abajo a cada concepto, unidad por unidad, en el formato de datos que pida la skill del formato. Con varias unidades, redactalas en paralelo con subagentes (forks), una por unidad, y que cada uno lea primero el ejemplo terminado de esa skill.

Listo cuando: cada concepto examinable del mapa del paso 1 aparece explicado, y cada par de vecinos tiene su diferenciación explícita.

### 4. Revisión de fidelidad

Antes de gastar créditos de voz o tiempo de render, lanzá un revisor **independiente** por unidad (subagente de solo lectura, sin el contexto de quien redactó). Cada uno compara el guion con el material y reporta solo errores sustantivos:
- afirmaciones falsas;
- requisitos, excepciones, plazos o números alterados;
- normas inventadas o mal citadas;
- ejemplos que ilustran otro concepto;
- respuestas incorrectas.

Corregí cada hallazgo en el guion, el cuestionario y las notas. Esta revisión ya encontró errores reales en guiones que parecían correctos.

Listo cuando: cada unidad pasó su revisión y cada hallazgo quedó corregido o justificado en las notas.

### 5. Producir y verificar

Seguí la skill del formato. No digas que algo funciona o se ve bien sin haberlo verificado sobre el resultado real: capturas, duración del archivo, validaciones.

## El método

### Una idea por escena

La unidad de trabajo es la **escena**: una sola idea, explicada completa, con un apoyo visual que la ancla. Si una escena necesita dos ideas nuevas, son dos escenas. Esto vale igual para una sección del machete.

### Secuencia por concepto

Usá solo los pasos que el concepto necesita: un concepto simple puede ser solo A y C; uno difícil, los cinco.

- **A. Definición precisa**: la formulación del material, con sus términos técnicos.
- **B. Traducción**: la misma idea dicha para alguien que nunca estudió el tema. Cada término técnico se explica en la misma oración en que aparece.
- **C. Ejemplo que muestra el mecanismo**: un caso concreto, del mundo del estudiante (su carrera, su vida), donde se ve *por qué* el concepto funciona así. Nombrar el concepto dentro de una historia no alcanza.
- **D. Diferenciación**: escena "X vs. Y" con el vecino, cerrada por **la diferencia** en una línea o una pregunta guía ("¿quiénes son las partes?").
- **E. Recuperación**: una pregunta, una pausa para pensar y la respuesta razonada (por qué es esa y por qué no las otras). Preferí casos nuevos a preguntas de memoria.

Para que la secuencia no suene a plantilla, entrelazá los pasos con naturalidad, sin rotularlos.

### Recorte

- Cubrí todo lo examinable. Lo que es solo contexto va en una línea, o se omite.
- Una enumeración larga (autores, teorías, causales) se **agrupa en familias** con un criterio que ayude a recordar. Avisá que la agrupación es didáctica cuando el material no la hace.
- Una analogía por concepto difícil, y solo si mapea punto por punto (por ejemplo, las cuatro causas como un puente: material, diseño, constructora, para qué).
- Cerrá cada unidad con un **repaso** de una línea por bloque, con las conexiones entre bloques.

### Voz

- Escribí para **escuchar**: oraciones cortas, sintaxis simple, un dato por oración.
- Usá el español del estudiante. Por defecto, rioplatense con voseo ("fijate", "pensalo").
- Usá un tono de profesor claro: directo, sin ceremonias, sin anunciar lo que viene, sin frases motivacionales.
- Cada oración define, explica, ejemplifica, compara, conecta o comprueba. Borrá la que no hace ninguna de esas cosas.
- Escribí números, siglas y artículos como se dicen ("artículo ochenta", "diez días hábiles").

### Pantalla y voz se complementan

Lo que se ve son **etiquetas**: frases cortas, términos, flechas. El guion completo nunca va en pantalla. Cada elemento aparece cuando se lo nombra (revelación progresiva).

Elegí la forma visual según la estructura de la idea:

| Estructura de la idea | Forma visual |
|---|---|
| Definición con varios elementos | resaltado progresivo de sus partes |
| Dos o tres conceptos parecidos | columnas lado a lado + "la diferencia" |
| Clasificación | árbol |
| Procedimiento o etapas | flujo con etapas rotuladas |
| Situación de la vida real | caso con resultado |
| Lista de requisitos o elementos | lista numerada con el ítem activo marcado |

### Fidelidad

- El material es la fuente. Las definiciones, requisitos y excepciones salen del material, con sus mismas condiciones.
- Lo que agregues de afuera (una definición que el material da por sabida, un plazo legal, un artículo) va marcado "complemento", con su fuente.
- Si el material está desactualizado pero es lo que se evalúa, enseñalo "según el material" y explicá la discrepancia en las notas.
- Las contradicciones y errores del material van en las **notas**, separadas de la explicación.

### Control de cada escena

Antes de dar una escena por buena, comprobá:
1. ¿La entiende alguien que nunca estudió el tema?
2. ¿El ejemplo muestra el mecanismo, y se entiende por qué funciona así?
3. ¿Queda claro en qué se diferencia de su vecino?
4. ¿Hay algún salto lógico o conocimiento previo sin explicar?
5. ¿Hay alguna palabra o escena que se pueda sacar sin perder comprensión?

Si una explicación es breve pero deja dudas, desarrollala. Si es larga y no agrega comprensión, reescribila. Si una escena es vistosa pero no enseña, simplificala.

## Cuestionario y notas

Ambos son archivos Markdown por unidad, separados del video:

- **`cuestionario.md`**: 12 a 18 preguntas de recuperación activa. Mezclá tres tipos: distinguir vecinos, aplicar a un caso nuevo y preguntas tipo examen. Cada respuesta va en `<details>`, razonada en 2 a 4 líneas.
- **`notas-sobre-el-material.md`**:
  - ambigüedades y errores del material;
  - datos posiblemente desactualizados;
  - tabla de complementos externos usados (tema, qué se agregó, fuente);
  - puntos para verificar con la cátedra.
