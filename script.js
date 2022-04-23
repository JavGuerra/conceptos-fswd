/* ----- Vanilla JS ----- */

/* Obtención de elementos */

const h = document.getElementById("hamburguesa");
const m = document.getElementById("menu");
const s = document.getElementById("subir");

/* Asignación de eventos */

h.onclick = hamburguesa;
s.onclick = subir;
window.onresize = responsive;
window.onscroll = boton;

/* Funciones */

// Muestra u oculta el Menú de la página
function hamburguesa() {
  // Animación del botón de hamburguesa
  h.classList.toggle("cambio");
  // Visualización del Menú
  if (m.style.display === "block") {
    m.style.display = "none"; // Oculto
  } else {
    m.style.display = "block"; // Visible
  }
  // Cambia el atributo aria-expanded según el estado del Menú
  h.setAttribute(
    "aria-expanded",
    h.getAttribute("aria-expanded") === true ? false : true
  );
}

// Sube al inicio de la página con scroll progresivo suave
function subir() {
  // Posición del scroll vertical respecto al inicio de la página
  let t = document.documentElement.scrollTop;
  if (t > 0) {
    // Si no está en el inicio...
    // Animación de scroll
    window.requestAnimationFrame(subir); // Recursivo
    // Ir arriba a velocidad decreciente
    window.scrollTo(0, t - t / 10);
  }
}

// Visualiza u oculta el Menú según resolución
function responsive() {
  // Anchura de la ventana
  let ancho = window.innerWidth;
  // Visualización del Menú
  if (ancho > 767) {
    m.style.display = "block"; // Visible
    h.setAttribute("aria-expanded", true); // Accesibilidad
  } else {
    // Si '.cambio' está presente, se quita para cerrar las aspas
    if (h.classList.contains("cambio")) {
      h.classList.remove("cambio");
    }
    m.style.display = "none"; // Oculto
    h.setAttribute("aria-expanded", false); // Accesibilidad
  }
}

// Muestra u oculta el botón Subir según posición en el scroll
function boton() {
  // Posición del scroll vertical respecto al inicio de la página
  let t = document.documentElement.scrollTop;
  if (t > 200) {
    // Si estamos al menos a 200px del inicio...
    s.style.transform = "scale(1)"; // Visible
  } else {
    // Si no...
    s.style.transform = "scale(0)"; // Oculto
  }
}
