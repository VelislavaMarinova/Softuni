function divisionWithoutRemainder(input) {
    let index = 0
    let n = Number(input[index])
    index++;
    let number = Number(input[index])
    let counterP1 = 0
    let counterP2 = 0
    let counterP3 = 0
    for (let i = 1; i <= n; i++) {
        if (number % 2 === 0) {
            counterP1 += 1
        }
        if (number % 3 === 0) {
            counterP2 += 1
        }
        if (number % 4 === 0) {
            counterP3 += 1
        }
        index++
        number = Number(input[index]);
    }
    console.log(`${(counterP1/n*100).toFixed(2)}%`);
    console.log(`${(counterP2/n*100).toFixed(2)}%`);
    console.log(`${(counterP3/n*100).toFixed(2)}%`);

}
divisionWithoutRemainder(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"])
