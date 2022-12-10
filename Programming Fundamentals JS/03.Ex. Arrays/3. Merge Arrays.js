function mergeArrays(arr1, arr2) {
    let sumEven = 0;
    let concOdd = "";
    let newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            sumEven = Number(arr1[i]) + Number(arr2[i])
            newArr.push(sumEven)
        }
        else {
            concOdd = arr1[i] + arr2[i]
            newArr.push(concOdd)
        }
    }
    console.log(newArr.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
)