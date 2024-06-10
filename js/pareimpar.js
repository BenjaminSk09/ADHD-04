var inputNumero1 = document.getElementById('numeroInput');
var btnEnd = document.getElementById('btnEnd');
var divResultado = document.getElementById('Resultado');
btnEnd.addEventListener('click', function () {
    var numero = parseInt(inputNumero1.value);
    divResultado.textContent = determinarParImpar(numero);
});
function determinarParImpar(numero) {
    if (isNaN(numero)) {
        return "Por favor, ingresa un número válido.";
    }
    if (numero % 2 === 0) {
        return "".concat(numero, " es un n\u00FAmero par.");
    }
    else {
        return "".concat(numero, " es un n\u00FAmero impar.");
    }
}
