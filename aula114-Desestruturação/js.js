//array
let [a,b,c,d] = [1,2,3,4]
console.log(a)
console.log(b)
console.log(c)
console.log(d)

//ou
let num = [10,20,30,40]
let [n1,n2,n3,n4] = num
console.log(n1,n2,n3,n4)

//pre iniciar uma variavel

let [num1,num2=0,num3] = [12]
console.log(num1)
console.log(num2)
console.log(num3)

//inverter valores

let re1 = 62
let re2 = 34 

let [er1,er2] = [re2,re1]

console.log(er1)
console.log(er2)

//funçoes

const func = ()=>{
    return[10,20,30,40]
}

let [f1,f2,f3,f4] = func()
console.log(f1)
console.log(f2)
console.log(f3)
console.log(f4)

//objeto
let {c1,c2,c3,c4} = {c1:'verde',c2:'preto',c3:'vermelho',c4:'azul'}
console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)