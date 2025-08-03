//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function limparCampo(){
    amigo.value = ""
}

function adicionarAmigo(){
    let amigo = document.getElementById('amigo')
    let listaAmigo = document.getElementById('listaAmigos')
    let novoAmigo = document.createElement('li')

    nomeAmigo = amigo.value  

    if(nomeAmigo == ""){
        alert('Digite um nome!')
    }
   amigos.push(nomeAmigo)

    novoAmigo.textContent = nomeAmigo // Pega o texto que há em novoAmigo e coloca na variável nomeAmigo(li)
    listaAmigo.appendChild(novoAmigo) // Adiciona o conteúdo da variável novoAmigo na listaAmigo(ul)

    limparCampo()
}

function sortearAmigo() {
   if(amigos.length < 2){
        alert('Adicione mais amigos antes de sortear!')
   } else {
        limparLista()
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById('resultado')
        resultado.innerHTML = `O amigo sorteado é: ${amigos[numeroAleatorio]}`
    }
}

function limparLista() {
    let listaAmigo = document.getElementById('listaAmigos')
    listaAmigo.textContent = ""
}