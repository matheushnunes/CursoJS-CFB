const Somar = (...valores)=>{
    return Soma(valores)
}
const Soma = val =>{
    let res = 0
    for(c of val){
        res += c
    }
    return res
}
console.log(Somar(10,42,2))