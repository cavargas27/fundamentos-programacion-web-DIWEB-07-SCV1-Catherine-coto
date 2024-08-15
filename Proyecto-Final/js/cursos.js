document.addEventListener('DOMContentLoaded', () => {
    const categoryFilter = document.getElementById('categoryFilter');
    const coursesLists = document.querySelectorAll('.courses-list');

    categoryFilter.addEventListener('change', () => {
        const selectedCategory = categoryFilter.value;
        coursesLists.forEach(coursesList => {
            const courses = coursesList.getElementsByClassName('course');
            for (let course of courses) {
                if (selectedCategory === 'all' || course.dataset.category === selectedCategory) {
                    course.style.display = 'block';
                } else {
                    course.style.display = 'none';
                }
            }
        });
    });
});

//Funcion barra de busqueda 
function searchCourses() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    
    // Obtener todos los elementos de curso
    var courses = document.querySelectorAll('.course');
    
    // Iterar sobre cada curso
    courses.forEach(function(course) {
        var title = course.querySelector('h2').textContent.toLowerCase();
        
        if (title.includes(input)) {
            course.style.display = ''; 
        } else {
            course.style.display = 'none'; 
        }
    });
}
//funcion calcular total
let selectedCourses = [];
let totalPrice = 0;

function addToCart(button) {
    const courseDiv = button.parentElement;
    const price = parseFloat(courseDiv.querySelector('.price').textContent.replace('$', ''));
    const courseName = courseDiv.querySelector('h2').textContent;
    
    // Evitar agregar un curso dos veces
    if (!selectedCourses.includes(courseName)) {
        selectedCourses.push(courseName);
        totalPrice += price;
        updateTotalPrice();
    } else {
        alert("Este curso ya está en tu carrito.");
    }
}

function updateTotalPrice() {
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}

//funcion para que btn cambie de matricular a matriculado 
function addToCart(button) {
    const courseDiv = button.parentElement;
    const price = parseFloat(courseDiv.querySelector('.price').textContent.replace('$', ''));
    const courseName = courseDiv.querySelector('h2').textContent;
    
    // Evitar agregar un curso dos veces
    if (!selectedCourses.includes(courseName)) {
        selectedCourses.push(courseName);
        totalPrice += price;
        updateTotalPrice();
        button.textContent = "Matriculado"; 
        button.disabled = true;
    } else {
        alert("Este curso ya está en tu carrito.");
    }
}

// combo doble 
const courseVersions = {
    'python': ['Básico', 'Intermedio', 'Avanzado'],
    'illustrator': ['Básico', 'Intermedio', 'Avanzado'],
    'react': ['Fundamentos', 'Intermedio', 'Avanzado']
    
};


const coursePrices = {
    'python': {'Básico': 49.99, 'Intermedio': 59.99, 'Avanzado': 69.99},
    'illustrator': {'Básico': 59.99, 'Intermedio': 69.99, 'Avanzado': 79.99},
    'react': {'Fundamentos': 69.99, 'Intermedio': 79.99, 'Avanzado': 89.99}
    // Agrega más precios para cada versión de curso aquí
};

function updateCourseVersions() {
    const courseSelect = document.getElementById('courseSelect');
    const versionSelect = document.getElementById('versionSelect');
    const selectedCourse = courseSelect.value;

    versionSelect.innerHTML = '<option value="">Selecciona una versión</option>';

    if (selectedCourse && courseVersions[selectedCourse]) {
        courseVersions[selectedCourse].forEach(version => {
            const option = document.createElement('option');
            option.value = version;
            option.textContent = version;
            versionSelect.appendChild(option);
        });
    }
}

function calcularCuota() {
    const courseSelect = document.getElementById('courseSelect');
    const versionSelect = document.getElementById('versionSelect');
    const cuotaText = document.getElementById('cuota');

    const selectedCourse = courseSelect.value;
    const selectedVersion = versionSelect.value;

    if (selectedCourse && selectedVersion) {
        const price = coursePrices[selectedCourse][selectedVersion].toFixed(2);
        cuotaText.textContent = `El precio para el curso ${selectedCourse} (${selectedVersion}) es $${price}`;
    } else {
        cuotaText.textContent = 'Por favor, selecciona un curso y una versión.';
    }
}

