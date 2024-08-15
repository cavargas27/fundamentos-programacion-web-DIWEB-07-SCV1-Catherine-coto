document.addEventListener('DOMContentLoaded', function() {
    // Obtener los detalles del curso y correo electrónico del usuario del localStorage
    const courseDetails = {
        title: 'Curso de Programación en JavaScript',
        instructor: 'Catherine Vargas',
        duration: '15 semanas',
        startDate: '10 de Agosto, 2024',
        userEmail: localStorage.getItem('userEmail') 
    };

    // Llenar los detalles del curso en el HTML
    const courseDetailsContainer = document.getElementById('course-details');
    courseDetailsContainer.innerHTML = `
        <h2>${courseDetails.title}</h2>
        <p><strong>Instructor:</strong> ${courseDetails.instructor}</p>
        <p><strong>Duración:</strong> ${courseDetails.duration}</p>
        <p><strong>Fecha de inicio:</strong> ${courseDetails.startDate}</p>
    `;

    // Simulación de envío de correo de confirmación
    sendConfirmationEmail(courseDetails.userEmail, courseDetails);
});

function sendConfirmationEmail(email, courseDetails) {
    console.log(`Enviando correo de confirmación a ${email}...`);
    console.log(`Detalles del curso:
    Título: ${courseDetails.title}
    Instructor: ${courseDetails.instructor}
    Duración: ${courseDetails.duration}
    Fecha de inicio: ${courseDetails.startDate}`);
    
    alert(`Correo de confirmación enviado a ${email}`);
}

function redirectToCourses() {
    window.location.href = 'mis-cursos.html';
}

function sendConfirmationEmail(email, courseDetails) {
    console.log(`Enviando correo de confirmación a ${email}...`);
    console.log(`Detalles del curso:
    Título: ${courseDetails.title}
    Instructor: ${courseDetails.instructor}
    Duración: ${courseDetails.duration}
    Fecha de inicio: ${courseDetails.startDate}`);
    
    alert(`Correo de confirmación enviado a ${email}`);

    // Limpiar el localStorage
    localStorage.removeItem('userEmail');
}

// Obtén el modal
var modal = document.getElementById("experienceModal");

// Obtén el botón que abre el modal
var btn = document.getElementById("openModalBtn");

// Obtén el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Obtén el botón de calificación dentro del modal
var calificarBtn = document.getElementById("calificarBtn");

// Cuando el usuario hace clic en el botón, abre el modal 
btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier parte fuera del modal, lo cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Cuando el usuario hace clic en el botón de calificación, muestra una alerta
calificarBtn.onclick = function() {
    alert("Calificación enviada");
}

