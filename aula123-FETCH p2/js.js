const temp = document.querySelector('#p_temp')
const nivel = document.querySelector('#p_nivel')
const press = document.querySelector('#p_press')
const btn_texto = document.querySelector('#btn_texto')

obterDados = ()=>{const endpoint = 'https://cfbcursos.repl.co'
fetch(endpoint,{method:'post'})
//get para consumir dados
//post para enviar dados
.then(res => res.json())
.then(dados => {
    console.log(dados)
    temp.innerHTML = 'temperatura: '+dados.temperatura
    nivel.innerHTML = 'nivel: '+dados.nivel
    press.innerHTML = 'pressão: '+dados.pressao
})}

// let intervalo = setInterval(obterDados,3000) //atualiza os dados a cada 3 segundos

let dados = {
    nome: 'bruno',
    canal: 'CFBCursos',
    curso: 'JavaScript'
}

let cabeçalho = {
    method: 'POST',
    body: JSON.stringify(dados)
}

const gravarDados = () =>{
    const endpoint = 'https://cfbcursos.repl.co'
    fetch(endpoint, cabeçalho)
    .then(res => res.json())
    .then(ret =>{
        console.log(ret)
    })
}

btn_texto.addEventListener('click',(evt) =>{
    gravarDados()
})