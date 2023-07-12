var boton = document.getElementById("buttonForm");
var abierto = false;

var cajaForm = document.getElementById("s4contenedorform");



boton.addEventListener("click", function () {
    if (abierto) {
      boton.textContent = "Abrir";
      abierto = false;
      cajaForm.style.display = "none"
    } else if (!abierto) {
      boton.textContent = "Cerrar";
      abierto = true;
      cajaForm.style.display = "block"
    }
  });

