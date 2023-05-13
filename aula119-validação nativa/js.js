const nome = document.querySelector('#nome')
const nota = document.querySelector('#nota')
let f_msg = document.querySelector('#f_msg')

document.querySelector('#btn_validar').addEventListener('click',(e)=>{
    e.preventDefault()
    let msg = null

    if(nota.validity.valueMissing){
        msg = 'Este campo é obrigatorio!'
    }else if(nota.validity.rangeOverflow){
        msg = 'Nota muito alta'
    }else if(nota.validity.rangeUnderflow){
        msg = 'Nota muito baixa'
    }
    f_msg.innerHTML = msg

    let estadoValidação = nota.validity
    console.log(estadoValidação)

    // if(estadoValidação.valueMissing){
    //    nota.setCustomValidity('Este campo é obrigatorio!')
    // }else if(estadoValidação.rangeOverflow){
    //     nota.setCustomValidity('Nota muito alta!')
    // }else if(estadoValidação.rangeUnderflow){
    //     nota.setCustomValidity('Nota muito baixa')
    // }
    // nota.reportValidity()
    // // f_msg.innerHTML = nota.validationMessage
})