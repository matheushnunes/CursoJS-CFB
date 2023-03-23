function* Contador(){
    let n = 0
    while(true){
        yield n++
        if(n > 5){
            break
        }
    }
}
const sla = Contador()
for(var c of sla){
console.log(c)
}