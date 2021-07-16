const binaryRepresentation = (number) => {
    return number ? Number(number).toString(2).split('').reduce((a,b)=> parseInt(a) + parseInt(b)) : 0;
     
}

const binaryRepresentation_1 = (number) => {
    return number.toString(2).split('0').join('').length;
};

console.log(binaryRepresentation(1234))
console.log(binaryRepresentation_1(1234))