document.addEventListener('DOMContentLoaded', function () {
    const calcularBtn = document.getElementById('calcular')!;
    calcularBtn.addEventListener('click', calcularArea);
});

function calcularArea() {
    const baseInput = <HTMLInputElement>document.getElementById('base');
    const alturaInput = <HTMLInputElement>document.getElementById('altura');
    const base = parseFloat(baseInput.value);
    const altura = parseFloat(alturaInput.value);

    if (isNaN(base) || isNaN(altura)) {
        alert('Por favor, ingrese valores válidos para la base y la altura.');
        return;
    }

    const area = (base * altura) / 2;

    const resultadoDiv = document.getElementById('resultado')!;
    resultadoDiv.textContent = `El área del triángulo es: ${area.toFixed(2)}`;
}
