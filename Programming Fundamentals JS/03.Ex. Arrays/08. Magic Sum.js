function magicSum(arr, num) {
    let arrOfNumbers = arr;
    let magicNumber = num
    let arrOfNumbersLength = arrOfNumbers.length
    let currentNum = 0
    let secondNum = 0
    let res = '';
    for (let i = 0; i < arrOfNumbersLength; i++) {
        currentNum = arrOfNumbers[i];
        for (let j =i+1; j < arrOfNumbersLength; j++) {
            secondNum = arrOfNumbers[j];
            if ((currentNum + secondNum) === magicNumber) {
                res = `${currentNum} ${secondNum}`;
                console.log(res);
                res ="";
            }
        }
    }
   
}
magicSum([1, 2, 3, 4, 5, 6],
    6
    )