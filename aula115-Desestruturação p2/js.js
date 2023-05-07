let numeros = [10,20,30,40,50,60]
let [a,b,c, ...d] = numeros //spred
console.log(a)
console.log(b)
console.log(c)
console.log(d)

let obj = {nome: 'Matheus', idade: 17, cidade: 'Senador Canedo'}
let {nome, ...idade} = obj
console.log(nome)
console.log(idade.cidade)

const cores = ()=>{
    return ['verde','amarelo','azul','branco']
}

let [c1,c2,,c3] = cores()
console.log(c1)
console.log(c2)
console.log(c3)

let texto = 'Curso de JavaScript'
let [p1,p2,p3] = texto.split(' ')
console.log(p1)
console.log(p2)
console.log(p3)