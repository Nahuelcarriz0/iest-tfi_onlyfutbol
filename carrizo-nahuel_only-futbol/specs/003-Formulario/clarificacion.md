# Clarificación — Formulario de consulta

Hallazgos de la IA revisando la spec como QA y decisión del estudiante sobre cada uno (01/11/2026).

| ID | Hallazgo de la IA | Decisión del estudiante |
|---|---|---|
| C-01 | RF-02 habla del "número de la tienda", pero no dice cuál es. | Usar el mismo número del catálogo, `543837510380`. |
| C-02 | RF-03 pide el nombre y la consulta, pero no dice cómo se arma el mensaje. | "Hola, soy [nombre]. [mensaje]". |
| C-03 | Los casos límite nombran los espacios al principio o al final, pero no dicen qué hacer con ellos. | Quitarlos antes de armar el mensaje. |
| C-04 | RF-04 pide un aviso, pero no dice qué texto tiene ni cuándo desaparece. | "Completá tu nombre y tu mensaje.", hasta que el formulario se envíe bien. |
| C-05 | La spec no dice si el nombre y el mensaje tienen un largo máximo. | Sin límite, porque es un formulario básico. |
| C-06 | La spec no dice qué pasa con los campos después de enviar. | Dejarlos escritos, por si el visitante vuelve y quiere corregir algo. |
| C-07 | RF-02 no contempla que el navegador bloquee la pestaña de WhatsApp. | No agregar un aviso, porque la pestaña se abre al tocar el botón y los navegadores suelen permitirlo. |
| C-08 | La Etapa 5 pide "los medios de contacto definidos", pero la spec no dice cuáles son. | Solo WhatsApp. |
| C-09 | La spec no tiene criterios de finalización, y sin ellos no está claro cuándo termina la funcionalidad. | ya agrege un criterio y es el enlace de WhatsApp abre el chat con el número de la tienda y el mensaje escrito. |
