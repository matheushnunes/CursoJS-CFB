const configDgv = {
    endpoint: 'https://produtos--matheushenri348.repl.co', //api onde estão os produdos
    idDiv: "dgvDados",
}
let idLinha
const dgv = (configDgv) =>{
    let id = 1
    const dgvDados = document.getElementById('dvgDados')
    fetch(configDgv.endpoint)
    .then(res => res.json())
    .then(res =>{
        res.forEach(e => {
           const dgvLinha = document.createElement('div') 
           dgvLinha.setAttribute('class','dgvLinha')
           dgvLinha.setAttribute('id',id)
           id++

           const c1 = document.createElement('div')
           c1.setAttribute('class','coluna c1')
           c1.setAttribute('id','id')
           c1.innerHTML = e.id;
           dgvLinha.appendChild(c1)

           const c2 = document.createElement('div')
           c2.setAttribute('class','coluna c3')
           c2.setAttribute('id','produto')
           c2.innerHTML = e.produto;
           dgvLinha.appendChild(c2)
           
           const c3 = document.createElement('div')
           c3.setAttribute('class','coluna c3')
           c3.setAttribute('id','marca')
           c3.innerHTML = e.marca;
           dgvLinha.appendChild(c3)
           
           const c4 = document.createElement('div')
           c4.setAttribute('class','coluna c3')
           c4.setAttribute('id','modelo')
           c4.innerHTML = e.modelo;
           dgvLinha.appendChild(c4)

           const c5 = document.createElement('div')
           c5.setAttribute('class','coluna c2')
           dgvLinha.appendChild(c5)

           const imgDel = document.createElement('img')
           imgDel.setAttribute('class','dgvIco')
           imgDel.setAttribute('src','../imagens/delete.svg')
           imgDel.addEventListener('click',(e)=>{
                let linha = e.target.parentElement.parentElement
                linha.remove()
           })
           c5.appendChild(imgDel)
           
           const imgEditar = document.createElement('img')
           imgEditar.setAttribute('class','dgvIco')
           imgEditar.setAttribute('id','imgEditar')
           imgEditar.setAttribute('src','../imagens/edit.svg')
           
            imgEditar.addEventListener('click',(e)=>{
                document.querySelector('#janelaEditar')
                .classList.remove('ocultar')
                idLinha = e.target.parentNode.parentNode.id //id do produto
            })

           c5.appendChild(imgEditar)
           
           const imgEye = document.createElement('img')
           imgEye.setAttribute('class','dgvIco')
           imgEye.setAttribute('src','../imagens/eye.svg')
           imgEye.addEventListener('click',(e)=>{
                document.querySelector('.janelaView').classList.remove('ocultar')
                const produto =[...e.target.parentNode.parentNode.children] //array com as especificações do produto
                //quersSelectors div janela view
                document.querySelector('#idView').value = produto[0].textContent
                document.querySelector('#marcaView').value = produto[1].textContent
                document.querySelector('#produtoView').value = produto[2].textContent
                document.querySelector('#modeloView').value = produto[3].textContent
           })
           c5.appendChild(imgEye)
           dgvDados.append(dgvLinha)
        });
        
    })
}
let janelaEditar = document.querySelector('#janelaEditar')
dgv(configDgv)

document.querySelector('#btn_ok')//botão ok da janela visualizar
.addEventListener('click',(e)=>{
    document.querySelector('.janelaView')
    .classList.add('ocultar') //adiciona uma classe que some com a janala quando o botão é clicado
})

document.querySelector('#btn_cancelar')//botão cancelar da janela editar
.addEventListener('click',()=>{
    janelaEditar.classList.add('ocultar')
})

document.querySelector('#btn_gravar')//botão gravar da janela editar
.addEventListener('click',(e)=>{
    janelaEditar.classList.add('ocultar')
    let linha = document.getElementById(idLinha)
    linha.children[0].innerHTML = document.querySelector('#idEditar').value
    linha.children[1].innerHTML = document.querySelector('#produtoEditar').value
    linha.children[2].innerHTML = document.querySelector('#marcaEditar').value 
    linha.children[3].innerHTML = document.querySelector('#modeloEditar').value
})
