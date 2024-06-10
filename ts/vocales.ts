const inputNumero1 = document.getElementById('textoInput') as HTMLInputElement;
const btnVocal = document.getElementById('btnVocal') as HTMLButtonElement;
const divResultado = document.getElementById('resultado') as HTMLParagraphElement;

btnVocal.addEventListener('click', vocales);

function vocales() {
    const textoInput = document.getElementById('textoInput') as HTMLInputElement;
    const texto = textoInput.value.toLowerCase();

    const contador = {
        'a': 0,
        'e': 0,
        'i': 0,
        'o': 0,
        'u': 0
    };

    for (let i = 0; i < texto.length; i++) {
        const char = texto.charAt(i);
        if (char in contador) {
            contador[char]++;
        }
    }

    const resultado = `A: ${contador['a']}, E: ${contador['e']}, I: ${contador['i']}, O: ${contador['o']}, U: ${contador['u']}`;
    mostrarResultado(resultado);
}

function mostrarResultado(resultado: string) {
    const resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv) {
        resultadoDiv.innerHTML = resultado;
    } else {
        console.error("El elemento 'resultado' no fue encontrado.");
    }
}


