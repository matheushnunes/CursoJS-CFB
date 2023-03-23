function* cores(){
    yield 'vermelho'
    yield 'azul'
    yield 'verde'
}
let itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)