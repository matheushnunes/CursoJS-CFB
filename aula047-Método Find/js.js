const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btn_pesquisar = document.querySelector('#btn_pesquisar')
const res = document.querySelector('#resultado')

const array = ['HTML','css','javaScript']
p_array.innerHTML = '['+array+']'

btn_pesquisar.addEventListener('click',()=>{
    if(txt_pesquisar.value == ''){
        alert('digite um valor')
    }
    else{
    res.innerHTML = 'Valor não encontrado'
    const procurar = array.map((e,i)=>{
        if(e.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            res.innerHTML = `Valor encontrado: ${e} na possição: ${i}`
            return e
        }
    })
    console.log(procurar)
}
})