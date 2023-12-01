let d = document;

let titulo = d.querySelector("h3");
let preco = d.querySelector("h4");
let moldura = d.getElementById("moldura");
let btnVoltar = d.getElementById("btnVoltar");

let btn = d.querySelector("button");
let temporizador;
let btnAvancar = d.getElementById("btnAvancar");
let intervaloTroca;
let indice = 0;

const caminho = "assets/carrossel/";
const prefix = "img";
const extensao = ".png";

let lista = [
    {img:1},
    {img:2},
    {img:3},
];

console.log(lista[indice]);

btnVoltar.onclick = voltar;
btnAvancar.onclick = avancar;

window.onload = function() {
    Inicio();
    iniciarTrocaAutomatica();
}

btnVoltar.onclick = function() {
    pararTrocaAutomatica();
    voltar();
    iniciarTrocaAutomatica();
};

btnAvancar.onclick = function() {
    pararTrocaAutomatica();
    avancar();
    iniciarTrocaAutomatica();
};

function iniciarTrocaAutomatica() {
    intervaloTroca = setInterval(avancar, 4000); // Troca a cada 3 segundos (3000 milissegundos)
}

function pararTrocaAutomatica() {
    clearInterval(intervaloTroca);
}


function Inicio() {
    moldura.src = caminho + prefix + lista[indice].img + extensao;
}

function avancar() {
    if (indice < lista.length - 1) {
        indice++;
    } else {
        indice = 0;
    }

    moldura.src = caminho + prefix + lista[indice].img + extensao;
}

function voltar() {
    if (indice > 0) {
        indice--;
    } else {
        indice = lista.length - 1;
    }

    moldura.src = caminho + prefix + lista[indice].img + extensao;
}