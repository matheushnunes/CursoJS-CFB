const caixa1 = document.querySelector('#caixa1')
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']

cursos.map((e,key)=>{
    let novoElemento = document.createElement('div')
    novoElemento.innerHTML = e
    novoElemento.setAttribute('id','c'+key)
    novoElemento.setAttribute('class','curso c1')
    caixa1.appendChild(novoElemento)
    
    let btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute('src','./lixeira.png')
    btn_lixeira.setAttribute('id','btn_lixeira')
    novoElemento.appendChild(btn_lixeira)
    
    btn_lixeira.addEventListener('click',RemoverElemento)
    function RemoverElemento(e){
       caixa1.removeChild(e.target.parentNode)
    }
})




