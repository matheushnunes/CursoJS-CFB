class Pessoa{
    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
    }
    getNome(){
        return this.nome
    }
    getIdade(){
        return this.idade
    }
    setNome(nome){
        this.nome = nome
    }
    setTipo(idade){
        this.idade = idade
    }
    info(){
        const div = document.createElement('div')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        p1.innerHTML = `Nome..: ${this.nome}`
        p2.innerHTML = `Idade.: ${this.idade}`
        div.appendChild(p1)
        div.appendChild(p2)
        res.appendChild(div)
    }
}

const btn_add = document.querySelector('button')
let res = document.querySelector('#res')
let pessoas = []
btn_add.addEventListener('click',(e)=>{
    const nome = document.querySelector('#nome')    
    const idade = document.querySelector('#idade')
    const p = new Pessoa(nome.value,idade.value)
    pessoas.push(p)
    nome.value = ''
    idade.value = ''
    nome.focus()
    p.info()
})
