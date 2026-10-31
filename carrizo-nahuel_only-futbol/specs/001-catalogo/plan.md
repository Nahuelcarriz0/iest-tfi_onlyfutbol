# Plan — Catálogo de productos

## 1. Qué se va a hacer

Una página `pages/catalogo.html` que muestra los productos en tarjetas, con un buscador por nombre y una lista para filtrar por categoría. Todo con HTML, CSS y JavaScript, sin Bootstrap ni otras herramientas.


## 2. Decisiones principales

1. **Las tarjetas las arma JavaScript** con los datos de los productos, sin agregar librerías.
2. **Los productos se revisan al cargar la página.** Si alguno tiene datos incorrectos, no se muestra y se avisa en la consola (RF-09).
3. **Los textos se muestran siempre como texto**, para que nada escrito en el buscador o en los datos se convierta en código.
4. **Diseño primero para celulares:** 1 columna, 2 desde 768 px y 3 desde 1024 px.
5. **Solo los cuatro colores de la marca**, sin las combinaciones que no se leen bien (RF-11).

## 3. Cómo se va a construir cada requisito

| Requisito | Cómo se va a construir |
|---|---|
| **RF-01** | Al abrir la página se leen los productos en orden y se arma una tarjeta por cada uno que sea válido, con imagen, título, descripción y botón "Ver más". |
| **RF-02** | Una ventana sobre la página repite los datos de la tarjeta tocada, en mayor tamaño, con un botón para cerrar; también se cierra con Esc o tocando afuera. |
| **RF-03** | El enlace de consulta se arma con el número de la tienda, el nombre del producto y el talle elegido, y se abre en otra pestaña. |
| **RF-04** | Al elegir una categoría, se ocultan las tarjetas de las demás; la opción "Todas" las muestra a todas. |
| **RF-05** | El nombre del producto y el texto buscado se comparan sin mayúsculas, tildes ni espacios de más, cada vez que se escribe. |
| **RF-06** | Una tarjeta solo se muestra si cumple la búsqueda y la categoría a la vez. |
| **RF-07** | Después de buscar o filtrar se cuentan las tarjetas visibles; si son cero, se muestra el mensaje. |
| **RF-08** | Si después de leer los datos no queda ningún producto, se muestra el mensaje en lugar de la lista. |
| **RF-09** | Antes de armar las tarjetas se revisa cada producto; los incorrectos se descartan y se avisa en la consola. |
| **RF-10** | Si una imagen falla al cargar, se reemplaza por un recuadro del mismo tamaño con el nombre del producto. |
| **RF-11** | Los colores y las tipografías de la marca se definen una sola vez en los estilos y se reutilizan en toda la página. |

## 4. Qué falta para empezar

- Las **imágenes ya están** en `assets/img/`. Faltan las descripciones definitivas de cada producto.



## 5. Cómo se va a probar

- Cada requisito de `spec.md` se prueba en el navegador o revisando el código, según corresponda.
- Los errores se prueban con copias y datos simulados que no se publican, sin tocar los datos reales.
- Los resultados reales se anotan en `verificacion.md`.
