var inputNumero1 = document.getElementById('numeroInput');
var btnPerfect = document.getElementById('btnPerfect');
var divResultado = document.getElementById('resultado');
btnPerfect.addEventListener('click', numeroPerfecto);
function numeroPerfecto() {
    var numeroInput = document.getElementById('numeroInput');
    var numero = parseInt(numeroInput.value);
    if (isNaN(numero) || numero <= 0) {
        mostrarResultado("Por favor, ingresa un número entero positivo válido.");
        return;
    }
    var esPerfecto = esNumeroPerfecto(numero);
    if (esPerfecto) {
        mostrarResultado("".concat(numero, " es un n\u00FAmero perfecto."));
    }
    else {
        mostrarResultado("".concat(numero, " no es un n\u00FAmero perfecto."));
    }
}
function esNumeroPerfecto(numero) {
    var suma = 0;
    for (var i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    return suma === numero;
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
