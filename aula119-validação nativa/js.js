const nome = document.querySelector('#nome')
const nota = document.querySelector('#nota')
const f_msg = document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener('click',(e)=>{
   let msg = null
    if(nota.validity.valueMissing){
        msg = 'esse campo é obrigatório'
        console.log('1')
    }else if(nota.validity.rangeOverFlow){
        msg = 'nota menor que 0'
        console.log('2')
    }else if(nota.validity.rangeUnderFlow){
        msg = 'nota maior que 10'
        console.log('3')
    }
    f_msg.innerHTML =  msg
    e.preventDefault()//não permite o envio do formulario
})