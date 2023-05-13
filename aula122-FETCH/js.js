const endpoint = 'https://cfbcursos.repl.co/'
fetch(endpoint) //retorna uma promice
.then(res => res.text())
.then(dados => {
    console.log(dados)
})