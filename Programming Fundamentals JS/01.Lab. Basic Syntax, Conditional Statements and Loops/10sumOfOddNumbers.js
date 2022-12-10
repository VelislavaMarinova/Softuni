function sumOfOddNumbers(number) {
    let sum = 0
    let counterOddNumbers = 0
    for (let i = 1; counterOddNumbers < number; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            counterOddNumbers +=1
        }
    }
console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)