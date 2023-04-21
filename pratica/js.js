import { Ncontato } from "./contatos.js"
const btn = document.querySelector('#btn')

btn.addEventListener('click',()=>{
    const contato = {
      nome: document.querySelector('#nome').value,
      tel: document.querySelector('#tel').value,
      email: document.querySelector('#email').value
  }
  Ncontato(contato)
  

})

