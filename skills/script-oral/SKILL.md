---
name: script-oral
description: Escribe el guion de un examen oral o una exposición ajustado a la duración pedida (150 palabras por minuto), sin saludo, para que quien escucha concluya que el expositor domina el tema, y arma un mapa mental con cronómetro para practicarlo. Usar cuando piden un script, guion o texto para un oral, una exposición o una presentación hablada de N minutos.
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
| Apertura | ~10 % | La tesis o definición central en la primera oración, y el recorrido en una frase |
| Bloques | ~80 % | Uno por eje, con peso proporcional a su importancia |
| Cierre | ~8 % | La síntesis que conecta los bloques |

Listo cuando: cada bloque tiene título, eje y cantidad de palabras, y la suma da el presupuesto.

### 3. Escribir el script

Seguí las reglas de "Cómo suena alguien que sabe" y el formato de archivo (los dos, abajo). [ejemplo-script.md](ejemplo-script.md) es un script terminado de 5 minutos: copiá su forma.

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

## Cómo suena alguien que sabe

- **Primera oración = la tesis.** La definición o la idea central del tema, con sus términos técnicos. La segunda oración anticipa el recorrido.
- **Vocabulario técnico con traducción inmediata.** Usá el término exacto y explicalo en la misma oración. Eso muestra dominio y claridad a la vez.
- **Cada bloque avanza en el mismo orden:** afirmación → por qué funciona así → un ejemplo concreto → la distinción con el concepto vecino.
- **Los bloques se enlazan por lógica.** "Ese derecho rige dentro de un Estado…" conecta el bloque anterior con el que sigue. Evitá anunciar ("ahora voy a hablar de").
- **Una o dos referencias por bloque.** Autores, artículos o normas del material, en el momento en que sostienen algo. Si cargás más, suena a lista.
- **Un matiz de profundidad.** Por lo menos una vez, mostrá algo que solo ve quien estudió en serio: una excepción, una discusión doctrinaria, un error común o un límite del concepto.
- **El cierre sintetiza.** Una o dos oraciones que conectan los bloques entre sí. Termina en contenido, sin "muchas gracias" ni "eso es todo".
- **Se escribe para decir.** Oraciones de hasta unas 20 palabras, una idea por oración y registro formal y natural. El texto va en primera persona o impersonal, sin dirigirse al evaluador con voseo ni tuteo. Escribí números y siglas como se pronuncian.
- **Fidelidad.** Todo lo afirmado sale del material. Lo desactualizado se dice "según el material".

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
