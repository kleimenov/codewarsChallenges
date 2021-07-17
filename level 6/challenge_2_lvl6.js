
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
       
    if(num.toString().split('').length > 1){
        sumOfNumbers(sum)
    }
    return cnt;
}

console.log(persistence(999))