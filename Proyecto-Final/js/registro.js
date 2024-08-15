cantones_por_provincia = {
  "San José": [
    "San José",
    "Escazú",
    "Desamparados",
    "Puriscal",
    "Tarrazú",
    "Aserrí",
    "Mora",
    "Goicoechea",
    "Santa Ana",
    "Alajuelita",
    "Vázquez de Coronado",
    "Acosta",
    "Tibás",
    "Moravia",
    "Montes de Oca",
    "Turrubares",
    "Dota",
    "Curridabat",
    "Pérez Zeledón",
    "León Cortés Castro",
  ],
  Heredia: [
    "Heredia",
    "Barva",
    "Santo Domingo",
    "Santa Bárbara",
    "San Rafael",
    "San Isidro",
    "Belén",
    "Flores",
    "San Pablo",
    "Sarapiquí",
  ],
  Alajuela: [
    "Alajuela",
    "San Ramón",
    "Grecia",
    "San Mateo",
    "Atenas",
    "Naranjo",
    "Palmares",
    "Poás",
    "Orotina",
    "San Carlos",
    "Zarcero",
    "Sarchí Norte",
    "Upala",
    "Los Chiles",
    "Guatuso",
  ],
  Cartago: [
    "Cartago",
    "Paraíso",
    "La Unión",
    "Jiménez",
    "Turrialba",
    "Alvarado",
    "Oreamuno",
    "El Guarco",
  ],
  Guanacaste: [
    "Liberia",
    "Nicoya",
    "Santa Cruz",
    "Bagaces",
    "Carrillo",
    "Cañas",
    "Abangares",
    "Tilarán",
    "Nandayure",
    "La Cruz",
    "Hojancha",
  ],
  Puntarenas: [
    "Puntarenas",
    "Esparza",
    "Buenos Aires",
    "Montes de Oro",
    "Osa",
    "Quepos",
    "Golfito",
    "Coto Brus",
    "Parrita",
    "Corredores",
    "Garabito",
  ],
  Limón: ["Limón", "Pococí", "Siquirres", "Talamanca", "Matina", "Guácimo"],
};

function actualizarDropdownCanton() {
  var dropdown1 = document.getElementById("provincia");
  var dropdown2 = document.getElementById("canton");
  var seleccion = dropdown1.value;

  // Limpiar el dropdown 2
  dropdown2.innerHTML = "";

  // Añadir opciones según la selección en dropdown1
  if (seleccion === "San José") {
    dropdown2.add(new Option("----", "-----"));
    cantones_por_provincia["San José"].forEach(function (canton) {
      dropdown2.add(new Option(canton, canton));
    });
  } else if (seleccion === "Heredia") {
    dropdown2.add(new Option("----", "-----"));
    cantones_por_provincia["Heredia"].forEach(function (canton) {
      dropdown2.add(new Option(canton, canton));
    });
  } else if (seleccion === "Cartago") {
    dropdown2.add(new Option("----", "-----"));
    cantones_por_provincia["Cartago"].forEach(function (canton) {
      dropdown2.add(new Option(canton, canton));
    });
  } else if (seleccion === "Alajuela") {
    dropdown2.add(new Option("----", "-----"));
    cantones_por_provincia["Alajuela"].forEach(function (canton) {
      dropdown2.add(new Option(canton, canton));
    });
  } else if (seleccion === "Puntarenas") {
    dropdown2.add(new Option("----", "-----"));
    cantones_por_provincia["Puntarenas"].forEach(function (canton) {
      dropdown2.add(new Option(canton, canton));
    });
  } else if (seleccion === "Guanacaste") {
    dropdown2.add(new Option("----", "-----"));
    cantones_por_provincia["Guanacaste"].forEach(function (canton) {
      dropdown2.add(new Option(canton, canton));
    });
  } else if (seleccion === "Limón") {
    dropdown2.add(new Option("----", "-----"));
    cantones_por_provincia["Limón"].forEach(function (canton) {
      dropdown2.add(new Option(canton, canton));
    });
  } else {
    dropdown2.add(new Option("----", "-----"));
  }
}

function validarInput() {
  var input = document.getElementById("contraseña").value;
  // Verificar cada carácter
  for (var i = 0; i < input.length; i++) {
    var char = input.charAt(i);
    // Verificar si el carácter es una consonante, número o caracter especial
    if (
      !/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0-9!@#$%^&*()-_+=`~[\]{}|:;"'<>,.?/\\]/.test(
        char
      )
    ) {
      alert(
        "La contraseña debe contener solo consonantes, números y caracteres especiales."
      );
      return;
    }
  }
  alert("La contraseña cumple con todos los requisitos.");
}

function contraseñasIguales() {
  var cont1 = document.getElementById("contraseña").value;
  var cont2 = document.getElementById("constraseñaRep").value;
  if (cont1 == cont2) {
    alert("La contraseñas coinciden");
  } else {
    alert("La contraseñas NO coinciden");
  }
}



