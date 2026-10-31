# Especificación — Catálogo de productos

**Estado:** aprobada, con las decisiones de `clarificacion.md` (actualizada el 31/10/2026).

## 1. Contexto

Only Fútbol reúne en una tienda online sus camisetas y productos de fútbol. El catálogo los muestra en tarjetas y permite buscarlos y filtrarlos.

## 2. Historias de usuario

- **HU-01:** Como fanático del fútbol, quiero ver los productos y consultar por ellos, para conocer lo que ofrece la tienda.
- **HU-02:** Como persona que busca una camiseta, quiero buscarla por nombre, para encontrarla rápido.
- **HU-03:** Como persona interesada en un tipo de producto, quiero filtrar por categoría, para ver solo lo que me interesa.
- **HU-04:** Como usuario de celular, quiero que el catálogo se vea bien en mi pantalla.

## 3. Requisitos (formato EARS)

| ID | Requisito |
|---|---|
| RF-01 | El sistema debe mostrar una tarjeta por cada producto válido, con imagen, título, descripción y botón "Ver más". |
| RF-02 | Cuando el usuario toca una tarjeta, el sistema debe mostrarla agrandada, en una vista que se cierra con "Cerrar", con Esc o tocando afuera. |
| RF-03 | Cuando el usuario activa "Consultar" con un talle elegido, el sistema debe abrir WhatsApp con el producto y el talle. |
| RF-04 | Cuando el usuario elige una categoría, el sistema debe mostrar solo sus productos; con "Todas", debe mostrarlos todos. |
| RF-05 | Cuando el usuario escribe en el buscador, el sistema debe mostrar los productos que coincidan, sin importar mayúsculas, tildes ni espacios de más. |
| RF-06 | Mientras haya una búsqueda y una categoría elegidas, el sistema debe mostrar solo los productos que cumplan las dos. |
| RF-07 | Si ningún producto coincide, entonces el sistema debe mostrar "No se encontraron productos". |
| RF-08 | Si no hay productos, entonces el sistema debe mostrar "Por el momento no hay productos disponibles". |
| RF-09 | Si un producto tiene datos incorrectos, entonces el sistema no debe mostrarlo y debe avisar en la consola. |
| RF-10 | Si una imagen no carga, entonces el sistema debe mostrar un recuadro con el nombre del producto. |
| RF-11 | El sistema debe usar solo los colores y las tipografías de la marca. |

## 4. Casos límite

- La búsqueda no encuentra nada (RF-07).
- No hay productos (RF-08).
- Un producto tiene datos incorrectos (RF-09).
- Una imagen no carga (RF-10).


## 5. Fuera de alcance

- Precio, equipo y stock.
- Carrito, pedidos, registro e inicio de sesión.
- Administración de productos.
- Ordenar, paginar y filtrar por precio o talle.

## 6. Criterios de finalización

1. Todos los RF cumplen en `verificacion.md`, con evidencia real.
2. La revisión de accesibilidad no encontró problemas.
3. La consola del navegador no muestra errores.
