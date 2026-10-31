# Clarificación — Catálogo de productos

Hallazgos de la IA revisando la spec como QA y decisión del estudiante sobre cada uno (27/10/2026, con cambios el 28, el 29 y el 31/10/2026).

Los hallazgos de C-01, C-05, C-13, C-15 y C-17 son los registrados originalmente. Los demás se redactaron de nuevo el 31/10/2026 a partir de cada decisión, porque su texto original no se conservó.

| ID | Hallazgo de la IA | Decisión del estudiante |
|---|---|---|
| C-01 | No hay productos ni imágenes, y no se pueden inventar. | Los entrega el responsable. Las imágenes ya están en `assets/img/`. |
| C-02 | La spec no aclara qué pasa con las tildes al buscar. | Se ignoran ("seleccion" encuentra "Selección"). |
| C-03 | Bootstrap figura como opcional y no se define si se usa. | No se usa; solo CSS. |
| C-04 | No se define qué se muestra sin JavaScript. | No se muestra aviso. |
| C-05 | Las categorías no tienen un nombre exacto, y el filtro no funcionaría. | Clubes argentinos, Selecciones, Clubes internacionales, Retro y Otros productos. El filtro muestra solo las que tienen productos. |
| C-06 | No se define qué es un producto válido. | Con número único, nombre y categoría existente. |
| C-07 | No se define cuándo se aplica la búsqueda ni qué hace Enter. | Filtra mientras se escribe; Enter no recarga la página. |
| C-08 | No se definen los espacios de más ni el largo máximo de la búsqueda. | Se ignoran los espacios de más; hasta 50 caracteres. |
| C-09 | No se define el orden de las tarjetas. | El mismo orden de la lista de productos. |
| C-10 | No se define qué se muestra si no hay productos. | Mensaje "Por el momento no hay productos disponibles". |
| C-11 | No se define qué se muestra si una imagen no carga. | Recuadro del mismo tamaño con el nombre del producto. |
| C-12 | No se define la cantidad de columnas por pantalla. | 1 en celular, 2 desde 768 px, 3 desde 1024 px. |
| C-13 | Para probar errores habría que modificar los datos reales, y podrían quedar datos de prueba publicados. | Usar copias de prueba que no se publican. |
| C-14 | No se indica en qué navegadores se prueba. | Los que tenga disponibles el responsable. |
| C-15 | Amarillo sobre blanco y azul sobre negro casi no se leen (contraste 1.60:1 y 1.30:1). | Prohibir esas dos combinaciones. |
| C-16 | No se definen los colores del foco y de los estados. | Solo los cuatro colores de la marca. |
| C-17 | Al buscar o filtrar, no se indica cuántos resultados hay, y la persona no sabe si cambió la lista. | Mostrar "Se muestran N productos". |
| C-18 | No se define la jerarquía de títulos de la página. | Título "Catálogo" y el nombre de cada producto como subtítulo. |
| C-19 | No se define cómo se presenta el filtro. | Lista desplegable. |
| C-20 | No se indica cuántos productos tendrá el catálogo. | Sin límite; la define lo que cargue el responsable. |
| C-21 | No se define si la búsqueda se recuerda al volver al catálogo. | Queda para más adelante. |
| C-22 | El contenido de la tarjeta dependía de datos que no están definidos, como precio, equipo y stock. | Borde amarillo mostaza, imagen, título, descripción y botón "Ver más" amarillo mostaza. Sin precio, equipo ni stock. |
| C-23 | Sin precio, no se define cómo se consulta por un producto. | "Consultar" abre WhatsApp en otra pestaña con un mensaje que nombra el producto. Número: +54 3837 510380. |
| C-24 | La spec pedía mostrar "Sin stock", pero `docs/05-DATOS.md` no tiene ese dato. | Los productos no tienen stock. |
| C-25 | La spec no preveía una vista con más detalle del producto. | Al tocar una tarjeta o su botón "Ver más" se abre una vista agrandada con talles y botón de consulta. |
| C-26 | No se definen los talles ni si elegir uno es obligatorio. | S, M, L, XL y XXL para todos los productos, escritos en `pages/catalogo.html`. Es obligatorio elegir uno para consultar. |
