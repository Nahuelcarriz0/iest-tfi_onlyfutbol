# Clarificación — Catálogo de productos

Revisión de calidad del `spec.md`. Las decisiones fueron **aprobadas por el responsable** (27/10/2026, con cambios el 28 y el 29/10/2026).

## Las más importantes

| ID | Problema encontrado | Por qué importa | Decisión |
|---|---|---|---|
| C-02 | No hay productos ni imágenes. | No se pueden inventar. | Los entrega el responsable. Las imágenes ya están en `assets/img/`. |
| C-10 | Las categorías no tienen número ni nombre exacto. | El filtro no funcionaría. | 1 Clubes argentinos, 2 Selecciones, 3 Clubes internacionales, 4 Retro, 5 Otros productos. |
| C-21 | Para probar errores habría que modificar los datos reales. | Podrían quedar datos de prueba publicados. | Usar copias de prueba que no se publican. |
| C-23 | Amarillo sobre blanco y azul sobre negro casi no se leen (contraste 1.60:1 y 1.30:1). | Problema de accesibilidad. | Prohibir esas dos combinaciones. |
| C-25 | Al buscar o filtrar, un lector de pantalla no avisa que cambiaron los resultados. | Personas con discapacidad visual no podrían usarlo. | Mostrar y anunciar "Se muestran N productos". |

## Resto de las decisiones

| ID | Tema | Decisión |
|---|---|---|
| C-06 | Tildes al buscar | Se ignoran ("peru" encuentra "Perú"). |
| C-08 | Bootstrap | No se usa; solo CSS. |
| C-09 | Sin JavaScript | No se muestra aviso. |
| C-11 | Producto válido | Con número único, nombre y categoría existente. |
| C-13 | Búsqueda | Filtra mientras se escribe; Enter no recarga la página. |
| C-14 | Texto buscado | Se ignoran los espacios de más; hasta 50 caracteres. |
| C-16 | Orden | El mismo orden de la lista de productos. |
| C-18 | Sin productos | Mensaje: "Por el momento no hay productos disponibles". |
| C-19 | Imagen que no carga | Recuadro del mismo tamaño con el nombre del producto. |
| C-20 | Columnas | 1 en celular, 2 desde 768 px, 3 desde 1024 px. |
| C-22 | Navegadores | Los que tenga disponibles el responsable. |
| C-24 | Colores de foco y estados | Solo con los cuatro colores de la marca. |
| C-27 | Títulos | Título "Catálogo" y el nombre de cada producto como subtítulo. |
| C-28 | Filtro | Lista desplegable. |
| C-33 | Cantidad de productos | La indica el responsable. |
| C-34 | Volver al catálogo | Recordar la búsqueda queda para más adelante. |
| C-35 | Tildes en la marca | Escribir "Only Fútbol" con tilde. |
| C-36 | Tarjeta | Borde amarillo mostaza, imagen, título, descripción y botón "Consultar" amarillo mostaza. Sin precio, equipo ni stock. |
| C-37 | Botón "Consultar" | Abre WhatsApp en otra pestaña con un mensaje que nombra el producto. Número: +54 3837 510380. |
| C-38 | Ruta de imágenes | `assets/img/`. |
| C-39 | Tarjetas | Escritas directamente en `pages/catalogo.html`, sin archivo de datos. |
| C-40 | Tipografías | Montserrat y Roboto se cargan desde Google Fonts. |
| C-41 | Navbar y footer | Hechos por separado: menú con Inicio, Nosotros, Catálogo y Consulta; pie con "ONLYFUTBOL" y derechos reservados. |
| C-42 | Stock | Los productos no tienen stock (`docs/05-DATOS.md`). |
| C-43 | Base de datos | Los productos se cargarán en Supabase (Etapa 3 de `docs/08-TAREAS.md`); por ahora siguen en el HTML. |
