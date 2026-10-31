# Seguridad - Only Fútbol

## Objetivo
Proteger el sitio, los datos del catálogo en Supabase y las claves del proyecto.

## Supabase
- La clave pública (`anon`) puede usarse en el navegador; la seguridad depende de RLS.
- Activar RLS en `categorias` y `productos` con permiso solo de lectura para el público.
- La clave `service_role` nunca va en el código, en el navegador ni en GitHub.

## Validación
- El buscador del catálogo acepta hasta 50 caracteres.
- Lo que escribe el usuario y los datos de los productos se muestran siempre como texto, nunca como código.
- Cuando la página de consulta tenga formulario, rechazar los datos inválidos con un mensaje claro.

## Enlaces externos
- Los botones "Consultar" abren WhatsApp en otra pestaña con `rel="noopener noreferrer"`.
- Las tipografías se cargan desde Google Fonts.

## GitHub
- No subir `.env`, tokens, claves ni datos privados.
- Crear un `.gitignore` que excluya `.env`.

## Publicación
Usar HTTPS en el sitio publicado.
