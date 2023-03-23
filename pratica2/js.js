const munição = document.querySelector('#munição')
const blindagem = document.querySelector('#blindagem')
const normal = document.querySelector('#normal')
const radio = document.querySelectorAll('input[type = radio]')
const militar = document.querySelector('#militar')
const res = document.querySelector('#res')
const btn = document.querySelector('button')
const portas = document.querySelector('#porta')
let arr = []

const CriarCarro = ()=>{
    arr.map((e)=>{
        const div = document.createElement('div')
        const excluir = document.createElement('div')
        excluir.setAttribute('class','excluir')
        excluir.innerHTML = 'x'
        excluir.addEventListener('click',Excluir)
        div.setAttribute('class','carro')
        if(radio[0].checked){
            div.innerHTML = 
            `Nome: ${e.nome}</br>
            Portas: ${e.portas}`
        }else{
            div.innerHTML = 
            `Nome: ${e.nome}</br>
            Portas: ${e.portas}</br>
            Blindagem: ${e.blindagem}</br>
            Munição: ${e.munição}`
        }
        res.appendChild(div)
        div.appendChild(excluir)
    })
    arr = []
}
function Excluir(e){
    const div = e.target.parentNode
    res.removeChild(div)
}
class Carro {
    constructor(nome,portas){
    this.nome = nome
    this.portas = portas
    this.vel = 0
    this.ligado = false
}
setCor(cor){
    this.cor = cor
}
getCor(){
    return this.cor
}
setLigado(ligado){
    this.ligado = ligado
}
}

class Militar extends Carro{
    constructor(nome, portas, blindagem, munição){
        super(nome,portas)
        this.blindagem = blindagem
        this.munição = munição
    }
    atirar(){
        if(this.munição > 0){
            this.munição--
        }
    }
}

normal.addEventListener('click',()=>{
    munição.setAttribute('disabled','disabled')
    blindagem.setAttribute('disabled','disabled')
    nome.value = ''
    portas.value = 0
    blindagem.value = 0
    munição.value = 0
})
militar.addEventListener('click',()=>{
    munição.removeAttribute('disabled')
    blindagem.removeAttribute('disabled')
})

btn.addEventListener('click',()=>{
    const nome = document.querySelector('#nome').value
    const portas = document.querySelector('#porta').value
    if(radio[0].checked){
        const c1 = new Carro(nome,portas)
        arr.push(c1)
        CriarCarro()
    }else{
        const m1 = new Militar(nome,portas,blindagem.value,munição.value)   
        arr.push(m1)
        CriarCarro()
    }
})
let obj = {
    nome: 'matheus',
    idade: 17,
    sobrenome: 'nunes',
}
let ObjToString = JSON.stringify(obj) 
console.log(ObjToString)
let string = '{"nome":"matheus","idade":17,"sobrenome":"nunes"}'
let StringToObj = JSON.parse(string)
console.log(StringToObj)

