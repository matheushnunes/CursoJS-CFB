const caixa1 = document.querySelector('#caixa1')
const cs = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click',()=>{
    console.log('click')
})
cs.map((el)=>{
    el.addEventListener('click',(e)=>{
        e.stopPropagation()
    })
})
