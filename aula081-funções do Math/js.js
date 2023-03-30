const olhos = [...document.querySelectorAll('.olho')]

let posx_mouse = 0
let posy_mouse = 0
window.addEventListener('mousemove',(e)=>{
    posx_mouse = e.clientX
    posy_mouse = e.clientY
    //posisão do mouse

    const rot = Math.atan2(posy_mouse,posx_mouse) * 180/Math.PI
    //atan2 retorna o valor em radianos
    //e o 'rotate' usa graus
    console.log(rot)
    olhos.forEach((o)=>{
        o.style.transform = 'rotate('+rot+'deg)'
    })
})