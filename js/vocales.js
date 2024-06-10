var inputNumero1 = document.getElementById('textoInput');
var btnVocal = document.getElementById('btnVocal');
var divResultado = document.getElementById('resultado');
btnVocal.addEventListener('click', vocales);
function vocales() {
    var textoInput = document.getElementById('textoInput');
    var texto = textoInput.value.toLowerCase();
    var contador = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };
    for (var i = 0; i < texto.length; i++) {
        var char = texto.charAt(i);
        if (char in contador) {
            contador[char]++;
        }
    }
    var resultado = "A: ".concat(contador['a'], ", E: ").concat(contador['e'], ", I: ").concat(contador['i'], ", O: ").concat(contador['o'], ", U: ").concat(contador['u']);
    mostrarResultado(resultado);
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
