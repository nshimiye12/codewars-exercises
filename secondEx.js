// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example




function sumOfDifferences(arr) {
    if(arr.length < 2)
      return 0
    arr.sort((a,b)=>a - b).reverse()
    console.log(arr)
    diffs = []
    
    for(let i=0; i < arr.length;i++){
      diffs.push(arr[i] - arr[ i + 1])
    }
    diffs.pop()
    return diffs.reduce((a,b)=> a + b)
  }