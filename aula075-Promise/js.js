const numero = document.querySelector('#numero')

let promise = new Promise((resolve,reject)=>{
    let resultado = true
    let tempo = 3000 //3 segundos
    setTimeout(()=>{
        if(resultado){
            resolve('Deu tudo certo')
        }else{
            reject('Deu tudo errado')
        }
    },tempo)
})
promise.then((retorno)=>{//esse retorno recebe 'resolve'
    numero.innerHTML = retorno
    numero.classList.remove('erro')
    numero.classList.add('ok')
})
promise.catch((retorno)=>{//esse retorno recebe 'reject'
    numero.innerHTML = retorno
    numero.classList.add('erro')
    numero.classList.remove('ok')
})
//essas linhas acima so serão execultadas quando acabar o timeout 
numero.innerHTML = 'Processando...'

console.log(resultado)
