const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const cursos = ['HTML','CSS','JavaScript','PHP','React','MySQL','ReactNative']
const cursoSelecionado = document.querySelector('#btn_cursoSelecionado')
const removerSelecionado = document.querySelector('#btn_removerSelecionado')
const addAntes = document.querySelector('#btn_addAntes')
const addDepois = document.querySelector('#btn_addDepois')
const nomeCurso = document.querySelector('#nomeCurso')

let indice = 0

const tirarSeleção = ()=>{
    const cursos =[...document.querySelectorAll('div.selecionado')]
        cursos.map((e)=>{
            e.classList.remove('selecionado')
        })
}//função para que haja somente uma div com a classe 'selecionado'

const criarElemento = (curso)=>{
    let newElement = document.createElement('div')
    newElement.setAttribute('class','curso c' + indice)
    newElement.innerHTML = curso
    newElement.addEventListener('click',(e)=>{
        tirarSeleção()
        e.target.classList.toggle('selecionado')  
        //caso não tenha uma classe 'selecionado' o metodo toggle a cria
    })

    return newElement
}

const CursoSelecionado = ()=>{
    const cursos =[...document.querySelectorAll('.selecionado')]
    return cursos[0]
}

cursos.map((e)=>{
    const newElement = criarElemento(e)
    caixa2.appendChild(newElement)
    indice++
})

addAntes.addEventListener('click',(e)=>{  
        if(nomeCurso.value != ''){
            try{
                const newCurso = criarElemento(nomeCurso.value)
                caixa2.insertBefore(newCurso,CursoSelecionado())
            }
            catch{
                alert('Selecione um curso')
            }
        }else{
            alert('Digite o nome do curso')
        }
})

addDepois.addEventListener('click',(e)=>{
        try{
            if(nomeCurso.value != ''){
            const novoCurso = criarElemento(nomeCurso.value)
            caixa2.insertBefore(novoCurso,CursoSelecionado().nextSibling)
            }else{
            alert('Digite o nome do curso')
        }
        }catch{
            alert('Selecionde um curso')
        }
})

cursoSelecionado.addEventListener('click',()=>{
    if(CursoSelecionado() != undefined){
    alert(`curso seleciodado: ${CursoSelecionado().textContent}`)
    }else{
        alert('Selecione o curso')
    }
})

removerSelecionado.addEventListener('click',()=>{
    if(CursoSelecionado() != undefined){
        CursoSelecionado().remove()
    }else{
        alert('Selecione um curso')
    }
})