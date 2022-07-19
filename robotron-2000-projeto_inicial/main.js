const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }};
const cores = ["img/robotron.png",
"img/robotron-colors/robotron-amarelo.png",
"img/robotron-colors/robotron-branco.png",
"img/robotron-colors/robotron-vermelho.png",
"img/robotron-colors/robotron-rosa.png",
"img/robotron-colors/robotron-preto.png"];
const imgRobot = document.querySelector('[data-robo]');
const btnCor = document.querySelector('[data-mudaCor]');

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if (operacao === "-") {
        peca.value = parseInt(peca.value) - 1; 
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}


var cor = 0;
btnCor.addEventListener('click', (evento) => {
    cor++;
    if (cor > 5) {
        cor = 0;
    }
    imgRobot.src = cores[cor];
})
