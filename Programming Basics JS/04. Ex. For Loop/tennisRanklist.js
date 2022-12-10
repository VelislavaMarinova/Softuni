function tennisRanklist(input) {
    let numTurnir = Number(input[0]);
    let startPoints = Number(input[1]);

    let numWin = 0
    let winP = 0


    for (let i = 2; i < input.length; i++) {
        let category = input[i];
        if (category === "W") {
            startPoints += 2000;
            numWin += 1;
            winP+=2000;
        }
        else if (category === "F") {
            startPoints += 1200;
            winP+=1200;
        }
        else if (category === "SF") {
            startPoints += 720;
            winP+=720;
        }

    }
    console.log(`Final points: ${startPoints}`)
    console.log(`Average points: ${Math.floor(winP/ numTurnir)}`)
    console.log(`${(numWin/numTurnir*100).toFixed(2)}%`)

}
tennisRanklist(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"])
