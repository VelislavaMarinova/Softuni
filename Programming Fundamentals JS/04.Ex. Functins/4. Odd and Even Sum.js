/*function OddandEvenSum(num) {
    let numberToString = String(num);
    let numberLength = numberToString.length
    let sumOdd = 0
    let sumEven = 0
    let message = ''
    for (let i = 0; i < numberLength; i++) {
        let currentNum = Number(numberToString[i]);
        if (currentNum % 2 === 0) {
            sumEven += currentNum;
        }
        else{
            sumOdd+=currentNum
        }
    }
message = `Odd sum = ${sumOdd}, Even sum = ${sumEven}`
//console.log(message);
return message
}
OddandEvenSum(1000435)*/

function printRes(input) {

    let numToString = String(input);
    let numToStringLength = numToString.length


    let takeEvenSum = function (numAsString) {
        let evenSum = 0
        for (let i = 0; i < numToStringLength; i++) {
            let currentNum = Number(numToString[i]);
            if (currentNum % 2 === 0) {
                evenSum += currentNum;
            }
        }
        return evenSum
    }
    let takeOddSum = function (numAsString) {
        let oddSum = 0
        for (let i = 0; i < numToStringLength; i++) {
            let currentNum = Number(numToString[i]);
            if (currentNum % 2 !== 0) {
                oddSum += currentNum;
            }
        }
        return oddSum
    }
    let message = ` Odd sum = ${takeOddSum(input)}, Even sum = ${takeEvenSum(input)}`
    return message
}
printRes(1000435)