var inputNumero1 = document.getElementById('numeroInput');
var btnFactorial = document.getElementById('btnFacto');
var divResultado = document.getElementById('resultado');
btnFactorial.addEventListener('click', obtenerFactorial);
function obtenerFactorial() {
    var numeroInput = document.getElementById('numeroInput');
    var numero = parseInt(numeroInput.value);
    if (isNaN(numero)) {
        mostrarResultado("Por favor, ingresa un número válido.");
        return;
    }
    if (numero < 0) {
        mostrarResultado("El factorial de un número negativo no está definido.");
        return;
    }
    var factorial = 1;
    for (var i = 2; i <= numero; i++) {
        factorial *= i;
    }
    mostrarResultado("El factorial de ".concat(numero, " es ").concat(factorial, "."));
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
