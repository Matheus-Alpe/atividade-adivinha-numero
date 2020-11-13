document.querySelector('button').addEventListener('click', () => {
    apagaMsg();
    iniciaJogo();
})


function iniciaJogo() {
    const numeroPensado = Math.round(Math.random() * 100);
    let tentativas = 1;

    console.log(numeroPensado) //pra testes

    while (tentativas <= 3) {

        const resultado = Number(prompt(`${tentativas}ª tentiva - Digite um valor:`));
        console.log(resultado)
        if (isNaN(resultado) || resultado < 0 || resultado > 100) {
            alert("Somente números são válidos.\nTente novamente! ;)");
            continue;

        } else if (resultado == numeroPensado) {
            criaMensagem(`Meus parabéns, você ganhou! \nO número era ${resultado} 😁😁😁`, 'win');
            break;

        } else if (resultado != numeroPensado && tentativas === 3) {
            criaMensagem(`Não foi dessa vez, a vida tem dessas! 😅😅😅`, 'lose');
        }

        tentativas++;
    }
}

function criaMensagem(resultado, flag) {
    const containerResultado = document.querySelector('.resultado');

    const elementoNovo = document.createElement('h2');
    elementoNovo.classList.add('msg', flag);
    elementoNovo.textContent = resultado;

    containerResultado.appendChild(elementoNovo);
}

function apagaMsg() {
    if (!!document.querySelector('.msg')) {
        document.querySelector('.msg').remove()
    }
}