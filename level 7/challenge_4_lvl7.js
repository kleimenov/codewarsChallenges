const array_1 = [0]

const oddOrEven = (array) => {
    // if(array.length > 0) {
    //     return array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd';
    // }
    // return 'even';

    return array.length > 0 ? array.reduce((a, b) => a + b, 0) % 2 === 0 ? 'even' : 'odd' : 'even';
}

console.log(oddOrEven(array_1))