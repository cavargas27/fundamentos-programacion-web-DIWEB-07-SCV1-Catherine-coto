function convertir() {
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
    const dollars = parseFloat(document.getElementById('dollars').value);
    const colones = parseFloat(document.getElementById('colones').value);
    let resultado = '';

    if (!isNaN(exchangeRate)) {
        if (!isNaN(dollars)) {
            resultado += `${dollars} USD = ${(dollars * exchangeRate).toFixed(2)} CRC\n`; //Aqui hice multiplicación porque es de dolares a colones 
        }
        if (!isNaN(colones)) {
            resultado += `${colones} CRC = ${(colones / exchangeRate).toFixed(2)} USD\n`; //Aqui hice division porque es de colones a dolares
        }
    } else {
        resultado = 'Por favor, ingrese un tipo de cambio válido.';
    }

    document.getElementById('resultado').value = resultado;
}

function limpiar() {
    document.getElementById('exchangeRate').value = '';
    document.getElementById('dollars').value = '';
    document.getElementById('colones').value = '';
    document.getElementById('resultado').value = '';
}
