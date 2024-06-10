document.addEventListener('DOMContentLoaded', function () {
    var calcularBtn = document.getElementById('calcular');
    calcularBtn.addEventListener('click', calcularArea);
});
function calcularArea() {
    var baseInput = document.getElementById('base');
    var alturaInput = document.getElementById('altura');
    var base = parseFloat(baseInput.value);
    var altura = parseFloat(alturaInput.value);
    if (isNaN(base) || isNaN(altura)) {
        alert('Por favor, ingrese valores válidos para la base y la altura.');
        return;
    }
    var area = (base * altura) / 2;
    var resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = "El \u00E1rea del tri\u00E1ngulo es: ".concat(area.toFixed(2));
}
