function calcularPromedio(num1: number, num2: number, num3: number): number {
    return (num1 + num2 + num3) / 3;
}

document.getElementById("calcular")!.addEventListener("click", function() {
    const numero1: number = parseFloat((<HTMLInputElement>document.getElementById("num1")).value);
    const numero2: number = parseFloat((<HTMLInputElement>document.getElementById("num2")).value);
    const numero3: number = parseFloat((<HTMLInputElement>document.getElementById("num3")).value);
    
    const promedio: number = calcularPromedio(numero1, numero2, numero3);
    
    document.getElementById("resultado")!.innerText = "El promedio es: " + promedio;
});
