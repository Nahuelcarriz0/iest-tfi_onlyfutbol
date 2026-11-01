---
description: Detecta dudas y contradicciones en la especificación de una funcionalidad de Only Futbol y registra las respuestas en clarificacion.md.
argument-hint: <nombre de la funcionalidad>
---
# /clarificar — Aclarar una especificación

Funcionalidad: $ARGUMENTS

## 1. Leer
- El `spec.md` de la funcionalidad, en la ubicación definida en `AGENTS.md` (sección 3). Si no existe, indicarlo, sugerir `/spec` y detenerse.
- `docs/CONSTITUCION.md`, `memory.md` y los documentos de `docs/` citados en el spec.
- El `clarificacion.md` de la funcionalidad, si ya existe.

## 2. Buscar
- Dudas listadas en "Dudas abiertas".
- Criterios de aceptación ambiguos o que no se pueden probar.
- Contradicciones entre el spec y la documentación (por ejemplo, rutas de imágenes, páginas o colores distintos entre documentos).
- Requisitos que contradigan la constitución.
- Decisiones o problemas pendientes registrados en `memory.md` que afecten a la funcionalidad.

## 3. Preguntar
- Hacer como máximo 5 preguntas por vez, ordenadas por importancia.
- Cada pregunta indica por qué importa y, si corresponde, propone opciones basadas en los documentos.
- No responder las preguntas por el responsable ni suponer respuestas.

## 4. Registrar
Con las respuestas, preparar `clarificacion.md` junto al `spec.md`:
```
# Clarificación — <funcionalidad>

| # | Pregunta | Respuesta del responsable | Fecha | Cambio en spec.md |
|---|---|---|---|---|
```
- Las preguntas sin respuesta quedan como "Pendiente".
- Proponer los cambios a `spec.md` que surjan de las respuestas.
- Mostrar ambos cambios y esperar aprobación antes de guardar.
- Si una respuesta cambia una decisión general del proyecto, proponer también la actualización de `memory.md`.
