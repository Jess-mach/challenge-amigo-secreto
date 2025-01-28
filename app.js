//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];


function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo == '') {
        alert('Insira um nome');
        return;
    }

    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este amigo já está na lista!');
        return;
    }

    listaAmigos.push(nomeAmigo);
    document.getElementById('amigo').value = '';
    atualizarLista();
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';


    for (let amigo of listaAmigos) {
        lista.innerHTML += `<li>${amigo}</li>`;
    }
}
function sortearAmigo() {
    if (listaAmigos.length < 4) {
        alert('Adicione pelo menos 4 amigos no campo.')
        return;
    }

    let sortearNome = Math.floor(Math.random() * listaAmigos.length);

    let amigoSecreto = listaAmigos[sortearNome];

    document.getElementById('resultado').innerHTML = 'Amigo Sorteado' + amigoSecreto;
}







