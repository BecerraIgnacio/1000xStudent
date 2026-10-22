---
name: script-oral
description: Escribe el guion de un examen oral o una exposición universitaria ajustado a la duración pedida (150 palabras por minuto), en registro académico y sin saludo, para que quien escucha concluya que el expositor domina el tema, y arma un mapa mental con cronómetro para practicarlo. Usar cuando piden un script, guion o texto para un oral, una exposición o una presentación hablada de N minutos.
---

# Script oral

Escribe lo que el estudiante tiene que **decir** en el tiempo que le dan, de modo que el profesor o quien escuche piense "esta persona sabe". Arranca directo con el contenido: sin saludo, sin presentación y sin "hoy voy a hablar de". Se acompaña de un mapa mental para practicar.

## Pasos

### 1. Fijar tema, tiempo y fuente

Necesitás tres datos: el **tema**, la **duración** en minutos y el **material**. Si falta la duración, preguntala: cambia todo el trabajo. Si falta el material, usá el que esté en la carpeta o en la conversación. Si no hay ninguno, avisá que el contenido va a salir de conocimiento general.

Presupuesto: **minutos × 150 palabras**, con ±5 % de tolerancia. Diez minutos son unas 1.500 palabras.

Listo cuando: tema, minutos y fuente están definidos y el presupuesto está calculado.

### 2. Diseñar la estructura

Elegí 3 a 5 bloques que cubran lo que un evaluador espera escuchar del tema, en orden de dependencia. Repartí el presupuesto así:

| Parte | Peso | Qué hace |
|---|---|---|
| Apertura | ~10 % | Problema, definición o tesis, y anuncio de los ejes |
| Ejes | ~80 % | Uno por bloque, con peso proporcional a su importancia |
| Cierre | ~8 % | Conclusión que integra los ejes |

Listo cuando: cada bloque tiene título, eje y cantidad de palabras, y la suma da el presupuesto.

### 3. Escribir el script

Seguí las reglas de "Registro: exposición universitaria" y el formato de archivo (los dos, abajo). [ejemplo-script.md](ejemplo-script.md) es un script terminado de 5 minutos: copiá su forma.

Listo cuando: cada bloque cumple las reglas y cada término que hay que decir sí o sí está en **negrita**.

### 4. Medir y armar el mapa

```bash
node <skill>/armar-mapa.mjs <script.md> <mapa-oral.html>
```

El script muestra las palabras y el tramo de tiempo de cada bloque y genera el mapa. Si el total se desvía más de 5 %, sale con error: alargá o recortá el bloque que corresponda (no la apertura ni el cierre) y volvé a correrlo.

Listo cuando: el comando termina sin "AJUSTAR" y cada bloque del mapa tiene al menos 3 palabras clave.

### 5. Verificar y publicar

Compará cada dato del script con el material (definiciones, requisitos, autores, números). Si el tema es técnico o legal y el script supera los 5 minutos, lanzá un subagente revisor de solo lectura que reporte solo errores sustantivos.

Guardá el script y el mapa juntos y publicá el mapa como Artifact, siguiendo las reglas de la herramienta Artifact, para practicar en el celular.

Listo cuando: el script quedó verificado contra el material y el link del mapa abre.

## Registro: exposición universitaria

Quien escucha ya conoce el tema. No evalúa si el expositor sabe explicarlo a un principiante, sino su **precisión**, su capacidad de **articular** conceptos y su **criterio**. El script es una exposición académica, no una clase narrada.

| Clase narrada (evitar) | Exposición universitaria |
|---|---|
| "Interferencia intersubjetiva significa que mi conducta afecta a otro. Una persona sola en una isla…" | "La causa material delimita el objeto: solo es jurídica la conducta que interfiere con la de otro." |
| "Pensalo como un puente: el acero, el diseño…" | "El criterio de distinción es orgánico y procedimental." |
| "Una ola de accidentes con monopatines es fuente material…" | "La relación no es lineal: la norma, una vez creada, vuelve sobre la realidad y la condiciona." |

### Reglas

- **Apertura académica.** La primera oración plantea el problema o la pregunta que organiza el tema. La segunda da la definición o la tesis con su formulación técnica. La tercera anuncia los ejes ("La exposición se organiza en cuatro ejes: …"). No hay saludo ni presentación personal.
- **Definir y caracterizar, no traducir.** Usá la formulación técnica del material y avanzá a los caracteres, los elementos y el alcance. Agregá una aclaración solo cuando el término es ambiguo, nunca para bajarlo a lenguaje coloquial.
- **Cada eje sigue este orden:**
  1. concepto;
  2. elementos o caracteres;
  3. **criterio de distinción** con el concepto vecino;
  4. fundamento (autor, norma, doctrina);
  5. consecuencia o alcance.
- **Ejemplos técnicos y escasos.** A lo sumo uno por eje, breve y tomado del propio campo (una cláusula, una norma, un caso típico de la materia). Nada de analogías de la vida cotidiana.
- **Posiciones y debates.** Cuando la doctrina no es uniforme, decilo y atribuí cada posición a su autor. Es la señal más fuerte de dominio.
- **Articulación lógica.** Usá conectores que expresen la relación: "ahora bien", "en cambio", "en consecuencia", "por lo tanto", "cabe distinguir". Elegí uno por transición, con la relación que corresponde, sin convertirlos en muletilla.
- **Registro impersonal o en tercera persona.** Fórmulas como "se entiende por", "corresponde precisar", "la doctrina sostiene". Sin voseo, sin tuteo y sin dirigirse al oyente.
- **Un matiz de profundidad** por lo menos: una excepción, una discusión, un límite del concepto o una tensión entre fuentes.
- **Cierre como conclusión.** Integrá los ejes en un esquema (niveles, planos, una relación entre ellos) o en una valoración. Que no sea una lista de repaso; termina en contenido, sin "muchas gracias".
- **Se escribe para decir.** Oraciones que se puedan decir de un aliento (hasta unas 25 palabras), con números y siglas escritos como se pronuncian.
- **Fidelidad.** Todo lo afirmado sale del material. Lo que no está en el material se omite, o se atribuye a su fuente. Lo desactualizado se dice "según el material".

## Formato del archivo

```markdown
# <Tema>

Duración objetivo: <N> min · 150 palabras por minuto · ~<N×150> palabras

## Apertura
...

## 1. <Bloque>
...

## Cierre
...

---

## Preguntas que te pueden hacer
**¿Pregunta?**
Respuesta breve.
```

- `armar-mapa.mjs` lee `# Tema`, la línea "Duración objetivo" y cada bloque `## `.
- Cuenta solo lo que está antes de `---`. Lo de abajo no se dice.
- Las palabras en **negrita** se convierten en las palabras clave del mapa. Usá entre 3 y 9 por bloque, las que no pueden faltar.
- Después de `---` van 4 a 6 **preguntas que te pueden hacer**: las repreguntas probables del evaluador, cada una con su respuesta en una o dos oraciones.

## El mapa

[plantilla-mapa.html](plantilla-mapa.html) no se edita a mano: `armar-mapa.mjs` le inyecta los datos.

- Cada bloque es un nodo con su tramo de tiempo, sus palabras clave y el texto completo plegado.
- El estudiante practica mirando solo las palabras clave.
- Con **Empezar**, el cronómetro marca en azul el bloque en el que debería estar y avisa si se pasó de tiempo.
