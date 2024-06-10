var inputNumero1 = document.getElementById('baseInput');
var inputNumero2 = document.getElementById('exponentetInput');
var btnCalc = document.getElementById('btnCalc');
btnCalc.addEventListener('click', potencia);
var divresultado = document.getElementById('resultado');
function potencia() {
    var baseInput = document.getElementById('baseInput');
    var exponenteInput = document.getElementById('exponenteInput');
    var base = parseFloat(baseInput.value);
    var exponente = parseInt(exponenteInput.value);
    if (isNaN(base) || isNaN(exponente)) {
        mostrarResultado("Por favor, ingresa valores válidos para la base y el exponente.");
        return;
    }
    var resultado = Math.pow(base, exponente);
    mostrarResultado("".concat(base, " elevado a la potencia ").concat(exponente, " es igual a ").concat(resultado, "."));
}
function mostrarResultado(resultado) {
    var resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv) {
        resultadoDiv.innerHTML = resultado;
    }
    else {
        console.error("El elemento 'resultado' no fue encontrado.");
    }
}
