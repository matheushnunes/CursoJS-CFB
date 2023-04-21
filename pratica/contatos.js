import c from  "./dados.js"
const res = document.querySelector('#res')

const Ncontato = (novoContato)=>{
    const div = document.createElement('div')
    div.setAttribute('class','contato')
    
    const nome = document.createElement('p')
    nome.innerHTML = novoContato.nome
    
    const tel = document.createElement('p')
    tel.innerHTML = novoContato.tel

    const email = document.createElement('p')
    email.innerHTML = novoContato.email

    div.appendChild(nome)
    div.appendChild(tel)
    div.appendChild(email)
    res.appendChild(div)
    
}
export {Ncontato}