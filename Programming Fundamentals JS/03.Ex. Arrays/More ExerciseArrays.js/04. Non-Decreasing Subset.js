function nonDecreasingSubset(arr) {
    let arrOfNumbers = arr;
    let arrOfNumbersLength = arrOfNumbers.length;
    let newArr = [arrOfNumbers[0]];
    let maxNum = arrOfNumbers[0]
    for (let i = 1; i < arrOfNumbersLength; i++) {

       if(arrOfNumbers[i]>=maxNum){
           newArr.push(arrOfNumbers[i])
           maxNum = arrOfNumbers[i]
       }
       

       
    }
    console.log(newArr.join(' '));
}
    nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
    nonDecreasingSubset([20, 3, 2, 15, 6, 1])
