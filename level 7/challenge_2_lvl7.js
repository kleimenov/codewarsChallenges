/*
Write a small function that returns the values of an array that are not odd.
All values in the array will be integers. Return the good values in the order they are given.
*/

let number = [21,2,10,8,4,0,1,2,3,6,12,-1]

const noOdds = (variable) => {
    let tmpArray =[];
    for(let index in variable){
        variable[index] == 0 || variable[index] % 2 === 0 ? tmpArray.push(variable[index]) : '';
    }
    return tmpArray;
}

const noOdds_1 = (variable) => {
    let tmpArray = [];
    variable.map(item => {
        item === 0 || item % 2 === 0 ? tmpArray.push(item) : '';
     }
    )
    return tmpArray;
}

const noOdds_2 = (variable) => {
    let tmpArray = [];
    variable.forEach(element => {
        element === 0 || element % 2 === 0 ? tmpArray.push(element) : '';
    });
    return tmpArray;
}


var noOdds_3 = (values) => {
    return values.filter(x => x % 2 === 0)
};

console.log(noOdds(number))
console.log(noOdds_1(number))
console.log(noOdds_2(number))
console.log(noOdds_3(number))