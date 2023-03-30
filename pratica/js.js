const num_objetos = document.querySelector('#num_objetos')
const txt_qtde = document.querySelector('#txt_qtde')
const btn_add = document.querySelector('#btn_add')
const btn_remover = document.querySelector('#btn_remover')
const palco = document.querySelector('#palco')

let bola = []
let numBolas = 0
let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
class Bola{
    constructor(){
        this.tam = Math.floor(Math.random()*25)+10
        this.r = Math.floor(Math.random()*255)  
        this.g = Math.floor(Math.random()*255)  
        this.b = Math.floor(Math.random()*255)  
        this.posx = Math.floor(Math.random()*(larguraPalco-this.tam)) 
        this.posy = Math.floor(Math.random()*(alturaPalco-this.tam))
        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+0.5
        this.dirx = (Math.floor(Math.random()*2)) >= 1? 1:-1
        this.diry = (Math.floor(Math.random()*2)) >= 1? 1:-1 
        this.controle = setInterval(this.controlar,10)
        this.id = Date.now()+'_'+Math.floor(Math.random()*100000000000)
        this.desenhar()
        this.thisBola = document.getElementById(this.id)
        numBolas++
    }
    desenhar = ()=>{
        let div = document.createElement('div')
        div.setAttribute('id',this.id)
        div.setAttribute('class','bola')
        div.setAttribute('style',`left:${this.posx}px; top:${this.posy}px; width:${this.tam}px; height:${this.tam}px; background-color: rgb(${this.r},${this.g},${this.b})`)
        palco.appendChild(div)
        
    }
    colisãoDasBordas = ()=>{
        if(this.posy >= (alturaPalco - this.tam)-7){
            this.diry = -1
        }else if(this.posy <= 0){
            this.diry = 1
        }
        if(this.posx >= (larguraPalco - this.tam)){
            this.dirx = -1
        }else if(this.posx <= 0){
            this.dirx = 1
        }
    }
    controlar = ()=>{
        this.colisãoDasBordas()
        this.posx += this.dirx * this.velx
        this.posy += this.diry * this.vely
        this.thisBola.setAttribute('style',`left:${this.posx}px; top:${this.posy}px; width:${this.tam}px; height:${this.tam}px; background-color: rgb(${this.r},${this.g},${this.b})`) 
        if(this.posx >= larguraPalco){
            this.thisBola.remove()
        }
        if(this.posy >= alturaPalco){
            this.thisBola.remove() 
        }
        bola = bola.filter((b)=>{
            if(b.id!=this.id){
                return b
            }
        })
        console.log(bola)
    }
}
btn_add.addEventListener('click',()=>{
    for(let c = 0; c < txt_qtde.value; c++){
        bola.push(new Bola())
    }
    const bolas = [...document.querySelectorAll('.bola')]
    num_objetos.textContent = bolas.length
})
btn_remover.addEventListener('click',()=>{
    numBolas = 0
    num_objetos.textContent = 0
    let bola = [...palco.children]
        bola.map((e)=>{
            e.remove()
        })     
    const bolas = [...document.querySelectorAll('.bola')]
    num_objetos.textContent = bolas.length
})
window.addEventListener('resize',()=>{
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
    const bolas = [...document.querySelectorAll('.bola')]
    num_objetos.textContent = bolas.length
})
