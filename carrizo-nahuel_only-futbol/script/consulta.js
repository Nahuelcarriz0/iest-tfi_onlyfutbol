// Consulta: arma el mensaje del formulario y lo abre en WhatsApp.

const NUMERO_WHATSAPP = "543837510380";

const formularioConsulta = document.getElementById("formulario-consulta");

function enviarConsulta(evento) {
  const nombre = document.getElementById("consulta-nombre").value.trim();
  const mensaje = document.getElementById("consulta-mensaje").value.trim();
  const aviso = document.getElementById("consulta-aviso");

  evento.preventDefault();

  // Un campo con solo espacios cuenta como vacío.
  aviso.hidden = Boolean(nombre && mensaje);

  if (!aviso.hidden) {
    return;
  }

  const texto = "Hola, soy " + nombre + ". " + mensaje;

  window.open("https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
}

if (formularioConsulta) {
  formularioConsulta.addEventListener("submit", enviarConsulta);
}
