const Nave = function(energia){
    this.energia = energia
    this.disparos = 3
}

const n1 = new Nave(100)

Nave.prototype.vidas = 3
Nave.prototype.disparar = function(){
    console.log(this.disparos)
    if(this.disparos > 0){
        this.disparos--
    }
}

n1.disparar()
n1.disparar()
n1.disparar()
n1.disparar()

console.log(Nave)
console.log(n1)
console.log(n1.disparos)
console.log(n1.disparar)