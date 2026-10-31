// Catálogo: vista ampliada de la tarjeta, elección de talle y consulta por WhatsApp.

const listaProductos = document.querySelector(".catalogo-lista");
const vistaProducto = document.getElementById("vista-producto");

function abrirVistaProducto(tarjeta) {
  const imagenTarjeta = tarjeta.querySelector(".tarjeta-producto-imagen");
  const imagenVista = document.getElementById("vista-producto-imagen");
  const titulo = tarjeta.querySelector(".tarjeta-producto-titulo").textContent;
  const enlaceConsulta = document.getElementById("vista-producto-consultar");

  // Si la imagen de la tarjeta no cargó, la vista se muestra sin imagen.
  imagenVista.hidden = !imagenTarjeta;

  if (imagenTarjeta) {
    imagenVista.src = imagenTarjeta.src;
    imagenVista.alt = imagenTarjeta.alt;
  }

  document.getElementById("vista-producto-titulo").textContent = titulo;
  document.getElementById("vista-producto-descripcion").textContent =
    tarjeta.querySelector(".tarjeta-producto-descripcion").textContent;

  enlaceConsulta.href = tarjeta.dataset.enlaceConsulta;
  vistaProducto.dataset.enlaceBase = tarjeta.dataset.enlaceConsulta;
  enlaceConsulta.setAttribute("aria-label", "Consultar por WhatsApp sobre " + titulo + " (se abre en otra pestaña)");

  vistaProducto.querySelectorAll('input[name="talle-producto"]').forEach(function (opcion) {
    opcion.checked = false;
  });
  document.getElementById("vista-producto-aviso").hidden = true;

  vistaProducto.showModal();
}

function elegirTalle(evento) {
  if (evento.target.name === "talle-producto") {
    document.getElementById("vista-producto-consultar").href =
      vistaProducto.dataset.enlaceBase + encodeURIComponent(" en talle " + evento.target.value);
    document.getElementById("vista-producto-aviso").hidden = true;
  }
}

function comprobarTalle(evento) {
  if (!vistaProducto.querySelector('input[name="talle-producto"]:checked')) {
    evento.preventDefault();
    document.getElementById("vista-producto-aviso").hidden = false;
    vistaProducto.querySelector('input[name="talle-producto"]').focus();
  }
}

if (listaProductos && vistaProducto) {
  listaProductos.addEventListener("click", function (evento) {
    const tarjeta = evento.target.closest(".tarjeta-producto");

    if (tarjeta) {
      abrirVistaProducto(tarjeta);
    }
  });

  vistaProducto.addEventListener("change", elegirTalle);
  document.getElementById("vista-producto-consultar").addEventListener("click", comprobarTalle);
  document.getElementById("vista-producto-cerrar").addEventListener("click", function () {
    vistaProducto.close();
  });

  // Un clic sobre el propio <dialog> es un clic en el fondo oscuro: el contenido lo cubre por dentro.
  vistaProducto.addEventListener("click", function (evento) {
    if (evento.target === vistaProducto) {
      vistaProducto.close();
    }
  });
}
