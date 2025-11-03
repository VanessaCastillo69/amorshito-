const contenedor = document.getElementById("corazones");

function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("corazon");
  corazon.innerHTML = "💖";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = (3 + Math.random() * 4) + "s";
  corazon.style.fontSize = (15 + Math.random() * 30) + "px";
  contenedor.appendChild(corazon);

  setTimeout(() => corazon.remove(), 7000);
}

setInterval(crearCorazon, 400);

// Navegar a la segunda página
const boton = document.getElementById("mensajeBtn");
if (boton) {
  boton.addEventListener("click", () => {
    window.location.href = "mensaje.html";
  });
}
