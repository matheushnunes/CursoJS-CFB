const nome = document.querySelector('#nome')
const portas = document.querySelector('#portas')
const militar = document.querySelector('#militar')
const normal = document.querySelector('#normal')
const blindagem = document.querySelector('#blindagem')
const munição = document.querySelector('#munição')
const btn = document.querySelector('button')
const res = document.querySelector('#res')
let a_carros = [] 
militar.addEventListener('click',()=>{
    blindagem.removeAttribute('disabled')
    munição.removeAttribute('disabled')
    nome.value = ''
    portas.value = 0
})
normal.addEventListener('click',()=>{
    blindagem.setAttribute('disabled','disabled')
    munição.setAttribute('disabled','disabled')
    blindagem.value = 0
    munição.value = 0
    nome.value = ''
    portas.value = 0
})

const CriarCarro = ()=>{
    a_carros.map((e)=>{
        const div = document.createElement('div')
        div.setAttribute('class','carro')
        div.innerHTML = `Nome.........: ${e.nome}</br>`
        div.innerHTML += `Portas.........: ${e.portas}</br>`
        if(e.blindagem != 0){
            div.innerHTML += `Blindagem.: ${e.blindagem}</br>`
            div.innerHTML += `Munição....: ${e.munição}</br>`
            div.innerHTML += `Cor.............: ${e.cor}`
        }
        res.appendChild(div)
    })
    a_carros = []
}
btn.addEventListener('click',()=>{
    
    if(normal.checked){
        const carro = new Carro(nome.value, portas.value)
        a_carros.push(carro)
        CriarCarro()
    }else{
        const carro = new Militar(nome.value, portas.value, blindagem.value, munição.value)
        a_carros.push(carro)
        CriarCarro()
    }
    
})

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
// const c1 = new Carro('m3',4)
// const m1 = new Militar('Kuruma',2,100,5)
// c1.ligar()
// c1.setCor('preto')

// m1.atirar()
// m1.atirar()
// m1.atirar()


// console.log(`Nome.......:${c1.nome}`)
// console.log(`Portas.....:${c1.portas}`)
// console.log(`ligado.....:${c1.ligado}`)
// console.log(`Velocidade.:${c1.vel}`)
// console.log(`Cor........:${c1.cor}`)
// console.log('-------------------------')

// console.log(`Nome..........:${m1.nome}`)
// console.log(`Portas........:${m1.portas}`)
// console.log(`Blindagem.....:${m1.blindagem}`)
// console.log(`Munição.......:${m1.munição}`)
// console.log(`ligado........:${m1.ligado}`)
// console.log(`Velocidade....:${m1.vel}`)
// console.log(`Cor............${m1.cor}`)