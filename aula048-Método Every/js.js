const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btn_pesquisar = document.querySelector('#btn_pesquisar')
const res = document.querySelector('#resultado')

const array = [21,43,23,19,12,24,22]
p_array.innerHTML = '['+array+']'

    btn_pesquisar.addEventListener('click',()=>{
        const ret  = array.every((e,i)=>{
            if(e < 18){
                res.innerHTML = `array não comforme na posição número: ${i}`
            }
            return e>=18
            //casso tenha algum numero menor do que 18 e retornado 'false'
            //caso contrario e retornado ‘true’
        })
        if(ret){
            res.innerHTML = 'ok'
        }
        console.log(ret)
    })