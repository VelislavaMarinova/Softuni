function evenAndOddSubtraction(arr) {
    let summOdd = 0
    let sumEven = 0
    for (let number of arr) {
        if (number % 2 !== 0) {
            summOdd += number
        }
        else { sumEven += number }
    }
let res = sumEven - summOdd
console.log(res);
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])