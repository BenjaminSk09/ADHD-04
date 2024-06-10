var inputNumero1 = document.getElementById('textoInput');
var btnInverso = document.getElementById('btnInverso');
var divResultado = document.getElementById('resultado');
btnInverso.addEventListener('click', inverso);
function inverso() {
    var textoInput = document.getElementById('textoInput');
    var texto = textoInput.value;
    var textoInverso = invertirTexto(texto);
    mostrarResultado(textoInverso);
}
function invertirTexto(texto) {
    return texto.split('').reverse().join('');
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
