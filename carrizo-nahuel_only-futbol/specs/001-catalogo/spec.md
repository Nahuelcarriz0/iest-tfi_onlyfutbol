# Especificación — Catálogo de productos

- **Estado:** aprobada, con las decisiones de `clarificacion.md` (actualizada el 29/10/2026).
- **Tarea:** "Crear catalogo y tarjetas" (`docs/08-TAREAS.md`, Etapa 4).

## 1. Contexto y objetivo

Only Fútbol quiere reunir en una tienda online sencilla las camisetas y productos de fútbol que hoy están repartidos en distintos lugares (`docs/01-CONTEXTO.md`).

**Objetivo:** mostrar los productos en tarjetas y permitir buscarlos por nombre y filtrarlos por categoría.

Cubre los requisitos del proyecto RF02 (catálogo), RF04 (imágenes), RF06 (categorías), RF07 (búsqueda) y RF08 (filtros) de `docs/02-REQUERIMIENTOS.md`.

## 2. Historias de usuario

- **HU-01:** Como fanático del fútbol, quiero ver los productos en tarjetas con imagen, título y descripción, y poder consultar por ellos, para conocer lo que ofrece la tienda.
- **HU-02:** Como persona que busca una camiseta en particular, quiero escribir su nombre en un buscador, para encontrarla rápido.
- **HU-03:** Como persona interesada en un tipo de producto, quiero filtrar por categoría (clubes argentinos, selecciones, clubes internacionales, retro u otros productos), para ver solo lo que me interesa.
- **HU-04:** Como usuario de celular, quiero que el catálogo se vea bien en mi pantalla, sin hacer zoom ni moverme hacia los costados.

## 3. Requisitos (formato EARS)

Formato EARS: "El sistema debe…", "Cuando…, el sistema debe…", "Mientras…, el sistema debe…", "Si…, entonces el sistema debe…" o "Donde…, el sistema debe…".

En la columna "Prueba": **Ver** = se prueba en el navegador; **Código** = se revisa el código.

### Mostrar productos
| ID | Requisito | Cómo se comprueba | Prueba |
|---|---|---|---|
| RF-01 | El sistema debe mostrar una tarjeta por cada producto válido, en el orden de la lista de productos. | Cantidad y orden de tarjetas igual a la lista. | Ver |
| RF-02 | El sistema debe mostrar cada tarjeta con borde amarillo mostaza y, dentro, la imagen, el título, la descripción y un botón "Consultar" amarillo mostaza. | Revisar cada tarjeta. | Ver |
| RF-03 | El sistema debe mostrar cada imagen con un texto alternativo que incluya el nombre del producto. | Revisar el `alt` de las imágenes. | Código |
| RF-04 | Cuando el usuario activa "Consultar", el sistema debe abrir WhatsApp en otra pestaña con el mensaje "Hola, quiero consultar por la [título del producto]". El botón indica a los lectores de pantalla a qué producto corresponde y que se abre en otra pestaña. | Activar el botón de una tarjeta y revisar el mensaje. | Ver |

### Buscar y filtrar
| ID | Requisito | Cómo se comprueba | Prueba |
|---|---|---|---|
| RF-05 | El sistema debe ofrecer una lista con "Todas" y las categorías Clubes argentinos, Selecciones, Clubes internacionales, Retro y Otros productos. | Abrir la lista. | Ver |
| RF-06 | Cuando el usuario elige una categoría, el sistema debe mostrar solo los productos de esa categoría. | Elegir cada categoría. | Ver |
| RF-07 | Cuando el usuario elige "Todas", el sistema debe mostrar todos los productos. | Elegir "Todas". | Ver |
| RF-08 | Cuando el usuario escribe en el buscador, el sistema debe mostrar los productos cuyo nombre contenga ese texto, sin importar mayúsculas, tildes ni espacios de más. | Buscar "RIVER", "river" y "seleccion" (para "Selección"); al borrar, vuelven todos. | Ver |
| RF-09 | Mientras haya una búsqueda y una categoría elegidas, el sistema debe mostrar solo los productos que cumplan las dos. | Combinar búsqueda y categoría. | Ver |
| RF-10 | Cuando el usuario presiona Enter en el buscador, el sistema no debe recargar la página. | Presionar Enter. | Ver |
| RF-11 | El sistema debe aceptar hasta 50 caracteres en el buscador. | Intentar escribir más. | Ver |

