let temp = document.querySelector('#temp')
let nivel = document.querySelector('#nivel')
let press = document.querySelector('#press')
let btn_enviar = document.querySelector('#btn_enviar')

const obterDados = ()=>{
    fetch('http://127.0.0.1:1880/cfb')
    .then(res => res.json())
    .then(dados =>{
        temp.innerHTML = `Temperatura: ${dados.temperatura}`
        nivel.innerHTML = `Nivel: ${dados.nivel}`
        press.innerHTML = `Pressão: ${dados.pressao}`
    })
}

let Ndados = {
    nome: 'Matheus',
    idade: 18
}
const enviarDados = ()=>{
    fetch('http://127.0.0.1:1880/gravar',{
        method: 'POST',
        body:JSON.stringify(Ndados)
    })
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)
    })
}

btn_enviar.addEventListener('click',enviarDados)
