function simpleCalculator(num1, num2, num3) {
    //be 'multiply', 'divide', 'add' or 'subtract'
    let number1 = num1;
    let number2 = num2;
    let operator = num3;
    let res = 0;

    function multiply(number1, number2) {
        return number1 * number2;
    }
    function divide(number1, number2) {
        return number1 / number2;
    }
    function add(number1, number2) {
        return number1 + number2;
    }
    function subtract(number1, number2) {
        return number1 - number2;
    }
switch(operator){
    case 'multiply': res = multiply(number1, number2);break;
    case 'divide': res =  divide(number1, number2);break;
    case 'add':res = add(number1, number2);break;
    case 'subtract': res = subtract(number1, number2);break;

}
console.log(res);
}
simpleCalculator(5, 5, 'multiply')
simpleCalculator(3,5,'subtract')
