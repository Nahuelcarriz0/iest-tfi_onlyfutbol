# Constitución — Only Fútbol

Principios que guían el desarrollo de Only Fútbol. Toda funcionalidad, cambio o revisión debe cumplirlos. Si un principio cambia, se actualiza este documento antes que el código.

## 1. Tecnología sencilla y documentada
La versión actual se desarrolla con HTML5, CSS3 y JavaScript, con control de versiones en Git y GitHub. Bootstrap es opcional y solo puede usarse para el diseño responsive, según `docs/03-TECNOLOGIAS.md`. El catálogo lee sus datos de Supabase (PostgreSQL) y sus imágenes se guardan en Supabase Storage. Los servicios externos en uso son Google Fonts, para las tipografías, y WhatsApp, para las consultas.

**Se comprueba:** el proyecto no incluye frameworks, dependencias ni servicios que no estén documentados y justificados en `docs/03-TECNOLOGIAS.md`.

## 2. Identidad visual consistente
La interfaz respeta la identidad de Only Fútbol: azul oscuro `#0c1b54`, amarillo mostaza `#fbc51d`, blanco `#FFFFFF` y negro `#000000` para textos. Se usa Montserrat para títulos y elementos destacados, y Roboto para los textos generales. El estilo es deportivo, ordenado y fácil de usar.

**Se comprueba:** los colores y las tipografías están definidos una sola vez en `styles/styles.css` (por ejemplo, como variables CSS) y no se usan colores de marca fuera de esa paleta.

## 3. Código organizado y separado
HTML define la estructura, CSS los estilos y JavaScript el comportamiento. Los archivos, las clases y las variables tienen nombres descriptivos, en minúsculas y con guiones en los nombres de archivo, según `docs/07-CONVENCIONES.md`.

**Se comprueba:** no hay estilos ni scripts en línea, ni archivos duplicados o innecesarios, y la estructura coincide con `docs/04-ARQUITECTURA.md`.

## 4. Español para el usuario
Todo texto visible (contenido, botones, mensajes de error y títulos de página) está en español. La documentación del proyecto también se escribe en español.

**Se comprueba:** ninguna página muestra texto de ejemplo, de relleno o en otro idioma.

## 5. Accesible y adaptable desde el celular
El diseño se hace primero para celulares y se adapta a tablets y computadoras. Usa HTML semántico, textos alternativos descriptivos, buen contraste y navegación por teclado.

**Se comprueba:** cada página funciona desde 360 px de ancho sin scroll horizontal, todas las imágenes tienen `alt` y todos los elementos interactivos se pueden usar con el teclado y tienen el foco visible.

## 6. Seguridad desde el inicio
El repositorio no contiene contraseñas, claves, tokens ni datos privados, y el archivo `.env` no se sube. Los datos de los formularios se validan antes de usarse. En Supabase, las tablas tienen RLS con permiso solo de lectura para el público y la clave `service_role` nunca se usa en el navegador, según `docs/10-SEGURIDAD.md`.

**Se comprueba:** existe un `.gitignore` que excluye `.env`, no hay secretos en el código, RLS está activo en las tablas de Supabase y cada formulario rechaza datos inválidos con un mensaje claro.

## 7. Especificar, probar y registrar
Cada funcionalidad sigue el proceso SDD: `spec.md`, `clarificacion.md`, `plan.md`, `tasks.md` y `verificacion.md`. Se implementa una tarea por vez y ninguna se marca como terminada sin probarla.

**Se comprueba:** cada funcionalidad tiene su `verificacion.md` con los resultados reales de las pruebas, y las tareas marcadas en `docs/08-TAREAS.md` corresponden a algo probado.

## 8. Uso responsable de la inteligencia artificial
La IA es una herramienta de apoyo para consultar, proponer y revisar. El código generado se lee, se entiende y se prueba antes de incorporarlo. La IA no inventa funcionalidades, tareas completadas ni resultados de pruebas.

**Se comprueba:** los prompts relevantes están registrados en `docs/PROMPTS.md`, la declaración de uso de IA está actualizada y los cambios importantes tienen sus decisiones explicadas.
