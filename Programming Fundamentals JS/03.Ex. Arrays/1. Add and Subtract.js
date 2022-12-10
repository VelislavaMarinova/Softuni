function addAndSubtract(arr) {
    let newArr = [];
    let sum = 0;
    let sumNewArr = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (arr[i] % 2 === 0) {
            newArr.push(arr[i] + i)
        }
        else {
            newArr.push(arr[i] - i)
        }
    }
    for (let i = 0; i < newArr.length; i++) {
        sumNewArr += newArr[i]
    }
    console.log(`[ ${newArr.join(", ")} ]`);
    console.log(sum);
    console.log(sumNewArr);
}
addAndSubtract([5, 15, 23, 56, 35])