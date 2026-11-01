# Especificación — Formulario de consulta

**Estado:** borrador, pendiente de aprobación (01/11/2026).

## 1. Contexto

La página de consulta de Only Fútbol tiene un formulario para que un visitante escriba su consulta y la envíe por WhatsApp, el medio de contacto definido para el emprendimiento. Como el sitio no tiene backend, el formulario deja el mensaje listo en WhatsApp y el visitante termina de enviarlo desde ahí.

## 2. Historias de usuario

- **HU-01:** Como visitante, quiero escribir mi consulta en un formulario, para no tener que buscar el contacto de la tienda.
- **HU-02:** Como visitante, quiero que mi consulta se abra lista en WhatsApp, para enviarla sin volver a escribirla.
- **HU-03:** Como responsable de la tienda, quiero recibir el nombre y el mensaje de quien consulta, para saber con quién hablo y qué necesita.

## 3. Requisitos (formato EARS)

| ID | Requisito |
|---|---|
| RF-01 | El sistema debe mostrar en la página de consulta un formulario con los campos nombre y mensaje, y un botón de envío. |
| RF-02 | Cuando el visitante envía el formulario con los dos campos completos, el sistema debe abrir WhatsApp en otra pestaña, dirigido al número de la tienda. |
| RF-03 | Cuando el sistema abre WhatsApp, debe dejar escrito un mensaje con el nombre y la consulta del visitante. |
| RF-04 | Si el nombre o el mensaje están vacíos o tienen solo espacios, entonces el sistema debe mostrar un aviso y no abrir WhatsApp. |

## 4. Casos límite

- Un campo tiene solo espacios
- El mensaje tiene símbolos como `&` o `¿`, o saltos de línea 
- El nombre o el mensaje tienen espacios al principio o al final 

## 5. Fuera de alcance
- Guardar las consultas en la base de datos.

## 6. Criterios de finalización
- El enlace de WhatsApp abre el chat con el número de la tienda y el mensaje escrito.


