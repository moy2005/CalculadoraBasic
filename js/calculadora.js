"use strict";
function realizarOperacion(opc) {
    const num1 = document.getElementById('num1').valueAsNumber;
    const num2 = document.getElementById('num2').valueAsNumber;
    let result;
    switch (opc) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Validar si el divisor es cero
            result = num2 === 0 ? 'Error: No se puede dividir entre cero' : num1 / num2;
            break;
        default:
            result = 'Operación no válida';
    }
    // Mostrar el resultado en la pantalla
    document.getElementById('result').innerText = result.toString();
}
