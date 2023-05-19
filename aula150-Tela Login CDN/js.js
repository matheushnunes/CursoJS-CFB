import { Cxmsg } from "../js-Reaproveitaveis/caixaMsg.js";

const callbackTrue = ()=>{}

const callbackFalse = ()=>{
    const config ={
        cor: '#800',
        tipo: 'ok',
    }
    Cxmsg.mostrar(config,'Erro','Login não Efetuado! Usuáiro ou senha incorretos')
}
let config = {
    cor:'005',
    img:'../imagens/logo-html.png',
    endpoint: 'https://login--matheushenri348.repl.co'
}
Login.Login(callbackTrue, callbackFalse, config)