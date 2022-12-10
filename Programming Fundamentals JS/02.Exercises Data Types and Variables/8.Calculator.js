function calculator(a, b, c) {
    let num1 = Number(a)
    let operator = b;
    let num2 = Number(c);
    let res = 0
    if (operator === '+'){
        res = num1 + num2
    }
    else if(operator==='-'){
        res = num1 - num2
    }
    else if(operator === '/'){
        res = num1/num2
    }
    else if(operator==='*'){
        res = num1*num2
    }
    console.log(res.toFixed(2));

}
calculator(5, '+', 10)