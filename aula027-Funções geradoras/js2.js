function* perguntas(){
    const nome = yield 'Qual o seu nome?'
    const idade = yield 'Qantos anos você tem?'
    return `Seu nome é ${nome} e você tem ${idade} anos de idade`
}
let itc = perguntas()
console.log(itc.next().value)
console.log(itc.next('matheus').value)
console.log(itc.next(17).value)