### Errores
| ID | Requisito | Cómo se comprueba | Prueba |
|---|---|---|---|
| RF-12 | Si ningún producto coincide, entonces el sistema debe mostrar "No se encontraron productos". | Buscar "zzzz". | Ver |
| RF-13 | Si no hay productos, entonces el sistema debe mostrar "Por el momento no hay productos disponibles". | Página de prueba sin productos. | Ver |
| RF-14 | Si un producto tiene datos incorrectos (sin nombre, número repetido o categoría inexistente), entonces el sistema no debe mostrarlo y debe avisar en la consola. | Página de prueba con productos incorrectos. | Ver |
| RF-15 | Si una imagen no carga, entonces el sistema debe mostrar un recuadro del mismo tamaño con el nombre del producto. | Producto de prueba con imagen inexistente. | Ver |
| RF-16 | Si la imagen no está en `assets/img/`, entonces el sistema debe tratarla como una imagen que no carga. | Producto de prueba con ruta externa. | Ver |

### Diseño, accesibilidad y SEO
| ID | Requisito | Cómo se comprueba | Prueba |
|---|---|---|---|
| RF-17 | Solo colores y tipografías de la marca. | Revisar `styles/styles.css`. | Código |
| RF-18 | Título "Catálogo - Only Fútbol" en la pestaña. | Revisar el `<head>`. | Código |
| RF-19 | Anunciar "Se muestran N productos" al buscar o filtrar. | Buscar y filtrar. | Ver |
| RF-20 | Un solo título "Catálogo" y el nombre de cada producto como subtítulo. | Revisar los títulos. | Código |
| RF-21 | Imágenes que carguen al acercarse a la pantalla. | Revisar las imágenes. | Código |
| RF-22 | Montserrat y Roboto desde Google Fonts. | Revisar el `<head>`. | Código |

## 4. Datos de cada producto

Título (`nombre`), descripción, imagen (`imagen_url`) y categoría (`categoria_id`, 1 a 5), según `docs/05-DATOS.md`. La tarjeta no muestra equipo, precio ni stock.

Las imágenes las entregó el responsable en `assets/img/` (16 imágenes). **No se inventan productos.**

## 5. Casos límite

| Caso | Qué pasa | Requisito |
|---|---|---|
| La búsqueda no encuentra nada | "No se encontraron productos" | RF-12 |
| No hay productos | "Por el momento no hay productos disponibles" | RF-13 |
| Mayúsculas, tildes o espacios de más | Encuentra igual | RF-08 |
| Más de 50 caracteres | No se pueden escribir | RF-11 |
| Producto con datos incorrectos | No se muestra | RF-14 |
| Imagen que no carga | Recuadro con el nombre | RF-15 |

## 6. Fuera del alcance

- Detalle de producto.
- Precio, equipo y stock en la tarjeta.
- Navbar, footer y página de inicio (se hacen por separado).
- Carrito, pedidos, registro e inicio de sesión.
- Administración de productos.
- Leer los productos desde Supabase (Etapa 3 de `docs/08-TAREAS.md`).
- Filtros por precio o talle, ordenar y paginación.
- Recordar la búsqueda al volver al catálogo.

## 7. Criterios de terminado

1. El responsable entregó los productos y sus imágenes. El número de WhatsApp es +54 3837 510380.
2. Todos los requisitos están **aprobados** en `verificacion.md`, con evidencia real.
3. La revisión de accesibilidad no encontró problemas.
4. La consola del navegador no muestra errores.
5. Los datos de prueba no se publican.
6. Recién entonces se marca la tarea en `docs/08-TAREAS.md`.
