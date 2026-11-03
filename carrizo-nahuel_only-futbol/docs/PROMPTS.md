# Registro de prompts y errores — Only Futbol

Pedidos más importantes hechos a la IA (Claude Code) durante el desarrollo y casos en los que se equivocó. Los pedidos están resumidos.

## 1. Pedidos más importantes

| Etapa | Pedido | Resultado |
|---|---|---|
| Estructura | Separar el proyecto en carpetas: páginas en `pages`, imágenes en `assets/img`, estilos en `styles` y scripts en `script`. | Proyecto organizado por tipo de archivo. |
| Diseño | Crear el menú y el pie de página con los colores y las tipografías de la marca, con las opciones Inicio, Nosotros, Catálogo y Consulta. | Menú y pie comunes a todas las páginas, y fuentes de Google Fonts. |
| Catálogo | Cambiar "Consultar" por "Ver más" en las tarjetas, antes de ampliarlas. | Tarjeta que se amplía, con elección de talle y consulta por WhatsApp. |
| Base de datos | Armar un esquema para usar Supabase en el catálogo y poder agregar imágenes desde ahí. | Tablas `categorias` y `productos`, y bucket `productos` para las imágenes. |
| Specs | Armar la spec, la clarificación, el plan, las tareas y la verificación de cada funcionalidad, según la consigna. | Carpetas `specs/001-catalogo`, `specs/002-Base Datos` y `specs/003-Formulario`. |
| Clarificación | Revisar la spec como QA, con los hallazgos de la IA y la decisión del estudiante sobre cada uno. | Tabla de hallazgos y decisiones en cada `clarificacion.md`. |
| Gráficos | Elaborar una infografía del ciclo SDD y gráficos con datos reales del repositorio. | `docs/graficos.html`, con la tabla y la comprobación de cada gráfico. |

## 2. Errores de la IA

### Error 1: agregó cosas que no se pidieron

- **Qué hizo mal:** al pedirle el pie de página, sumó cambios por su cuenta en el resto del trabajo.
- **Cómo se detectó:** el estudiante revisó la respuesta y le dijo que solo creara lo que había pedido.
- **Cómo se corrigió:** la IA sacó lo que había agregado y dejó solo el pie de página: su HTML, CSS y JavaScript.


### Error 2: puso una cantidad fija de productos en las tareas

- **Qué hizo mal:** en las tareas de la base de datos, la condición de "Listo cuando" pedía exactamente 16 productos, aunque el catálogo no tiene un límite.
- **Cómo se detectó:** el estudiante lo vio al leer `tasks.md` y aclaró que podían ser más de 16.
- **Cómo se corrigió:** se sacaron las cantidades fijas de productos e imágenes. Por ejemplo, ahora dice "Cada producto tiene su imagen en el bucket".

### Error 3: el logo no se veía en el menú

- **Qué hizo mal:** le pedi que me agrege el logo al menu y que se ve el logo
- **Cómo se detectó:** la IA cambio de color al logo original envez de agregarle un fondo
- **Cómo se corrigió:** se le puso al logo un fondo blanco con las esquinas redondeadas

