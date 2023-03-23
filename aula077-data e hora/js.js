const data = new Date()
const div = document.querySelector('#div')
const div_relogio = document.querySelector('.relogio')
//console.log(Date.now()) //TimeStenp

let dia = data.getDate()
let mes = data.getMonth()

class Hora2digitos{
    getHora(hora){
        if(hora < 10){
           return hora = '0'+hora
        }else{
            return hora = hora
        }
    }
}

const hd = new Hora2digitos()
const hm = new Hora2digitos()
dia = hd.getHora(dia)
mes = hm.getHora(mes)

const data_r = `${dia}/${mes}/${data.getFullYear()}`
div.innerHTML = data_r

const relogio = ()=>{
    const data = new Date()
    const hh = new Hora2digitos()
    let hora = hh.getHora(data.getHours())
    let minuto = hh.getHora(data.getMinutes())
    let segundo = hh.getHora(data.getSeconds())
    div_relogio.innerHTML = `${hora}:${minuto}:${segundo}`
}
const intervalo = setInterval(relogio,1000) //a cada segundo o 'setInterval' chama a função 'relogio'


