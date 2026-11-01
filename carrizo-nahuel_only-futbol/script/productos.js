// Catálogo: lee los productos de Supabase, arma las tarjetas, busca y filtra.
// La clave es pública: la seguridad de los datos depende de RLS (docs/10-SEGURIDAD.md).

const URL_SUPABASE = "https://pyaeswztbsqlvcvprtxa.supabase.co";
const CLAVE_PUBLICA_SUPABASE = "sb_publishable_5Has8xMUUBFRoqkAzl-8Mg_Gla6HsZZ";
const URL_IMAGENES = URL_SUPABASE + "/storage/v1/object/public/productos/";
const NUMERO_WHATSAPP = "543837510380";

const catalogoLista = document.querySelector(".catalogo-lista");
const catalogoContador = document.getElementById("catalogo-contador");
const catalogoMensaje = document.getElementById("catalogo-mensaje");
const buscadorProductos = document.getElementById("buscador-productos");
const filtroCategoria = document.getElementById("filtro-categoria");

function normalizarTexto(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

async function leerTabla(consulta) {
  const respuesta = await fetch(URL_SUPABASE + "/rest/v1/" + consulta, {
    headers: { apikey: CLAVE_PUBLICA_SUPABASE }
  });

  if (!respuesta.ok) {
    throw new Error("Supabase respondió con el estado " + respuesta.status);
  }

  return respuesta.json();
}

function descartarProductosIncorrectos(productos, categorias) {
  const idsCategorias = new Set(categorias.map(function (categoria) {
    return categoria.id;
  }));
  const idsProductos = new Set();

  return productos.filter(function (producto) {
    const esCorrecto = typeof producto.nombre === "string" && producto.nombre.trim() !== ""
      && !idsProductos.has(producto.id)
      && idsCategorias.has(producto.categoria_id);

    if (!esCorrecto) {
      console.warn("Producto descartado por datos incorrectos:", producto);
    }

    idsProductos.add(producto.id);
    return esCorrecto;
  });
}

// Solo se aceptan imágenes del bucket "productos" de Supabase.
function obtenerRutaImagen(imagenUrl) {
  if (typeof imagenUrl !== "string" || imagenUrl.includes("..")) {
    return null;
  }

  return imagenUrl.startsWith(URL_IMAGENES) ? imagenUrl : null;
}

function crearRecuadroSinImagen(nombre) {
  const recuadro = document.createElement("div");

  recuadro.className = "tarjeta-producto-sin-imagen";
  recuadro.textContent = nombre;
  return recuadro;
}

function crearImagenTarjeta(producto) {
  const ruta = obtenerRutaImagen(producto.imagen_url);

  if (!ruta) {
    return crearRecuadroSinImagen(producto.nombre);
  }

  const imagen = document.createElement("img");

  imagen.className = "tarjeta-producto-imagen";
  imagen.src = ruta;
  imagen.alt = producto.nombre;
  imagen.loading = "lazy";
  imagen.addEventListener("error", function () {
    imagen.replaceWith(crearRecuadroSinImagen(producto.nombre));
  });
  return imagen;
}

function crearTarjeta(producto) {
  const tarjeta = document.createElement("li");
  const titulo = document.createElement("h2");
  const descripcion = document.createElement("p");
  const boton = document.createElement("button");
  const mensaje = "Hola, quiero consultar por la " + producto.nombre;

  tarjeta.className = "tarjeta-producto";
  tarjeta.dataset.categoria = String(producto.categoria_id);
  tarjeta.dataset.nombre = normalizarTexto(producto.nombre);
  tarjeta.dataset.enlaceConsulta = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensaje);

  titulo.className = "tarjeta-producto-titulo";
  titulo.textContent = producto.nombre;

  descripcion.className = "tarjeta-producto-descripcion";
  descripcion.textContent = producto.descripcion;

  boton.className = "tarjeta-producto-boton";
  boton.type = "button";
  boton.textContent = "Ver más";
  boton.setAttribute("aria-haspopup", "dialog");
  boton.setAttribute("aria-label", "Ver más sobre " + producto.nombre);

  tarjeta.append(crearImagenTarjeta(producto), titulo, descripcion, boton);
  return tarjeta;
}

// Solo se ofrecen las categorías que tienen productos.
function completarFiltro(categorias, productos) {
  categorias.forEach(function (categoria) {
    const tieneProductos = productos.some(function (producto) {
      return producto.categoria_id === categoria.id;
    });

    if (tieneProductos) {
      const opcion = document.createElement("option");

      opcion.value = String(categoria.id);
      opcion.textContent = categoria.nombre;
      filtroCategoria.append(opcion);
    }
  });
}

function mostrarMensaje(texto) {
  catalogoMensaje.textContent = texto;
  catalogoMensaje.hidden = false;
}

function aplicarBusquedaYFiltro() {
  const busqueda = normalizarTexto(buscadorProductos.value);
  const categoria = filtroCategoria.value;
  let cantidad = 0;

  catalogoLista.querySelectorAll(".tarjeta-producto").forEach(function (tarjeta) {
    const coincide = tarjeta.dataset.nombre.includes(busqueda)
      && (categoria === "todas" || tarjeta.dataset.categoria === categoria);

    tarjeta.hidden = !coincide;
    cantidad += coincide ? 1 : 0;
  });

  catalogoContador.textContent = cantidad === 1 ? "Se muestra 1 producto" : "Se muestran " + cantidad + " productos";
  catalogoMensaje.hidden = cantidad > 0;

  if (cantidad === 0) {
    mostrarMensaje("No se encontraron productos");
  }
}

async function cargarCatalogo() {
  try {
    const [categorias, productosLeidos] = await Promise.all([
      leerTabla("categorias?select=id,nombre&order=id"),
      leerTabla("productos?select=id,nombre,descripcion,imagen_url,categoria_id&order=id")
    ]);
    const productos = descartarProductosIncorrectos(productosLeidos, categorias);

    catalogoContador.textContent = "";

    if (productos.length === 0) {
      mostrarMensaje("Por el momento no hay productos disponibles");
      return;
    }

    catalogoLista.append(...productos.map(crearTarjeta));
    completarFiltro(categorias, productos);
    observarTarjetasCatalogo();
    aplicarBusquedaYFiltro();
    buscadorProductos.addEventListener("input", aplicarBusquedaYFiltro);
    filtroCategoria.addEventListener("change", aplicarBusquedaYFiltro);
  } catch (error) {
    console.error("No se pudo leer el catálogo:", error);
    catalogoContador.textContent = "";
    mostrarMensaje("No se pudieron cargar los productos. Intentá de nuevo más tarde.");
  }
}

cargarCatalogo();
