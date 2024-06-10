const inputNumero1 = document.getElementById('numeroInput') as HTMLInputElement;
const btnPerfect = document.getElementById('btnPerfect') as HTMLButtonElement;
const divResultado = document.getElementById('resultado') as HTMLParagraphElement;

btnPerfect.addEventListener('click', numeroPerfecto);

function numeroPerfecto() {
  
    const numeroInput = document.getElementById('numeroInput') as HTMLInputElement;
    const numero = parseInt(numeroInput.value);
  
    if (isNaN(numero) || numero <= 0) {
      mostrarResultado("Por favor, ingresa un número entero positivo válido.");
      return;
    }
  
    const esPerfecto = esNumeroPerfecto(numero);
    if (esPerfecto) {
      mostrarResultado(`${numero} es un número perfecto.`);
    } else {
      mostrarResultado(`${numero} no es un número perfecto.`);
    }
  }
  
  function esNumeroPerfecto(numero: number): boolean {
    // Comprobamos si el número tiene la forma 2^(p-1) * (2^p - 1)
    let p = 2;
    let candidatoPrimo = Math.pow(2, p) - 1;
    while (candidatoPrimo < numero) {
      if (esPrimo(p) && esPrimo(candidatoPrimo) && (numero % candidatoPrimo === 0)) {
        return true;
      }
      p++;
      candidatoPrimo = Math.pow(2, p) - 1;
    }
  
    return false;
  }
  
  function esPrimo(numero: number): boolean {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
  
    if (numero % 2 === 0 || numero % 3 === 0) return false;
  
    let i = 5;
    while (i * i <= numero) {
      if (numero % i === 0 || numero % (i + 2) === 0) return false;
      i += 6;
    }
  
    return true;
  }
  
  function mostrarResultado(resultado: string) {
    const resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv) {
      resultadoDiv.innerHTML = resultado;
    } else {
      console.error("El elemento 'resultado' no fue encontrado.");
    }
  }
  
    
    

