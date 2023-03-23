const caixa1 = document.querySelector('#caixa1')
const caixa2 = document.querySelector('#caixa2')
const btn = document.querySelector('#btn_transferir')
const todosCursos = [...document.querySelectorAll('.curso')]

todosCursos.map((el)=>{
    el.addEventListener('click',(e)=>{
        const curso = e.target
        curso.classList.toggle('selecionado')//se a classe selecionado ja existir o 'toggle' a remove, caso contrario é criado a classe
    })
})

btn.addEventListener('click', ()=>{
    let cursosSelecionados = [...document.querySelectorAll('.selecionado')]
    let cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]
    cursosSelecionados.map((el)=>{
        caixa2.appendChild(el)
    })
    cursosNaoSelecionados.map((el)=>{
        caixa1.appendChild(el)
    })
})