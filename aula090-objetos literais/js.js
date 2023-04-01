const objetos = document.querySelector('.objetos')
  
const pc = {
    cpu: 'i9',
    gpu: 'RTX 4090',
    ram: '64gb'
}
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
objetos.innerHTML = JSON.stringify(pc)
console.log(pc)
