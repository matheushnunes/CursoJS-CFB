import { Cxmsg } from "../../js-Reaproveitaveis/caixaMsg.js";
const btnPesq = document.querySelector('#btnPesq');
const f_txtPesq = document.querySelector('#f_txtPesq');
const tbody = document.querySelector('#tbody')

btnPesq.addEventListener('click',(e)=>{
    tbody.innerHTML = ''
    const valorPesq = f_txtPesq.value

    if(valorPesq == ''){
        Cxmsg.mostrar('Erro','Digite a pesquisa');
        f_txtPesq.focus();
        return;
    }
    let inputSelecionado = document.querySelector("input[name=f_pesq]:checked").value;
    let endpoint = `http://127.0.0.1:1880/pesquisarcontatos/${inputSelecionado}/${valorPesq}`;
    fetch(endpoint)
    .then(res => res.json())
    .then(res =>{
        res.forEach((e) => {
            const tr = document.createElement('tr')
            const tbody = document.querySelector('tbody')
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
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tbody.appendChild(tr)
        })
    })
})