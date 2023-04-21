let arr = [[2,4,4],[4,5,1],[6,7,8]]
let nArr = []
for(let c = 0; c < arr.length; c++){
    if(arr[c].indexOf(4) == -1){
        nArr.push(arr[c])
    }
}
console.log(nArr)
