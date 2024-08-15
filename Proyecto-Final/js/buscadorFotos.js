const data = {
    cursos: [
        { src: '../imagenes/c++.jpg', name: 'Programación con C + +' }, 
        { src: '../imagenes/curso5..jpg', name: 'Ciberseguridad' },
        { src: '../imagenes/curso1.png', name: 'Programación con Python' }, 
        { src: '../imagenes/curso6.png', name: ' Ciencia de Datos' },
        { src: '../imagenes/curso2.png', name: 'Desarrollo Web' }, 
        { src: '../imagenes/curso3..png', name: 'Bases de Datos' }, 
        { src: '../imagenes/curso4.png', name: 'Aplicaciones Web con React' }
    ],
    profesores: [
        { src: '../imagenes/profesor1.jpg', name: 'Sandra Vargas' }, 
        { src: '../imagenes/profesor2.jfif', name: 'Roberto Fonseca' },
        { src: '../imagenes/profesor3.jfif', name: 'Daniel Perez' }, 
        { src: '../imagenes/profesor4.png', name: 'Diego Calderón' },
        { src: '../imagenes/profesor5.jpeg', name: 'Jose Luis Brenes' }
    ],
    estudiantes: [
        { src: '../imagenes/estu1.jpg', name: 'Jacson Brown' }, 
        { src: '../imagenes/estu2.jfif', name: 'Daniela Salazar' },
        { src: '../imagenes/estu3.jpeg', name: 'Sebastian Cervantes' }, 
        { src: '../imagenes/estu4.jpeg', name: 'Patricia Fuentes' },
        { src: '../imagenes/estu5.jpg', name: 'Pablo Vargas' }
    ]
};

function updateGallery(category) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Clear previous results

    let items = [];
    if (category === 'cursos') {
        items = data.cursos;
    } else if (category === 'profesores') {
        items = data.profesores;
    } else if (category === 'estudiantes') {
        items = data.estudiantes;
    }

    items.forEach(item => {
        const container = document.createElement('div');
        container.className = 'gallery-item-container';

        // Crear el enlace para la lightbox
        const link = document.createElement('a');
        link.href = item.src;
        link.className = 'gallery-item-link';
        link.setAttribute('data-lightbox', 'gallery'); 

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.name;
        img.className = 'gallery-item';

        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = item.name;

        link.appendChild(img);
        container.appendChild(link);
        container.appendChild(caption);
        gallery.appendChild(container);
    });

    // Inicializar SimpleLightbox después de añadir las imágenes
    const lightbox = new SimpleLightbox('.gallery-item-link', {
        captionsData: 'alt',
        captionDelay: 250
    });
}

document.getElementById('categorySelect').addEventListener('change', function() {
    updateGallery(this.value);
});
