// const btnInicio = document.querySelector('#btnInicio')
// const btnNovo = document.querySelector('#btnNovo')
// const btnPesquisar = document.querySelector('#btnPesquisar')
// const btnFiltrar = document.querySelector('#btnFiltrar')
// const btnGestao = document.querySelector('#btnGestao')
// const btnSobre = document.querySelector('#btnSobre')
const frameJanela = document.querySelector('#frameJanela')
const btnAba = document.querySelectorAll('.btnAba')

btnAba[0].addEventListener('click',(e)=>{
    open('./abas/home.html','frameJanela')
    selecionarAba(e.target)
})
btnAba[1].addEventListener('click',(e)=>{
    open('./abas/novo.html','frameJanela')
    selecionarAba(e.target)
})
btnAba[2].addEventListener('click',(e)=>{
    open('./abas/pesquisar.html','frameJanela')
    selecionarAba(e.target)
})
btnAba[3].addEventListener('click',(e)=>{
    open('./abas/filtrar.html','frameJanela')
    selecionarAba(e.target)
})
btnAba[4].addEventListener('click',(e)=>{
    open('./abas/gestao.html','frameJanela')
    selecionarAba(e.target)
})
const selecionarAba = (btn)=>{
    btnAba.forEach(e=>{
        e.classList.remove('abaSelecionada')
    })
    btn.classList.add('abaSelecionada')
}