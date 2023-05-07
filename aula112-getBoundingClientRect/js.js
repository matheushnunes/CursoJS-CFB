const q1 = document.querySelector("#q1")
const q2 = document.querySelector("#q2")
const posx = document.querySelector('#posx')
const posy = document.querySelector('#posy')
const largura = document.querySelector('#largura')
const altura = document.querySelector('#altura')

const info = (e)=>{
    let Rect = e.getBoundingClientRect()
    posx.innerHTML = `posx: ${parseInt(Rect.x)}`
    posy.innerHTML = `posy: ${parseInt(Rect.y)}`
    largura.innerHTML = `largura: ${parseInt(Rect.width)}`
    altura.innerHTML = `altura: ${parseInt(Rect.height)}`
}
q1.accessKey = 'b'
q2.accessKey = 'n'
q1.addEventListener('click',(el)=>{
    console.log('q1')
    info(el.target)
})
q2.addEventListener('click',(el)=>{
    info(el.target)
    console.log('q2')
})