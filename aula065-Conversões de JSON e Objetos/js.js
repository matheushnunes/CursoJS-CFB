const pessoa={
    nome:'matheus',
    canal:'CFB',
    curso:'JavaScript',
    aulas:{
        aula01:'introdução',
        aula02:'variaveis',
        aula03:'condicional'
    }
}
const string = '{"nome":"matheus","canal":"CFB","curso":"JavaScript","aulas":{"aula01":"introdução","aula02":"variaveis","aula03":"condicional"}}'  

const s_pessoa = JSON.stringify(pessoa) //Converte objeto em string JSON
const o_pessoa = JSON.parse(string) //Converte String JSON em objeto

console.log(pessoa)
console.log(s_pessoa)
console.log(o_pessoa)