function calcularPromedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
document.getElementById("calcular").addEventListener("click", function () {
    var numero1 = parseFloat(document.getElementById("num1").value);
    var numero2 = parseFloat(document.getElementById("num2").value);
    var numero3 = parseFloat(document.getElementById("num3").value);
    var promedio = calcularPromedio(numero1, numero2, numero3);
    document.getElementById("resultado").innerText = "El promedio es: " + promedio;
});
