const formulario = document.getElementById("formulario-contacto");
        const popupSuccess = document.getElementById("popup-success");
        const popupError = document.getElementById("popup-error");
        const closePopupSuccess = document.getElementById("close-popup-success");
        const closePopupError = document.getElementById("close-popup-error");

        formulario.addEventListener("submit", function(event) {
            event.preventDefault();
            if (validarFormulario()) {
                mostrarPopup(popupSuccess);
            } else {
                mostrarPopup(popupError);
            }
        });

        closePopupSuccess.addEventListener("click", function() {
            ocultarPopup(popupSuccess);
        });

        closePopupError.addEventListener("click", function() {
            ocultarPopup(popupError);
        });

        function validarFormulario() {
            const nombre = document.getElementById("nombre").value;
            const apellido = document.getElementById("apellido").value;
            const dni = document.getElementById("dni").value;
            const email = document.getElementById("email").value;
            const telefono = document.getElementById("telefono").value;
            const tipoSeguro = document.getElementById("tipo-seguro").value;


            if (isNaN(dni)) {
                return false;
            }


            if (isNaN(telefono)) {
                return false;
            }

            if (nombre && apellido && dni && email && telefono && tipoSeguro) {
                actualizarValorSeguro(tipoSeguro);
                return true;
            }

            return false;
        }

        function actualizarValorSeguro(tipoSeguro) {
            const valorSeguro = document.getElementById("valor-seguro");
            switch (tipoSeguro) {
                case "basico":
                    valorSeguro.textContent = "$500";
                    break;
                case "intermedio":
                    valorSeguro.textContent = "$1000";
                    break;
                case "premium":
                    valorSeguro.textContent = "$1500";
                    break;
            }
        }

        function mostrarPopup(popup) {
            popup.style.display = "block";
        }

        function ocultarPopup(popup) {
            popup.style.display = "none";
        }