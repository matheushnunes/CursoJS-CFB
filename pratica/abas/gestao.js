const tbodyRes = document.querySelector('#tbodyRes')
const janelaEditar = document.querySelector('#fundoJanelaEditar')
const nome = document.querySelector("#nome")
const celular = document.querySelector("#celular")
const email = document.querySelector("#email")
let dtNasc = document.querySelector("#dtNasc")
const btnGravar = document.querySelector('#btnGravar')
const btnCancelar = document.querySelector('#btnCancelar')
let id
const CriarTabela = ()=>{
    tbodyRes.innerHTML = ''
    const endpoint = 'http://127.0.0.1:1880/getDados'
    fetch(endpoint)
    .then(res => res.json())
    .then(res => {
        res.forEach(e => {
            const tr = document.createElement('tr')
            const td1 = document.createElement('td')
            const td2 = document.createElement('td')
            const td3 = document.createElement('td')
            const td4 = document.createElement('td')
            const td5 = document.createElement('td')
            const td6 = document.createElement('td')
            const btnEditar = document.createElement('img')
            const btnDeletar = document.createElement('img')

            td1.innerHTML = e.n_id_contato
            td2.innerHTML = e.s_nome_contato
            td3.innerHTML = e.s_celular_contato
            td4.innerHTML = e.s_email_contato
            td5.innerHTML = e.s_dtNasc_contato
            btnEditar.setAttribute('src','../../imagens/edit.svg')
            btnEditar.setAttribute('class','ico')
            btnEditar.addEventListener('click',Editar)
            btnDeletar.setAttribute('src','../../imagens/delete.svg')
            btnDeletar.setAttribute('class','ico')
            btnDeletar.addEventListener('click',Deletar)
            td6.setAttribute('class','op')

            td6.appendChild(btnEditar)
            td6.appendChild(btnDeletar)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tr.appendChild(td6)
            tbodyRes.appendChild(tr)
        });
    })
}
btnCancelar.addEventListener('click',()=>{
    janelaEditar.classList.add('ocultar')
})
btnGravar.addEventListener('click',()=>{
    dtNasc.value = dtNasc.value.replace(/\//ig,'-')
    const endpoint = `http://127.0.0.1:1880/editarDados/${id}/${nome.value}/${celular.value}/${email.value}/${dtNasc.value}`
    fetch(endpoint)
    .then(res =>{
        if(res.status == 200){
            CriarTabela()
        }
    })
    janelaEditar.classList.add('ocultar')
})

const Editar = (e)=>{
    janelaEditar.classList.remove('ocultar')
    id = e.target.parentNode.parentNode.firstChild.textContent
    let ele = e.target.parentNode.parentNode.children
    nome.value = ele[1].textContent
    celular.value = ele[2].textContent
    email.value = ele[3].textContent
    
    dtNasc.value = ele[4].textContent
    console.log(ele[4].textContent)
}
const Deletar = (e)=>{
    const id = e.target.parentNode.parentNode.firstChild.textContent
    const endpoint = `http://127.0.0.1:1880/deletarDados/${id}`
    fetch(endpoint)
    .then(res => {
        if(res.status == 200){
            CriarTabela()
        }
    })
}
CriarTabela()