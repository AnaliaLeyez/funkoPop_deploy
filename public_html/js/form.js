function validarFormulario() {
        const archivos = document.getElementById('imagenes').files;
        const mensajeError = document.getElementById('mensaje-error');
        
    for (let i = 0; i < archivos.length; i++) {
        const archivo = archivos[i];
        const extension = archivo.name.split('.').pop().toLowerCase();

        if (extension !== 'jpg' && extension !== 'png' && extension!='webp') {
            mensajeError.innerHTML = 'Solo se permiten archivos .JPG, .PNG y .webp';
            return false; // Detener el envío del formulario
        }
    }
    // Restablecer el mensaje de error si no hay problemas
    mensajeError.innerHTML = '';
    return true; // Permitir el envío del formulario
}

// function validateForm() {
//     const checkbox = document.getElementById("agreeTerm");
//     const errorMessage = document.getElementById("register_errorMessage");

//     if (checkbox.checked) {
//         // El checkbox está seleccionado, puedes enviar el formulario
//         document.getElementById("registerForm").submit();
//     } else {
//         // El checkbox no está seleccionado, muestra un mensaje de error
//         errorMessage.textContent = "Para registrarte debés aceptar los Términos y Condiciones.";
//     }
// }

document.getElementById("registerForm").addEventListener("submit", function(event) {
    const checkbox = document.getElementById("agreeTerm");
    const errorMessage = document.getElementById("register_errorMessage");

    if (!checkbox.checked) {
        errorMessage.textContent = "Por favor, acepta los Términos y Condiciones.";
        event.preventDefault();
    }
});