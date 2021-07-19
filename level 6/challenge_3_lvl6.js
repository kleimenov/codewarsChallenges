let array = [1,1,1];
let newArr = []
const tribonacci = (signature, n) => {
    let cnt = 0;
    while( cnt <= n){
        newArr.push(signature.slice(cnt, cnt + 3).reduce((a, b) => a + b, 0))
        cnt += 1;
    }
    return signature.concat(newArr) ;
  }

  console.log(tribonacci(array, 9))
  console.log(array, newArr)