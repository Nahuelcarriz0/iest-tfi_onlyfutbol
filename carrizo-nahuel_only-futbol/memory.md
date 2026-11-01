# Memory — Only Futbol

Última actualización: 31/10/2026.

## Información del proyecto
- Nombre: Only Futbol.
- Tipo: Tienda online de productos de futbol.
- Contexto: Trabajo Final Integrador de Inteligencia Artificial.

## Hechos comprobados

### Tecnología
- Tecnologías: HTML, CSS y JavaScript. Bootstrap es opcional, solo para diseño responsive.
- Base de datos: Supabase (PostgreSQL), proyecto `pyaeswztbsqlvcvprtxa`, con tablas `categorias` y `productos` (RLS de solo lectura) y bucket público `productos`. Claude Code se conecta por MCP (`.mcp.json`); el sitio lee con `fetch` y la clave pública.
- Servicios externos: Supabase, Google Fonts (tipografías) y WhatsApp (consultas).
- No existen comandos de pruebas ni de compilación: no hay `package.json`, scripts ni herramientas configuradas.
- Repositorio git en la carpeta superior, `iest-tfi_only-futbol/`; el proyecto está en `carrizo-nahuel_only-futbol/`.

### Estado actual
- Aplicación: en desarrollo. Páginas: `index.html` y `pages/` (`nosotros.html`, `catalogo.html`, `consulta.html`), con menú (Inicio, Nosotros, Catálogo, Consulta) y pie "ONLYFUTBOL" comunes. Estilos en `styles/styles.css`; scripts en `script/` (`navegacion.js`, `pie-pagina.js`, `productos.js`, `catalogo-animacion.js`, `catalogo-talles.js`). Estructura en `docs/04-ARQUITECTURA.md`.
- Funcionalidades: catálogo en curso en `pages/catalogo.html` (`specs/001-catalogo/`). T01 (buscador y lista de categorías) y T05 (16 tarjetas con borde y botón "Consultar" amarillos; sin precio, se consulta por WhatsApp al +54 3837 510380) implementadas el 28/10/2026; falta la prueba en el navegador. El 29/10/2026 se agregó a las tarjetas un efecto de zoom al pasar el mouse, al enfocar con el teclado y al tocar o presionar (solo CSS) y una animación de aparición al scrollear (`script/catalogo-animacion.js`); ambos sin probar en el navegador. También se dio estilo al buscador (lupa, texto de ejemplo) y al filtro (flecha propia); en computadora quedan en una fila. Sin probar en el navegador.
- Vista ampliada (T12, 31/10/2026): al tocar una tarjeta se abre un `<dialog>` con talles S a XXL y "Consultar", que abre WhatsApp con producto y talle. Probada con Chrome sin ventana sobre una copia (360 y 1184 px); falta la prueba manual del responsable (táctil, Esc, Tab y WhatsApp real).
- Catálogo con Supabase (T13, 31/10/2026): las tarjetas, el buscador, el filtro, el contador y los mensajes funcionan con `script/productos.js`. Prueba automática aprobada; falta la prueba manual. Las imágenes se cargan desde el bucket `productos` (01/11/2026): 16 productos con su URL en `imagen_url`, comprobado en Chrome sin ventana; falta la prueba manual. La carpeta `assets/img/` se borró a pedido del responsable (01/11/2026); sigue en el historial de git.
- Supabase se sacó de `specs/001-catalogo/` a pedido del responsable (31/10/2026) y se va a documentar más adelante. Comprobado ese día: con la clave pública, leer responde 200; insertar, modificar y borrar responden 401; subir al bucket se rechaza por RLS; el asesor de seguridad no informa problemas.
- Pruebas: revisión de código de T01 y T05 aprobada; prueba automática de T12 aprobada; falta la prueba manual en el navegador.
- Specs del catálogo actualizados el 29/10/2026: sin stock, Google Fonts y Supabase; se borraron requisitos y decisiones obsoletos.
- Archivos existentes: `AGENTS.md`, `CLAUDE.md`, `memory.md`, `.gitignore`, `docs/` (01 a 10, `CONSTITUCION.md`, `IDENTIDAD-MARCA.md`), `marca/`, `specs/001-catalogo/`.

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

## Decisiones pendientes
- Consigna del TP4: no está en el proyecto; falta incorporarla para revisar su cumplimiento.
- Funcionalidades a desarrollar primero: propuestas catálogo y tarjetas, detalle de producto y contacto con formulario validado; no confirmadas.

## Problemas pendientes
- `docs/06-DISENO-UI.md` y `marca/PALETA.md` tienen una paleta distinta o incompleta. `docs/IDENTIDAD-MARCA.md` ya se actualizó (27/10/2026).
- `docs/09-SEO.md` menciona Angular y la página "Equipos".
- `docs/06-DISENO-UI.md` describe páginas que no existen (Equipos, Login, Admin).
- Todas las tareas de `docs/08-TAREAS.md` figuran sin marcar, aunque la identidad de marca y el público ya están definidos.
- Los nombres de las imágenes están en mayúsculas; `docs/07-CONVENCIONES.md` pide minúsculas.
- Faltan `README.md`, `docs/PROMPTS.md` y la declaración de uso de IA.
- No existe el logo ni recursos gráficos.
