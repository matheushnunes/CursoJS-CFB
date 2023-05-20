import { Login } from "./login.js";
import { Cxmsg } from "../js-Reaproveitaveis/caixaMsg.js"
const callbackTrue = ()=>{
    
}
const callbackFalse = ()=>{
    const config ={
        cor: '#800',
        tipo: 'ok',
    }
    Cxmsg.mostrar(config,'Erro','Login não Efetuado! Usuáiro ou senha incorretos')
}
let config ={
    endpoint: 'https://login--matheushenri348.repl.co',
    img: '../imagens/logo-html.png',
    cor: '000'
}
Login.Login(callbackTrue, callbackFalse, config)