const inputNumero1 = document.getElementById('numeroInput') as HTMLInputElement
const btnEnd = document.getElementById('btnEnd') as HTMLInputElement
const divResultado = document.getElementById('Resultado') as HTMLParagraphElement

btnEnd.addEventListener('click', () => {
    const numero = parseInt(inputNumero1.value);
    divResultado.textContent = determinarParImpar(numero);
  });
  

function determinarParImpar(numero: number): string {
    if (isNaN(numero)) {
        return "Por favor, ingresa un número válido.";
      }
    
      if (numero % 2 === 0) {
        return `${numero} es un número par.`;
      } else {
        return `${numero} es un número impar.`;
      }
}
