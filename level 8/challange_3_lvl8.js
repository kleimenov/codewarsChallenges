/*
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
*/

const digitize = (n) => {
    let newNumber = n.toString()
    newNumber = newNumber.split('').reverse()
    
    let newarr = newNumber.map(element => parseInt(element));
    return newarr;
    
}

console.log(digitize(1234))

const digitize_upd = (n) => {
    return String(n).split('').map(Number).reverse()
}
console.log(digitize_upd(1234))