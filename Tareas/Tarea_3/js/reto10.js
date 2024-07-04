const empleados = {
    "109110338": { nombre: "Daniel", apellidos: "Pérez Aguilar", foto: "../imagenes/daniel.jpg", lugar: "Heredia" },
    "209110338": { nombre: "Karla", apellidos: "García Vargas", foto: "../imagenes/karla.jpg", lugar: "Cartago" },
    "309110338": { nombre: "Cesar", apellidos: "Diaz Mora", foto: "../imagenes/cesar.jpg", lugar: "Alauela" },
    "409110338": { nombre: "Ana", apellidos: "Morales Perez", foto: "../imagenes/ana.jpg", lugar: "San José" },
    "509110338": { nombre: "Sandra", apellidos: "Hernández Ramírez", foto: "../imagenes/sandra.jpg", lugar: "Guanacaste" }
};

function buscarEmpleado() {
    const cedula = document.getElementById("cedula").value.trim();
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (empleados[cedula]) {
        const empleado = empleados[cedula];
        resultado.innerHTML = `
            <div class="result-card">
                <img src="${empleado.foto}" alt="Foto de ${empleado.nombre}">
                <p>Nombre: ${empleado.nombre}</p>
                <p>Apellidos: ${empleado.apellidos}</p>
                <p>Lugar: ${empleado.lugar}</p>
            </div>
        `;
    } else {
        const mensaje = document.createElement('p');
        mensaje.textContent = 'El usuario NO existe';
        mensaje.classList.add('mensaje');
        resultado.appendChild(mensaje);
    }
}
