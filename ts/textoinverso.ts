const inputNumero1 = document.getElementById('textoInput') as HTMLInputElement;
const btnInverso = document.getElementById('btnInverso') as HTMLButtonElement;
const divResultado = document.getElementById('resultado') as HTMLParagraphElement;

btnInverso.addEventListener('click', inverso);

function inverso() {
    const textoInput = document.getElementById('textoInput') as HTMLInputElement;
    const texto = textoInput.value;

    const textoInverso = invertirTexto(texto);

    mostrarResultado(textoInverso);
}

function invertirTexto(texto: string): string {
    return texto.split('').reverse().join('');
}

function mostrarResultado(resultado: string) {
    const resultadoDiv = document.getElementById('resultado');
    if (resultadoDiv) {
        resultadoDiv.innerHTML = resultado;
    } else {
        console.error("El elemento 'resultado' no fue encontrado.");
    }

}