document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
});

