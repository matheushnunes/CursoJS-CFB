const el = document.querySelectorAll('div')
const val = Array.prototype.map.call(el,({innerHTML})=>innerHTML)
//para pegar uma propiedade do elemento na função use {}
console.log(val)