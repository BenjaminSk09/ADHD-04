const inputNumero1 = document.getElementById('numeroInput') as HTMLInputElement;
const btnFactorial = document.getElementById('btnFacto') as HTMLButtonElement;
const divResultado = document.getElementById('resultado') as HTMLParagraphElement;

btnFactorial.addEventListener('click', obtenerFactorial);

function obtenerFactorial() {
    const numeroInput = document.getElementById('numeroInput') as HTMLInputElement;
    const numero = parseInt(numeroInput.value);

    if (isNaN(numero)) {
        mostrarResultado("Por favor, ingresa un número válido.");
        return;
    }

    if (numero < 0) {
        mostrarResultado("El factorial de un número negativo no está definido.");
        return;
    }

    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }

    mostrarResultado(`El factorial de ${numero} es ${factorial}.`);
}

function mostrarResultado(resultado: string) {
    const resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv) {
        resultadoDiv.innerHTML = resultado;
    } else {
        console.error("El elemento 'resultado' no fue encontrado.");
    }
}