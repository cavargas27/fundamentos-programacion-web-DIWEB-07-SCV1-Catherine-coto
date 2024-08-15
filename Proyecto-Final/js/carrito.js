// Carrito de compras
let cart = [];

// Selecciona elementos del DOM
const cartItems = document.getElementById("cart-items");
const emptyCartButton = document.getElementById("empty-cart");
const checkoutButton = document.getElementById("checkout");
const checkoutForm = document.getElementById("checkout-form");
const subtotalPriceElement = document.getElementById("subtotal-price");
const vatElement = document.getElementById("vat");
const totalPriceElement = document.getElementById("total-price");

// Cargar el carrito desde localStorage
function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
}

// Guardar el carrito en localStorage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Función para renderizar el carrito
function renderCart() {
    cartItems.innerHTML = "";
  
    cart.forEach((product) => {
      const cartRow = `
        <tr data-product-id="${product.id}">
          <td><img src="${product.image}" alt="${product.title}"></td>
          <td>${product.title}</td>
          <td>$${product.price}</td>
          <td><button class="remove-btn">X</button></td>
        </tr>
      `;
      cartItems.innerHTML += cartRow;
    });
  
    if (cart.length === 0) {
      cartItems.innerHTML = '<tr><td colspan="4">El carrito está vacío</td></tr>';
    }
  
    // Actualiza el subtotal, IVA y total
    updateTotals();
  
    // Agregar eventos a los botones de eliminación
    document.querySelectorAll(".remove-btn").forEach((button) => {
      button.addEventListener("click", (event) => {
        const productId = event.target.closest("tr").getAttribute("data-product-id");
        removeFromCart(productId);
      });
    });
  }

// Función para eliminar un producto del carrito
function removeFromCart(productId) {
  cart = cart.filter((product) => product.id !== productId);
  renderCart();
  saveCartToLocalStorage();
}

// Función para vaciar el carrito
emptyCartButton.addEventListener("click", () => {
  cart = [];
  renderCart();
  saveCartToLocalStorage();
});

// Función para finalizar la compra
checkoutButton.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("El carrito está vacío.");
  } else {
    checkoutForm.style.display = "block";
    document.querySelector(".container").style.display = "none";
  }
});

// Función para actualizar los totales: subtotal, IVA, y total
function updateTotals() {
  let subtotal = 0;

  cart.forEach((product) => {
    subtotal += parseFloat(product.price) || 0;
  });

  // Calcula el IVA y el total
  const iva = subtotal * 0.13;
  const total = subtotal + iva;

  // Actualiza los elementos en el DOM
  subtotalPriceElement.innerHTML = `$${subtotal.toFixed(2)}`;
  vatElement.innerHTML = `$${iva.toFixed(2)}`;
  totalPriceElement.innerHTML = `$${total.toFixed(2)}`;
}

// Función para bloquear la entrada de letras y permitir solo números
function allowOnlyNumbers(event) {
  const input = event.target;
  input.value = input.value.replace(/\D/g, "");
}

// Seleccionar los campos de tarjeta
const cardNumberInput = document.getElementById("card-number");
const cardExpiryInput = document.getElementById("card-expiry");
const cardCvvInput = document.getElementById("card-cvv");

// Agregar el evento de entrada para bloquear letras
cardNumberInput.addEventListener("input", allowOnlyNumbers);
cardExpiryInput.addEventListener("input", allowOnlyNumbers);
cardCvvInput.addEventListener("input", allowOnlyNumbers);

// Formulario de compra
const purchaseForm = document.getElementById("purchase-form");

purchaseForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Guardar los datos en el localStorage
  localStorage.setItem(
    "customerName",
    document.getElementById("customer-name").value
  );
  localStorage.setItem("courses", JSON.stringify(cart));
  localStorage.setItem("subtotal", calculateSubtotal());
  localStorage.setItem("vatAmount", calculateSubtotal() * 0.13);
  localStorage.setItem(
    "totalAmount",
    calculateSubtotal() + calculateSubtotal() * 0.13
  );

  // Mostrar alerta de éxito con SweetAlert2
  Swal.fire({
    icon: "success",
    title: "Pago Exitoso",
    text: "Su pago ha sido procesado correctamente.",
    confirmButtonText: "OK",
  }).then(() => {
    // Redirigir a la página de la factura
    window.location.href = "../factura.html";
  });
});

// Mostrar la factura en la página de la factura
function mostrarFactura() {
  const customerName = localStorage.getItem("customerName");
  const courses = JSON.parse(localStorage.getItem("courses"));
  const subtotal = parseFloat(localStorage.getItem("subtotal"));
  const vatAmount = parseFloat(localStorage.getItem("vatAmount"));
  const totalAmount = parseFloat(localStorage.getItem("totalAmount"));

  let invoiceContent = `
    <h2>Factura</h2>
    <p><strong>Número de Factura:</strong> ${Math.floor(
      Math.random() * 1000000
    )}</p>
    <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
    <p><strong>Nombre:</strong> ${customerName}</p>
    <p><strong>Cursos:</strong></p>
    <ul>`;

  courses.forEach((course) => {
    invoiceContent += `<li>${course.title} - $${course.price.toFixed(2)}</li>`;
  });

  invoiceContent += `
    </ul>
    <p><strong>Subtotal:</strong> $${subtotal.toFixed(2)}</p>
    <p><strong>IVA (13%):</strong> $${vatAmount.toFixed(2)}</p>
    <p><strong>Total a Pagar:</strong> $${totalAmount.toFixed(2)}</p>
  `;

  document.getElementById("invoiceSection").innerHTML = invoiceContent;
}

// Inicializar productos y cargar datos desde localStorage al cargar la página
window.onload = function () {
  loadCartFromLocalStorage(); // Carga el carrito desde localStorage
  renderCart(); // Renderiza el carrito
  if (document.getElementById("invoiceSection")) {
    mostrarFactura(); 
  }
};

// Confirmación de compra exitosa
document
  .getElementById("completePurchaseBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); 
    Swal.fire({
      title: "¡Pago Exitoso!",
      text: "Su pago ha sido completado con éxito.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  });
