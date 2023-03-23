function aluno(nome,nota){
    this.nome = nome
    this.nota = nota
    //this e como se fosse uma variavel declarada para a function aluno
    
    this.dadosAnonimos= function(){
        setTimeout(function(){ //gera um atrazo na execução
            console.log(this.nome)
            console.log(this.nota)
        },2000) //2segundos
    }

    this.dadosArrow = function(){
        setTimeout(()=>{ //gera um atrazo na execução
            console.log(this.nome)
            console.log(this.nota)
        },2000) //2segundos
    }
}

const al1 = new aluno('Bruno',6.7)
al1.dadosAnonimos()
al1.dadosArrow()
