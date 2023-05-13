const texto = document.querySelector('#texto')

const endponit = 'texto.txt'

fetch(endponit)
.then(res => res.text())
.then(res => {
    res = JSON.parse(res)
    console.log(res)
}
)