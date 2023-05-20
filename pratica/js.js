// import { Login } from "./loginPratica.js"
import { Cxmsg } from "../js-Reaproveitaveis/caixaMsg.js"
const callBackTrue = ()=>{
}
const callBackFalse = ()=>{
    Cxmsg.mostrar({
        tipo: 'ok',
        textoSN: ['ok'],
        cor: '#e00'
    },'Erro','Usuário ou senha incorretos')
}

Login.Login(callBackTrue,callBackFalse)

