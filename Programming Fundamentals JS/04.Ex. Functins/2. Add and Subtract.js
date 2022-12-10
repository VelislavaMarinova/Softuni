function printRes(num1,num2,num3){
    function sumOfTwoNumbers(number1,number2){
        return number1+number2
    }
    let sum = sumOfTwoNumbers(num1,num2)
    //console.log(sum);

    function subtract(sum, number3){
        return sum - number3
    }
    let finalRes = subtract(sum,num3);
    console.log(finalRes);

}
printRes(23,6, 10)