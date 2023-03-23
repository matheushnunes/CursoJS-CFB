class Carro{ //Classe Pai
    constructor(nome,portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }
    ligar = ()=>{
        this.ligado = true
    }
    desligar = ()=>{
        this.ligado = false
    }
    setCor = (cor)=>{
        this.cor = cor
    }
}

class Militar extends Carro{ //Classe filho
    constructor(nome, portas, blindagem, munição){
        super(nome,portas) //parametros necessários da classe pai 
        this.blindagem = blindagem
        this.munição = munição
        this.setCor('verde')
    }
    atirar = ()=>{
        if(this.munição > 0){
            this.munição--
        }
    }
}
const c1 = new Carro('m3',4)
const m1 = new Militar('Kuruma',2,100,5)
c1.ligar()
c1.setCor('preto')

m1.atirar()
m1.atirar()
m1.atirar()


console.log(`Nome.......:${c1.nome}`)
console.log(`Portas.....:${c1.portas}`)
console.log(`ligado.....:${c1.ligado}`)
console.log(`Velocidade.:${c1.vel}`)
console.log(`Cor........:${c1.cor}`)
console.log('-------------------------')

console.log(`Nome..........:${m1.nome}`)
console.log(`Portas........:${m1.portas}`)
console.log(`Blindagem.....:${m1.blindagem}`)
console.log(`Munição.......:${m1.munição}`)
console.log(`ligado........:${m1.ligado}`)
console.log(`Velocidade....:${m1.vel}`)
console.log(`Cor............${m1.cor}`)