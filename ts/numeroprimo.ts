const inputNumero1 = document.getElementById('numeroInput') as HTMLInputElement;
const btnPrimo = document.getElementById('btnPrimo') as HTMLButtonElement;
const divResultado = document.getElementById('resultado') as HTMLParagraphElement;

btnPrimo.addEventListener('click', numeroPrimo);

function numeroPrimo() {

    const numeroInput = document.getElementById('numeroInput') as HTMLInputElement;
    const numero = parseInt(numeroInput.value);

    if (isNaN(numero) || numero <= 1) {
        mostrarResultado("Por favor, ingresa un número entero mayor que 1.");
        return;
    }

    const esPrimo = checkPrimo(numero);
    if (esPrimo) {
        mostrarResultado(`${numero} es un número primo.`);
    } else {
        mostrarResultado(`${numero} no es un número primo.`);
    }
}

function checkPrimo(numero: number): boolean {
    if (numero <= 1) return false;
    if (numero <= 3) return true;

    if (numero % 2 === 0 || numero % 3 === 0) return false;

    let i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function mostrarResultado(resultado: string) {
    const resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv) {
        resultadoDiv.innerHTML = resultado;
    } else {
        console.error("El elemento 'resultado' no fue encontrado.");
    }
}

