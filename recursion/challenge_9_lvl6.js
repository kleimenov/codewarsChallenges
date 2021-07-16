let arr = [1, 2, [1, 2], '3pig3', '3function() { return 15; }3']


//let sum = 0;
// function arraySum(arr){
//     arr.map((item)=>
//         Array.isArray(item) ? arraySum(item): sum += item
//     )
//     return sum;  
// }



// const ggg = (array) => {
//     let sum = 0;
//     const arraySum = (array) => {
//         array.map((item)=> {
//             if(typeof(item) === 'string'){
//                 console.log(item)
//                 sum += item.replace(/[^0-9]/g, "").split('').reduce((a,b)=> parseInt(a) + parseInt(b), 0)
//             } else {
//                 Array.isArray(item) ? arraySum(item): sum += item
//             }
//         })
//     return sum;
//     }
//     return arraySum(array)
// }
// console.log(ggg(arr))


let test = '3function() { return 15; }3'
let tmp = test.replace(/[^0-9]/g, "").split('').reduce((a,b)=> parseInt(a) + parseInt(b), 0)

console.log(tmp);




