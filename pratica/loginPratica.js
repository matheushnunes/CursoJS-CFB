class Login {
    static config = {
        cor: '44f',
        endpoint: 'https://login--matheushenri348.repl.co',
    }
    static Login = (loginTrue, loginFalse, config)=>{
        const html =
    '<div class="fundoLogin">'+
        '<div class="baseLogin">'+
           ' <div class="elementosLogin">'+
                '<div class="campoLogin">'+
                    '<label for="username">username</label>'+
                    '<input type="text" name="username" id="username">'+
                    '<label for="senha">Senha</label>'+
                    '<input type="password" name="senha" id="senha">'+
                '</div>'+
                '<div class="btnLogin">'+
                    '<button id="btnLogin">Login</button>'+
                    '<button id="btnCancelar">Cancelar</button>'+
               '</div>'+
            '</div>'+
            '<div class="logoLogin">'+
                '<img src="../imagens/logo-html.png" alt="logo html">'+
            '</div>'+
        '</div>'+
    '</div>'

    const style = 
    "<style>"+
    ".fundoLogin{display:flex;justify-content:center;align-items:center;width:100%;height:100vh;position:absolute;top:0px;left:0px;background-color:rgba(0,0,0,0.712);}"+
    ".baseLogin{display:flex;justify-content:center;align-items:stretch;width:50%;}"+
    ".elementosLogin{display:flex;justify-content:center;align-items:flex-start;flex-direction:column;width:50%;background-color:#eee;padding:10px;border-radius:10px0px0px10px;}"+
    ".logoLogin{display:flex;justify-content:center;align-items:center;width:50%;background-color:#bbb;border-radius:0px10px10px0px;}"+
    ".logoLogin img{width:90px;}"+
    ".campoLogin{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;margin-bottom:10px;}"+
    ".campoLogin label{font-size:18px;}"+
    ".campoLogin input{font-size:18px;padding:5px;background-color:white;border-radius:5px;width:100%;}"+
    ".btnLogin{display:flex;justify-content:space-around;align-items:center;width:100%;}"+
    `.btnLogin button{cursor:pointer;background-color:#${this.config.cor};color:white;border-radius:5px;padding:10px;width:90px;}`+
    "</style>"
    
    document.body.innerHTML += html
    document.head.innerHTML += style

    document.querySelector('#btnLogin')
    .addEventListener('click',()=>{
        let mat = document.querySelector('#username').value
        let pass = document.querySelector('#senha').value
        fetch(`${this.config.endpoint}/?matricula=${mat}&senha=${pass}`)
        .then(res => res.json())
        .then(res =>{
            console.log(res)
            if(res == null){
                loginFalse()
            }else{
                sessionStorage.setItem('matricula',mat)
                sessionStorage.setItem('nome',res.nome)
                sessionStorage.setItem('acesso',res.acesso)
                loginTrue()
            }
        })
    })
    document.querySelector('#btnCancelar')
    .addEventListener('click',()=>{
        this.fecharLogin()
    })
    }
    static fecharLogin = ()=>{
       let login = document.querySelector('.fundoLogin')
       login.remove()
    } 

    
}
export {Login}