var inputNumero1 = document.getElementById('numeroInput');
var btnPrimo = document.getElementById('btnPrimo');
var divResultado = document.getElementById('resultado');
btnPrimo.addEventListener('click', numeroPrimo);
function numeroPrimo() {
    var numeroInput = document.getElementById('numeroInput');
    var numero = parseInt(numeroInput.value);
    if (isNaN(numero) || numero <= 1) {
        mostrarResultado("Por favor, ingresa un número entero mayor que 1.");
        return;
    }
    var esPrimo = checkPrimo(numero);
    if (esPrimo) {
        mostrarResultado("".concat(numero, " es un n\u00FAmero primo."));
    }
    else {
        mostrarResultado("".concat(numero, " no es un n\u00FAmero primo."));
    }
}
function checkPrimo(numero) {
    if (numero <= 1)
        return false;
    if (numero <= 3)
        return true;
    if (numero % 2 === 0 || numero % 3 === 0)
        return false;
    var i = 5;
    while (i * i <= numero) {
        if (numero % i === 0 || numero % (i + 2) === 0)
            return false;
        i += 6;
    }
    return true;
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
