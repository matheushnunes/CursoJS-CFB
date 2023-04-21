const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btn_reduzir = document.querySelector('#btn_reduzir')
const res = document.querySelector('#resultado')

const array = [1,2,3,4,5]
let ret = []
let atu = []
let dob = []
p_array.innerHTML = '['+array+']'

    btn_reduzir.addEventListener('click',()=>{
        const arr = array.reduce((retorno,atual,pos)=>{
            atu.push(atual)
            dob.push(atual*2)
            ret.push(retorno)
            console.log(retorno)
            console.log(atual)
            console.log(pos)
            console.log('-------------------')
            return retorno+atual
           
        })
        res.innerHTML = '</br>'+arr+'</br>'+atu+'</br>'+dob+'</br>'+ret+'</br>'
    })