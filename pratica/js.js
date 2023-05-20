// import { Login } from "./loginPratica.js"
import { Cxmsg } from "../js-Reaproveitaveis/caixaMsg.js"
const callBackTrue = ()=>{
}
const callBackFalse = ()=>{
    Cxmsg.mostrar({
        tipo: 'ok',
        textoSN: ['ok'],
        cor: '#e00',
        endpoint: 'https://login--matheushenri348.repl.co'
    },'Erro','Usuário ou senha incorretos')
}

Login.Login(callBackTrue,callBackFalse)

