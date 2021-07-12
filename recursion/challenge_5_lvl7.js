/*
Write a function that sums squares of numbers in list that may contain more lists
*/
let sum = 0;

// const SumSquares = (l) =>{
//     return l.map(item => (!Array.isArray(item) ? sum += item*item : SumSquares(itme)))
// }

const SumSquares = (l) =>{
    let sum = 0;
    function flattenArray (l) {
        return l.map(item => (!Array.isArray(item) ? sum += item*item : flattenArray(item)))
    };
    flattenArray(l);
    return sum;
  }

console.log((SumSquares([1,2,3])))

//console.log(sum)