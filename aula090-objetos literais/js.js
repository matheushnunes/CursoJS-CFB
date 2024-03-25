const objetos = document.querySelector('.objetos')
  
const pc = {
    cpu: 'i9',
    gpu: 'RTX 4090',
    ram: '64gb',
    info: function(){
        console.log(`CPU: ${this.cpu}`)
        console.log(`GPU: ${this.ram}`)
        console.log(`HD.: ${this.hd}`)
    }
}
pc['monitor'] = '23pol'
pc.hd = '1tb'

console.log(pc.gpu)
//ou
console.log(pc['gpu'])

const c1 = Object.assign({},pc)
c1.info()

const c2 = Object.create(pc)
console.log(c2.cpu)

c2.info()

const o1 = {objt1: '1'}
const o2 = {objt2: '2'}
const o3 = {objt3: '3'}
const o4 = Object.assign(o1,o2,o3)
console.log(o4)

delete(pc.ram)
console.log(pc)

const pcs = [
    {
        cpu: 'i9',
        gpu: 'RTX 4090',
        ram: '64gb' 
    },
    {
        cpu: 'i7',
        gpu: 'RTX 2060',
        ram: '32gb' 
    },
    {
        cpu: 'i5',
        gpu: 'GTX 1660TI',
        ram: '16gb' 
    }
]
pcs.forEach((c)=>{
    const div = document.createElement('div')
    div.innerHTML = ` ${c.cpu}</br> ${c.gpu}</br> ${c.ram}`
    div.setAttribute('class','computador')
    objetos.appendChild(div)
})

