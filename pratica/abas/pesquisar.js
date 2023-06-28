const btnPesq = document.querySelector('#btnPesq')
const pesqTxt = document.querySelector('#pesqTxt')
const tabela = document.querySelector('#tbodyRes')

btnPesq.addEventListener('click',()=>{
    tabela.innerHTML = ''
    const radio = document.querySelector('input[name=pesq]:checked').id
    const endpoint = `http://127.0.0.1:1880/pesquisar/${radio}/${pesqTxt.value}`
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

            td1.innerHTML = e.n_id_contato
            td2.innerHTML = e.s_nome_contato
            td3.innerHTML = e.s_celular_contato
            td4.innerHTML = e.s_email_contato
            td5.innerHTML = e.s_dtNasc_contato
           
            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(td4)
            tr.appendChild(td5)
            tabela.appendChild(tr)
        });
    })
})