function rotateArray(arr) {
    let arrGiven = arr;
    let arrGivenLength = arrGiven.length
    let numRotations = Number(arrGiven.pop(arrGiven[arrGivenLength - 1]));
    let arrToRotate = arr
    let arrToRotateLength = arrToRotate.length;

    let rotatedArr = [];

    for (let i = 1; i <=numRotations; i++) {
        let elementToRotate = arrToRotate[arrToRotateLength - 1]

        rotatedArr.push(elementToRotate)
        for (let j = 0; j < arrToRotateLength - 1; j++) {
            rotatedArr.push(arrToRotate[j])
        }
        arrToRotate = rotatedArr;
        rotatedArr = [];
    }
    console.log(arrToRotate.join(' '));
}
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
rotateArray(['1', '2', '3', '4', '2'])