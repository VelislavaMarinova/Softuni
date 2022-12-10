function memoryGame(input) {
    let sequence = input.shift().split(" ");


    let message = "";
    let numberOfMoves = 0
    let arrOfCommands = input
    let index = 0
    let command = arrOfCommands[index];
    while (command !== "end") {
        numberOfMoves += 1;
        let sequenceL = sequence.length
        let middleSequence = sequenceL / 2
        let endIndexSequence = sequenceL - 1;
        let arrCommand = command.split(" ").map(Number)
        let indexOne = arrCommand[0];
        let indexTwo = arrCommand[1];
        let elOne = sequence[indexOne];
        let elTwo = sequence[indexTwo];
        if ((indexOne <= endIndexSequence && indexOne >= 0) &&
            (indexTwo <= endIndexSequence && indexTwo >= 0) &&
            indexOne !== indexTwo) {
            if (elOne === elTwo) {
                message = `Congrats! You have found matching elements - ${elOne}!`
                console.log(message);
                if(indexOne>indexTwo){
                    sequence.splice(indexOne, 1);
                sequence.splice(indexTwo, 1)
                }
                else if(indexTwo>indexOne){
                    sequence.splice(indexTwo, 1)
                    sequence.splice(indexOne, 1);
                }
                if (sequence.length === 0) {
                    console.log(`You have won in ${numberOfMoves} turns!`)
                    break;
                }
            }
            else if (elOne !== elTwo) {
                message = `Try again!`
                console.log(message);
            }
        }
        else {
            message = `Invalid input! Adding additional elements to the board`;
            console.log(message);
            sequence.splice(middleSequence, 0, `-${numberOfMoves}a`,`-${numberOfMoves}a`)
        }
        index++
        command = arrOfCommands[index]

    }
    if (command === "end") {
        console.log(`Sorry you lose :(
${sequence.join(' ')}`);
    }
}
memoryGame(  [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    )