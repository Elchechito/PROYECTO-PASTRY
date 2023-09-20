const botonesNav = document.querySelectorAll(".botonNav");

botonesNav.forEach((boton) => {
  boton.addEventListener("click", () => {
    // Remover la clase 'BotonClik' de todos los botones
    botonesNav.forEach((btn) => {
      btn.classList.remove("BotonClik");
    });

    // Agregar la clase 'BotonClik' solo al botón clickeado
    boton.classList.add("BotonClik");
  });
});

