$("#r0").click(function() {
    Swal.fire({
        icon: 'info',
        title: 'Atención usuario',
        text: 'Ventana es una abertura que se deja en una pared para permitir el ingreso de luz y la ventilación. Las ventanas se encuentran a una altura más o menos elevada del suelo y suelen presentar un vidrio para que, cuando estén cerradas, no pueda ingresar nada del exterior.',
    });
});

$("#r1").click(function() {
    Swal.fire({
        title: '¿Sabes como elaborar la dieta BARF para tu mascota?',
        textAlign: 'right',
        icon: 'question',
        iconColor: '#eea025',
        position: 'center',
        confirmButtonColor: '#eea025',
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Aceptar',
        animation: true,
        customClass: 'recuerde1',
        showClass: {
            popup: 'animated bounceIn',
        },
        hideClass: {
            popup: 'animated bounceOut',
        },
        showCloseButton: true,
        html: '<strong>Cantidades de ingredientes en la dieta BARF</strong> ' +
            '<br><br><br>' +
            '<p class=""> -Para elaborar un plan de dieta BARF para perros es necesario que el 80% de la ingesta de comida se componga de proteína de origen animal. Mientras que el 20% restante estará formado por frutas y verduras</p>' +
            '<br>' +
            '<p class=""> - La dieta BARF puede ser apta para perros de todas las edades, pero si la mascota se ha alimentado normalmente de pienso es fundamental hacer una transición progresiva. De esta forma, el perro se adaptará a la ingesta de los alimentos en crudo y podremos valorar cómo responde su sistema digestivo a este tipo de comida. </p>' 
    });
});

$("#r2").click(function() {
    Swal.fire({
        icon: 'info',
        title: '¿Sabes para qué sirve el maíz en la diesta BARF de tus mascotas?',
        showClass: {
            popup: 'animated zoomIn',
        },
        hideClass: {
            popup: 'animated zoomOut',
        },
        text: 'Los estudios muestran que el maíz para perros se digiere fácilmente cuando se procesa para dietas caninas, proporcionando niveles de nutrientes por encima del promedio.',
        footer: '<a href="https://definicion.de/suelo" target="blank">Leer más</a>'
    });
});

       
