/*
This is a kata series that you can only solve using recursion.
##2 - Fibonacci number
In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation
f(n) = f(n-1) + f(n-2)
with seed values
f(1) = 1 and f(2) = 1
#Your task
You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.
*/

const fibbanachi = (number) => {
    return number > 2 ? fibbanachi(number - 1) + fibbanachi(number - 2) : 1;
}

   


console.log(fibbanachi(10))