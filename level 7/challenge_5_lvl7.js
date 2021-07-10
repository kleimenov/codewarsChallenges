let numbers = "1 2 3 4 5"

function highAndLow(numbers){
    let values;
    numbers = numbers.split(' ').sort((a, b) => a -b);
    values = numbers[numbers.length - 1].toString() + ' ' +  numbers[0].toString();
    return values;
    
  }

  console.log(highAndLow(numbers))