const factorial = (n) => {
    if(n < 0 ){
        return null;
    }
    return n > 1? n * factorial(n - 1) : 1
}


console.log(factorial(-5))