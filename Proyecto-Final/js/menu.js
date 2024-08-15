document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

// selecciona el toggle switch
const toggleSwitch = document.getElementById('modoOscuroToggle');

// selecciona el icono de modo oscuro 
const modoIcon = document.getElementById('modoOscuroIcon');

// agrega un event listener para detectar cambios en el toggle switch
toggleSwitch.addEventListener('change', () => {
    // alterna entre las clases de los iconos sol/luna
    modoIcon.classList.toggle('fa-sun');
    modoIcon.classList.toggle('fa-moon');

    // alterna el modo oscuro en el body
    // la clase esta en la hoja de estilo css
    document.body.classList.toggle('modoOscuroBody');
});
