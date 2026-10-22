# 1000xStudent

Skills de [Claude Code](https://claude.com/claude-code) para estudiar: convierten el material de una materia en apuntes que enseñan.

| Skill | Qué hace |
|---|---|
| [`apuntes-de-estudio`](skills/apuntes-de-estudio/SKILL.md) | El método: mapear el material, explicar cada concepto (definición, traducción, ejemplo, diferencia, pregunta), recortar al examen y revisar la fidelidad. Elige el formato. |
| [`video-de-estudio`](skills/video-de-estudio/SKILL.md) | Formato video: Remotion + narración de ElevenLabs, con visuales sincronizados con la palabra que los nombra. |
| [`machete`](skills/machete/SKILL.md) | Formato repaso: una página HTML por unidad con "Si tenés 5 minutos", definiciones resaltadas, confusiones típicas y autotest. |
| [`to-flashcards`](skills/to-flashcards/SKILL.md) | Formato práctica: una web de flashcards por unidad (definición, diferencia, caso, lista, dato) con repaso espaciado y progreso guardado. |

## Instalación

Copiá las carpetas de `skills/` a `~/.claude/skills/` (para todos tus proyectos) o a `.claude/skills/` dentro de un proyecto.

```bash
git clone https://github.com/BecerraIgnacio/1000xStudent.git
cp -r 1000xStudent/skills/* ~/.claude/skills/
```

`video-de-estudio` necesita Node 22.6+ y una clave de ElevenLabs en un `.env` (ver la skill).

## Uso

Pedile a Claude, con el material en la carpeta: "haceme videos de estudio de este apunte", "armame un machete de la unidad 2", "pasá la unidad 3 a flashcards" o "quiero preparar el examen con este PDF". También podés invocar cada skill por su nombre: `/apuntes-de-estudio`, `/video-de-estudio`, `/machete`, `/to-flashcards`.
