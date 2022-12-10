function equalSums(arr) {
    let arrOfNumbers = arr;
    let arrOfNumbersLength = arrOfNumbers.length;
    let sumLeft = 0;
    let sumRight = 0;
    let indexCounter = 0;
    let left = 0;;
    let right = 0
    let message='';
    for (let i = 0; i < arrOfNumbersLength; i++) {
        indexCounter += 1
        if (i === 0) {
            left = 0
        }
        else if (i === arrOfNumbersLength - 1) {
            right = 0
        }
        for (let j = i + 1; j < arrOfNumbersLength; j++) {
            sumRight += arrOfNumbers[j]
            if (j === arrOfNumbersLength - 1) {
                //console.log(sumRight)
                right = sumRight
                sumRight = 0
            }
            //   console.log(sumRight);
        }
        for (let k = i - 1; k >= 0; k--) {

            sumLeft += arrOfNumbers[k]
            if (k === 0) {
                left = sumLeft
                //console.log(sumLeft);
                sumLeft = 0
            }
        }

        if (left === right) {
            message = `${indexCounter - 1}`
            //console.log(indexCounter - 1);
            break;
        }
        else {
            message = `no`
            //console.log('no');
        }
    
    }
    
console.log(message);
}


equalSums([1, 2])