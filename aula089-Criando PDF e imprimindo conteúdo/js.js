const btn = document.querySelector("button")

btn.addEventListener('click',()=>{
    let tabela = document.querySelector('#tabela').innerHTML

    let estilo = '<style>table{border-collapse: collapse;width:100%;font:25px Calibri;}'
    estilo += 'table, th, td{border:solid 2px #888; padding: 4px 7px; text-align:center;}'
    estilo += '</style>'

    const win = window.open('','','height=700,width=700') //cria uma janela 700x700
    win.document.write('<html><head>')
    win.document.write(estilo)
    win.document.write('</head><body>')
    win.document.write(tabela)
    win.document.write('</body>')
    win.print()
})