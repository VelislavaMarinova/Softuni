function sortNumbers(num1, num2, num3) {
    let maxNum = Math.max(num1, num2, num3);
    let minNum = Math.min(num1, num2, num3);
    if (num1 === maxNum) {
        console.log(num1);
        if (num2 === minNum) {
            console.log(num3);
            console.log(num2);
        }
        else if (num3 === minNum) {
            console.log(num2);
            console.log(num3);
        }
    }
    else if (num2 === maxNum) {
        console.log(num2);
        if (num1 === minNum) {
            console.log(num3);
            console.log(num1);
        }
        else if (num3 === minNum) {
            console.log(num1);
            console.log(num3);
        }
    }
    else if (num3 === maxNum) {
        console.log(num3);
        if (num1 === minNum) {
            console.log(num2);
            console.log(num1);
        }
        else if(num2 === minNum){
            console.log(num1);
            console.log(num2);
        }
    }
}
sortNumbers(3, 3, 0)