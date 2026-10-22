import type { Unit } from "../types.ts";

export const unit: Unit = {
  id: "U1",
  number: "I",
  title: "Fundamentos del derecho",
  scenes: [
    {
      id: "intro",
      section: "Introducción",
      narration:
        "Unidad uno: fundamentos del derecho. Acá están las piezas que usa todo el resto de la materia: qué es el derecho, qué es una ley, qué es el Estado, de dónde salen las normas y cómo nace una ley.",
      visual: {
        kind: "title",
        kicker: "Unidad I",
        title: "Fundamentos del derecho",
        subtitle: "Derecho · Ley · Estado · Orden jurídico y orden público · Fuentes · Ramas · Sanción de las leyes",
      },
    },

    // ── El derecho ──
    {
      id: "derecho-caras",
      section: "El derecho",
      narration:
        "El derecho no se deja definir desde un solo ángulo. Según desde dónde se lo mire, es conducta: lo que las personas hacen frente a otras, como plantea Carlos Cossio. Es sanción: la consecuencia que aparece cuando alguien incumple una norma. Es expresión de voluntades: busca consenso y sigue a la mayoría, sin dejar indefensas a las minorías. Es un proyecto de orden para la sociedad. Y es poder, que puede usarse en forma legítima o no. Por eso el derecho está conectado con la sociología, la política, la filosofía y la historia.",
      visual: {
        kind: "points",
        title: "Un fenómeno con muchas caras",
        items: [
          { label: "Conducta", text: "lo que hacemos frente a otros (Cossio)", at: "es conducta" },
          { label: "Sanción", text: "consecuencia del incumplimiento", at: "Es sanción" },
          { label: "Expresión de voluntades", text: "consenso de la mayoría, sin desproteger minorías", at: "Es expresión de voluntades" },
          { label: "Proyecto de orden", text: "para la sociedad", at: "proyecto de orden" },
          { label: "Poder", text: "legítimo o no", at: "Y es poder" },
        ],
        note: { text: "Conectado con sociología, política, filosofía e historia", at: "Por eso el derecho" },
      },
    },
    {
      id: "derecho-concepto",
      narration:
        "La definición que adopta la materia es esta. El derecho es un fenómeno complejo que tiene como causa material la conducta humana en interferencia intersubjetiva; como causa formal, la justicia; como causa eficiente, la ley; y como causa final, el bien común.",
      visual: {
        kind: "definition",
        label: "Concepto",
        term: "El derecho",
        parts: [
          { text: "Fenómeno complejo que reconoce como su " },
          { text: "causa material a la conducta humana en interferencia intersubjetiva", key: true, at: "causa material" },
          { text: ", como su " },
          { text: "causa formal a la justicia", key: true, at: "causa formal" },
          { text: ", como su " },
          { text: "causa eficiente a la ley", key: true, at: "causa eficiente" },
          { text: " y como su " },
          { text: "causa final al bien común", key: true, at: "causa final" },
          { text: "." },
        ],
      },
    },
    {
      id: "derecho-puente",
      narration:
        "Las cuatro causas responden cuatro preguntas. Pensalo como si fuera un puente. Causa material: ¿de qué está hecho? El puente, de acero y hormigón; el derecho, de conducta humana. Causa formal: ¿qué le da su forma? Al puente, el diseño; al derecho, la justicia. Causa eficiente: ¿qué lo produce? Al puente, la constructora; al derecho, la ley. Causa final: ¿para qué existe? El puente, para cruzar el río; el derecho, para el bien común.",
      visual: {
        kind: "points",
        title: "Cuatro causas, cuatro preguntas",
        items: [
          { label: "Material", text: "¿de qué está hecho?", sub: "Puente: acero y hormigón  →  Derecho: conducta humana", at: "Causa material:" },
          { label: "Formal", text: "¿qué le da su forma?", sub: "Puente: el diseño  →  Derecho: la justicia", at: "Causa formal:" },
          { label: "Eficiente", text: "¿qué lo produce?", sub: "Puente: la constructora  →  Derecho: la ley", at: "Causa eficiente:" },
          { label: "Final", text: "¿para qué existe?", sub: "Puente: cruzar el río  →  Derecho: el bien común", at: "Causa final:" },
        ],
      },
    },
    {
      id: "derecho-interferencia",
      narration:
        "Detengámonos en la causa material, que es la menos intuitiva. Interferencia intersubjetiva significa que la conducta de una persona afecta a otra. Si alguien vive solo en una isla, sus actos no interfieren con nadie, y el derecho no tiene nada que regular. Apenas aparece otra persona, un vecino, un cliente, un contratista, hay conductas que se cruzan. Ahí entra el derecho. El material lo llama acto humano justiciable: una conducta que puede ser juzgada.",
      visual: {
        kind: "case",
        title: "Interferencia intersubjetiva",
        story: [
          { text: "Una persona sola en una isla: sus actos no afectan a nadie → nada que regular", at: "Si alguien vive solo" },
          { text: "Aparece otra persona: las conductas se cruzan → entra el derecho", at: "Apenas aparece" },
        ],
        verdict: { label: "Acto humano justiciable", text: "Conducta que afecta a otro y que puede ser juzgada", at: "acto humano justiciable" },
      },
    },
    {
      id: "derecho-precisiones",
      narration:
        "Dos precisiones del material. La causa formal, la justicia, se presenta como la virtud de las virtudes. Y la causa final, el bien común, se apoya en el primer principio práctico, llamado sindéresis: el bien ha de hacerse y el mal ha de evitarse.",
      visual: {
        kind: "points",
        title: "Dos precisiones",
        items: [
          { label: "Causa formal", text: "la justicia, «virtud de las virtudes»", at: "La causa formal" },
          { label: "Causa final", text: "el bien común, basado en la sindéresis:", sub: "«el bien ha de hacerse y el mal ha de evitarse»", at: "Y la causa final" },
        ],
      },
    },
    {
      id: "derecho-q",
      narration: "Pregunta. ¿Cuál es la causa eficiente del derecho?",
      visual: {
        kind: "quiz",
        question: "¿Cuál es la causa eficiente del derecho?",
        options: ["La justicia", "La ley", "El bien común", "La conducta humana"],
      },
    },
    {
      id: "derecho-a",
      narration:
        "La ley, en sentido amplio. Eficiente es lo que produce algo, y lo que produce derecho es la ley. La justicia es la causa formal, el bien común es la final y la conducta humana es la material.",
      visual: {
        kind: "quiz",
        question: "¿Cuál es la causa eficiente del derecho?",
        options: ["La justicia", "La ley", "El bien común", "La conducta humana"],
        correct: 1,
        answer: [
          { text: "Eficiente = lo que produce. Lo que produce derecho es la ley (sentido amplio).", at: "La ley" },
          { text: "Justicia → formal · Bien común → final · Conducta → material", at: "La justicia es" },
        ],
      },
    },

    // ── La ley ──
    {
      id: "ley-sentidos",
      section: "La ley",
      narration:
        "La palabra ley tiene dos sentidos. En sentido amplio, ley es toda norma jurídica: una ley del Congreso, pero también un decreto, una resolución de un ministerio o una disposición. En sentido estricto, ley es solo la norma sancionada por el órgano legislativo, es decir el Congreso, y promulgada por el Poder Ejecutivo. La diferencia está en quién la dicta y por qué procedimiento. Por eso, cuando la definición de derecho dice que su causa eficiente es la ley, la usa en sentido amplio.",
      visual: {
        kind: "compare",
        title: "Dos sentidos de «ley»",
        cols: [
          {
            label: "Sentido amplio",
            items: [
              { text: "Toda norma jurídica", at: "toda norma jurídica" },
              { text: "Incluye decretos, resoluciones, disposiciones", at: "un decreto" },
            ],
          },
          {
            label: "Sentido estricto",
            items: [
              { text: "Sancionada por el Congreso", at: "sancionada por el órgano legislativo" },
              { text: "Promulgada por el Poder Ejecutivo", at: "y promulgada" },
            ],
          },
        ],
        diff: { text: "Quién la dicta y por qué procedimiento", at: "La diferencia está" },
      },
    },
    {
      id: "ley-q",
      narration:
        "Pregunta. Un ministerio dicta una resolución que fija requisitos de seguridad para ascensores. ¿Es una ley?",
      visual: { kind: "quiz", question: "Un ministerio dicta una resolución con requisitos de seguridad para ascensores. ¿Es una ley?" },
    },
    {
      id: "ley-a",
      narration:
        "Depende del sentido. En sentido amplio, sí: es una norma jurídica. En sentido estricto, no: no la sancionó el Congreso ni la promulgó el Poder Ejecutivo.",
      visual: {
        kind: "quiz",
        question: "Un ministerio dicta una resolución con requisitos de seguridad para ascensores. ¿Es una ley?",
        answer: [
          { label: "Sentido amplio", text: "sí, es una norma jurídica", at: "En sentido amplio" },
          { label: "Sentido estricto", text: "no, no la sancionó el Congreso", at: "En sentido estricto" },
        ],
      },
    },

    // ── El Estado ──
    {
      id: "estado-def",
      section: "El Estado",
      narration:
        "El Estado es un grupo de individuos establecidos sobre un territorio determinado y sujetos a la autoridad de un mismo gobierno. Fijate las tres ideas: personas, un lugar y una autoridad común.",
      visual: {
        kind: "definition",
        label: "Concepto",
        term: "El Estado",
        parts: [
          { text: "«" },
          { text: "Grupo de individuos", key: true, at: "grupo de individuos" },
          { text: " establecidos sobre un " },
          { text: "territorio determinado", key: true, at: "territorio determinado" },
          { text: " y sujetos a la " },
          { text: "autoridad de un mismo gobierno", key: true, at: "autoridad de un mismo gobierno" },
          { text: "»." },
        ],
      },
    },
    {
      id: "estado-elementos",
      narration:
        "De ahí salen los cuatro elementos del Estado. La población: el elemento humano, los habitantes, sean argentinos o extranjeros. Ojo: población no es lo mismo que ciudadanos. El territorio: el espacio terrestre, marítimo y aéreo, incluidos el suelo y el subsuelo, donde vive la población y se ejerce la soberanía. El poder: la capacidad o energía de la que dispone el Estado para lograr su fin; hay quienes lo detentan y quienes son sus destinatarios. Y el gobierno: los órganos a través de los cuales se ejerce ese poder.",
      visual: {
        kind: "points",
        title: "Elementos del Estado",
        numbered: true,
        items: [
          { label: "Población", text: "elemento humano: habitantes argentinos o extranjeros", at: "La población" },
          { label: "Territorio", text: "espacio terrestre, marítimo y aéreo, con suelo y subsuelo, donde se ejerce la soberanía", at: "El territorio" },
          { label: "Poder", text: "capacidad o energía para lograr su fin (detentadores y destinatarios)", at: "El poder" },
          { label: "Gobierno", text: "órganos a través de los cuales se ejerce el poder", at: "Y el gobierno" },
        ],
      },
    },
    {
      id: "estado-poder-gobierno",
      narration:
        "Poder y gobierno se confunden con facilidad. El poder es una capacidad. El gobierno es el conjunto de órganos que la ejercen. Por ejemplo: la facultad del Estado de cobrar impuestos es poder; el Congreso que fija el impuesto y el organismo que lo recauda son gobierno.",
      visual: {
        kind: "compare",
        title: "Poder vs. gobierno",
        cols: [
          { label: "Poder", items: [{ text: "Una capacidad", at: "El poder es" }, { text: "Ej.: la facultad de cobrar impuestos", at: "la facultad del Estado" }] },
          { label: "Gobierno", items: [{ text: "Los órganos que la ejercen", at: "El gobierno es" }, { text: "Ej.: el Congreso y el organismo recaudador", at: "el Congreso que fija" }] },
        ],
      },
    },
    {
      id: "estado-derecho",
      narration:
        "No todo Estado es un Estado de derecho. Estado de derecho es aquel donde existe un ordenamiento jurídico justo y donde las transgresiones a ese ordenamiento se sancionan. Para eso tiene que cumplir cuatro requisitos. Uno: tener un ordenamiento jurídico, como una Constitución y leyes. Dos: que ese ordenamiento sea justo. Tres: que tenga vigencia. Y cuatro: que quienes lo transgredan sean sancionados.",
      visual: {
        kind: "points",
        title: "Estado de derecho: cuatro requisitos",
        numbered: true,
        items: [
          { text: "Ordenamiento jurídico (Constitución, leyes)", at: "Uno:" },
          { text: "Que ese ordenamiento sea JUSTO", at: "Dos:" },
          { text: "Que tenga VIGENCIA", at: "Tres:" },
          { text: "Que se SANCIONE a quienes lo transgredan", at: "Y cuatro:" },
        ],
      },
    },
    {
      id: "estado-caso",
      narration:
        "Imaginá un país con una Constitución impecable y leyes razonables, pero donde los funcionarios que cometen delitos nunca son juzgados. Tiene un ordenamiento jurídico, y supongamos que es justo. Pero falla el cuarto requisito: las transgresiones no se sancionan. Conclusión: es un Estado, porque tiene población, territorio, poder y gobierno. Pero no es un Estado de derecho.",
      visual: {
        kind: "case",
        title: "¿Estado de derecho?",
        story: [
          { text: "Constitución impecable y leyes razonables", at: "Imaginá un país" },
          { text: "Los funcionarios que cometen delitos nunca son juzgados", at: "pero donde los funcionarios" },
          { text: "Falla el requisito 4: no hay sanción", at: "Pero falla el cuarto requisito" },
        ],
        verdict: { text: "Es un Estado, pero no un Estado de derecho", at: "Conclusión" },
      },
    },

    // ── Orden jurídico y orden público ──
    {
      id: "orden-juridico",
      section: "Orden jurídico y orden público",
      narration:
        "Orden jurídico es el conjunto de normas jurídicas vigentes en un lugar y en un tiempo determinados. Es lo que se llama derecho positivo: el que rige aquí y ahora, dotado de imperium, es decir, de fuerza para imponerse, y cuyo incumplimiento generalmente acarrea una consecuencia jurídica. Por ejemplo, el conjunto de normas vigentes hoy en la Argentina.",
      visual: {
        kind: "definition",
        label: "Concepto",
        term: "Orden jurídico (derecho positivo)",
        parts: [
          { text: "Conjunto de " },
          { text: "normas jurídicas vigentes", key: true, at: "normas jurídicas vigentes" },
          { text: " en un " },
          { text: "lugar y tiempo determinados", key: true, at: "en un lugar" },
          { text: ". Rige aquí y ahora, " },
          { text: "dotado de imperium", key: true, at: "dotado de imperium" },
          { text: ": su inobservancia generalmente acarrea una consecuencia jurídica." },
        ],
        foot: { label: "Ejemplo", text: "Todas las normas vigentes hoy en la Argentina", at: "Por ejemplo" },
      },
    },
    {
      id: "orden-publico",
      narration:
        "Orden público es otra cosa. Es el conjunto de condiciones fundamentales de la vida social de una comunidad que, por afectar centralmente a su organización, no pueden ser alteradas por la voluntad de los individuos ni por la aplicación de normas extranjeras. La clave es la idea de límite: hay cosas que los particulares no pueden cambiar, aunque estén de acuerdo.",
      visual: {
        kind: "definition",
        label: "Concepto",
        term: "Orden público",
        parts: [
          { text: "Conjunto de " },
          { text: "condiciones fundamentales de vida social", key: true, at: "condiciones fundamentales" },
          { text: " de una comunidad que, por " },
          { text: "afectar centralmente a su organización", key: true, at: "por afectar centralmente" },
          { text: ", " },
          { text: "no pueden ser alteradas por la voluntad de los individuos", key: true, at: "no pueden ser alteradas" },
          { text: " " },
          { text: "ni por normas extranjeras", key: true, at: "ni por la aplicación de normas extranjeras" },
          { text: "." },
        ],
        foot: { label: "La clave", text: "Un límite que los particulares no pueden correr, aunque estén de acuerdo", at: "La clave" },
      },
    },
    {
      id: "orden-caso",
      narration:
        "Un caso. Dos empresas firman un contrato de obra y pactan que el edificio no va a cumplir las normas de seguridad estructural, para abaratar costos. Las dos partes están de acuerdo. ¿Vale esa cláusula? No. Las condiciones de seguridad que protegen a toda la comunidad no se negocian entre privados: ese acuerdo choca contra el orden público.",
      visual: {
        kind: "case",
        title: "Un edificio más barato",
        story: [
          { text: "Contrato de obra entre dos empresas", at: "Dos empresas firman" },
          { text: "Pactan no cumplir las normas de seguridad estructural", at: "y pactan" },
          { text: "Las dos partes están de acuerdo", at: "Las dos partes están de acuerdo" },
        ],
        verdict: { text: "La cláusula no vale: choca contra el orden público", at: "No. Las condiciones" },
      },
    },
    {
      id: "orden-compare",
      narration:
        "No los confundas. El orden jurídico es todo el conjunto de normas vigentes. El orden público es un núcleo de condiciones fundamentales dentro de ese conjunto, que la voluntad privada no puede alterar. La pregunta para distinguirlos es: ¿estoy hablando de todas las normas, o de lo que nadie puede modificar por acuerdo?",
      visual: {
        kind: "compare",
        title: "Orden jurídico vs. orden público",
        cols: [
          { label: "Orden jurídico", items: [{ text: "Todas las normas vigentes aquí y ahora", at: "El orden jurídico es" }] },
          { label: "Orden público", items: [{ text: "Núcleo de condiciones fundamentales que la voluntad privada no puede alterar", at: "El orden público es" }] },
        ],
        diff: { text: "¿Todas las normas, o lo que nadie puede modificar por acuerdo?", at: "La pregunta para distinguirlos" },
      },
    },
    {
      id: "orden-teorias",
      narration:
        "Sobre qué es exactamente el orden público hay varias teorías, y conviene agruparlas. Algunas lo atan a un tipo de norma: Demolombe lo identifica con el derecho público, y Borda, con las leyes imperativas. Otras lo atan a una finalidad: para Planiol comprende las normas que preservan el interés general; para Capitant, Laurent, y Aubry y Rau, los principios eminentes, religiosos, morales, políticos y económicos, de los que depende la digna subsistencia de la organización social. Y otras lo atan a una persona: Mourlon, a la intuición del intérprete; Vareilles-Sommières, a la voluntad del legislador.",
      visual: {
        kind: "tree",
        root: "Teorías sobre el orden público",
        nodes: [
          { label: "Según un tipo de norma", items: ["Demolombe: derecho público", "Borda: leyes imperativas"], at: "Algunas lo atan" },
          { label: "Según una finalidad", items: ["Planiol: normas que preservan el interés general", "Capitant, Laurent, Aubry y Rau: principios eminentes (religiosos, morales, políticos, económicos)"], at: "Otras lo atan" },
          { label: "Según una persona", items: ["Mourlon: intuición del intérprete", "Vareilles-Sommières: voluntad del legislador"], at: "Y otras lo atan" },
        ],
      },
    },
    {
      id: "orden-q",
      narration:
        "Pregunta. Un contrato dice que se regirá por una ley extranjera que permite justamente lo que el orden público argentino prohíbe. ¿Esa ley extranjera puede dejarlo sin efecto?",
      visual: { kind: "quiz", question: "¿Una ley extranjera elegida en un contrato puede dejar sin efecto el orden público argentino?" },
    },
    {
      id: "orden-a",
      narration:
        "No. La definición lo excluye de manera expresa: el orden público no puede ser alterado ni por la voluntad de los individuos ni por la aplicación de normas extranjeras. Son dos barreras, y en este caso operan las dos.",
      visual: {
        kind: "quiz",
        question: "¿Una ley extranjera elegida en un contrato puede dejar sin efecto el orden público argentino?",
        answer: [
          { text: "No. El orden público no puede alterarse:", at: "No. La definición" },
          { text: "1) por la voluntad de los individuos  ·  2) por normas extranjeras", at: "ni por la aplicación" },
        ],
      },
    },

    // ── Fuentes del derecho ──
    {
      id: "fuentes-palabra",
      section: "Fuentes del derecho",
      narration:
        "La palabra fuente tiene muchos sentidos en el diccionario: un manantial, una obra de arquitectura, hasta un plato. El que nos importa es este: principio, fundamento u origen de algo. Las fuentes del derecho son, entonces, aquello de donde surge el derecho.",
      visual: {
        kind: "definition",
        label: "Punto de partida",
        term: "«Fuente»",
        parts: [
          { text: "Manantial, obra de arquitectura, plato…  pero en derecho: " },
          { text: "principio, fundamento u origen de algo", key: true, at: "principio, fundamento u origen" },
          { text: "." },
        ],
        foot: { text: "Fuentes del derecho = de dónde surge el derecho", at: "Las fuentes del derecho son" },
      },
    },
    {
      id: "fuentes-lista",
      narration:
        "El material menciona seis. Las normas jurídicas. La doctrina, que es lo que escriben los juristas que estudian el derecho. Los usos y costumbres, que son prácticas sociales repetidas. La jurisprudencia, que es lo que resuelven los tribunales en sus fallos. La equidad, que es la justicia aplicada al caso concreto. Y los principios generales del derecho, que son las ideas básicas que inspiran todo el sistema. Cada una pesa distinto e interviene de un modo distinto.",
      visual: {
        kind: "points",
        title: "Fuentes del derecho",
        items: [
          { label: "Normas jurídicas", text: "", at: "Las normas jurídicas" },
          { label: "Doctrina", text: "lo que escriben los juristas", at: "La doctrina" },
          { label: "Usos y costumbres", text: "prácticas sociales repetidas", at: "Los usos y costumbres" },
          { label: "Jurisprudencia", text: "lo que resuelven los tribunales en sus fallos", at: "La jurisprudencia" },
          { label: "Equidad", text: "la justicia aplicada al caso concreto", at: "La equidad" },
          { label: "Principios generales del derecho", text: "ideas básicas que inspiran el sistema", at: "Y los principios generales" },
        ],
      },
    },
    {
      id: "fuentes-clasif",
      narration:
        "El material clasifica las fuentes de tres maneras. Primera: fuentes primigenias, que son las costumbres y conductas y los principios y virtudes, frente a otras fuentes, que son las normas jurídicas, la jurisprudencia y la doctrina. Segunda: fuente formal y fuente material. Tercera: fuentes directas e indirectas.",
      visual: {
        kind: "tree",
        root: "Clasificaciones de las fuentes",
        nodes: [
          { label: "Primigenias / otras", items: ["Primigenias: costumbres y conductas; principios y virtudes", "Otras: normas, jurisprudencia, doctrina"], at: "Primera:" },
          { label: "Formal / material", items: ["Cómo se manifiesta / por qué existe"], at: "Segunda:" },
          { label: "Directas / indirectas", items: ["La ley / la causa u origen de la ley"], at: "Tercera:" },
        ],
      },
    },
    {
      id: "fuentes-formal-material",
      narration:
        "La distinción central es formal contra material. Fuente formal es la manera en que se exterioriza un precepto obligatorio; el ejemplo típico es la ley. Fuente material es la idea, la causa o el origen de esa fuente formal. Dicho simple: la formal responde cómo se manifiesta la norma; la material, por qué existe.",
      visual: {
        kind: "compare",
        title: "Fuente formal vs. fuente material",
        cols: [
          { label: "Formal", items: [{ text: "Cómo se exterioriza un precepto obligatorio", at: "Fuente formal es" }, { text: "Ej.: la ley", at: "el ejemplo típico" }] },
          { label: "Material", items: [{ text: "La idea, causa u origen de la fuente formal", at: "Fuente material es" }] },
        ],
        diff: { text: "Formal → ¿cómo se manifiesta?   Material → ¿por qué existe?", at: "Dicho simple" },
      },
    },
    {
      id: "fuentes-caso",
      narration:
        "Un ejemplo. En una ciudad se multiplican los accidentes con monopatines eléctricos. Esa realidad, y la idea de proteger a peatones y conductores, es la fuente material. Entonces se dicta una norma que obliga a usar casco: esa norma es la fuente formal. Y fijate qué pasa después: la gente empieza a usar casco. La norma, una vez creada, vuelve sobre la realidad y la condiciona.",
      visual: {
        kind: "flow",
        title: "De la realidad a la norma, y de vuelta",
        steps: [
          { label: "Realidad", text: "accidentes con monopatines", stage: "Fuente material", at: "se multiplican los accidentes" },
          { label: "Norma", text: "casco obligatorio", stage: "Fuente formal", at: "se dicta una norma" },
          { label: "Realidad nueva", text: "la gente usa casco", stage: "La norma vuelve", at: "la gente empieza" },
        ],
      },
    },
    {
      id: "fuentes-directas",
      narration:
        "La tercera clasificación usa otros nombres para una idea parecida. Fuente directa es, por ejemplo, la ley: la voluntad colectiva puesta en una norma obligatoria que impone un modo de obrar. Fuentes indirectas son la razón, causa u origen de las directas. En este material, directa se parece a formal, e indirecta se parece a material. Además, las fuentes se condicionan entre sí: la doctrina y la jurisprudencia, por ejemplo, sirven para interpretar una norma.",
      visual: {
        kind: "compare",
        title: "Directas vs. indirectas",
        cols: [
          { label: "Directas", items: [{ text: "La ley: voluntad colectiva en una norma que impone un obrar", at: "Fuente directa es" }, { text: "≈ fuente formal", at: "directa se parece" }] },
          { label: "Indirectas", items: [{ text: "Razón, causa u origen de las directas", at: "Fuentes indirectas son" }, { text: "≈ fuente material", at: "indirecta se parece" }] },
        ],
        diff: { label: "Se condicionan entre sí", text: "Doctrina y jurisprudencia sirven para interpretar una norma", at: "Además, las fuentes" },
      },
    },
    {
      id: "fuentes-dos",
      narration:
        "Un dato que el material da por casi unánime: las fuentes formales del derecho son dos, la ley y los contratos. La jurisprudencia, la equidad, los usos y costumbres, los principios generales y la doctrina funcionan como instrumentos de interpretación. Por ejemplo, un juez usa fallos anteriores o la opinión de juristas para entender qué quiso decir una norma.",
      visual: {
        kind: "compare",
        title: "Según la opinión casi unánime",
        cols: [
          { label: "Fuentes formales", items: [{ text: "La ley", at: "la ley y los contratos" }, { text: "Los contratos", at: "la ley y los contratos" }] },
          { label: "Instrumentos interpretativos", items: [{ text: "Jurisprudencia · equidad · usos y costumbres · principios generales · doctrina", at: "La jurisprudencia, la equidad" }] },
        ],
        diff: { label: "Ejemplo", text: "Un juez usa fallos anteriores o doctrina para entender una norma", at: "Por ejemplo, un juez" },
      },
    },
    {
      id: "fuentes-legitimidad",
      narration:
        "El material deja planteada una pregunta sin desarrollarla: qué es legitimidad y qué es legalidad. En términos generales, legalidad es ajustarse a la ley vigente. Legitimidad es, además, que eso sea justo y aceptado como válido. Una norma puede ser legal, porque se dictó por el procedimiento correcto, y aun así discutirse su legitimidad si es injusta. Por eso el Estado de derecho no se conforma con tener leyes: exige que el ordenamiento sea justo.",
      visual: {
        kind: "compare",
        title: "Legalidad vs. legitimidad  (complemento)",
        cols: [
          { label: "Legalidad", items: [{ text: "Ajustarse a la ley vigente", at: "legalidad es ajustarse" }] },
          { label: "Legitimidad", items: [{ text: "Que además sea justo y aceptado como válido", at: "Legitimidad es" }] },
        ],
        diff: { label: "Conexión", text: "Legal no garantiza legítimo → el Estado de derecho exige un orden JUSTO", at: "Por eso el Estado de derecho" },
      },
    },
    {
      id: "fuentes-q",
      narration:
        "Pregunta. Los vecinos de un barrio reclaman durante meses por ruidos de obras a la madrugada, y el municipio dicta una ordenanza que limita los horarios de obra. ¿Cuál es la fuente formal y cuál la material?",
      visual: { kind: "quiz", question: "Reclamos de vecinos por ruidos nocturnos → el municipio dicta una ordenanza que limita horarios de obra. ¿Fuente formal y fuente material?" },
    },
    {
      id: "fuentes-a",
      narration:
        "La fuente formal es la ordenanza: es la forma en que se exterioriza la norma obligatoria. La fuente material son los reclamos y la necesidad de proteger el descanso: son la causa que le dio origen.",
      visual: {
        kind: "quiz",
        question: "Reclamos de vecinos por ruidos nocturnos → el municipio dicta una ordenanza que limita horarios de obra. ¿Fuente formal y fuente material?",
        answer: [
          { label: "Formal", text: "la ordenanza (cómo se exterioriza)", at: "La fuente formal" },
          { label: "Material", text: "los reclamos y la necesidad de descanso (por qué existe)", at: "La fuente material" },
        ],
      },
    },

    // ── Ramas del derecho ──
    {
      id: "ramas-criterio",
      section: "Ramas del derecho",
      narration:
        "El derecho se divide en ramas, agrupadas en derecho público y derecho privado. Un criterio orientativo: en el derecho público aparece el Estado organizándose o actuando con su autoridad; en el derecho privado se regulan relaciones entre particulares.",
      visual: {
        kind: "compare",
        title: "Público vs. privado  (criterio orientativo)",
        cols: [
          { label: "Derecho público", items: [{ text: "El Estado se organiza o actúa con su autoridad", at: "en el derecho público aparece" }] },
          { label: "Derecho privado", items: [{ text: "Relaciones entre particulares", at: "en el derecho privado se regulan" }] },
        ],
      },
    },
    {
      id: "ramas-publico",
      narration:
        "Ramas del derecho público. Constitucional: la organización de los órganos constitucionales y los derechos y libertades básicas de los ciudadanos. Administrativo: la organización y el funcionamiento de los poderes y órganos del Estado, y sus relaciones con los particulares, como una licitación pública. Penal: la actividad punitiva, es decir, sancionatoria. Procesal: los procedimientos para juzgar y para ejecutar lo juzgado. Financiero y tributario: los recursos del Estado, cómo obtiene ingresos y cómo ordena sus gastos. E internacional público: las relaciones de cada Estado con los demás.",
      visual: {
        kind: "points",
        title: "Ramas del derecho público",
        items: [
          { label: "Constitucional", text: "órganos constitucionales; derechos y libertades básicas", at: "Constitucional:" },
          { label: "Administrativo", text: "poderes y órganos del Estado y su relación con particulares", at: "Administrativo:" },
          { label: "Penal", text: "actividad punitiva (sancionatoria)", at: "Penal:" },
          { label: "Procesal", text: "cómo se juzga y se ejecuta lo juzgado", at: "Procesal:" },
          { label: "Financiero y tributario", text: "recursos del Estado, ingresos y gastos", at: "Financiero y tributario:" },
          { label: "Internacional público", text: "relaciones entre Estados", at: "E internacional público:" },
        ],
      },
    },
    {
      id: "ramas-privado",
      narration:
        "Ramas del derecho privado. Civil: la persona, la familia, el patrimonio, las relaciones contractuales y la responsabilidad civil extracontractual. Comercial: lo relativo al comercio. Laboral o social: la relación entre el trabajador y el empleador; aunque la parte que regula los reclamos de seguridad social formaría parte del derecho público. E internacional privado: las relaciones entre personas físicas y jurídicas de distintas nacionalidades.",
      visual: {
        kind: "points",
        title: "Ramas del derecho privado",
        items: [
          { label: "Civil", text: "persona, familia, patrimonio, contratos, responsabilidad extracontractual", at: "Civil:" },
          { label: "Comercial", text: "lo relativo al comercio", at: "Comercial:" },
          { label: "Laboral o social", text: "trabajador y empleador", sub: "Excepción: los reclamos de seguridad social → derecho público", at: "Laboral o social:" },
          { label: "Internacional privado", text: "personas de distintas nacionalidades", at: "E internacional privado:" },
        ],
      },
    },
    {
      id: "ramas-internacional",
      narration:
        "Ojo con los dos internacionales. El público regula relaciones entre Estados: por ejemplo, un tratado de límites entre la Argentina y Chile. El privado regula relaciones entre personas de distintas nacionalidades: por ejemplo, una empresa argentina que le compra equipos a un proveedor alemán. La pregunta clave es quiénes son las partes: Estados o particulares.",
      visual: {
        kind: "compare",
        title: "Internacional público vs. privado",
        cols: [
          { label: "Público", items: [{ text: "Entre Estados", at: "El público regula" }, { text: "Ej.: tratado de límites Argentina–Chile", at: "un tratado de límites" }] },
          { label: "Privado", items: [{ text: "Entre personas de distintas nacionalidades", at: "El privado regula" }, { text: "Ej.: empresa argentina compra a proveedor alemán", at: "una empresa argentina" }] },
        ],
        diff: { text: "¿Quiénes son las partes? ¿Estados o particulares?", at: "La pregunta clave" },
      },
    },
    {
      id: "ramas-q",
      narration:
        "Pregunta. Una constructora gana una licitación del Estado para hacer una ruta. ¿Qué rama regula principalmente esa relación?",
      visual: {
        kind: "quiz",
        question: "Una constructora gana una licitación del Estado para hacer una ruta. ¿Qué rama regula principalmente esa relación?",
        options: ["Derecho civil", "Derecho administrativo", "Derecho penal", "Derecho internacional privado"],
      },
    },
    {
      id: "ramas-a",
      narration:
        "Derecho administrativo, porque regula las relaciones del Estado con los particulares. No es civil, porque una de las partes es el Estado actuando como tal. Este tema vuelve con fuerza en la unidad cinco.",
      visual: {
        kind: "quiz",
        question: "Una constructora gana una licitación del Estado para hacer una ruta. ¿Qué rama regula principalmente esa relación?",
        options: ["Derecho civil", "Derecho administrativo", "Derecho penal", "Derecho internacional privado"],
        correct: 1,
        answer: [
          { text: "Regula las relaciones del Estado con los particulares", at: "porque regula" },
          { text: "No es civil: una parte es el Estado actuando como tal", at: "No es civil" },
        ],
      },
    },

    // ── Sanción de las leyes ──
    {
      id: "sancion-proceso",
      section: "Sanción de las leyes",
      narration:
        "Cómo nace una ley. El proceso tiene tres etapas: iniciativa, constitutiva y de eficacia. En la etapa de iniciativa, se presenta un proyecto en el Congreso; pueden hacerlo los legisladores, el Poder Ejecutivo o los ciudadanos. En la etapa constitutiva, el proyecto lo aprueba primero la Cámara de origen, que es donde entró, y después pasa a la Cámara revisora. Si la revisora también lo aprueba, el proyecto queda sancionado. En la etapa de eficacia, el proyecto pasa al Poder Ejecutivo. Si lo aprueba, lo promulga mediante un decreto. Y por último se publica en el Boletín Oficial: recién ahí la ley adquiere obligatoriedad.",
      visual: {
        kind: "flow",
        title: "Cómo nace una ley",
        steps: [
          { stage: "Iniciativa", label: "Presentación del proyecto", text: "legisladores, Poder Ejecutivo o ciudadanos", at: "se presenta un proyecto" },
          { stage: "Constitutiva", label: "Cámara de origen", text: "donde entra el proyecto", at: "la Cámara de origen" },
          { stage: "Constitutiva", label: "Cámara revisora", text: "lo revisa", at: "pasa a la Cámara revisora" },
          { stage: "Constitutiva", label: "Sanción", text: "aprobado por ambas Cámaras", at: "queda sancionado" },
          { stage: "Eficacia", label: "Promulgación", text: "el Poder Ejecutivo la aprueba por decreto", at: "lo promulga" },
          { stage: "Eficacia", label: "Publicación", text: "Boletín Oficial → obligatoria", at: "se publica" },
        ],
      },
    },
    {
      id: "sancion-palabras",
      narration:
        "Tres palabras que se confunden. Sancionar es lo que hace el Congreso: aprobar el proyecto en las dos Cámaras. Promulgar es lo que hace el Poder Ejecutivo: aprobar la ley sancionada. Publicar es darla a conocer en el Boletín Oficial, y es lo que la vuelve obligatoria.",
      visual: {
        kind: "compare",
        title: "Sancionar · promulgar · publicar",
        cols: [
          { label: "Sancionar", items: [{ text: "Congreso: aprueban ambas Cámaras", at: "Sancionar es" }] },
          { label: "Promulgar", items: [{ text: "Poder Ejecutivo: aprueba la ley sancionada", at: "Promulgar es" }] },
          { label: "Publicar", items: [{ text: "Boletín Oficial: desde ahí es obligatoria", at: "Publicar es" }] },
        ],
      },
    },
    {
      id: "sancion-variantes",
      narration:
        "El camino no siempre es lineal. Una de las Cámaras puede rechazar el proyecto en forma total. La Cámara revisora puede rechazarlo en forma parcial. El Poder Ejecutivo puede promulgar en forma expresa, con un decreto, o en forma tácita: según la Constitución Nacional, si no lo devuelve en diez días hábiles, se considera aprobado. Y puede vetarlo, es decir, rechazar lo que sancionó el Congreso, en forma total o parcial.",
      visual: {
        kind: "points",
        title: "Otras posibilidades",
        items: [
          { label: "Rechazo total", text: "por una de las Cámaras", at: "rechazar el proyecto en forma total" },
          { label: "Rechazo parcial", text: "por la Cámara revisora", at: "rechazarlo en forma parcial" },
          { label: "Promulgación expresa o tácita", text: "decreto, o silencio del Ejecutivo", sub: "Tácita: no lo devuelve en 10 días hábiles (Constitución Nacional, art. 80; complemento)", at: "promulgar en forma expresa" },
          { label: "Veto total o parcial", text: "el Ejecutivo rechaza lo sancionado", at: "Y puede vetarlo" },
        ],
      },
    },
    {
      id: "sancion-clases",
      narration:
        "Por último, el Congreso dicta tres clases de leyes: normas de derecho común, normas federales y normas locales. Como referencia: las de derecho común son, por ejemplo, el Código Civil y Comercial o el Código Penal, que rigen en todo el país; las federales tratan materias que la Constitución pone a cargo de la Nación; y las locales se dictan para lugares bajo jurisdicción nacional.",
      visual: {
        kind: "points",
        title: "Clases de leyes que dicta el Congreso",
        items: [
          { label: "Derecho común", text: "ej.: Código Civil y Comercial, Código Penal", at: "las de derecho común" },
          { label: "Federales", text: "materias a cargo de la Nación", at: "las federales" },
          { label: "Locales", text: "para lugares bajo jurisdicción nacional", at: "y las locales" },
        ],
        note: { text: "Los ejemplos son complemento: el material solo nombra las tres clases.", at: "Como referencia" },
      },
    },
    {
      id: "sancion-q",
      narration:
        "Pregunta. El Congreso sancionó una ley y el Poder Ejecutivo la promulgó, pero todavía no salió en el Boletín Oficial. ¿Ya es obligatoria?",
      visual: { kind: "quiz", question: "Ley sancionada y promulgada, pero aún no publicada en el Boletín Oficial. ¿Es obligatoria?" },
    },
    {
      id: "sancion-a",
      narration:
        "No. La ley adquiere obligatoriedad con la publicación en el Boletín Oficial. La sanción y la promulgación son pasos necesarios, pero no alcanzan.",
      visual: {
        kind: "quiz",
        question: "Ley sancionada y promulgada, pero aún no publicada en el Boletín Oficial. ¿Es obligatoria?",
        answer: [
          { text: "No. La obligatoriedad llega con la publicación", at: "No. La ley" },
          { text: "Sanción + promulgación son necesarias, pero no suficientes", at: "La sanción y la promulgación" },
        ],
      },
    },

    // ── Repaso ──
    {
      id: "repaso",
      section: "Repaso",
      narration:
        "Repaso. El derecho tiene cuatro causas: material, la conducta; formal, la justicia; eficiente, la ley; y final, el bien común. Ley en sentido amplio es toda norma; en sentido estricto, la que sanciona el Congreso y promulga el Ejecutivo. El Estado tiene población, territorio, poder y gobierno; el Estado de derecho exige además un orden justo, vigente y que sancione. El orden jurídico es todo el derecho vigente; el orden público es el núcleo que nadie puede alterar por acuerdo. La fuente material explica por qué nace una norma; la formal, cómo se manifiesta. Y una ley se sanciona en el Congreso, se promulga en el Ejecutivo y obliga recién cuando se publica.",
      pauseAfter: 2,
      visual: {
        kind: "points",
        title: "Repaso",
        items: [
          { text: "Derecho: material = conducta · formal = justicia · eficiente = ley · final = bien común", at: "El derecho tiene" },
          { text: "Ley amplia = toda norma · ley estricta = Congreso + Ejecutivo", at: "Ley en sentido amplio" },
          { text: "Estado: población, territorio, poder, gobierno · Estado de derecho: + orden justo, vigente, con sanción", at: "El Estado tiene" },
          { text: "Orden jurídico = todo el derecho vigente · orden público = núcleo inalterable por acuerdo", at: "El orden jurídico es" },
          { text: "Fuente material = por qué nace · fuente formal = cómo se manifiesta", at: "La fuente material" },
          { text: "Sanción (Congreso) → promulgación (Ejecutivo) → publicación (obliga)", at: "Y una ley se sanciona" },
        ],
      },
    },
  ],
};
