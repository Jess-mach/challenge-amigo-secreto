//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];


function adicionarAmigo (){
    let nomeAmigo = document.getElementById ('input').value;
    if (nomeAmigo == ''){
        alert ('Insira um nome');
        return;
    }
    listaAmigos.push(nomeAmigo);
}


