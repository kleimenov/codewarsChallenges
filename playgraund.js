let array = [10,[2],3,14,5,-6,7,{a: "hello"}];

console.log('get particular element', array[3])

for (let i = 0; i < array.length; i++) {
    console.log('show index and element', i, array[i])
}

for(let element of array){
    console.log('another way to show element', element)
}

for(let index in array){
    console.log('super another way to show element', array[index])
}

array.map(item => console.log('use map method iterate over array', item))

array.forEach(element=>console.log('use forEach method to loop over array', element))

array.push('hello world')
console.log('array updated', array)

array.pop()
console.log('array updated', array)

array.shift()
console.log('array updated', array)

let newArray = array.slice()
console.log('array was copied', newArray)

let newArray_1 = [...array]
console.log('array was copied II', newArray_1)

let numbers = [...new Set([1,2,3])];
console.log('array of numbers sequnce', numbers)

let mergedArray = [...numbers, newArray_1]
console.log('derged two arrays', mergedArray)

