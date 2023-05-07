function steamrollArray(arr) {
  let Narr = []
  for(let a in arr){
    if(Array.isArray(arr[a])){
      Narr.push(...steamrollArray(arr[a]))
    }else{
      Narr.push(arr[a])
    }
  }
  
  return Narr;
}

steamrollArray([1, [2], [3, [[4]]]]);