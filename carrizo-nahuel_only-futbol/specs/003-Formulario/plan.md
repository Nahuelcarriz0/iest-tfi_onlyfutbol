# Plan — Formulario de consulta

## 1. Qué se va a hacer

Un formulario en la página de consulta, con los estilos de la marca, y un script propio que revisa los campos, arma el mensaje y abre WhatsApp. El sitio no guarda ni envía nada: el visitante termina de enviar el mensaje desde WhatsApp.

## 2. Cómo se va a construir cada requisito

| Requisito | Cómo se va a construir |
|---|---|
| **RF-01** | Se agregan a `pages/consulta.html` los campos nombre y mensaje, cada uno con su etiqueta, y el botón de envío. Los estilos van en `styles/styles.css` y reutilizan los del catálogo. |
| **RF-02** | Al enviar el formulario, `script/consulta.js` abre en otra pestaña un enlace de `wa.me` con el número de la tienda, el mismo del catálogo. Los campos quedan escritos. |
| **RF-03** | El script quita los espacios del principio y del final, arma el texto "Hola, soy [nombre]. [mensaje]" y lo codifica para que los símbolos y los saltos de línea lleguen bien en el enlace. |
| **RF-04** | Antes de abrir WhatsApp, el script revisa los dos campos ya sin espacios. Si alguno queda vacío, muestra "Completá tu nombre y tu mensaje." y no abre nada. El aviso se oculta cuando el formulario se envía bien. |
