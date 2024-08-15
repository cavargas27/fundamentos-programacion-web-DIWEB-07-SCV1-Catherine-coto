// Mostrar todos los cursos al inicio
window.onload = function () {
  document.querySelectorAll(".course-item").forEach((course) => {
    course.classList.add("active");
  });
};

// Manejar clics en el botón de "Agregar a la Cesta"
document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
  button.addEventListener("click", function () {
    this.innerText = "Agregado";
    this.disabled = true;

    // Obtener la información del curso
    const courseItem = this.closest(".course-item");
    const courseId = this.getAttribute("data-product-id");
    const courseTitle = courseItem.querySelector("h3").innerText;
    const coursePrice = courseItem.querySelector(".price").innerText;
    const courseImage = courseItem.querySelector(".course-image").src;

    // Crear un objeto de curso
    const course = {
      id: courseId,
      title: courseTitle,
      price: coursePrice,
      image: courseImage,
    };

    // Obtener el carrito actual desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Comprobar si el curso ya está en el carrito
    if (!cart.some((item) => item.id === courseId)) {
      // Agregar el curso al carrito
      cart.push(course);

      // Guardar el carrito actualizado en localStorage
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  });
});

// Filtrar cursos por categoría
function filtrarCursos(categoria) {
  let cursos = document.querySelectorAll(".course-item");

  cursos.forEach((curso) => {
    if (
      categoria === "Todos" ||
      curso.getAttribute("data-category") === categoria
    ) {
      curso.classList.add("active");
    } else {
      curso.classList.remove("active");
    }
  });
}

// Evento para manejar el filtro al hacer clic en las categorías y la barra de búsqueda
document.addEventListener("DOMContentLoaded", function () {
  let categorias = document.querySelectorAll(".category");

  categorias.forEach((categoria) => {
    categoria.addEventListener("click", function () {
      let categoriaSeleccionada = this.getAttribute("data-category");
      filtrarCursos(categoriaSeleccionada);
    });
  });

  // Filtrar por la barra de búsqueda
  document
    .getElementById("search-input")
    .addEventListener("input", function () {
      const query = this.value.toLowerCase();
      let found = false;
      document.querySelectorAll(".course-item").forEach((course) => {
        const title = course.querySelector("h3").innerText.toLowerCase();
        const description = course.querySelector("p").innerText.toLowerCase();

        if (title.includes(query) || description.includes(query)) {
          course.classList.add("active");
          found = true;
        } else {
          course.classList.remove("active");
        }
      });

      // Mostrar mensaje de error si no se encuentra ninguna coincidencia
      const errorMessage = document.getElementById("error-message");
      if (!found && query !== "") {
        errorMessage.style.display = "block";
      } else {
        errorMessage.style.display = "none";
      }
    });

  // Manejar calificaciones de cursos
  document.querySelectorAll(".rating .star").forEach((star) => {
    star.addEventListener("click", () => {
      let rating = star.getAttribute("data-rating");
      let stars = star.parentNode.querySelectorAll(".star");

      stars.forEach((st) => {
        if (st.getAttribute("data-rating") <= rating) {
          st.classList.add("selected");
        } else {
          st.classList.remove("selected");
        }
      });
    });
  });

  // Redirigir al carrito al hacer clic en el icono del carrito
  const cartIcon = document.querySelector(".cart-icon");
  cartIcon.addEventListener("click", function () {
    window.location.href = "../carrito.html";
  });
});

// Navegar a la página de inicio de sesión
document.getElementById("btn-login").addEventListener("click", function () {
  window.location.href = "loginWeb.html";
});

// Navegar a la página de registro
document.getElementById("btn-registro").addEventListener("click", function () {
  window.location.href = "registroWeb.html";
});
