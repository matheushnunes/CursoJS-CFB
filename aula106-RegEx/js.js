let nome = 'Matheusssss Henrique Nunesss 2005'

console.log(nome.search(/h/ig)) //retorna a posição do primeiro 'h' que ele encontrar

console.log(nome.replace(/e/ig,'3')) //muda todos os 'e' por 3

console.log(nome.match(/e/ig)) //retorna um array com todos os 'e'

console.log(nome.match(/[a-z0-9]/ig)) //retorna um array com todas as letras e todos os números

console.log(nome.match(/\d/ig)) //retorna todos os numeros

console.log(nome.match(/\s/ig)) //retorna todos os espaços

console.log(nome.match(/\b/ig)) //

console.log(nome.match(/s+/ig))

console.log(nome.match(/eu*/ig))




