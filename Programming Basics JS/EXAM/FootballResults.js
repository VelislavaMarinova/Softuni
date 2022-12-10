function footballResults(input) {
    index = 0
    let res = 0
    let numWin = 0
    let numLoose = 0
    let equal = 0
    for (let i = 1; i <= 3; i++) {
        res = input[index];
        let numGoalsForOne = Number(res[0]);
        let numGoalsForTwo = Number(res[2]);

        if (numGoalsForOne > numGoalsForTwo) {
            numWin++;
        }
        else if (numGoalsForOne < numGoalsForTwo) {
            numLoose++;
        }
        else if (numGoalsForOne === numGoalsForTwo) {
            equal++
        }
index++;
    }
    //Team won {брой спечелени мачове} games."
//•	"Team lost {брой загубени мачове} games."
//•	" Drawn games: {брой равни мачове}"
console.log(`Team won ${numWin} games.`);
console.log(`Team lost ${numLoose} games.`);
console.log(`Drawn games: ${equal}`);
}
footballResults(["3:1",
    "0:2",
    "0:0"])
