# Plan — Base de datos

## 1. Qué se va a hacer

Un proyecto de Supabase con dos tablas relacionadas, `categorias` y `productos`, y un bucket para las imágenes. El público solo puede ver esos datos; el responsable los administra desde el panel de Supabase.

## 2. Cómo se va a construir cada requisito

| Requisito | Cómo se va a construir |
|---|---|
| **RF-01** | Se crea la tabla `categorias`, con un número generado automáticamente y un nombre que no se puede repetir. |
| **RF-02** | Se crea la tabla `productos`, con un número generado automáticamente, nombre, descripción, imagen y categoría. |
| **RF-03** | El nombre, la descripción, la imagen y la categoría se marcan como obligatorios, y la categoría se relaciona con la tabla `categorias`, para que no se acepte una que no existe. |
| **RF-04** | Se cargan las categorías y los productos del catálogo, tomando sus datos de las tarjetas originales. |
| **RF-05** | Se activan los permisos por fila en las dos tablas, con una regla que deja leer a cualquier visitante. |
| **RF-06** | Se crea el bucket público `productos`, y el responsable sube las imágenes desde el panel de Supabase. |
| **RF-07** | Se copia la URL pública de cada imagen en la columna `imagen_url` de su producto. |
