# Tareas — Base de datos

Se hacen de a una y se marcan con [x] **solo después de probarlas**.

| ✔ | Tarea | Listo cuando |
|---|---|---|
| [x] | Crear el proyecto en Supabase. | El proyecto responde a las consultas. |
| [x] | Crear la tabla `categorias`. | Existe, con número y nombre obligatorios, y el nombre no se puede repetir. |
| [x] | Crear la tabla `productos`. | Existe, con número, nombre, descripción, imagen y categoría obligatorios. |
| [x] | Relacionar cada producto con su categoría. | La categoría del producto tiene que existir en `categorias`. |
| [x] | Cargar las categorías y los productos del catálogo. | Están las categorías y los productos del catálogo; la cantidad no tiene límite. |
| [x] | Permitir que un visitante lea las tablas. | Con la clave pública, leer `categorias` y `productos` funciona. |
| [x] | Crear el bucket público `productos`. | Existe y es público. |
| [x] | Subir las imágenes al bucket. | Cada producto tiene su imagen en el bucket. |
| [x] | Guardar la URL de cada imagen en `imagen_url`. | Cada producto apunta a una imagen del bucket. |
