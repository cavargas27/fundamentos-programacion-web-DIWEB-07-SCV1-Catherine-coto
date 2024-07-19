//variables controladoras
var panorama, viewer, container, infospot;

//Obtener una referencia al contenedor donde se mostrara la escena 3D
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('../imagenes/musicStudio2.jpg');

// El valor de 50 es el radio del infospot. El infospot es un marcador interativo que aparece en la escena y
//puede mostrar informacion o contenido adicional cuando el usuario interactua con el (por ejemplo, al hacer clic o pasar el raton por encima).
//El radio del infospot determina el area de interaccion con el usuario
//Crea y agrega el primer infospot

//ZONA INTERACCION #1
var infospot1 = new PANOLENS.Infospot(33, PANOLENS.DataImage.Info);
//establecen las coordenadas x, y y x posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y= 0 y z=-500
infospot1.position.set(500 ,-56 , -328);
// -60 segundos indica que el texto pertenecera hasta que el usuario lo cierre  manualmente.
infospot1.addHoverText('La guitarra es un instrumento musical de cuerda pulsada, generalmente compuesto por un cuerpo resonante y un mástil sobre el que se encuentran fijadas las cuerdas. Existen varios tipos de guitarras, entre las más comunes se encuentran la guitarra acústica, la guitarra eléctrica y la guitarra clásica o española.');
infospot1.element.innerHTML = '<div style="background-color: rgba(0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">La guitarra es un instrumento musical de cuerda pulsada, generalmente compuesto por un cuerpo resonante y un mástil sobre el que se encuentran fijadas las cuerdas. Existen varios tipos de guitarras, entre las más comunes se encuentran la guitarra acústica, la guitarra eléctrica y la guitarra clásica o española.</div>';
panorama.add(infospot1);

// zona interaccion 2
//CAMBIEAR ESTE
var infospot2 = new PANOLENS.Infospot(33, PANOLENS.DataImage.Info);
//posicion en xyz sacada con el mapper.js activo
infospot2.position.set(500 ,161 , -143);
infospot2.addHoverText('Ride: Es un platillo más grande y pesado que se utiliza principalmente para mantener un ritmo constante. Tiene un sonido más sostenido y puede tocarse en varias áreas (cuerpo, borde, campana) para producir diferentes tonos. Es fundamental en géneros como el jazz y el rock.', -60);
infospot2.element.innerHTML = '<div syle="background-color: rgba(0,0,255,0.8); color:#fff; border-radius: 5px; padding: 10px; font-size:14px; width:200px;">Ride: Es un platillo más grande y pesado que se utiliza principalmente para mantener un ritmo constante. Tiene un sonido más sostenido y puede tocarse en varias áreas (cuerpo, borde, campana) para producir diferentes tonos. Es fundamental en géneros como el jazz y el rock.</div>';
panorama.add(infospot2);

//zona interaccion 3

var infospot3 = new PANOLENS.Infospot(33, PANOLENS.DataImage.Info);
infospot3.position.set(285 ,29 , -500);
infospot3.addHoverText('El estudio de musica ofrece una opción de procesamiento, almacenamiento y transmisión de medios para todos los materiales de audio y video.' -60);
//Insertar el reproductor de video de Youtube en el Infospot
//agregar el parametro para pantalla completa allowfullscreen
infospot3.element.innerHTML = `
    <div class = "" style="">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/8RKwo_fIdI0?si=L73aZlvI9R6O97Ph" ></iframe>
    </div>
`;
panorama.add(infospot3);

//ZONA INTERACCION #4
var infospot4= new PANOLENS.Infospot(33, PANOLENS.DataImage.Info);
//establecen las coordenadas x, y y x posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y= 0 y z=-500
infospot4.position.set(500 ,-45 , 65);
// -60 segundos indica que el texto pertenecera hasta que el usuario lo cierre  manualmente.
infospot4.addHoverText('Bombo: El tambor más grande, tocado con un pedal que acciona un sonido. Produce un sonido grave y potente.');
infospot4.element.innerHTML = '<div style="background-color: rgba(0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Bombo: El tambor más grande, tocado con un pedal que acciona un sonido. Produce un sonido grave y potente.</div>';
panorama.add(infospot4);

//ZONA INTERACCION #5
var infospot5= new PANOLENS.Infospot(33, PANOLENS.DataImage.Info);
//establecen las coordenadas x, y y x posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y= 0 y z=-500
infospot5.position.set(499 ,155 , 319);
// -60 segundos indica que el texto pertenecera hasta que el usuario lo cierre  manualmente.
infospot5.addHoverText('Hi-Hat: Consta de dos platillos montados uno sobre otro en un soporte especial con un pedal. Los hi-hats pueden tocarse abiertos, cerrados, o en cualquier punto intermedio, creando una amplia gama de sonidos. Son esenciales para marcar el ritmo y se usan en casi todos los géneros musicales.');
infospot5.element.innerHTML = '<div style="background-color: rgba(0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Hi-Hat: Consta de dos platillos montados uno sobre otro en un soporte especial con un pedal. Los hi-hats pueden tocarse abiertos, cerrados, o en cualquier punto intermedio, creando una amplia gama de sonidos. Son esenciales para marcar el ritmo y se usan en casi todos los géneros musicales.</div>';
panorama.add(infospot5);

//ZONA INTERACCION #6
var infospot6= new PANOLENS.Infospot(33, PANOLENS.DataImage.Info);
//establecen las coordenadas x, y y x posicion tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y= 0 y z=-500
infospot6.position.set(500 ,93 , 58);
// -60 segundos indica que el texto pertenecera hasta que el usuario lo cierre  manualmente.
infospot6.addHoverText('Toms: Tambores de tamaño medio que se montan en el soporte del bombo o en un soporte independiente. Los tamaños más comunes varían entre 8 y 13 pulgadas de diámetro, roducen un sonido más agudo y resonante.');
infospot6.element.innerHTML = '<div style="background-color: rgba(0, 0, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Toms: Tambores de tamaño medio que se montan en el soporte del bombo o en un soporte independiente. Los tamaños más comunes varían entre 8 y 13 pulgadas de diámetro, roducen un sonido más agudo y resonante.</div>';
panorama.add(infospot6);

// Zona de interacción 7
var infospot7 = new PANOLENS.Infospot(33, PANOLENS.DataImage.Info);
infospot7.position.set(-102, -60, -500);
infospot7.addHoverText('Piano', 60);

// audio
var audioElement = document.createElement('audio');
audioElement.controls = true;
audioElement.style.width = '750%';
audioElement.src = '../audios/audioPiano.mp3';

//contenedor para audio
var audioContainer = document.createElement('div');
audioContainer.style.textAlign = 'center';
audioContainer.appendChild(audioElement);

// Agregar audio
infospot7.element.appendChild(audioContainer);

panorama.add(infospot7);


// Agrega la panoramica al visor del contenedor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);

