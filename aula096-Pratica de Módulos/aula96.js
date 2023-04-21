import c from './contatos.js'
const res = document.querySelector('#res')
const btn = document.querySelector('#btn')


btn.addEventListener('click',()=>{
    const cont = {
        nome:document.querySelector('#nome').value,
        tel:document.querySelector('#tel').value,
        email:document.querySelector('#email').value
    }
    c.getTodosContatos()
    c.addContato(cont,res)
    
})
