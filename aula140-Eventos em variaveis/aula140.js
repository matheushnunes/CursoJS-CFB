const tmp = document.querySelector('#tmp')
const nvl = document.querySelector('#nvl')
const prs = document.querySelector('#prs')

let dados = {
    _temperatura: 0,
    _pressao: 0,
    _nivel: 0,
    set valores(val){
        tmp.innerHTML = val.temperatura
        nvl.innerHTML = val.pressão
        prs.innerHTML = val.nivel
    },
    get valores(){
        return [this._temperatura, this._pressao, this._nivel]
    }
}
const buscarDados = ()=>{
    const endpoint = 'https://cfbcursos--matheushenri348.repl.co' 
    fetch(endpoint)
    .then(res => res.json())
    .then(res =>{
        dados.valores = res//set
    })
}
let intervalo = setInterval(buscarDados,1000)
console.log(dados.valores)//get
