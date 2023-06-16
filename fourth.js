// var array =[2,4,45,4,1,,3]
// var smallest = array[0]
// for (let i=0 ; i<array.length;i++){
//     if(smallest>array[i]){
//         smallest=array[i]
//     }
// }
// console.log(smallest)

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
  }