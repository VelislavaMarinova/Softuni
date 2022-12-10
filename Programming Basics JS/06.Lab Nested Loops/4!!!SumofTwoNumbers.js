function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let combination = 0
    let numA = 0
    let numB = 0
    let isfound = false

    for (let a = start; a <= end; a++) {
        for (let b = start; b <= end; b++) {
            combination++;
            //console.log(`${combination}`)

            if (a + b === magic) {
                numA = a
                numB = b
                //console.log(`${a} + ${b} = ${magic} `)
                isfound = true; break;

            }
        }
        if (isfound) {
            break;
        }
    }
    if (isfound) {
        console.log(`Combination N:${combination} (${numA} + ${numB} = ${magic})`);
    } else {
        console.log(`${combination} combinations - neither equals ${magic}`);
    }

}
sumOfTwoNumbers(["23",
    "24",
    "20"])
