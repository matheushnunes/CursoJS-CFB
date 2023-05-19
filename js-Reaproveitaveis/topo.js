const head = document.head
const body = document.body

const estiloTopo = 
    "display: flex;"+
    "justify-content: space-between;"+
    "align-items: center;"+
    "background-color: #eee;"

const estiloImg = "style='width:200px'"

const topo = document.createElement('div')
topo.setAttribute('id','topo')
topo.setAttribute('style',estiloTopo)
body.prepend(topo)

const logo = 
    "<div id='logo' class='logo'>"+
        "<img src='../imagens/img.png' title='roblox'"+ estiloImg + 
    "</div>";
topo.innerHTML += logo

const login =
    "<div id='logoin' class='login'"+
        "<p id='matricula'>Matrícula:<span></span></p>"+
        "<p id='nome'>Nome:<span></span></p>"+
    "</div>";
topo.innerHTML += login
