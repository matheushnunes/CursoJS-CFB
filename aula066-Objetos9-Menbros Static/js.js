class Npc{
    static alerta = false
    //podem ser definidos em atributos
    constructor(energia){
        this.energia = energia
        this.alerta = false
    }
    info = ()=>{
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta? 'sim':'não')}`)
        console.log('------------------------')
    }
    static alertar = function(){
        Npc.alerta = true
    }//e podem ser definidos em metodos
}
let npc1 = new Npc(89)
let npc2 = new Npc(94)
let npc3 = new Npc(100)

//Npc.alertar() ou 
Npc.alerta = true
//resultam em alerta = true
npc1.info()
npc2.info()
npc3.info()


