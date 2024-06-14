function togglePassword() {
    var passwordInput = document.getElementById("in-txt-pass");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}
document.getElementById("btn-login").addEventListener("click", login);

function validation_alert(ptext) {
    Swal.fire({
        icon: "error",
        title: " ",
    
        confirmButtonText: "Intentar de nuevo",
        text: ptext,
        confirmButtonColor: "#415A77",
    });
}


function login() {
    let user_input = document.getElementById("in-txt-user").value;
    let pass_input = document.getElementById("in-txt-pass").value;
    let username = "cenfo";
    let password = "123";
    let input = [user_input, pass_input];
    let input_id = ["in-txt-user", "in-txt-pass"];
    let error_count = 0;
    let text = "";

    for (let i = 0; i < input.length; i++) {
        document.getElementById(input_id[i]).classList.remove("error");
        if (input[i] == "") {
            validation_alert(text);
            document.getElementById(input_id[i]).classList.add("error");
            error_count++;
        }
    }

    if (error_count == 0) {
        if (user_input == username && pass_input == password) {
            Swal.fire({
                icon: "success",
                title: "",
                showConfirmButton: false,
                timer: 3500,
                html: '<iframe src="https://lottie.host/embed/e763a188-bd20-48d8-ab08-b0ba67cc4b9f/d4esV87KiR.json"></iframe><br><br><p>Un momento!</p>',
            }).then(() => {
                window.location.href = "landingPage.html";
            });
        } else {
            text = "Usuario o contraseña incorrecta";
            validation_alert(text);
        }
    }
}

// Selecciona un elemento del DOM con la clase CSS "animacion2" y lo almacena en la variable anima.
let anima = document.querySelector(".animacion2");
// Carga la animacion utilizando la funcion loadAnimation de la biblioteca Bodymovin
let animation = bodymovin.loadAnimation({
    // Es el contenedor donde se muestra la animacion, que en este caso es el elemento llamado anima
    container: anima,
    path: "https://lottie.host/59ec89b9-2a99-46df-9e3f-82e12e849ffc/ypyubptrro.json",
    renderer: "svg",
    loop: false,
    autoplay: false,
});

// En la funcion click se llama al metodo playSegment() en la animacion, 
// este metodo reproduce la animacion desde el fotograma 0 hasta el fotograma 150, y el segundo argumento (true) indica si la animacion desde reproducirse en bucle.
anima.addEventListener("click", function() {
    animation.playSegments([0, 150], true);
});

// Añadir el evento click al botón de login para reproducir la animación
document.getElementById("btn-login").addEventListener("click", function() {
    animation.playSegments([0, 150], true);
});
