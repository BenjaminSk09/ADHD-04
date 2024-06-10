const inputNumero1 = document.getElementById('baseInput') as HTMLInputElement;
const inputNumero2 = document.getElementById('exponentetInput') as HTMLInputElement;
const btnCalc = document.getElementById('btnCalc') as HTMLButtonElement;

btnCalc.addEventListener('click', potencia);

const divresultado = document.getElementById('resultado') as HTMLParagraphElement;

function potencia() {
  const baseInput = document.getElementById('baseInput') as HTMLInputElement;
  const exponenteInput = document.getElementById('exponenteInput') as HTMLInputElement;

  const base = parseFloat(baseInput.value);
  const exponente = parseInt(exponenteInput.value);

  if (isNaN(base) || isNaN(exponente)) {
    mostrarResultado("Por favor, ingresa valores válidos para la base y el exponente.");
    return;
  }

  const resultado = Math.pow(base, exponente);

  mostrarResultado(`${base} elevado a la potencia ${exponente} es igual a ${resultado}.`);
}

function mostrarResultado(resultado: string) {
  const resultadoDiv = document.getElementById('resultado');
  if (resultadoDiv) {
    resultadoDiv.innerHTML = resultado;
  } else {
    console.error("El elemento 'resultado' no fue encontrado.");
  }
} 