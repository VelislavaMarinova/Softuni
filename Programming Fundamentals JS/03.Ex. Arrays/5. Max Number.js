function maxNumber(arr) {
    let arrOfNumbers = arr
    let arrOfNumbersLength = arrOfNumbers.length - 1
    let currentNum = 0
    let lastNum = arrOfNumbers[arrOfNumbersLength]
    let message = ""
    for (let i = 0; i < arrOfNumbersLength; i++) {
        currentNum = arrOfNumbers[i]

        for (let j = i + 1; j <= arrOfNumbersLength; j++) {
            let nextNum = arrOfNumbers[j]
            if (currentNum > nextNum) {
                if (j === arrOfNumbersLength) {
                    message += `${currentNum} `
                }
                continue;
            }
            else { break; }
        }
    }
    let finalMessage = `${message}${lastNum}`
    console.log(finalMessage);
}
maxNumber([14, 24, 3, 19, 15, 17])
//maxNumber([1, 4, 3, 2])