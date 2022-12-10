function tournamentOfChristmas(input) {
    let index = 0
    let numDays = Number(input[index]);
    index++;
    let sport = ""
    let res = ""
    let money = 0
    let winCounter = 0
    let loseCounter = 0
    let dayCounterWin = 0
    let dayCounterLose = 0
    let sumMoneyFromDays = 0
    let command = input[index];

    for (let i = 1; i <= numDays; i++) {
        while (command !== "Finish") {
            sport = command
            index++;
            res = input[index];
            if (res === 'win') {
                money += 20;
                winCounter++;
            }
            else if (res === 'lose') {
                loseCounter++;
            }
            index++;
            command = input[index];
        }
        
        if (winCounter > loseCounter) {
            money = 1.1 * money
            
            dayCounterWin++;
        }
        else if (loseCounter > winCounter) {
            dayCounterLose++;
        }
        if (command === "Finish") {
            sumMoneyFromDays += money
            index++;
            winCounter = 0
            loseCounter = 0
            money = 0
            command = input[index];
        }
    }
    if (dayCounterWin > dayCounterLose) {
        sumMoneyFromDays = 1.2 * sumMoneyFromDays
        console.log(`You won the tournament! Total raised money: ${sumMoneyFromDays.toFixed(2)}`);
    }
    else {
        console.log(`You lost the tournament! Total raised money: ${sumMoneyFromDays.toFixed(2)}`);
    }

}
tournamentOfChristmas(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])
