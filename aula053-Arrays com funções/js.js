const val1 = document.querySelector('#val1')
const val2 = document.querySelector('#val2')
const resu = document.querySelector('#res')
const btn_ad = document.querySelector('#btn_ad')
const btn_sub = document.querySelector('#btn_sub')
const btn_mult = document.querySelector('#btn_mult')
const btn_div = document.querySelector('#btn_div')

const op = [
    (v)=>{
        let res = v[0] + v[1]
        return res
    },
    (v)=>{
        let res = v[0] -= v[1]
        return res
    },
    (v)=>{
        let res = v[0] *= v[1]
        return res
    },
    (v)=>{
        let res = v[0] / v[1]
        return res
    }

]
btn_ad.addEventListener('click',()=>{
    const n1 = Number(val1.value)
    const n2 = Number(val2.value)
    const n = [n1,n2]
    resu.value = op[0](n)
})
btn_sub.addEventListener('click',()=>{
    const n1 = Number(val1.value)
    const n2 = Number(val2.value)
    const n = [n1,n2]
    resu.value = op[1](n)
})
btn_mult.addEventListener('click',()=>{
    const n1 = Number(val1.value)
    const n2 = Number(val2.value)
    const n = [n1,n2]
    resu.value = op[2](n)
})
btn_div.addEventListener('click',()=>{
    const n1 = Number(val1.value)
    const n2 = Number(val2.value)
    const n = [n1,n2]
    resu.value = op[3](n)
})