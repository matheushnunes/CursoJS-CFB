let corpoTabela = document.querySelector('#corpoTabela')
let janelaEditar = document.querySelector('#janelaEditar')
let janelaView = document.querySelector('#janelaView')
let btnCancelar = document.querySelector('#btnCancelar')
let btnGravar = document.querySelector('#btnGravar')
let endpoint = 'https://produtos--matheushenri348.repl.co'
let tdSelecionado
fetch(endpoint)
.then(res => res.json())
.then(res =>{
    res.forEach(e => {
        let tr = document.createElement('tr')
        tr.setAttribute('class','trTabela')

        let tdId = document.createElement('td')
        tdId.innerHTML = e.id

        let tdPro = document.createElement('td')
        tdPro.innerHTML = e.produto
        
        let tdMar = document.createElement('td')
        tdMar.innerHTML = e.marca

        let tdMod = document.createElement('td')
        tdMod.innerHTML = e.modelo
        
        let tdImg = document.createElement('td')
        
        let fDeletar = document.createElement('img')
        fDeletar.setAttribute('src','../imagens/delete.svg')
        fDeletar.addEventListener('click',(e)=>{
            let linha = e.target.parentElement.parentElement
            linha.remove()
        })

        let fEditar = document.createElement('img')
        fEditar.setAttribute('src','../imagens/edit.svg')
        fEditar.addEventListener('click',(e)=>{
            tdSelecionado = [...e.target.parentElement.parentElement.children]
            janelaEditar.classList.remove('ocultar')
            document.querySelector('#id').value = e.id
            document.querySelector('#produto').value = e.produto
            document.querySelector('#marca').value = e.marca
            document.querySelector('#modelo').value = e.modelo
        })

        let fView = document.createElement('img')
        fView.setAttribute('src','../imagens/eye.svg')
        fView.addEventListener('click',(e)=>{        
            janelaView.classList.remove('ocultar')
            let tdView = [...e.target.parentElement.parentElement.children]
            document.querySelector('#id').value = tdView[0].textContent
            document.querySelector('#produto').value = tdView[1].textContent
            document.querySelector('#marca').value = tdView[2].textContent
            document.querySelector('#modelo').value = tdView[3].textContent
        })
        
        tdImg.appendChild(fDeletar)
        tdImg.appendChild(fEditar)
        tdImg.appendChild(fView)
        tr.appendChild(tdId)
        tr.appendChild(tdPro)
        tr.appendChild(tdMar)
        tr.appendChild(tdMod)
        tr.appendChild(tdImg)
        corpoTabela.appendChild(tr)
    });
})
btnOk.addEventListener('click',()=>{
    janelaView.classList.add('ocultar')
})

btnCancelar.addEventListener('click',()=>{
    janelaEditar.classList.add('ocultar')
})

btnGravar.addEventListener('click',()=>{
    janelaEditar.classList.add('ocultar')
    let idEd = document.querySelector('#idEditar')
    let produtoEd = document.querySelector('#produtoEditar')
    let marcaEd = document.querySelector('#marcaEditar')
    let modeloEd = document.querySelector('#modeloEditar')

    tdSelecionado[0].innerHTML = idEd.value
    tdSelecionado[1].innerHTML = produtoEd.value
    tdSelecionado[2].innerHTML = marcaEd.value
    tdSelecionado[3].innerHTML = modeloEd.value
})


