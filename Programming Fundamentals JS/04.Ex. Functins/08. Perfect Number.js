function perfectNumber(num) {
    let checkedNum =Number(num)
    let message = ""

    let sumOfDivisors = function (input) {
        let sumDivisors = 0
        for (let i = num - 1; i > 0; i--) {
            let currentNum = Number(i);

            if (num % currentNum === 0) {
                sumDivisors += currentNum
            }
        }
        return sumDivisors 
    }
if(checkedNum === sumOfDivisors(num)){
    message = ` We have a perfect number!`;
}
else{
    message = `It's not so perfect.`
}
console.log(message);
}
perfectNumber(7)