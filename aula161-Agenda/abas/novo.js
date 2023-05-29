import {Cxmsg} from '../../js-Reaproveitaveis/caixaMsg.js' //caixa de mensagem
const btnGravar = document.querySelector('#btnGravar')
const btnCancelar = document.querySelector('#btnCancelar')
const f_nome = document.querySelector('#f_nome')
const f_celular = document.querySelector('#f_celular')
const f_email = document.querySelector('#f_email')
const f_dataNascimento = document.querySelector('#f_dataNascimento')

btnGravar.addEventListener('click',(e)=>{
    const dados ={
        'f_nome':f_nome.value,
        'f_celular':f_celular.value,
        'f_email':f_email.value,
        'f_dataNascimento':f_dataNascimento.value
    }
    const cabecalho = {
        method:'POST',
        body: JSON.stringify(dados) //transfromas os dados em string
    }
    const endpoint = 'http://127.0.0.1:1880/addcontatos'
    fetch(endpoint,cabecalho)
    .then(res=>{
        if(res.status == 200){
            reset() //caso o fetch dê certo limpa os campos
        }else{
            Cxmsg.mostrar({cor:'red',tipo:'ok'},'Erro','Erro ao gravar nono contato')
        }
    })
});
btnCancelar.addEventListener('click',()=>{
    reset()
})
const reset = ()=>{
    f_nome.value = '';
    f_celular.value = '';
    f_email.value = '';
    f_dataNascimento.value = '';
    f_nome.focus()
}

