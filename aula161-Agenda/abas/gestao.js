import { Cxmsg } from "../../js-Reaproveitaveis/caixaMsg.js";

const dados = document.querySelector('#dados')
const fundoPop = document.querySelector('#fundoPopup')
const btnGravar = document.querySelector('#btnGravar')
const btnCancelar = document.querySelector('#btnCancelar')
let f_id = document.querySelector('#f_id')
let f_nome = document.querySelector('#f_nome')
let f_celular = document.querySelector('#f_celular')
let f_email = document.querySelector('#f_email')
let f_dataNascimento = document.querySelector('#f_dataNascimento')
const PreencherDados = ()=>{
    dados.innerHTML = ''
    let endpoint = `http://127.0.0.1:1880/pesquisarcontatos`;
    fetch(endpoint)
    .then(res => res.json())
    .then(res =>{
        console.log(res)
        res.forEach((e) => {
            //criação da tabela
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

            const imgDelete = document.createElement('img') //botão deletar
            imgDelete.setAttribute('src','../../imagens/delete.svg')
            imgDelete.setAttribute('class','iconeOp')
            const imgEditar = document.createElement('img') //botão editar
            imgDelete.addEventListener('click',(e)=>{
                 //remove da tablela
                removerContato(e.target.parentNode.parentNode.firstChild.innerHTML) //remove do banco de dados
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
PreencherDados();
const removerContato = (id)=>{
    // id: id do elemento a ser excluido
    const endpint = `http://127.0.0.1:1880/deletarcontatos/${id}`
    fetch(endpint)
    .then(res => {
        if(res.status == 200){
            //Rotina para remover
            PreencherDados() //recarrega a tabela novamente com os novos dados
        }
    })
}

btnGravar.addEventListener('click',()=>{
    f_dataNascimento.value = f_dataNascimento.value.replace(/\//ig,'-') //transforma as '/' em '-' para n dar comflito com o endpoint
    if(f_nome.value == ''){
        f_nome.value = ':-:'
    }
    if(f_celular.value == ''){
        f_celular.value = ':-:'
    }
    if(f_dataNascimento.value == ''){
        f_dataNascimento.value = ':-:'
    }
    if(f_email.value == ''){
        f_email.value = ':-:'
    }
    fundoPop.classList.add('ocultar')
    const endpoint = `http://127.0.0.1:1880/atualizarcontatos/${f_id.value}/${f_nome.value}/${f_dataNascimento.value}/${f_email.value}/${f_celular.value}`
    fetch(endpoint)
    .then(res =>{
        if(res.status == 200){
            Cxmsg.mostrar('alerta','Dados atualizados',{cor:'#22f',tipo:'ok'})
            PreencherDados()
        }else{
            Cxmsg.mostrar('Erro','Erro ao atualizar dados')
        }
    })
})
btnCancelar.addEventListener('click',()=>{
    fundoPop.classList.add('ocultar') // adiciona a classe que faz a janela sumir
})
