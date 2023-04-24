const nome = Symbol('nome')
const numero = Symbol('numero')
const cor = Symbol('cor')
const pais = Symbol('país')
const Jogador = {
    [nome]:'j1',
    [numero]: 10,
    [cor]: 'verde'
}

Jogador[pais] = 'argentina' //para criar um novo elemento é presiso ja existir um simbolo 'pais'
Jogador[cor] = 'vermelho'

for(let c in Jogador){
    console.log(c)
}
console.log(Jogador)
console.log(Jogador[nome])
console.log(Jogador[numero])
console.log(Jogador[pais])
