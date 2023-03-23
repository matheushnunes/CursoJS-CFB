const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
const cursoSelecionado = document.querySelector('#btn_cursoSelecionado')
const removerSelecionado = document.querySelector('#btn_removerSelecionado')
const addAntes = document.querySelector('#btn_addAntes')
const addDepois = document.querySelector('#btn_addDepois')
const nomeCurso = document.querySelector('#nomeCurso')

const criarElemento = (curso)=>{
    let newElement = document.createElement('div')
    newElement.setAttribute('class','curso c1')
    newElement.innerHTML = curso

    let radio = document.createElement('input')
    radio.setAttribute('type','radio')
    radio.setAttribute('name','curso')

    let comandos = document.createElement('div')
    comandos.setAttribute('id','comandos')

    comandos.appendChild(radio)
    newElement.appendChild(comandos)

    return newElement
}

const RadioSelecionado = ()=>{
    let todosRadios = [...document.querySelectorAll('input[type = radio]')]
    try{
        let radioSelecionado = todosRadios.filter((e)=>{
            return e.checked
        })
        return radioSelecionado[0]
    }catch{
        alert('Selecione um curso')
    }
    
}

cursos.map((e)=>{
    const newElement = criarElemento(e)
    caixa2.appendChild(newElement)
})

addAntes.addEventListener('click',(e)=>{ 
    let radioSelecionado = RadioSelecionado() 
        if(nomeCurso.value != ''){
            try{
                radioSelecionado = radioSelecionado.parentNode.parentElement
                const newCurso = criarElemento(nomeCurso.value)
                caixa2.insertBefore(newCurso,radioSelecionado)
            }
            catch{
                alert('Selecione um curso')
            }
        }else{
            alert('Digite o nome do curso')
        }
})

addDepois.addEventListener('click',(e)=>{
    let rs = RadioSelecionado()
        try{
            if(nomeCurso.value != ''){
            rs = rs.parentNode.parentNode.nextSibling
            const novoCurso = criarElemento(nomeCurso.value)
            caixa2.insertBefore(novoCurso,rs)
        }else{
            alert('Digite o nome do curso')
        }
        }catch{
            alert('Selecionde um curso')
        }
})
cursoSelecionado.addEventListener('click',()=>{
    const radioSelecionado = RadioSelecionado()
    if(radioSelecionado != undefined){
    let rs = radioSelecionado.parentElement.previousSibling.textContent
    alert(`curso seleciodado: ${rs}`)
}
})

removerSelecionado.addEventListener('click',()=>{
    const radioSelecionado = RadioSelecionado()
    if(radioSelecionado != undefined){
    let rs = radioSelecionado.parentNode.parentNode
    rs.remove()
    }
    
})