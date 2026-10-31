# Plan — Catálogo de productos

Basado en `spec.md` y `clarificacion.md`. Pendiente de aprobación del responsable.

## 1. Qué se va a hacer

Una página `pages/catalogo.html` que muestra los productos en tarjetas, con un buscador por nombre y una lista para filtrar por categoría. Todo con HTML, CSS y JavaScript, sin Bootstrap ni otras herramientas.

## 2. Archivos

| Archivo | Para qué sirve |
|---|---|
| `pages/catalogo.html` | La estructura de la página y las tarjetas de los productos. |
| `styles/styles.css` | Los colores, las tipografías y el diseño adaptable. |
| `script/productos.js` | Buscar y filtrar las tarjetas. |
| `assets/img/` | Las imágenes de los productos, entregadas por el responsable. |
| `pruebas/` | Páginas con datos ficticios para probar errores. **Nuevo y no se publica** (C-21). |

Las tipografías se cargan desde Google Fonts (C-40). La carpeta `pruebas/` no está en `docs/04-ARQUITECTURA.md`; hay que agregarla ahí.

## 3. Decisiones principales

1. **Las tarjetas están escritas en el HTML** de `pages/catalogo.html`; JavaScript solo se usa para buscar y filtrar.
2. **Los productos se revisan al cargar la página.** Si alguno tiene datos incorrectos, no se muestra y se avisa en la consola (RF-14).
3. **Los textos se muestran siempre como texto**, para que nada escrito en el buscador o en los datos se convierta en código.
4. **Diseño primero para celulares:** 1 columna, 2 desde 768 px y 3 desde 1024 px.
5. **Solo los cuatro colores de la marca**, sin las combinaciones que no se leen bien (RF-17).

## 4. Cómo se cumplen los requisitos

| Requisitos | Cómo se cumplen |
|---|---|
| **Mostrar productos** (RF-01 a RF-04) | Una tarjeta por producto con borde amarillo, imagen, título, descripción y botón amarillo "Consultar" que abre WhatsApp con el nombre del producto. Las tarjetas están escritas en `pages/catalogo.html`. |
| **Imágenes** (RF-03, RF-15, RF-16, RF-21) | Cada imagen tiene texto alternativo. Si no carga, se ve un recuadro con el nombre. Cargan cuando se acercan a la pantalla. |
| **Filtrar** (RF-05 a RF-07) | Lista desplegable con "Todas" y las cinco categorías. |
| **Buscar** (RF-08, RF-09, RF-10, RF-11) | Filtra mientras se escribe, sin importar mayúsculas, tildes ni espacios de más. Funciona junto con el filtro de categoría. |
| **Mensajes** (RF-12, RF-13, RF-19) | "No se encontraron productos", "Por el momento no hay productos disponibles" y contador "Se muestran N productos". |
| **Seguridad** (RF-14, RF-16) | Se descartan los productos con datos incorrectos y los textos nunca se tratan como código. |
| **Diseño y accesibilidad** (RF-17, RF-20, RF-22) | Diseño adaptable desde 360 px, controles con etiqueta, foco visible, títulos ordenados, colores y tipografías de la marca. |
| **SEO e idioma** (RF-18) | Título "Catálogo - Only Fútbol" y todos los textos en español. |

## 5. Qué falta para empezar

- Las **imágenes ya están** en `assets/img/`. Faltan las descripciones definitivas de cada producto.

## 6. Documentos a actualizar

- `docs/09-SEO.md`: "Fútbol" con tilde y rutas `assets/img/`.
- `docs/04-ARQUITECTURA.md`: agregar `pruebas/` y `script/productos.js` cuando existan.
- `docs/03-TECNOLOGIAS.md`: sin Bootstrap.

## 7. Cómo se va a probar

- Cada requisito se prueba como indica `spec.md` (sección 3, columna "Cómo se comprueba").
- Los errores se prueban con las páginas de `pruebas/`, sin tocar los datos reales.
- Los resultados reales se anotan en `verificacion.md`.
