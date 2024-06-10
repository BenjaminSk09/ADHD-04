var inputNumero1 = document.getElementById('numero1');
var inputNumero2 = document.getElementById('numero2');
var inputNumero3 = document.getElementById('numero3');
var botonFnl = document.getElementById('botonFnl');
botonFnl.addEventListener('click', encontrarMayorMenor);
var divresultado = document.getElementById('resultado');
function encontrarMayorMenor() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var numero3 = parseFloat(document.getElementById('numero3').value);
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        mostrarResultado("Por favor, ingresa tres números válidos.");
        return;
    }
    var mayor = Math.max(numero1, numero2, numero3);
    var menor = Math.min(numero1, numero2, numero3);
    mostrarResultado("El mayor n\u00FAmero es: ".concat(mayor, ". El menor n\u00FAmero es: ").concat(menor, "."));
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
