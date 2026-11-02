---
description: Verifica una funcionalidad de Only Futbol contra sus criterios de aceptación y prepara verificacion.md con evidencia real.
argument-hint: <nombre de la funcionalidad>
---
# /verificar — Verificar una funcionalidad

## 1. Leer
- `spec.md`, `clarificacion.md` y `tasks.md` de la funcionalidad, en la ubicación definida en `AGENTS.md` (sección 3). Si no existe `spec.md`, indicarlo y detenerse.
- Los archivos HTML, CSS y JavaScript de la funcionalidad.
- `AGENTS.md` (sección 5): comandos de prueba disponibles. Hoy no existe ninguno; no ejecutar comandos que no estén documentados ahí.

## 2. Verificar
- Leer y aplicar `.agents/skills/verificar-criterios/SKILL.md` a cada criterio de aceptación del spec.
- Leer y aplicar `.agents/skills/revisar-accesibilidad/SKILL.md` a las páginas de la funcionalidad.
- Para las pruebas manuales (navegador, 360 px, teclado, formularios), pedir al responsable que las haga y que informe el resultado.

## 3. Preparar verificacion.md
```
# Verificación — <funcionalidad>
Fecha: <fecha>

## Criterios de aceptación
| Criterio | Estado | Evidencia | Quién lo comprobó |
|---|---|---|---|

## Accesibilidad
(resultado de revisar-accesibilidad)

## Errores encontrados y correcciones

## Pendientes
```
- Estados posibles: **Aprobado**, **Fallido** o **Sin probar**.
- Si ya existe `verificacion.md`, agregar una nueva sección con la fecha; no borrar verificaciones anteriores.

## 4. Cerrar
- Mostrar `verificacion.md` y esperar aprobación antes de guardarlo.
- Proponer marcar como terminadas en `tasks.md` y `docs/08-TAREAS.md` solo las tareas cuyos criterios estén todos Aprobados.
- Proponer la actualización de "Estado actual" en `memory.md`.
- Nunca declarar la funcionalidad como terminada si queda algún criterio Fallido o Sin probar.
