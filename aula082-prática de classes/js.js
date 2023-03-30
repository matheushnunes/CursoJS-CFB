const palco = document.querySelector('#palco')
const num_objetos = document.querySelector('#num_objetos')
const txt_qtde = document.querySelector('#txt_qtde')
const btn_add = document.querySelector('#btn_add')
const btn_remover = document.querySelector('#btn_remover')

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight //pega o tamanho do palco
let bolas = []
let numBola = 0


class Bola{
    constructor(arryBolas,palco){
        this.tam = Math.floor(Math.random()*15)+10 //tamaho da bola
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255) //cores aleatorias
        this.px = Math.floor((Math.random())*larguraPalco - this.tam)
        this.py = Math.floor((Math.random())*alturaPalco - this.tam)
        this.velx = Math.floor(Math.random()*2)+0.5 //velocidade da bola
        this.vely = Math.floor(Math.random()*2)+0.5 //entre 0.5 e 2.5
        this.dirx = (Math.random()*10) > 5? 1 : -1
        this.diry = (Math.random()*10) > 5? 1 : -1
        this.palco = palco
        this.arryBolas = arryBolas
        this.id = Date.now()+"_"+Math.floor(Math.random()*10000000000000) //sempre terá um um id diferente
        this.desenhar()
        this.controle = setInterval(this.controlar,10)//chama o 'controlar' a cada 10 milisegundos
        //é oque faz a bola se movimentar
        this.eu = document.getElementById(this.id)
        numBola++
        num_objetos.innerHTML = numBola
    }
    minhaPos = ()=>{
        return this.arryBolas.indexOf(this)
    }
    remover = ()=>{
        clearInterval(this.controle)
        bolas = bolas.filter((b)=>{
            if(b.id!=this.id){
                return b
            }
        })
        this.eu.remove()
        numBola--
        num_objetos.innerHTML = numBola
    }
    desenhar = ()=>{
        const div = document.createElement('div')
        div.setAttribute('id',this.id)
        div.setAttribute('class','bola')
        div.setAttribute('style',`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        this.palco.appendChild(div)
    }
    colisão_bordas = ()=>{
        //caso a bolinha chegue na borda do palco
        //ela tem a direção mudada
        if(this.px+this.tam >= larguraPalco){
            this.dirx = -1
        }else if(this.px <= 0){
            this.dirx = 1
        }
        if(this.py+this.tam >= (alturaPalco)-3.5){
            this.diry = -1
        }else if(this.py <= 0){
            this.diry = 1
        }
    }
    controlar = ()=>{
        this.colisão_bordas()
        this.px += this.dirx*this.velx
        this.py += this.diry*this.vely
        this.eu.setAttribute("style",`left:${this.px}px;top:${this.py}px;width:${this.tam}px;height:${this.tam}px;background-color:rgb(${this.r},${this.g},${this.b})`)
        
        if((this.px > larguraPalco) || (this.py > alturaPalco)){
            this.remover()
        }
    }
}
window.addEventListener('resize',(e)=>{
    //sempre que o tamanho da tela for mudado o evento é acionado
    larguraPalco = palco.offsetWidth
    alturaPalco = palco.offsetHeight
})
btn_add.addEventListener('click',(e)=>{
    const qtde = txt_qtde.value
    for(let i = 0; i < qtde; i++){
        //instanciar novas bolinhas
        bolas.push(new Bola(bolas,palco))
    }
})
btn_remover.addEventListener('click',(e)=>{
    bolas.map((b)=>{
        b.remover()
    })
})