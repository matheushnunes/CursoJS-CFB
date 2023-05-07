const long = document.querySelector('#long')
const lati = document.querySelector('#lati')

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrarLocalização,erroLocalização)
}else{
    console.log('Erro')
}

function mostrarLocalização(pos){
    long.innerHTML = `longitude: ${pos.coords.longitude}`
    lati.innerHTML = `latiitude: ${pos.coords.latitude}`
}
function erroLocalização(){
    console.log('Erro: Localização')
}