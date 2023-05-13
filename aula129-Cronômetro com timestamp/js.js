const timer = document.querySelector('#timer')
const btn_iniciar = document.querySelector('#btn_iniciar')
const btn_parar = document.querySelector('#btn_parar')
const btn_zerar = document.querySelector('#btn_zerar')
const btn_parcial = document.querySelector('#btn_parcial')
const parciais = document.querySelector('#parciais')
const parcial = document.querySelector('#parcial')

let intervalo = null
 
const contador = ()=>{
    const tmpAtual = Date.now()    
    let seg = Math.floor((tmpAtual - tmpIni)/1000)
    timer.innerHTML = converter(seg)
}

const converter = (seg) =>{
    const hora = Math.floor(seg/3600)
    const resto = seg%3600
    const minuto = Math.floor(resto/60)
    const segundo = Math.floor(resto%60)
    const tmpForm = `${hora<10? '0'+hora:hora}:${minuto<10? '0'+minuto:minuto}:${segundo<10? '0'+segundo:segundo}`
    return tmpForm
}

btn_iniciar.addEventListener('click',(e)=>{
    clearInterval(intervalo)
    tmpIni = Date.now()
    intervalo = setInterval(contador,1000)
})
btn_parar.addEventListener('click',(e)=>{
    clearInterval(intervalo)
})
btn_zerar.addEventListener('click',(e)=>{
    let parc = [...document.querySelectorAll('#parcial')]
    for(let c in parc){
        parciais.removeChild(parc[c])
    }
    tmpIni = Date.now()  
    timer.innerHTML = '00:00:00'
})
btn_parcial.addEventListener('click',(e)=>{
    const timer = document.querySelector('#timer').textContent
    let p = document.createElement('p')
    p.setAttribute('id','parcial')
    p.innerHTML = timer
    parciais.appendChild(p)
})  

