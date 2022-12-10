function vetParking(input) {
    let numDays = Number(input[0]);
    let numHours = Number(input[1]);

    let tax = 0
    let taxSum = 0
    let taxDay = 0
    let day = 0

    for (let d = 1; d <= numDays; d++) {
        for (let h = 1; h <= numHours; h++) {
            if (d % 2 === 0 && h % 2 !== 0) {
                tax = 2.50;
            }
            else if (d % 2 !== 0 && h % 2 === 0) {
                tax = 1.25;
            }
            else {
                tax = 1;
            }
            taxDay += tax
            taxSum += tax;

        }
        day += 1
        console.log(`Day: ${day} - ${taxDay.toFixed(2)} leva`)
        taxDay = 0
        
    }
console.log(`Total: ${taxSum.toFixed(2)} leva`);
}
vetParking(["5",
"2"])


