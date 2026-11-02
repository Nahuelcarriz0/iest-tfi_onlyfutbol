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
| Formulario | Crear un formulario de consultas básico para recibir el mensaje por WhatsApp. | Formulario en `pages/consulta.html` que abre WhatsApp con el mensaje escrito. |
| Páginas | Poner el logo en el menú, agregar el texto de Nosotros y sumar imágenes con enlaces al catálogo y a la consulta. | Inicio, Nosotros y Consulta con sus imágenes. |
| Gráficos | Elaborar una infografía del ciclo SDD y gráficos con datos reales del repositorio. | `docs/graficos.html`, con la tabla y la comprobación de cada gráfico. |

## 2. Errores de la IA

### Error 1: agregó cosas que no se pidieron

- **Qué hizo mal:** al pedirle el pie de página, sumó cambios por su cuenta en el resto del trabajo.
- **Cómo se detectó:** el estudiante revisó la respuesta y le dijo que solo creara lo que había pedido.
- **Cómo se corrigió:** la IA sacó lo que había agregado y dejó solo el pie de página: su HTML, CSS y JavaScript.

### Error 2: nombró una carpeta que no existe

- **Qué hizo mal:** el plan del catálogo nombraba una carpeta `pruebas/` que nunca se creó, porque las pruebas se hicieron con copias temporales.
- **Cómo se detectó:** la IA lo avisó al revisar `plan.md`, y el estudiante confirmó que no existía nada relacionado con esa carpeta.
- **Cómo se corrigió:** se sacaron todas las menciones a la carpeta del plan, que ahora explica cómo se hicieron las pruebas.

### Error 3: puso una cantidad fija de productos en las tareas

- **Qué hizo mal:** en las tareas de la base de datos, la condición de "Listo cuando" pedía exactamente 16 productos, aunque el catálogo no tiene un límite.
- **Cómo se detectó:** el estudiante lo vio al leer `tasks.md` y aclaró que podían ser más de 16.
- **Cómo se corrigió:** se sacaron las cantidades fijas de productos e imágenes. Por ejemplo, ahora dice "Cada producto tiene su imagen en el bucket".

### Error 4: el logo no se veía en el menú

- **Qué hizo mal:** puso el logo directamente sobre el menú azul. Como el logo tiene fondo transparente y partes azules, se perdían y solo se leía "FUTBOL".
- **Cómo se detectó:** la IA lo vio en una captura de pantalla de la página, tomada con Chrome después de hacer el cambio.
- **Cómo se corrigió:** se le puso al logo un fondo blanco con las esquinas redondeadas, y se revisó con otra captura.

### Error 5: agregó a la verificación una columna que la consigna no pedía

- **Qué hizo mal:** agregó a `verificacion.md` la columna "Evidencia o qué falta" y no aclaró que no salía de la consigna.
- **Cómo se detectó:** el estudiante le preguntó si la consigna realmente pedía evidencia, y la IA reconoció que no.
- **Cómo se corrigió:** se sacó la columna, y la tabla quedó con cada requisito y su estado.
