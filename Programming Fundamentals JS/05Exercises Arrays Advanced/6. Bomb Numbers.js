function bombNumbers(arr1, arr2) {
    let specialNum = Number(arr2[0]);

    let bombPower = Number(arr2[1]);
    while (arr1.includes(specialNum)) {
        let indexOfSpecialNum = arr1.indexOf(specialNum);
        let numElementsToDelete = bombPower * 2 + 1;
        let startIndex = indexOfSpecialNum - bombPower
        if (startIndex < 0) {
            let differenceTo0Index = bombPower - indexOfSpecialNum
            numElementsToDelete = numElementsToDelete - differenceTo0Index
            startIndex = 0
        }
        let detonation = arr1.splice((startIndex), (numElementsToDelete));




    }
    let sum = arr1.reduce((sum, el) => {
        return sum + el
    }, 0)

    console.log(sum);
}
bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 2]

)
