const f1 = ()=>{
    console.log('ola')
}
f1()

const f2 = (n1,n2)=>{return n1+n2}
console.log(f2(5,4))

//se for somente um parametro de entrada não precisa dos parentezes()
const f3 = n =>n
console.log(f3(51))

//se for uma operação simples não precisa das chaves{}
const f4 = n=>n+10
console.log(f4(5))