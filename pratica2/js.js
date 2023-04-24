const btn_esquerda = document.querySelector('#btn_esquerda')
const btn_direita = document.querySelector('#btn_direita')
const btn_parar = document.querySelector('#btn_parar')
const carro = document.querySelector('#carro')

carro.style.position = 'relative'
carro.style.left = '0px'
carro.style.width = '100px'
carro.style.height = '40px'

let tamTela = window.innerWidth - parseInt(carro.style.width)
let anima = null
let posCarro = 0
const mover = (dir)=>{
    if(dir > 0){
        if((posCarro + 17) <= tamTela){
        posCarro = parseInt(carro.style.left)
        carro.style.left = `${posCarro + (10*dir)}px`
        anima = setTimeout(mover,20,1)
    }else{
        mover(-1)
    }
    }else if(dir < 0){
        if((posCarro - 10)  >= 0){
            posCarro =  parseInt(carro.style.left)
            carro.style.left = `${posCarro + (10*dir)}px`
            anima = setTimeout(mover,20,-1)
        }else{
            mover(1)
        }
    }
}

btn_direita.addEventListener('click',()=>{
    clearTimeout(anima)
    mover(1)
})
btn_esquerda.addEventListener('click',()=>{
    clearTimeout(anima)
    mover(-1)
})
btn_parar.addEventListener('click',()=>{
    clearTimeout(anima)
})

window.addEventListener('resize',()=>{
    tamTela = window.innerWidth - parseInt(carro.style.width)
})
window.addEventListener('keydown',(e)=>{
    if(e.key == 'ArrowUp'){
        carro.style.width = 10 + parseInt(carro.style.width) + 'px'
        if(parseInt(carro.style.width) > 40){
            console.log(carro.style.width)
            carro.style.height = 10 + parseInt(carro.style.height) + 'px'
        }
        tamTela = window.innerWidth - parseInt(carro.style.width)
    }else if(e.key == 'ArrowDown'){
        carro.style.width = parseInt(carro.style.width) - 10 + 'px'
        carro.style.height = parseInt(carro.style.height) - 10 + 'px'
        tamTela = window.innerWidth - parseInt(carro.style.width)
    }
})