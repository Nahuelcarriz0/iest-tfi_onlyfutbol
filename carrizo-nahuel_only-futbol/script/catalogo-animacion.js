// Catálogo: las tarjetas aparecen con una animación al entrar en pantalla.
// Con movimiento reducido, el CSS la cambia por un fundido sin desplazamiento.

function mostrarTarjetasVisibles(entradas, observador) {
  entradas.forEach(function (entrada) {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("tarjeta-visible");
      observador.unobserve(entrada.target);
    }
  });
}

// Se llama cuando las tarjetas ya están armadas (script/productos.js).
// Sin soporte, las tarjetas se muestran sin animación.
function observarTarjetasCatalogo() {
  const listaCatalogo = document.querySelector(".catalogo-lista");

  if (listaCatalogo && "IntersectionObserver" in window) {
    const observador = new IntersectionObserver(mostrarTarjetasVisibles, { threshold: 0.15 });

    listaCatalogo.classList.add("animacion-disponible");
    listaCatalogo.querySelectorAll(".tarjeta-producto").forEach(function (tarjeta) {
      observador.observe(tarjeta);
    });
  }
}
