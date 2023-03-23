const teclasNum = [...document.querySelectorAll('.num')]
const teclasOp = [...document.querySelectorAll('.op')]
const teclaRes = document.querySelector('.res')
const display = document.querySelector('.display')
const t_on = document.querySelector('#ton')
const t_cl = document.querySelector('#tcl')
const t_igual = document.querySelector('#tigual')
const t_cpy = document.querySelector('#tcpy')
const aba = document.querySelector('#calc_aba')
const calc = document.querySelector('#calc')
const seta_aba = document.querySelector('#seta_aba')

let sinal = false
let decimal = false

teclasNum.forEach((e)=>{
    e.addEventListener('click',(evt)=>{
        sinal = false
        if(evt.target.innerHTML == '.'){
            if(!decimal){
                decimal = true
                if(display.innerHTML == '0'){
                    display.innerHTML = '0.'
                }else{
                    display.innerHTML += evt.target.innerHTML
                }
            } 
        }else{
            if(display.innerHTML == '0'){
                display.innerHTML = ''
            }
            display.innerHTML += evt.target.innerHTML
        }
    })
})
teclasOp.forEach((e)=>{
    e.addEventListener('click',(evt)=>{
        decimal = false
        if(!sinal){
            sinal = true
            if(display.innerHTML == '0'){
                display.innerHTML = ''
            }
            if(evt.target.innerHTML == 'x'){
                display.innerHTML += '*'
            }else{
            display.innerHTML += evt.target.innerHTML
            }
        }
    })
})
t_cl.addEventListener('click',()=>{
    sinal = true
    decimal = false
    display.innerHTML = '0'
})
t_igual.addEventListener('click',()=>{
    sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})
t_cpy.addEventListener('click',()=>{
    navigator.clipboard.writeText(display.innerHTML)
})
aba.addEventListener('click',(e)=>{
    calc.classList.toggle('calc_exibir')
    if(calc.classList.contains('calc_exibir')){
        seta_aba.setAttribute('src','seta_esquerda.png')
    }else{
        seta_aba.setAttribute('src','seta_direita.png')
    }
})
