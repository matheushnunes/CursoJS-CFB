import { Login } from "../js-Reaproveitaveis/login.js";

const callbackTrue = ()=>{}

const callbackFalse = ()=>{
    const config ={
        cor: '#800',
        tipo: 'ok',
    }
    Cxmsg.mostrar(config,'Erro','Login não Efetuado! Usuáiro ou senha incorretos')
}
Login.Login(callbackTrue, callbackFalse)