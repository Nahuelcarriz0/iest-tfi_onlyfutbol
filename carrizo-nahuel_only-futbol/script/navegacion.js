// Navegación: menú del celular y enlace de la página activa.

const encabezado = document.querySelector(".encabezado");
const botonMenu = document.querySelector(".navegacion-boton");

function abrirMenu() {
  encabezado.classList.add("menu-abierto");
  botonMenu.setAttribute("aria-expanded", "true");
  botonMenu.setAttribute("aria-label", "Cerrar menú");
}

function cerrarMenu() {
  encabezado.classList.remove("menu-abierto");
  botonMenu.setAttribute("aria-expanded", "false");
  botonMenu.setAttribute("aria-label", "Abrir menú");
}

function alternarMenu() {
  if (encabezado.classList.contains("menu-abierto")) {
    cerrarMenu();
  } else {
    abrirMenu();
  }
}

function marcarEnlaceActual() {
  const enlaces = document.querySelectorAll(".navegacion-enlace");
  const paginaActual = window.location.pathname.split("/").pop() || "index.html";

  enlaces.forEach(function (enlace) {
    const paginaEnlace = enlace.getAttribute("href").split("/").pop();

    if (paginaEnlace === paginaActual) {
      enlace.setAttribute("aria-current", "page");
    }
  });
}

if (encabezado && botonMenu) {
  encabezado.classList.add("menu-disponible");
  botonMenu.addEventListener("click", alternarMenu);

  document.querySelectorAll(".navegacion-enlace").forEach(function (enlace) {
    enlace.addEventListener("click", cerrarMenu);
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && encabezado.classList.contains("menu-abierto")) {
      cerrarMenu();
      botonMenu.focus();
    }
  });
}

marcarEnlaceActual();
