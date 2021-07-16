const sumStrings = (a,b) => { 
    console.log(a.length < b.length)
    let sum = 0;
    let arrayFromA = a.split('')
    let arrayFromB = b.split('')

    let tmpForA = []
    let tmpForB = []

    let tmpSum = []

    console.log(arrayFromA)
    console.log(arrayFromB)

    arrayFromA.map(item => tmpForA.push(parseInt(item)))
    arrayFromB.map(item => tmpForB.push(parseInt(item)))
    console.log(tmpForA)
    console.log(tmpForB)

    if(tmpForA.length > tmpForB.length) {
        console.log( tmpForB.length - tmpForB.length)
        let sum = 0;
        for(let index = tmpForA.length; index >= 0; index--){
            //console.log('a index', index, a[index])
            
            if(b[index]){
                sum = tmpForB[index] + tmpForA[index + 2]
                console.log('b index', index, tmpForB[index], tmpForA[index + 2], sum)
                tmpSum.push(sum)
            }
           
        }
        console.log(tmpSum.reverse())
        
    } else if (a.length < b.length) {
        console.log('xyi b')
    } else {
        console.log('xyi equal')
    }


    // for(let i = a.length; i >= 0; i-- ){
    //     console.log(parseInt(a[i]));
    // }
    //console.log(sum)
  }

//sumStrings('712569312664357328695151392','8100824045303269669937')

sumStrings('7123','81')