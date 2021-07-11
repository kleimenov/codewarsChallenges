

const evenLast = (numbers) => {
    let sum = 0;
    for(let index in numbers){
        index % 2 === 0 ? sum = sum + (numbers[index] * numbers[numbers.length - 1]) : '';
    }
    return sum;
}

evenLast([2, 3, 4, 5])