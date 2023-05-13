const f_texto = document.querySelector('#f_texto')
const p_texto = document.querySelector('#p_texto')
const btn_texto = document.querySelector('#btn_texto')

btn_texto.addEventListener('click',(evt)=>{

})

let num = 10
const curso = 'JavaScript'
//window.localStorage.setItem('numero',num)
//não é necessario escrever o window

localStorage.setItem('numero',num)
localStorage.setItem('numero',42) //muda o valor do 'numero' para 42
localStorage.setItem('nome','Matheus')
localStorage.setItem('idade', 18)
sessionStorage.setItem('curso',curso)

console.log(localStorage.key(2)) //mostra no console a chave que estiver no indice '2' no caso 'nome'
console.log(localStorage.getItem(localStorage.key(2))) //imprime o 'nome' 'Matheus' no console 

console.log(localStorage.getItem('numero')) //mostra no console o valor do 'numero'
console.log(localStorage.getItem('nome')) 
console.log(localStorage.getItem('idade')) 
console.log(sessionStorage.getItem('curso'))
// localStorage.clear() //limpa todos os elementos do storage

