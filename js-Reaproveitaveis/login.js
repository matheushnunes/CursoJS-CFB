class Login{

    static logado = false;
    static matLogado = null;
    static nomeLogado = null;
    static acessoLogado = null;
    static estiloCss = null;
    static callbackTrue = null;
    static callbackFalse = null;
    static config = {
        cor:'048',
        img:'../imagens/logo-html.png',
        endpoint:null //https://login--matheushenri348.repl.co
    };
    static Login =(callbackTrue, callbackFalse, config = null)=>{
        if(config!=null){
            this.config = config;
        }

        this.callbackTrue = ()=>{callbackTrue()};
        this.callbackFalse = ()=>{callbackFalse()};
        this.estiloCss =
        ".fundoLogin{display:flex;justify-content:center;align-items:center;width:100%;height:100vh;position:absolute;top:0px;left:0px;background-color:rgba(0,0,0,0.712);}"+
        ".baseLogin{display:flex;justify-content:center;align-items:stretch;width:50%;}"+
        ".elementosLogin{display:flex;justify-content:center;align-items:flex-start;flex-direction:column;width:50%;background-color:#eee;padding:10px;border-radius:10px0px0px10px;}"+
        ".logoLogin{display:flex;justify-content:center;align-items:center;width:50%;background-color:#bbb;border-radius:0px10px10px0px;}"+
        ".logoLogin img{width:90px;}"+
        ".campoLogin{display:flex;justify-content:flex-start;align-items:flex-start;flex-direction:column;margin-bottom:10px;}"+
        ".campoLogin label{font-size:18px;}"+
        ".campoLogin input{font-size:18px;padding:5px;background-color:white;border-radius:5px;}"+
        ".btnLogin{display:flex;justify-content:space-around;align-items:center;width:100%;}"+
        `.btnLogin button{cursor:pointer;background-color:#${this.config.cor};color:white;border-radius:5px;padding:10px;width:90px;}`;
        const estilo = document.createElement('style');
        estilo.setAttribute('id','estiloLogin');
        estilo.setAttribute('rel','stylesheet');
        estilo.setAttribute('type','text/css');
        estilo.innerHTML = this.estiloCss;
        document.head.appendChild(estilo);
        
        const fundoLogin = document.createElement('div');
        fundoLogin.setAttribute('id','fundoLogin');
        fundoLogin.setAttribute('class','fundoLogin');
        document.body.prepend(fundoLogin);

        const baseLogin = document.createElement('div');
        baseLogin.setAttribute('id','baseLogin');
        baseLogin.setAttribute('class','baseLogin');
        fundoLogin.appendChild(baseLogin);
        
        const elementosLogin = document.createElement('div');
        elementosLogin.setAttribute('id','elementosLogin');
        elementosLogin.setAttribute('class','elementosLogin');
        baseLogin.appendChild(elementosLogin);

        const campoLoginUsername = document.createElement('div');
        campoLoginUsername.setAttribute('id','campoLoginUsername');
        campoLoginUsername.setAttribute('class','campoLogin');
        elementosLogin.appendChild(campoLoginUsername)

        const labelUsername = document.createElement('label');
        labelUsername.innerHTML = 'Username';
        campoLoginUsername.appendChild(labelUsername);

        const inputUsername = document.createElement('input');
        inputUsername.setAttribute('id','f_username');
        inputUsername.setAttribute('type','text');
        inputUsername.setAttribute('name','f_username');
        campoLoginUsername.appendChild(inputUsername);

        const labelSenha = document.createElement('label');
        labelSenha.innerHTML = 'Senha';
        campoLoginUsername.appendChild(labelSenha);

        const inputSenha = document.createElement('input');
        inputSenha.setAttribute('id','f_senha');
        inputSenha.setAttribute('type','password');
        inputSenha.setAttribute('name','f_senha');
        campoLoginUsername.appendChild(inputSenha);

        const btnDivLogin = document.createElement('div');
        btnDivLogin.setAttribute('class','btnLogin');
        elementosLogin.appendChild(btnDivLogin);

        const btnLogin = document.createElement('button');
        btnLogin.setAttribute('id','btn_login');
        btnLogin.innerHTML = 'Login';
        btnLogin.addEventListener('click',()=>{
            if(this.verificarLogin()){
                this.fechar();
            }else{
                
            }
        })
        btnDivLogin.appendChild(btnLogin);

        const btnCancelar = document.createElement('button');
        btnCancelar.setAttribute('id','btn_cancelar');
        btnCancelar.innerHTML = 'Cancelar';
        btnCancelar.addEventListener('click',()=>{
            this.fechar();
        })
        btnDivLogin.appendChild(btnCancelar);

        const logoLogin = document.createElement('div');
        logoLogin.setAttribute('id','logoLogin');
        logoLogin.setAttribute('class','logoLogin');
        baseLogin.appendChild(logoLogin);

        const imgLogo = document.createElement('img');
        imgLogo.setAttribute('src',this.config.img);
        imgLogo.setAttribute('title','CFBCursos');
        logoLogin.appendChild(imgLogo);
    }

    static verificarLogin = () =>{
        let mat = document.querySelector('#f_username').value;
        let pas = document.querySelector('#f_senha').value;

        const endpoint = `${this.config.endpoint}/?matricula=${mat}&senha=${pas}`
        fetch(endpoint)
        .then(res => res.json())
        .then(res => {
            console.log(res)
            if(res){
                sessionStorage.setItem('logado','true');
                sessionStorage.setItem('matlogado',mat);
                sessionStorage.setItem('nomelogado',res.nome);
                sessionStorage.setItem('acessologado',res.acesso);
                console.log(res)
                this.callbackTrue()
                this.fechar();
            }else{
                sessionStorage.setItem('logado','false');
                sessionStorage.setItem('matlogado','');
                sessionStorage.setItem('nomelogado','');
                sessionStorage.setItem('acessologado','');
                this.callbackFalse()
            }
        })
        // if(mat == '123' && pas == '321 '){
        //     return true
        // }
        // else {
        //     return false
        // }
    }
    static fechar = () =>{
        const estiloLogin = document.querySelector('#estiloLogin');
        estiloLogin.remove();
        const fundoLogin = document.querySelector('#fundoLogin');
        fundoLogin.remove();
    }
}
// export {Login};