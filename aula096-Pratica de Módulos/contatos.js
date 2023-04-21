import { contatos } from "./bancoContatos.js"

let contato = {
    getTodosContatos: function(){
        return contatos
    },
    getContato: function(i_cont){
        return contatos[i_cont]
    },
    addContato: function(novoContato,destinoDOM){
        contatos.push(novoContato)
        destinoDOM.innerHTML = ''
        contatos.forEach((c,i)=>{
            const div = document.createElement('div')
            div.setAttribute('class','contato')
            console.log(contatos)
            const del = document.createElement('img')
            del.setAttribute('src','lixeira.png')
            del.setAttribute('class','lixeira')
            del.addEventListener('click',(e)=>{
                const target = e.target.parentNode.parentNode
                target.remove()
                contatos.splice(i,1)
                console.log(contatos)
            })
            
            const p_nome = document.createElement('p')
            p_nome.innerHTML = c.nome
            
            const p_tel = document.createElement('p')
            p_tel.innerHTML = c.tel
            
            const p_email = document.createElement('p')
            p_email.innerHTML = c.email
            
            p_nome.appendChild(del)
            div.appendChild(p_nome)
            div.appendChild(p_tel)
            div.appendChild(p_email)
            destinoDOM.appendChild(div)
        }) 
    },
    excluirContato: function(){
        alert('ok')
    }
}
export default contato