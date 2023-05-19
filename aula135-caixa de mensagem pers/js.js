import {Cxmsg} from "../js-Reaproveitaveis/caixaMsg.js"

const config = {
    cor: '#48f',
    tipo: 'ok', //tipos: ok, sn
    textoSN: ['sim','não'],
    comandoSN: ()=>{}
}
const btnSim = ()=>{
    console.log('Botão sim precionado')
}

document.querySelector("#btnMostrar1")
.addEventListener('click',()=>{
    config.tipo = 'sn'
    Cxmsg.mostrar(config,'CFB Cursos','Curso de JavaScript')
})

document.querySelector("#btnMostrar2")
.addEventListener('click',()=>{
    config.tipo = 'ok'
    config.comandoSN = ()=>{}
    Cxmsg.mostrar(config,'CFB Curassos','Curso fde JavaScript')
})

document.querySelector("#btnMostrar3")
.addEventListener('click',()=>{
    config.tipo = 'sn'
    config.comandoSN = ()=>{btnSim()}
    Cxmsg.mostrar(config,'CFBe Cursos','Curso de cJavaScript')
})