const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btn_pesquisar = document.querySelector('#btn_pesquisar')
const res = document.querySelector('#resultado')

const array = [10,12,14,15,19,16]
p_array.innerHTML = '['+array+']'

    btn_pesquisar.addEventListener('click',()=>{
        const ret  = array.some((e,i)=>{
            if(e < 18){
                res.innerHTML = `array não comforme na posição número: ${i}`
            }
            return e>=18
            //Se estiver pelo menos um elemento em comformidade e retornado 'true'
            //caso todos os elementos forem menor que 18 e retornado 'false'
        })
        if(ret){
            res.innerHTML = 'ok'
        }
        console.log(ret)
    })