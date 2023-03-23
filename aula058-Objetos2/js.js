class Carro{
    constructor(nome,tipo){
        if(tipo == 1){
            this.nome = nome
            this.tipo = 'esportivo'
            this.velmax = 300
        }else if(tipo == 2){
            this.nome = nome 
            this.tipo = 'passeio'
            this.velmax = 160
        }else if(tipo == 3){
            this.nome = nome
            this.tipo = 'off-road'
            this.velmax = 90
        }else{
            this.nome = nome
            this.tipo = 'militar'
            this.velmax = 200
        }
    }
    info(){
    console.log(`nome: ${this.nome}`)
    console.log(`tipo: ${this.tipo}`)
    console.log(`velocidade: ${this.velmax}`)
    console.log('--------------------')    
    }
    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getVelMax(){
        return this.velmax
    }
    getInfo(){
        return [this.nome, this.tipo, this.velmax]
    }
    setNome(nome){
        this.nome = nome
    }
    setTipo(tipo){
        this.tipo = tipo
    }
    setVelMax(velmax){
        this.velmax = velmax
    }
}

let c1 = new Carro('f150 Raptor',3 )
let c2 = new Carro('civic',2)
c2.info()
c1.setNome('corola')
c1.setTipo(2)
c1.setVelMax(182)
console.log(c1.getNome())
console.log(c2.getInfo())
console.log('---')
c1.info()