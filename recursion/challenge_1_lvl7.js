const array = [1,3,4, [[2,3]], 2, 7, [[2,3]]]

let sum =0;

const arraySum = (arr) => {
    
    arr.map(item => {
        Array.isArray(item) ? arraySum(item) : sum += item;
    })
}

arraySum(array)
console.log(sum)
