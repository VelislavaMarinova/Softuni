function negativeOrPositiveNumbers(arr) {
    let arrL = arr.length
    let newArr = [];
    for (let i = 0; i < arrL; i++) {
        let currentNum = arr[i];
        if (currentNum >= 0) {
            newArr.push(currentNum);
        }
        else {
            newArr.unshift(currentNum)
        }
    }
    for (let i = 0; i < arrL; i++){
        console.log(newArr[i]);
    }
    //console.log(newArr);
}
negativeOrPositiveNumbers(['7', '-2', '8', '9'])