# Especificación — Base de datos

**Estado:** borrador, pendiente de aprobación (01/11/2026).

## 1. Contexto

Only Futbol guarda las categorías y los productos del catálogo en una base de datos de Supabase, y sus imágenes en Supabase Storage. El público solo puede verlos, para que nadie pueda modificarlos desde el sitio.

## 2. Historias de usuario

- **HU-01:** Como responsable de la tienda, quiero guardar las categorías y los productos en una base de datos, para no tener que cambiar el código cuando cambian.
- **HU-02:** Como visitante, quiero ver los datos actualizados del catálogo, para conocer lo que ofrece la tienda.
- **HU-03:** Como responsable de la tienda, quiero subir las imágenes a Supabase Storage, para agregar productos sin tocar la carpeta del proyecto.

## 3. Requisitos (formato EARS)

| ID | Requisito |
|---|---|
| RF-01 | El sistema debe guardar las categorías en la tabla `categorias`, con un número y un nombre único. |
| RF-02 | El sistema debe guardar los productos en la tabla `productos`, con número, nombre, descripción, imagen y categoría. |
| RF-03 | Si un producto no tiene nombre, descripción o imagen, o su categoría no existe, entonces el sistema debe rechazarlo. |
| RF-04 | El sistema debe contener las categorías y los productos del catálogo. |
| RF-05 | Cuando un visitante consulta las tablas, el sistema debe permitirle leerlas. |
| RF-06 | El sistema debe guardar las imágenes de los productos en el bucket público `productos` de Supabase Storage. |
| RF-07 | Cuando una imagen está en el bucket, el sistema debe guardar su URL pública en la columna `imagen_url` del producto. |

## 4. Casos límite

- Se carga una categoría con un nombre repetido (RF-01).
- Se carga un producto con una categoría inexistente (RF-03).
- Una categoría no tiene productos: se guarda igual (RF-01).

## 5. Fuera de alcance

- Usuarios, pedidos e inicio de sesión.
- Administrar productos desde el sitio.
- Stock, precio y talles en la base de datos.

## 6. Criterios de finalización

1. Todos los RF cumplen en `verificacion.md`, con evidencia real.
2. El asesor de seguridad de Supabase no informa problemas.
3. El repositorio no contiene claves privadas.
