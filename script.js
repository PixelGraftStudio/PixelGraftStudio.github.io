document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.getElementById("formulario");

    if (formulario) {
        formulario.addEventListener("submit", function (event) {
            event.preventDefault();

            let nombre = document.getElementById("nombre").value.trim();
            let fecha = document.getElementById("fecha").value;
            let lugar = document.getElementById("lugar").value;
            let cantidad = document.getElementById("cantidad").value;
            let categoria = document.getElementById("categoria").value;
            let metodoPago = document.querySelector("input[name='pago']:checked");
            let terminos = document.getElementById("terminos").checked;

            if (!nombre || !fecha || !lugar || !cantidad || !categoria || !metodoPago || !terminos) {
                alert("Por favor, completa todos los campos y acepta los términos y condiciones.");
                return;
            }

            let datosCompra = {
                nombre: nombre,
                fecha: fecha,
                lugar: lugar,
                cantidad: cantidad,
                categoria: categoria,
                metodoPago: metodoPago.value
            };

            sessionStorage.setItem("datosCompra", JSON.stringify(datosCompra));
            window.location.href = "confirmacion.html";
        });
    }
});
