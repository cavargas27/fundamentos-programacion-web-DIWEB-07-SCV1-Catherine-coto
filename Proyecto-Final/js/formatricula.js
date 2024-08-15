// Función para validar el formulario y mostrar alertas
function validarFormulario(event) {
    event.preventDefault(); 

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const metodoPago = document.getElementById("metodoPago").value.trim();
  
    if (nombre === "" || email === "" || telefono === "" || direccion === "" || metodoPago === "") {
        alert("Error al matricularse. Por favor, complete todos los campos.");
    } else {
        // Guardar el correo electrónico en localStorage
        localStorage.setItem("userEmail", email);
        
        alert("Su matrícula fue exitosa.");
        // Redirigir a la página de confirmación
        window.location.href = 'confirmatricula.html'; 
    }
}

// Agregar evento al botón de confirmar matrícula
document.getElementById("matriculaForm").addEventListener("submit", validarFormulario);
