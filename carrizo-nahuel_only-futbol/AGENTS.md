# AGENTS.md — Only Futbol

Instrucciones para cualquier asistente de IA que trabaje en este proyecto.

## 1. Proyecto
Only Futbol es una tienda online de camisetas y productos de futbol. Es el Trabajo Final Integrador de Inteligencia Artificial. La versión actual es un sitio web estático: no hay backend ni base de datos todavía.

## 2. Qué leer antes de programar
Leer siempre, en este orden:
1. `docs/CONSTITUCION.md`: principios obligatorios. Si otro documento la contradice, prevalece la constitución.
2. `memory.md`: estado actual y decisiones tomadas.
3. `docs/08-TAREAS.md`: tareas del proyecto.

Leer según la tarea:
- Requisitos y alcance: `docs/01-CONTEXTO.md`, `docs/02-REQUERIMIENTOS.md`.
- Tecnologías y estructura: `docs/03-TECNOLOGIAS.md`, `docs/04-ARQUITECTURA.md`.
- Nombres y estilo de código: `docs/07-CONVENCIONES.md`.
- Pantallas y diseño: `docs/06-DISENO-UI.md`, `docs/IDENTIDAD-MARCA.md`.
- Productos y datos: `docs/05-DATOS.md`.
- Títulos, descripciones e imágenes: `docs/09-SEO.md`.
- Formularios, datos y secretos: `docs/10-SEGURIDAD.md`.
- Especificaciones de la funcionalidad en curso, si existen.

Si falta información o hay documentos que se contradicen, preguntar en lugar de suponer.

## 3. Ciclo SDD
Cada funcionalidad se desarrolla en este orden, y no se avanza al paso siguiente sin completar el anterior:
1. **spec.md**: qué debe hacer la funcionalidad y sus criterios de aceptación.
2. **clarificacion.md**: dudas, ambigüedades y respuestas del responsable.
3. **plan.md**: archivos a crear o modificar y decisiones técnicas.
4. **tasks.md**: lista de tareas pequeñas y comprobables.
5. Implementación: una tarea por vez.
6. **verificacion.md**: pruebas realizadas y resultados reales.

Si un requisito cambia, se actualiza primero la especificación y después el código.

La ubicación de estos archivos está pendiente de definir: preguntar al responsable antes de crearlos.

## 4. Cómo dividir y comprobar las tareas
- Cada tarea debe poder hacerse y probarse por separado, y tocar pocos archivos.
- Cada tarea tiene un criterio de comprobación concreto (por ejemplo: "el formulario muestra un error si el email está vacío").
- Se implementa una tarea por vez. Antes de pasar a la siguiente, se prueba y se registra el resultado.
- Una tarea se marca como terminada en `tasks.md` y en `docs/08-TAREAS.md` solo después de probarla.
- Al terminar una tarea, se actualiza "Estado actual" en `memory.md`.

## 5. Pruebas y compilación
Por ahora **no existen comandos de pruebas ni de compilación**: no hay `package.json`, scripts ni herramientas configuradas. El sitio no necesita compilarse.

Las pruebas son manuales y se hacen en el navegador:
- Abrir cada página y comprobar navegación, enlaces y botones.
- Comprobar el diseño desde 360 px de ancho (modo dispositivo del navegador), además de tablet y computadora.
- Recorrer la página con el teclado (Tab, Enter) y comprobar el foco visible.
- Probar los formularios con datos válidos e inválidos.
- Revisar la consola del navegador para detectar errores.
- Comprobar textos alternativos y contraste.

Si en el futuro se agregan scripts o herramientas, se documentan en esta sección con sus comandos reales. No usar comandos que no estén documentados aquí.

## 6. Protección de datos
- No incluir contraseñas, claves API, tokens ni datos privados en el código ni en la documentación.
- No crear, leer ni subir archivos `.env`.
- No exponer datos sensibles al navegador.
- Validar los datos de los formularios en el frontend. Cuando exista un backend, también en el servidor (`docs/10-SEGURIDAD.md`).
- No usar datos personales reales en ejemplos ni datos de prueba.

## 7. Evitar cambios destructivos
- No borrar, renombrar ni mover archivos sin autorización.
- No reemplazar contenido existente sin leerlo antes y comprobar su utilidad.
- No eliminar funcionalidades existentes sin autorización.
- No cambiar la identidad visual ni la estructura general sin autorización.
- No agregar tecnologías, frameworks ni dependencias que no estén en `docs/03-TECNOLOGIAS.md` sin consultar.
- No modificar archivos que la tarea no necesita.
- No ejecutar comandos que deshagan cambios o reescriban el historial de git sin autorización.

## 8. Explicar y ser honesto con los resultados
- Antes de un cambio importante, explicar qué se va a modificar y por qué, y esperar aprobación.
- Después de cada cambio, indicar qué archivos se modificaron y qué decisión se tomó.
- **No declarar que una prueba fue exitosa si no se ejecutó.** Si una prueba no pudo hacerse, decirlo e indicar el motivo.
- No inventar funcionalidades, tareas completadas, archivos ni resultados.
- Registrar los errores encontrados y sus correcciones en `verificacion.md`.
- Registrar los prompts relevantes en `docs/PROMPTS.md` y mantener actualizada la declaración de uso de IA.

## 9. Calidad
- HTML, CSS y JavaScript separados. Sin estilos ni scripts en línea.
- Diseño primero para celulares.
- HTML semántico, textos alternativos, buen contraste y navegación por teclado.
- Textos visibles en español, sin contenido de relleno.
- Sin enlaces rotos.
