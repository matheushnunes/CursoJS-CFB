class Jogador{
    constructor(nome){
        this.nome = nome
        this.id = Symbol(nome)
    }
}

let jogadores = [new Jogador('j1'), new Jogador('j2'), new Jogador('j3'), new Jogador('j1'),]

let s = []
let s1 = jogadores[0].nome

let s_jogadores = jogadores.filter((j)=>{
    return j.nome == s1 //retora apenas os jogadores com o nome 'j1'
})

s = s_jogadores.map((j)=>{
    return j.id
}) 

console.log(s)
console.log(jogadores)
console.log(s_jogadores)




