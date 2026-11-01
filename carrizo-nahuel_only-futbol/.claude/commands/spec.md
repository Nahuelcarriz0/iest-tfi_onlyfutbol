---
description: Crea o actualiza el spec.md de una funcionalidad de Only Futbol a partir de la documentación del proyecto.
argument-hint: <nombre de la funcionalidad>
---
# /spec — Especificar una funcionalidad

Funcionalidad: $ARGUMENTS

Si no se indicó ninguna funcionalidad, preguntar cuál y detenerse.

## 1. Leer
- `docs/CONSTITUCION.md`, `memory.md` y `AGENTS.md` (sección 3).
- `docs/02-REQUERIMIENTOS.md`: identificar los RF y RNF relacionados.
- `docs/08-TAREAS.md`: identificar la tarea relacionada.
- Según la funcionalidad: `docs/01-CONTEXTO.md`, `docs/05-DATOS.md`, `docs/06-DISENO-UI.md`, `docs/IDENTIDAD-MARCA.md`, `docs/09-SEO.md`, `docs/10-SEGURIDAD.md`.

## 2. Ubicación
- Usar la ubicación de archivos SDD definida en `AGENTS.md` (sección 3).
- Si sigue pendiente, preguntar dónde guardar `spec.md` y no crearlo hasta tener respuesta.
- Si ya existe un `spec.md` de esta funcionalidad, leerlo y proponer cambios en lugar de reemplazarlo.

## 3. Estructura
```
# Especificación — <funcionalidad>

## Objetivo
## Requisitos relacionados
(IDs de docs/02-REQUERIMIENTOS.md y tarea de docs/08-TAREAS.md)
## Alcance
## Fuera de alcance
## Comportamiento esperado
## Criterios de aceptación
- CA01: <condición observable> — Cómo se prueba: <acción y resultado esperado>
## Datos utilizados
(campos de docs/05-DATOS.md, si corresponde)
## Diseño y accesibilidad
(principios 2 y 5 de la constitución)
## Seguridad
(principio 6 de la constitución)
## Dudas abiertas
```

## 4. Reglas
- Usar solo información de la documentación o dada por el responsable. Lo que falte va a "Dudas abiertas"; no se inventa.
- Respetar el stack de la constitución: HTML, CSS y JavaScript; sin backend ni base de datos.
- Cada criterio de aceptación debe poder responderse con sí o no y tener una forma concreta de probarse.
- Mostrar la ruta y el contenido completo, y esperar aprobación antes de guardarlo.
- Si quedan dudas abiertas, sugerir ejecutar `/clarificar`.
