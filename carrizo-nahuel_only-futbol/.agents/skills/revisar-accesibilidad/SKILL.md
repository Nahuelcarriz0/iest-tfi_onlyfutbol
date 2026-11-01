---
name: revisar-accesibilidad
description: Revisa la accesibilidad y el diseño responsive de las páginas HTML y CSS de Only Futbol según la constitución. Usar al revisar o verificar páginas, formularios, imágenes, colores o navegación.
---
# Revisar accesibilidad

Revisa las páginas según los principios 2, 4 y 5 de `docs/CONSTITUCION.md` y las convenciones de `docs/07-CONVENCIONES.md`. No modifica archivos: informa los problemas y propone correcciones.

## Revisión del código (se puede comprobar leyendo)
- `<html lang="es">` y un `<title>` descriptivo por página (`docs/09-SEO.md`).
- Estructura semántica: `header`, `nav`, `main`, `footer`; un solo `h1` y encabezados sin saltos.
- Todas las imágenes tienen `alt` descriptivo; las decorativas, `alt=""`.
- Cada campo de formulario tiene un `<label>` asociado y los mensajes de error se relacionan con su campo.
- Los elementos interactivos son `a` o `button` (no `div` con clic).
- Existe un estilo de foco visible (`:focus` o `:focus-visible`) y no se elimina el `outline` sin reemplazo.
- Existe `<meta name="viewport">` y los estilos están pensados primero para celulares.
- No hay estilos ni scripts en línea.
- Solo se usan los colores de la paleta: `#0c1b54`, `#fbc51d`, `#FFFFFF`, `#000000`.
- Textos visibles en español, sin texto de relleno.

## Contraste
- Calcular el contraste de cada combinación de texto y fondo que se usa, con la fórmula de WCAG 2.
- Mínimo: 4.5:1 para texto normal y 3:1 para texto grande.
- Informar el valor calculado de cada combinación.

## Requiere prueba manual del responsable
Estas comprobaciones no se aprueban solo con leer el código:
- La página se ve bien desde 360 px de ancho, sin scroll horizontal.
- Se puede recorrer con Tab y usar con Enter, en un orden lógico y con el foco visible.
- Los formularios muestran mensajes claros con datos inválidos.

Indicar al responsable cómo hacerlas y marcarlas como Sin probar hasta recibir el resultado.

## Resultado
| Página | Comprobación | Estado | Detalle (archivo:línea) | Corrección propuesta |
|---|---|---|---|---|

Estados: **Cumple**, **No cumple** o **Sin probar**.
