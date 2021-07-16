let arr = [1, 2, [1, 2]]


//let sum = 0;
// function arraySum(arr){
//     arr.map((item)=>
//         Array.isArray(item) ? arraySum(item): sum += item
//     )
//     return sum;  
// }

const ggg = (array) => {
    let sum = 0;
    const arraySum = (array) => {
        array.map((item)=>
        Array.isArray(item) ? arraySum(item): sum += item
    )
    return sum;
    }
    return arraySum(array)
}




console.log(ggg(arr))