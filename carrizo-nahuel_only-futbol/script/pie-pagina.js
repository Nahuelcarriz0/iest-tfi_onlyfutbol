// Pie de página: año actual.

function mostrarAnioActual() {
  const anio = document.getElementById("pie-pagina-anio");

  if (anio) {
    anio.textContent = String(new Date().getFullYear());
  }
}

mostrarAnioActual();
