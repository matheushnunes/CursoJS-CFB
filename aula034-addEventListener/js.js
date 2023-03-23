let cursos = [...document.querySelectorAll('div')]

cursos.map((e)=>{
    e.addEventListener('click',()=>{
        e.classList.add('destaque')
        console.log(e.innerHTML + ' Foi clicado')
    })
})

