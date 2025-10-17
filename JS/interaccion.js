
// Esperar a que la página cargue
document.addEventListener("DOMContentLoaded", function () {
  // Mensaje de bienvenida con animación
  const mensaje = document.createElement("div");
  mensaje.textContent = "🌎 Bienvenido a la página de Naturaleza 🌿";
  mensaje.classList.add("alert", "alert-info", "text-center", "mt-3");
  document.querySelector(".container").prepend(mensaje);

  setTimeout(() => {
    mensaje.style.transition = "opacity 1s";
    mensaje.style.opacity = "0";
    setTimeout(() => mensaje.remove(), 1000);
  }, 4000);

  // Botón para cambiar color de fondo
  const botonColor = document.createElement("button");
  botonColor.textContent = "Cambiar color de fondo 🌈";
  botonColor.classList.add("btn", "btn-success", "mt-4");
  document.querySelector(".text-center.mt-4").appendChild(botonColor);

  const colores = ["#e3f2fd", "#e8f5e9", "#fff3e0", "#fce4ec"];
  let indice = 0;

  botonColor.addEventListener("click", function () {
    document.body.style.backgroundColor = colores[indice];
    indice = (indice + 1) % colores.length;
  });

  // Agregar interacción a las imágenes
  const imagenes = document.querySelectorAll(".row img");
  imagenes.forEach((img) => {
    img.addEventListener("click", function () {
      alert(`📸 Estás viendo: ${img.alt}`);
    });
  });
});
