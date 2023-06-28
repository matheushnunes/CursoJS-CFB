const nome = document.querySelector('#nome')
const celular= document.querySelector('#celular')
const email = document.querySelector('#email')
const dtNasc = document.querySelector('#dtNasc')
const btnGravar = document.querySelector('#btnGravar')
const btnCancelar = document.querySelector("#btnCancelar")

btnGravar.addEventListener('click',()=>{
    nome.value = ''
    celular.value = ''
    email.value = ''
    dtNasc.value = ''
    const dados = {
        'nome': nome.value,
        'celular': celular.value,
        'email': email.value,
        'dtNasc': dtNasc.value
    }
    const cabecalho ={
        method: 'POST',
        body: JSON.stringify(dados)
    }
    const endpoint = 'http://127.0.0.1:1880/inserirDados'
    fetch(endpoint,cabecalho)
    .then(res =>{
        console.log(res)
    })
})
btnCancelar.addEventListener('click',()=>{
    nome.value = ''
    celular.value = ''
    email.value = ''
    dtNasc.value = ''
})