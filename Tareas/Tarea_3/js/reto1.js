function calcularFactura() {
  // Obtener valores del formulario
  var numeroFactura = document.getElementById("numeroFactura").value;
  var fecha = document.getElementById("fecha").value;
  var nombreCliente = document.getElementById("nombreCliente").value;
  var articulo = document.getElementById("articulo").value;
  var cantidad = parseInt(document.getElementById("cantidad").value);
  var precio = parseFloat(document.getElementById("precio").value);

  // Calcular subtotal, iva, servicio y total a pagar
  var subtotal = cantidad * precio;
  var iva = subtotal * 0.13;
  var servicio = subtotal * 0.05;
  var totalPagar = subtotal + iva + servicio;

  // Mostrar resultados en la factura
  document.getElementById("resultadoNumero").textContent = numeroFactura;
  document.getElementById("resultadoFecha").textContent = fecha;
  document.getElementById("resultadoNombre").textContent = nombreCliente;
  document.getElementById("resultadoArticulo").textContent = articulo;
  document.getElementById("resultadoCantidad").textContent = cantidad;
  document.getElementById("resultadoPrecio").textContent = precio.toFixed(2);
  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("iva").textContent = iva.toFixed(2);
  document.getElementById("servicio").textContent = servicio.toFixed(2);
  document.getElementById("totalPagar").textContent = totalPagar.toFixed(2);
}

//Funcion para borrar los campos
function borrarCampos() {
  document.getElementById("numeroFactura").value = "";
  document.getElementById("fecha").value = "";
  document.getElementById("nombreCliente").value = "";
  document.getElementById("articulo").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("precio").value = "";

  // Borrar los resultados
  document.getElementById("resultadoNumero").textContent = "";
  document.getElementById("resultadoFecha").textContent = "";
  document.getElementById("resultadoNombre").textContent = "";
  document.getElementById("resultadoArticulo").textContent = "";
  document.getElementById("resultadoCantidad").textContent = "";
  document.getElementById("resultadoPrecio").textContent = "";
  document.getElementById("subtotal").textContent = "";
  document.getElementById("iva").textContent = "";
  document.getElementById("servicio").textContent = "";
  document.getElementById("totalPagar").textContent = "";
}
