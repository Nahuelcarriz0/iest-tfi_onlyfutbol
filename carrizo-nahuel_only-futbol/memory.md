# Memory — Only Futbol

## Información del proyecto
- Nombre: Only Futbol.
- Tipo: Tienda online de productos de futbol.

## Hechos comprobados

### Tecnología
- Tecnologías: HTML, CSS y JavaScript. Bootstrap es opcional, solo para diseño responsive.
- Base de datos: Supabase (PostgreSQL), proyecto `pyaeswztbsqlvcvprtxa`, con tablas `categorias` y `productos` (RLS de solo lectura) y bucket público `productos`. Claude Code se conecta por MCP (`.mcp.json`); el sitio lee con `fetch` y la clave pública.
- Servicios externos: Supabase, Google Fonts (tipografías) y WhatsApp (consultas).
- Repositorio git en la carpeta superior, `iest-tfi_only-futbol/`; el proyecto está en `carrizo-nahuel_only-futbol/`.

### Estado actual
- Aplicación: en desarrollo. Páginas: `index.html` y `pages/` (`nosotros.html`, `catalogo.html`, `consulta.html`), con menú (Inicio, Nosotros, Catálogo, Consulta) y pie "ONLYFUTBOL" comunes. Estilos en `styles/styles.css`; scripts en `script/` (`navegacion.js`, `pie-pagina.js`, `productos.js`, `catalogo-animacion.js`, `catalogo-talles.js`, `consulta.js`). Estructura en `docs/04-ARQUITECTURA.md`.
- Formulario de consulta: `pages/consulta.html` abre WhatsApp con el nombre y el mensaje (`specs/003-Formulario/`). El responsable marcó aprobada la prueba manual.
- Imágenes del sitio: logo en el menú; imágenes en `assets/img/` para Inicio (bienvenida y enlaces al catálogo y a la consulta), banner de Nosotros y fondo de Consulta.
- Infografía y gráficos con datos del repositorio en `docs/graficos.html`; registro de prompts y errores en `docs/PROMPTS.md`.
- `docs/08-TAREAS.md`: las 32 tareas figuran marcadas por el responsable. No hay en el repositorio una URL del sitio publicado que respalde las tareas de publicación.
- Funcionalidades: catálogo en curso en `pages/catalogo.html` (`specs/001-catalogo/`). T01 (buscador y lista de categorías) y T05 (16 tarjetas con borde y botón "Consultar" amarillos; sin precio, se consulta por WhatsApp al +54 3837 510380) implementadas; falta la prueba en el navegador. Se agregó a las tarjetas un efecto de zoom al pasar el mouse, al enfocar con el teclado y al tocar o presionar (solo CSS) y una animación de aparición al scrollear (`script/catalogo-animacion.js`); ambos sin probar en el navegador. También se dio estilo al buscador (lupa, texto de ejemplo) y al filtro (flecha propia); en computadora quedan en una fila. Sin probar en el navegador.
- Vista ampliada (T12): al tocar una tarjeta se abre un `<dialog>` con talles S a XXL y "Consultar", que abre WhatsApp con producto y talle. Probada con Chrome sin ventana sobre una copia (360 y 1184 px); falta la prueba manual del responsable (táctil, Esc, Tab y WhatsApp real).
- Catálogo con Supabase (T13): las tarjetas, el buscador, el filtro, el contador y los mensajes funcionan con `script/productos.js`. Prueba automática aprobada; falta la prueba manual. Las imágenes se cargan desde el bucket `productos`: 16 productos con su URL en `imagen_url`, comprobado en Chrome sin ventana; falta la prueba manual.- Supabase se sacó de `specs/001-catalogo/` a pedido del responsable y se va a documentar más adelante. Comprobado: con la clave pública, leer responde 200; insertar, modificar y borrar responden 401; subir al bucket se rechaza por RLS; el asesor de seguridad no informa problemas.
- Pruebas: revisión de código de T01 y T05 aprobada; prueba automática de T12 aprobada; falta la prueba manual en el navegador.
- Specs del catálogo actualizados: sin stock, Google Fonts y Supabase; se borraron requisitos y decisiones obsoletos.
- Archivos existentes: `AGENTS.md`, `CLAUDE.md`, `memory.md`, `.gitignore`, `docs/` (01 a 10, `CONSTITUCION.md`, `IDENTIDAD-MARCA.md`, `PROMPTS.md`, `graficos.html`), `marca/`, `assets/img/`, `specs/` (`001-catalogo`, `002-Base Datos`, `003-Formulario`).

### Decisiones importantes
- Seguir el proceso SDD.
- Documentar las funcionalidades antes de programarlas.
- Probar el código antes de marcar una tarea como completada.
- Registrar los cambios y resultados reales.
- Colores: azul oscuro (#0c1b54), amarillo mostaza (#fbc51d), blanco (#FFFFFF) y negro (#000000) para textos.
- Tipografías: Montserrat para títulos y Roboto para textos.
- `docs/CONSTITUCION.md` define 8 principios y prevalece si otro documento la contradice.
- `AGENTS.md` tiene las instrucciones generales para cualquier IA; `CLAUDE.md` importa la constitución y `AGENTS.md`.
- Las pruebas, por ahora, son manuales en el navegador (ver sección 5 de `AGENTS.md`).
### Documentación realizada (27/10/2026)
- Se creó `docs/CONSTITUCION.md`.
- Se reescribieron `AGENTS.md` y `CLAUDE.md`, conservando sus reglas anteriores.

