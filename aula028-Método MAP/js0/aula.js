let el = document.querySelectorAll('div')
// el.map((e,i) =>{
//     console.log(e)
// })
//ERRO: el.map is not a function
//é preciso transformar o el em uma spred(...)

el = [...el]
el.map((e,i) =>{
    console.log(e.innerHTML)
    e.innerHTML = 'sla'
    console.log(e.innerHTML)
})



    




