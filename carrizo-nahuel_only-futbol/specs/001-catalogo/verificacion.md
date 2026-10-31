# Verificación — Catálogo de productos

Estados: **Aprobado**, **Fallido** o **Sin probar**. Solo se aprueba con evidencia real.

Revisión del código hecha por la IA (el proyecto no tiene comandos de prueba), comprobada de nuevo el 29/10/2026 sobre `pages/catalogo.html` y `styles/styles.css`. Las pruebas en el navegador las hace el responsable.

## T01 · Buscador y lista de categorías

| Comprobación | Requisito | Estado |
|---|---|---|
| Lista con "Todas" y las cinco categorías | RF-05 | Aprobado |
| Sin formulario, para que Enter no recargue la página | RF-10 | Aprobado |
| Buscador limitado a 50 caracteres (`maxlength="50"`) | RF-11 | Aprobado |
| Título "Catálogo - Only Fútbol" | RF-18 | Aprobado |
| Sin código en línea, sin `id` repetidos y en UTF-8 | Constitución 3 | Aprobado |

## T02 y T03 · Colores y tipografías

| Comprobación | Requisito | Estado |
|---|---|---|
| Colores de la marca definidos una sola vez como variables en `styles/styles.css` | RF-17 | Aprobado |
| Montserrat y Roboto enlazadas desde Google Fonts, con Arial de respaldo | RF-22 | Aprobado |

## T05 · Tarjetas de productos

| Comprobación | Requisito | Estado |
|---|---|---|
| 16 tarjetas, una por cada imagen de `assets/img/`, y todas las rutas existen | RF-01 | Aprobado |
| Cada tarjeta tiene imagen, título, descripción y botón "Consultar"; borde y botón en amarillo mostaza | RF-02 | Aprobado |
| Las 16 imágenes tienen texto alternativo con el nombre del producto | RF-03 | Aprobado |
| Los 16 botones abren WhatsApp al +54 3837 510380 con "Hola, quiero consultar por la [título]", en otra pestaña con `rel="noopener noreferrer"` y con nombre accesible | RF-04 | Aprobado |
| Combinaciones de color: negro sobre amarillo (13.11:1), amarillo sobre azul (10.08:1), azul sobre blanco (16.15:1) | RF-17 | Aprobado |
| Un solo `h1` y 16 títulos `h2` | RF-20 | Aprobado |
| Las 16 imágenes con carga diferida | RF-21 | Aprobado |

## Prueba en el navegador

| Qué hacer | Resultado esperado | Estado |
|---|---|---|
| Abrir `pages/catalogo.html` | La pestaña dice "Catálogo - Only Fútbol" y se ven las 16 tarjetas | Sin probar |
| Abrir la consola (F12) y recargar | No aparece ningún error | Sin probar |
| Probar a 360, 768 y 1024 px | 1, 2 y 3 columnas, sin desplazamiento horizontal | Sin probar |
| Escribir más de 50 caracteres en el buscador | No deja escribir más | Sin probar |
| Escribir en el buscador y presionar Enter | La página no se recarga | Sin probar |
| Recorrer con Tab | El foco pasa por el menú, el buscador, la lista y cada "Consultar" | Sin probar |
| Hacer clic en "Consultar" de una tarjeta | Se abre WhatsApp en otra pestaña con el mensaje de esa camiseta | Sin probar |
| Revisar las tipografías | Títulos en Montserrat y textos en Roboto | Sin probar |

**Navegador usado:** pendiente.
