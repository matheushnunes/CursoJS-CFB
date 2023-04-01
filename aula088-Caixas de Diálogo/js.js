const btn_alert = document.querySelector('#btn_alert')
const btn_prompt = document.querySelector('#btn_prompt')
const btn_confirm = document.querySelector('#btn_confirm')

btn_alert.addEventListener('click',(e)=>{
    alert('Olá')
})

btn_prompt.addEventListener('click',(e)=>{
   const nome = prompt('qual o seu nome?','nome')
   if(nome == null){
    console.log('cancelado')
   }else{
    console.log(`Olá ${nome}`)
   }
   
})
btn_confirm.addEventListener('click',(e)=>{
    if(confirm('tudo bem?')){
        console.log('ok')
    }else{
        console.log('cancelar')
    }
})