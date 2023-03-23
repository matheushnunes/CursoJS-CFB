const allClass = [...document.getElementsByClassName('curso')]
const classC1 = [...document.getElementsByClassName('c1')]
const classC2 = [...document.getElementsByClassName('c2')]
const destaque = allClass[2]
console.log(destaque)
allClass.map((el)=>{
    el.classList.add('destaque')
})