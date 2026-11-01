# Clarificación — Base de datos

Hallazgos de la IA revisando la spec como QA y decisión del estudiante sobre cada uno (01/11/2026).

| ID | Hallazgo de la IA | Decisión del estudiante |
|---|---|---|
| C-01 | La spec no dice qué servicio se usa para la base de datos, y los documentos anteriores nombraban PostgreSQL o MySQL. | Usar Supabase. |
| C-02 | La spec no dice cómo llegan las imágenes al bucket (RF-06). | El responsable las sube desde Supabase Storage. |
| C-03 | RF-05 permite leer las tablas, pero la spec no dice si una categoría sin productos debe mostrarse en el sitio. | Se guarda en la base; el filtro del catálogo muestra solo las categorías con productos. |
| C-04 | Sin un enlace entre el producto y su imagen del bucket, el catálogo no puede mostrarla: ningún RF dice dónde se guarda la URL. | Guardar la URL pública de cada imagen|
| C-05 | RF-03 exige la descripción, pero el ejemplo de `docs/05-DATOS.md` la deja opcional. | La descripción es obligatoria; se corrigioo. |
| C-06 | La spec deja fuera administrar productos desde el sitio, pero no dice cómo se agregan o cambian los datos. | Desde el panel de Supabase, solo el responsable. |
