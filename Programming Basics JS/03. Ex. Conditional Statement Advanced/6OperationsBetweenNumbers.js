function operationsBetweenNumbers(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];
    let operation = 0

    switch (operator) {
        case "+": operation = N1 + N2; break;
        case "-": operation = N1 - N2; break;
        case "*": operation = N1 * N2; break;
        case "/": operation = N1 / N2; break;
        case "%": operation = N1 % N2; break;
    }

    if (operator === "+" || operator === "-" || operator === "*") {
        if (operation % 2 === 0) {
            console.log(`${N1} ${operator} ${N2} = ${operation} - even`)
        }
        else {
            console.log(`${N1} ${operator} ${N2} = ${operation} - odd`)
        }
    }
    else if (operator === "/") {
        if (N2 === 0) {
            console.log(`Cannot divide ${N1} by zero`)
        }
        else {
            console.log(`${N1 } ${operator} ${N2} = ${operation.toFixed(2)}`)
        }
    }
    else if (operator === "%"){
        if (N2 === 0) {
            console.log(`Cannot divide ${N1} by zero`)
        }
        else{ 
            console.log(`${N1} ${operator} ${N2} = ${operation}`)
        }
    }

}
operationsBetweenNumbers(["10",
"0",
"/"])

;
