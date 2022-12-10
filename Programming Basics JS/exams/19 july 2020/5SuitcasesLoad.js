function suitcasesLoad(input) {
    let index = 0
    let capacity = Number(input[index]);
    index++;
    let command = input[index];
    let suitcasesSum = 0
    let suitcasePlace = 0
    let suitcaseCounter = 1
    let suitcaseCounter1 = 0

    while (command !== "End") {
        suitcasePlace = Number(command)
        if (suitcaseCounter === 3) {
            suitcaseCounter = 0
            suitcasePlace = suitcasePlace * 1.1
        }
        if (suitcasePlace <= capacity) {

            capacity -= suitcasePlace
            suitcaseCounter++;
            suitcaseCounter1++;
            index++;
            command = input[index];

        }
        else{
            console.log(`No more space!`);break;
        }
    }
    if(command === "End"){
        console.log(`Congratulations! All suitcases are loaded!`);
    }
console.log(`Statistic: ${suitcaseCounter1} suitcases loaded.`);
}
suitcasesLoad(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"])

