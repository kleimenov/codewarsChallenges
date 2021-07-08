


const addArrays = (array1, array2) => {
    let tmp = 0;
    let newArray = [];
    if(array1.length === array2.length) {
        for(let index in array1) {
            tmp = array1[index] + array2[index]
            newArray.push(tmp)
        }
        return newArray;
    } else {
        throw Error;
    }
}


console.log(addArrays([1,2,3],[4,5]))