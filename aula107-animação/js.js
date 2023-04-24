const carro = document.querySelector('#carro')
const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')
const btn_parar = document.querySelector('#btn_parar')

const carro2 = document.querySelector('#carro2')
const btn_esquerda2 = document.querySelector('#btn_esquerda2')
const btn_direita2 = document.querySelector('#btn_direita2')
const btn_parar2 = document.querySelector('#btn_parar2')

const init = ()=>{
    carro.style.position = 'relative'
    carro.style.left = '0px'
    carro.style.width = '100px'
    carro.style.height = '40px'
    carro2.style.position = 'relative'
    carro2.style.left = '0px'
    carro2.style.width = '150px'
    carro2.style.height = '40px'
    tamTela = window.innerWidth - (parseInt(carro.style.width) + 10)
}
let anima = null
let anima2 = null
let tamTela = null

let move = (n,dir)=>{
    if(n == 1){
        if(parseInt(carro.style.left) <= tamTela){
            carro.style.left = parseInt(carro.style.left) + (10*1) +'px'
            anima = setTimeout(move,20,1)
        }
        else{
            clearTimeout(anima)
        }
    }else if(n == -1){
        if(parseInt(carro.style.left) >= 0){
            carro.style.left = parseInt(carro.style.left) + (10*-1) +'px'
            anima = setTimeout(move,20,-1)
        }
        else{
            clearTimeout(anima)
        }
    }
    else if(dir == 1){
        console.log()
        if(parseInt(carro2.style.left) <= tamTela){
            carro2.style.left = parseInt(carro2.style.left) + (10*dir) +'px'
            anima2 = setTimeout(move,20,2,1)
        }
        else{
            clearTimeout(anima2)
            move(2,-1)
        }
    }
    else if(dir == -1){
        if(parseInt(carro2.style.left) >= 0){
            carro2.style.left = parseInt(carro2.style.left) + (10*dir) +'px'
            anima2 = setTimeout(move,20,2,-1)
        }
        else{
            clearTimeout(anima2)
            move(2,1)
        }
    }
}

btn_parar.addEventListener('click',()=>{
    clearTimeout(anima)
})
btn_esquerda.addEventListener('click',()=>{
    clearTimeout(anima)
    move(-1)
})
btn_direita.addEventListener('click',()=>{
    clearTimeout(anima)
    move(1)
})

btn_parar2.addEventListener('click',()=>{
    clearTimeout(anima2)
})
btn_esquerda2.addEventListener('click',()=>{
    clearTimeout(anima2)
    move(3,-1)
})
btn_direita2.addEventListener('click',()=>{
    tamTela = window.innerWidth - parseInt(carro2.style.width) 
    clearTimeout(anima2)
    move(2,1)
})
//window.onload = init() ou
window.addEventListener('load',init)
window.addEventListener('resize',()=>{
    tamTela = window.innerWidth - parseInt(carro.style.width)  
})
window.addEventListener('keydown',(e)=>{
    if(e.key == 'ArrowUp'){
        carro2.style.width = parseInt(carro2.style.width) + 10 +'px'
        carro2.style.height = parseInt(carro2.style.height) + 10 +'px'
        tamTela = window.innerWidth - parseInt(carro2.style.width) 
    }else if(e.key == 'ArrowDown'){
        if(carro2.style.width <= '150px'){
            carro2.style.width = '150px'
        }
        carro2.style.width = parseInt(carro2.style.width) - 10 +'px'
        carro2.style.height = parseInt(carro2.style.height) - 10 +'px'
        tamTela = window.innerWidth - parseInt(carro2.style.width) 
    }
  
})