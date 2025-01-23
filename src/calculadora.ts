function realizarOperacion(opc: string) {

    const num1: number = (document.getElementById('num1') as HTMLInputElement).valueAsNumber;
    const num2: number = (document.getElementById('num2') as HTMLInputElement).valueAsNumber;
    let result: number | string;

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
            result = num2 === 0 ? 'Error: No se puede dividir entre cero' : num1 / num2;
            break;
        default:
            result = 'Operación no válida';
    }

    (document.getElementById('result') as HTMLDivElement).innerText = result.toString();
}

