function signCheck(num1, num2, num3) {
    let negativeCounter = 0
    let positiveCounter = 0

    if (num1 < 0) {
        negativeCounter++
    }
    else {
        positiveCounter++
    }

    if (num2 < 0) {
        negativeCounter++
    }
    else { positiveCounter++ }

    if (num3 < 0) {
        negativeCounter++
    }
    else { positiveCounter++ 
    }
    if(negativeCounter%2 !== 0 ){
        console.log("Negative")
    }
    else{ console.log("Positive");}
}

signCheck(5, 12, -15)