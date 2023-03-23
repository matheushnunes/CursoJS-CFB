//funções anonimas
var f = function(...n){
    var num = 0 
    for(let c of n){
        num += c
    }
    return num
}
//console.log(f(14,41,6,9))

//funções construtoras anonimas
var f2 = new Function('n1','n2','n3','return n1+n2+n3')

console.log(f2(24,23,12))