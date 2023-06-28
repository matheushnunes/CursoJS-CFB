import { Cxmsg } from "../../js-Reaproveitaveis/caixaMsg.js";

const dados = document.querySelector('#dados')
const fundoPop = document.querySelector('#fundoPopup')
const btnGravar = document.querySelector('#btnGravar')
const btnCancelar = document.querySelector('#btnCancelar')
const f_id = document.querySelector('#f_id')
const f_nome = document.querySelector('#f_nome')
const f_celular = document.querySelector('#f_celular')
const f_email = document.querySelector('#f_email')
const f_dataNascimento = document.querySelector('#f_dataNascimento')
const btnFiltrar = document.querySelector('#btnFiltrar')
const f_filtroNome = document.querySelector('#f_filtroNome')

const PreencherDados = (endpoint)=>{
    dados.innerHTML = ''
    fetch(endpoint)
    .then(res => res.json())
    .then(res =>{
        res.forEach((e) => {
            const tr = document.createElement('tr')
            const td1 = document.createElement('td')
            td1.innerHTML = e.n_contato_contato
            const td2 = document.createElement('td')
            td2.innerHTML = e.s_nome_contato
            const td3 = document.createElement('td')
            td3.innerHTML = e.dt_dtnasci_contato
            const td4 = document.createElement('td')
            td4.innerHTML = e.s_email_contato
            const td5 = document.createElement('td')
            td5.innerHTML = e.s_celular_contato
            
            const td6 = document.createElement('td')
            td6.setAttribute('class','op')

            const imgDelete = document.createElement('img')
            imgDelete.setAttribute('src','../../imagens/delete.svg')
            imgDelete.setAttribute('class','iconeOp')
            const imgEditar = document.createElement('img')
            imgDelete.addEventListener('click',(e)=>{
                e.target.parentNode.parentNode.remove()
                removerContato(e.target.parentNode.parentNode.firstChild.innerHTML)
            })

            imgEditar.setAttribute('src','../../imagens/edit.svg')
            imgEditar.setAttribute('class','iconeOp')
            imgEditar.addEventListener('click',(e)=>{
                fundoPop.classList.remove('ocultar')
                const dados = e.target.parentNode.parentNode.childNodes
                console.log(dados[0].textContent)
                f_id.value = dados[0].textContent
                f_nome.value = dados[1].textContent
                f_dataNascimento.value = dados[2].textContent
                f_email.value = dados[3].textContent
                f_celular.value = dados[4].textContent
            })

            td6.appendChild(imgDelete)
            td6.appendChild(imgEditar)
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tr.appendChild(td6)
            dados.appendChild(tr)
        })
    })
};
PreencherDados('http://127.0.0.1:1880/pesquisarcontatos');
const removerContato = (id)=>{
    const endpint = `http://127.0.0.1:1880/deletarcontatos/${id}`
    fetch(endpint)
    .then(res => {
        if(res.status == 200){
            //Rotina para remover
            PreencherDados('http://127.0.0.1:1880/pesquisarcontatos')
        }
    })
}
btnFiltrar.addEventListener('click',(e)=>{
    if(f_filtroNome.value == ''){
        PreencherDados('http://127.0.0.1:1880/pesquisarcontatos');
        console.log('ok')
    }else{
        PreencherDados(`http://127.0.0.1:1880/filtrar/${f_filtroNome.value}`);
    }
})


