function minNumber(input) {
    index = 0
    let command = input[index];

    let minNumber = Number.MAX_SAFE_INTEGER

    while (command !== "Stop") {
        let num = Number(command)
        if (minNumber > num) {
            minNumber = num

        }
        index++;
        command = input[index];

    }
console.log(minNumber);
}
minNumber(["300000",
    "-20",
    "-100",
    "-3",
    
    "Stop"])
