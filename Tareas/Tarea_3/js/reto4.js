function showCourseInfo() {
    const select = document.getElementById('courseSelect');
    const description = document.getElementById('courseDescription');
    const img = document.getElementById('courseImage');
    const value = select.value;

    if (value === 'Curso de Programación Web') {
        description.innerHTML = '<p>Curso de Programación Web: Aprende los fundamentos del desarrollo web en este curso integral que cubre HTML, CSS y JavaScript. Descubre cómo estructurar y diseñar sitios web atractivos y funcionales, además de agregar interactividad mediante la programación en JavaScript.</p>';
        img.src = '../imagenes/desarrolloweb.jpg';
    } else if (value === 'Curso de Data Science') {
        description.innerHTML = '<p>Curso de Data Science: El curso de Data Science está diseñado para proporcionar una comprensión integral de los conceptos y técnicas fundamentales del análisis de datos. A través de una combinación de teoría y práctica, los estudiantes aprenderán a manejar grandes volúmenes de datos, aplicar métodos estadísticos y utilizar herramientas avanzadas para extraer información valiosa.</p>';
        img.src = '../imagenes/datascience.jpg';
    } else if (value === 'Curso de Marketing Digital') {
        description.innerHTML = '<p>Curso de Marketing Digital: El curso de Marketing Digital está diseñado para proporcionar una comprensión profunda de las estrategias, herramientas y técnicas utilizadas para promover productos y servicios en el entorno digital. A través de módulos teóricos y prácticos, los estudiantes aprenderán a desarrollar campañas efectivas, analizar resultados y optimizar su presencia en línea.</p>';
        img.src = '../imagenes/markkdigital.jpg';
    } else {
        description.innerHTML = '<p>Selecciona un curso para ver su información.</p>';
        img.src = '';
        img.alt = '';
    }

    img.style.display = value ? 'block' : 'none';
}
