document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, rellena todos los campos.';
    } else if (username === 'cenfo' && password === '123') {
        errorMessage.textContent = '';
        alert('Inicio de sesión exitoso');
        window.location.href = 'dashboard.html'; 
    } else {
        errorMessage.textContent = 'Credenciales incorrectas.';
    }
});


const loginButton = document.querySelector('.btn');

// Agrega un evento de clic al botón
loginButton.addEventListener('click', function(event) {
    event.preventDefault();

    // Añade la clase de animación al botón
    loginButton.classList.add('pulse-animation');

    // Elimina la clase después de que la animación haya terminado
    setTimeout(() => {
        loginButton.classList.remove('pulse-animation');
    }, 600); 
});


document.getElementById('btn-login').addEventListener('click', function() {
    window.location.href = "landingPage.html"; 
});
