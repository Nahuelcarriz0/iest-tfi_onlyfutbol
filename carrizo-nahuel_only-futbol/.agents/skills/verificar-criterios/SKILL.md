---
name: verificar-criterios
description: Comprueba los criterios de aceptación de una funcionalidad de Only Futbol y exige evidencia para cada uno. Usar al verificar una funcionalidad, antes de marcar tareas como terminadas o cuando se pregunte si un requisito se cumple.
---
# Verificar criterios de aceptación

Comprueba si una funcionalidad cumple sus criterios de aceptación. **Nunca marca como aprobado algo que no fue probado.** No modifica archivos.

## Fuentes
- Los criterios de aceptación del `spec.md` de la funcionalidad y las respuestas de `clarificacion.md`.
- Los requisitos de `docs/02-REQUERIMIENTOS.md` citados en el spec.
- Los principios de `docs/CONSTITUCION.md`.

Si no hay criterios de aceptación escritos, indicarlo y no evaluar: no se inventan criterios.

## Tipos de evidencia válidos
1. **Revisión del código:** se leyó el archivo y se cita el archivo y la línea que cumple o incumple el criterio. Solo sirve para lo que se puede comprobar leyendo (por ejemplo, que una imagen tenga `alt` o que un campo tenga `required`).
2. **Comando ejecutado:** solo si está documentado en `AGENTS.md` (sección 5). Se incluye la salida real. Hoy no existe ninguno.
3. **Prueba manual informada por el responsable:** qué hizo, en qué navegador o ancho de pantalla y qué resultado obtuvo.

Lo que depende del comportamiento en el navegador (clics, navegación, diseño a 360 px, teclado, mensajes de validación) requiere evidencia de tipo 3. Leer el código no alcanza para aprobarlo.

## Procedimiento
1. Listar los criterios con su ID.
2. Para cada uno, decidir qué tipo de evidencia necesita.
3. Juntar la evidencia que se puede obtener leyendo el código.
4. Pedir al responsable la evidencia manual faltante, con instrucciones concretas: qué hacer y qué resultado se espera.
5. Asignar un estado:
   - **Aprobado:** hay evidencia válida y el resultado coincide con lo esperado.
   - **Fallido:** hay evidencia y el resultado no coincide. Indicar qué falló.
   - **Sin probar:** no hay evidencia suficiente. Es el estado por defecto.

## Resultado
| Criterio | Estado | Tipo de evidencia | Evidencia |
|---|---|---|---|

Terminar con un resumen: cantidad de criterios Aprobados, Fallidos y Sin probar, y qué falta para completar la verificación.

## Reglas
- Ante la duda, el estado es Sin probar.
- No suponer resultados ni completar evidencia que el responsable no dio.
- No convertir un Sin probar en Aprobado sin evidencia nueva.
