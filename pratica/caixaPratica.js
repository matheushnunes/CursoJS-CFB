class Caixa { 
    static destino = document.body
    static mostrar = (config)=>{
        this.cor = config.cor
        this.titulo = config.titulo
        this.texto = config.texto
        this.btnTexto = config.btnTexto
        this.tipo = config.tipo
        this.comando = ()=>{config.comando()}

        this.divMsg = document.createElement('div')
        const estiloDivMsg=
            'display: flex;'+
            'justify-content: center;'+
            'align-items: center;'+
            'position: absolute;'+
            'top: 0px;'+
            'left: 0px;'+
            'width: 100%;'+
            'height: 100vh;'+
            'background-color: rgba(0,0,0,0.7);'
        this.divMsg.setAttribute('id','divMsg')
        this.divMsg.setAttribute('style',estiloDivMsg)
        this.destino.prepend(this.divMsg)

        const estiloAreaCxmsg =
        'display: flex;'+
        'justify-content: flex-start;'+
        'align-items: flex-start;'+
        'flex-direction: column;'+
        'width: 300px;'
        const areaCxmsg = document.createElement('div')
        areaCxmsg.setAttribute('style',estiloAreaCxmsg)
        divMsg.appendChild(areaCxmsg)

        const estiloTituloCxmsg =
            'display: flex;'+
            'justify-content: flex-start;'+
            'align-items: center;'+
            'width: 100%;'+
            'background-color:'+this.cor+';'+
            'color: #fff;'+
            'padding: 5px;'+
            'border-radius: 5px 5px 0px 0px;'
        const tituloCxmsg = document.createElement('div')
        tituloCxmsg.setAttribute('style',estiloTituloCxmsg)
        tituloCxmsg.innerHTML = this.titulo
        areaCxmsg.appendChild(tituloCxmsg)

        const estiloCorpoCxmsg = 
            'display: flex;'+
            'justify-content: flex-start;'+
            'align-items: center;'+
            'width: 100%;'+
            'background-color: white;'+
            'color: #000;'+
            'padding: 30px 5px;'
        const corpoCxmsg = document.createElement('div')
        corpoCxmsg.setAttribute('style',estiloCorpoCxmsg)
        corpoCxmsg.innerHTML = this.texto
        areaCxmsg.appendChild(corpoCxmsg)

        const estiloRodapeCxmsg = 
            'display: flex;'+
            'justify-content: space-around;'+
            'align-items: center;'+
            'width: 100%;'+
            'background-color: #ccc;'+
            'color: #000;'+
            'padding: 5px;'+
            'border-radius: 0px 0px 5px 5px;'
        const RodapeCxmsg = document.createElement('div')
        RodapeCxmsg.setAttribute('style',estiloRodapeCxmsg)
        areaCxmsg.appendChild(RodapeCxmsg)

        const estiloBtnCxmsg = 
            'background-color:'+this.cor+';'+
            'color: white;'+
            'padding: 10px 35px;'+
            'border-radius: 5px;'+
            'cursor: pointer;'+
            'text-transform: uppercase;'
        if(this.tipo == 'ok'){
            let btnCaixa = document.createElement('button')
            btnCaixa.innerHTML = this.btnTexto
            btnCaixa.setAttribute('style',estiloBtnCxmsg)
            btnCaixa.addEventListener('click',()=>{
                divMsg.remove(divMsg)
            })
            RodapeCxmsg.appendChild(btnCaixa)
        }else if(this.tipo == 'sn'){
            let btnCaixaS = document.createElement('button')
            btnCaixaS.innerHTML = this.btnTexto[0]
            btnCaixaS.setAttribute('style',estiloBtnCxmsg)
            btnCaixaS.addEventListener('click',()=>{
                this.comando()
                divMsg.remove(divMsg)
            })

            let btnCaixaN = document.createElement('button')
            btnCaixaN.innerHTML = this.btnTexto[1]
            btnCaixaN.setAttribute('style',estiloBtnCxmsg)
            btnCaixaN.addEventListener('click',()=>{
                divMsg.remove(divMsg)
            })

            RodapeCxmsg.appendChild(btnCaixaS)
            RodapeCxmsg.appendChild(btnCaixaN)
        }
    }
}
export {Caixa}