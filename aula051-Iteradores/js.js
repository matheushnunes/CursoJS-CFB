const val = [1,2,3,4]
const it_val = val[Symbol.iterator]()
console.log(it_val.next())
console.log(it_val.next())
console.log(it_val.next().value)
console.log(it_val.next().done)
console.log(it_val.next())

console.log('=================================')

const text = 'texto'
const it_text = text[Symbol.iterator]()
console.log(it_text.next())
console.log(it_text.next())
console.log(it_text.next().value)
console.log(it_text.next().done)
console.log(it_text.next())
console.log(it_text.next())

