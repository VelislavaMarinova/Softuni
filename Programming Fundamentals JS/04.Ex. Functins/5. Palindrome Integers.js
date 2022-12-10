function palindromCheck(arr) {
    let arrOfNumbers = arr;
    let arrOfNumbersLength = arrOfNumbers.length;
    let isPalindrom = (num) => {
        let startNum = num
        let revrsedNum = Number(startNum.toString().split('').reverse().join(''));
        if (startNum === revrsedNum) {
            return 'true'
        }
        else {
            return "false"
        }
    }
    for (let i = 0; i < arrOfNumbersLength; i++) {
        let currentNum = arrOfNumbers[i];
        console.log(isPalindrom(currentNum));
    }

}
palindromCheck([123, 323, 421, 121])