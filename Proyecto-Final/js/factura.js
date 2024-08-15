// Recupera los datos de la factura desde el localStorage
const customerName = localStorage.getItem('customerName');
const courses = JSON.parse(localStorage.getItem('courses'));
const subtotal = parseFloat(localStorage.getItem('subtotal'));
const vatAmount = parseFloat(localStorage.getItem('vatAmount'));
const totalAmount = parseFloat(localStorage.getItem('totalAmount'));

function mostrarFactura() {
  let invoiceContent = `
    <h2>Factura</h2>
    <p><strong>Número de Factura:</strong> ${Math.floor(Math.random() * 1000000)}</p>
    <p><strong>Fecha:</strong> ${new Date().toLocaleDateString()}</p>
    <p><strong>Nombre:</strong> ${customerName}</p>
    <p><strong>Cursos:</strong></p>
    <ul>`;

  courses.forEach(course => {
    invoiceContent += `<li>${course.name} - ₡${course.price.toFixed(2)}</li>`;
  });

  invoiceContent += `
    </ul>
    <p><strong>Subtotal:</strong> ₡${subtotal.toFixed(2)}</p>
    <p><strong>IVA (13%):</strong> ₡${vatAmount.toFixed(2)}</p>
    <p><strong>Total a Pagar:</strong> ₡${totalAmount.toFixed(2)}</p>
  `;

  document.getElementById('invoiceSection').innerHTML = invoiceContent;
}

// Llama a la función para mostrar la factura
mostrarFactura();


