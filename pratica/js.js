const res = document.querySelector('#res')
res.innerHTML = 'prossesando...'
resultado = false

const prom = new Promise((res,rej)=>{
    resultado = true
    setTimeout(() => {
        if(resultado){
            res('ok')
        }else{
            rej('erro')
        }
    }, 3000);
    
})
prom.then((ret)=>{
    res.innerHTML = ret
    res.classList.add('ok')
    res.classList.remove('erro')
    console.log(ret)
})
prom.catch((ret)=>{
    res.innerHTML = ret
    res.classList.add('erro')
    res.classList.remove('ok')
})
