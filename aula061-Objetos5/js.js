const res = document.querySelector('#res')
const btn = document.querySelector('button')
const Pessoa = {
    nome: document.querySelector('#nome'), 
    idade: document.querySelector('#idade'),
    getNome:function(){
        return this.nome.value
    },
    getIdade:()=>{
        return this.idade.value
    },
    setNome:function(nome){
        this.nome = nome
    },
    setIdade:function(idade){
        this.idade = idade
    }
}
btn.addEventListener('click',()=>{
    res.innerHTML = `Nome..: ${Pessoa.getNome()} <br\>Idade.: ${Pessoa.getIdade()}`
    nome.value = ''
    idade.value = ''
})