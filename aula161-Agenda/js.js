const cabecalho = document.querySelector('#cabecalho')
const menu = document.querySelector('#menu')
const btnHome = document.querySelector('#btnHome')
const btnNovo = document.querySelector('#btnNovo')
const btnPesquisar = document.querySelector('#btnPesquisar')
const btnFiltrar = document.querySelector('#btnFiltrar')
const btnGestão = document.querySelector('#btnGestão')
const btnSobre = document.querySelector('#btnSobre')

btnHome.addEventListener('click',(e)=>{
    selecionarAba(e.target,'./abas/home.html')
})
btnNovo.addEventListener('click',(e)=>{
    selecionarAba(e.target,'./abas/novo.html')
})
btnPesquisar.addEventListener('click',(e)=>{
    selecionarAba(e.target,'./abas/pesquisar.html')
})
btnFiltrar.addEventListener('click',(e)=>{
    selecionarAba(e.target,'./abas/filtrar.html')
})
btnGestão.addEventListener('click',(e)=>{
    selecionarAba(e.target,'./abas/gestao.html')
})
btnSobre.addEventListener('click',(e)=>{
    selecionarAba(e.target,'./abas/sobre.html')
})

const selecionarAba = (e,url)=>{
    const abas = [...document.querySelectorAll(".aba")]
    abas.forEach(e=>{
        e.classList.remove('abaSelecionada')
    });
    e.classList.add('abaSelecionada')
    open(url,'ifPrincipal')//nome do arquivo & onde vai o arquivo
}