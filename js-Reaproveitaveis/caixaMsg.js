class Cxmsg{
    static cor = '#666'
    static destino = null
    static divMsg = null
    static tipo = null
    static comandoSN = null

    static mostrar = (config, titulo, texto)=>{
        this.cor = config.cor
        this.tipo = config.tipo //'ok' ou 'sn' 
        this.comandoSN =()=>{config.comandoSN()}
        this.textoSN = config.textoSN
        this.destino = document.body
        this.titulo = titulo
        this.texto = texto
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
            'background-color: rgba(0,0,0,0.7);'+
            'z-index: 99999;'
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
        this.divMsg.appendChild(areaCxmsg)

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
            const btnOk = document.createElement('div')
            btnOk.setAttribute('style',estiloBtnCxmsg)
            btnOk.innerHTML = 'OK'
            btnOk.addEventListener('click',(e)=>{
                this.ocultar()
            })
            RodapeCxmsg.appendChild(btnOk)
        }else if(this.tipo == 'sn'){
            const btnS = document.createElement('div')
            btnS.setAttribute('style',estiloBtnCxmsg)
            btnS.innerHTML = this.textoSN[0]
            btnS.addEventListener('click',(e)=>{
                this.comandoSN()
                this.ocultar()
            })
            RodapeCxmsg.appendChild(btnS)
            const btnN = document.createElement('div')
            btnN.setAttribute('style',estiloBtnCxmsg)
            btnN.innerHTML = this.textoSN[1]
            btnN.addEventListener('click',(e)=>{
                this.ocultar()
            })
            RodapeCxmsg.appendChild(btnN)
        }
        
    }
    static ocultar = ()=>{
        this.divMsg.remove()
    }
}
export {Cxmsg}