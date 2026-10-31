# CLAUDE.md — Only Fútbol

Tienda online de camisetas y productos de fútbol. Trabajo Final Integrador de Inteligencia Artificial. Sitio web estático con HTML5, CSS3 y JavaScript (Bootstrap opcional). Backend y base de datos quedan para una etapa futura.

## Instrucciones del proyecto
@docs/CONSTITUCION.md
@AGENTS.md

## Identidad visual (resumen)
- Azul oscuro `#0c1b54`, amarillo mostaza `#fbc51d`, blanco `#FFFFFF`, negro `#000000` para textos.
- Montserrat para títulos y Roboto para textos.
- `docs/06-DISENO-UI.md` todavía tiene la paleta anterior: en colores manda `docs/CONSTITUCION.md`.

## Comandos y habilidades
- Comandos del proyecto en `.claude/commands/`: `/spec`, `/clarificar` y `/verificar`.
- Habilidades del proyecto en `.agents/skills/<nombre>/SKILL.md`. Claude Code no las carga automáticamente: leer el `SKILL.md` correspondiente antes de aplicarla.
  - `verificar-criterios`: al verificar una funcionalidad o antes de marcar tareas como terminadas.
  - `revisar-accesibilidad`: al revisar páginas, formularios, imágenes, colores o navegación.

## Específico de Claude Code
- Al iniciar una tarea, leer `memory.md` y actualizar "Estado actual" al terminarla.
- Para cambios importantes, presentar el plan y esperar aprobación antes de editar archivos.
- Si un permiso o comando es rechazado, no reintentarlo igual: preguntar.
- Comandos disponibles: ninguno por ahora (ver sección 5 de `AGENTS.md`). No instalar dependencias ni ejecutar scripts que no estén documentados.
- Al terminar, resumir los archivos modificados y las pruebas realmente realizadas.
