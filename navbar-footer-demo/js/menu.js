// Abre y cierra el menú de navegación en celulares.
const botonMenu = document.querySelector(".navbar-boton");
const menu = document.querySelector("#navbar-menu");

function alternarMenu() {
  const estaAbierto = botonMenu.getAttribute("aria-expanded") === "true";
  botonMenu.setAttribute("aria-expanded", String(!estaAbierto));
  menu.classList.toggle("abierto", !estaAbierto);
}

if (botonMenu && menu) {
  botonMenu.addEventListener("click", alternarMenu);
}
