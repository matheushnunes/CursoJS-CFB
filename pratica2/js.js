let texto = document.querySelector('#texto')
texto = texto.textContent
let reg = texto.match(/[^\s]/ig)
.join('')
.split('}')
.join('}"+\n')
console.log(reg)