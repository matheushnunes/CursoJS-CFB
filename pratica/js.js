let pres = document.querySelector('#pres')
let niv = document.querySelector('#niv')
let temp = document.querySelector('#temp')

let dados = {
    pres: 0, 
    niv: 0,
    temp: 0,
    set valores(val){
        pres.innerHTML = val.pressão
        niv.innerHTML = val.nivel
        temp.innerHTML = val.temperatura
    },
    get valores{
        return [this.pres]
    }
}

let gerarDados = ()=>{
    fetch('https://cfbcursos--matheushenri348.repl.co')
    .then(res => res.json())
    .then(res =>{
        dados.valores = res
    })
}
let intervalo = setInterval(gerarDados,1000)

