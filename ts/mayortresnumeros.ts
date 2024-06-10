const inputNumero1 = document.getElementById('numero1') as HTMLInputElement
const inputNumero2 = document.getElementById('numero2') as HTMLInputElement
const inputNumero3 = document.getElementById('numero3') as HTMLInputElement
const botonFnl = document.getElementById('botonFnl') as HTMLInputElement

botonFnl.addEventListener('click', encontrarMayorMenor);

const divresultado = document.getElementById('resultado') as HTMLParagraphElement;

function encontrarMayorMenor() {
    const numero1 = parseFloat((document.getElementById('numero1') as HTMLInputElement).value);
    const numero2 = parseFloat((document.getElementById('numero2') as HTMLInputElement).value);
    const numero3 = parseFloat((document.getElementById('numero3') as HTMLInputElement).value);

    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        mostrarResultado("Por favor, ingresa tres números válidos.");
        return;
    }

    const mayor = Math.max(numero1, numero2, numero3);
    const menor = Math.min(numero1, numero2, numero3);

    mostrarResultado(`El mayor número es: ${mayor}. El menor número es: ${menor}.`);
}

function mostrarResultado(resultado: string) {
    const resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv) {
        resultadoDiv.innerHTML = resultado;
    } else {
        console.error("El elemento 'resultado' no fue encontrado.");
    }
}

