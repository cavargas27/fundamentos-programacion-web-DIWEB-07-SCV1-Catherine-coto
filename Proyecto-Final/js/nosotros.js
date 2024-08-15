'use extrict';

window.addEventListener('load', init, false);

function init() {
    let email = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let alerta = document.getElementById('mensajeAlert');

    btnEnviar.onclick = function() {
        email = inscriptionTxt.value;

        if (email === '') {
            alerta.textContent = 'El campo email esta vacío';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else if (expressionEmail.test(email) === false) {
            alerta.textContent = 'Email invalido';
            alerta.classList.add('alertaRoja');
            alerta.classList.remove('alertaVerde');
        } else {
            alerta.textContent = 'Su registro fue exitoso';
            alerta.classList.add('alertaVerde');
            alerta.classList.remove('alertaRoja');

            //service ID/template ID/ID form/public key cuenta
            //el id del formulario es #form
            //emailjs.sendForm('service_x5asf6h', 'template_hsp11hl', '#inscription', 'wptpEuD87H_TTMDE8');
            emailjs.sendForm('service_fp2hl18', 'template_hsp11hl', '#inscription', 'wptpEuD87H_TTMDE8');
            cleanInputs();
        }

    }

    function cleanInputs() {
        inscriptionTxt.value = '';
    }
}

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.forEach((slide, idx) => {
        slide.classList.remove('active');
        if (idx === currentIndex) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the carousel
showSlide(currentIndex);

//funcion btn academias
document.getElementById('academias-btn').addEventListener('click', function() {
    window.location.href = 'academias.html'; // Cambia 'pagina_de_academias.html' por la URL de tu página de academias
});

//ligthbox img
var modal = document.getElementById("modal1");
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var cerrar = document.getElementsByClassName("close")[0];

cerrar.onclick = function() {
    modal.style.display = "none";
}



