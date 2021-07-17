
const persistence = (num) => {
    let sum = num;
    let cnt = 0;
    
    const sumOfNumbers = (sum) => {
        cnt += 1;
        sum = sum.toString()
        sum = sum.split('')
        sum = sum.reduce((a, b) => parseInt(a) * parseInt(b))
        return sum.toString().split('').length > 1 ? sumOfNumbers(sum) :  sum;
    }    

    if(num > 10){
        sumOfNumbers(sum)
    }
   
    return cnt;
}

const persistence_1 = num => {
    return `${num}`.length > 1 ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) : 0;
}

console.log(persistence_1(999))
console.log(persistence(999))

