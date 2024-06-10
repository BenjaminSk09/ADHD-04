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
    // Comprobamos si el número tiene la forma 2^(p-1) * (2^p - 1)
    var p = 2;
    var candidatoPrimo = Math.pow(2, p) - 1;
    while (candidatoPrimo < numero) {
        if (esPrimo(p) && esPrimo(candidatoPrimo) && (numero % candidatoPrimo === 0)) {
            return true;
        }
        p++;
        candidatoPrimo = Math.pow(2, p) - 1;
    }
    return false;
}
function esPrimo(numero) {
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
