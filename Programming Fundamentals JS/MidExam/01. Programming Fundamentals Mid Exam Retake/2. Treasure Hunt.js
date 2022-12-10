function treasureHunt(arr) {
    let treasure = arr.shift().split('|');
    let index = 0;
    let command = arr[index];
    while (command !== "Yohoho!") {
        let arrCommand = command.split(' ');
        let commandWord = arrCommand.shift();
        if (commandWord === 'Loot') {

            for (let i = 0; i < arrCommand.length; i++) {
                let currentLoot = arrCommand[i];
                if (!treasure.includes(currentLoot)) {
                    treasure.unshift(currentLoot)
                }
            }
        }
        else if (commandWord === 'Drop') {
            let indexToRemove =Number(arrCommand[0]);
            let isIndexValid = indexToRemove >= 0 && indexToRemove < treasure.length
            if (isIndexValid) {

                let elToReplace = treasure.slice(indexToRemove, indexToRemove + 1)
                treasure.splice(indexToRemove, 1)
                treasure.push(elToReplace[0])
            }

        }
        else if (commandWord === 'Steal') {
            let numElementsToSteal = Number(arrCommand[0]);
            if (treasure.length < numElementsToSteal) {
                numElementsToSteal = treasure.length
            }
            let stolenEl = treasure.slice((treasure.length) - numElementsToSteal)
            console.log(stolenEl.join(", "));
            treasure.splice((treasure.length) - numElementsToSteal,numElementsToSteal)
        }
        index++;
        command = arr[index];
    }
    if(treasure.length === 0){
        console.log(`Failed treasure hunt.`);
    }
    else{
        let sumOfLetters = treasure.reduce((sum, el)=>{
            return sum + el.length
        },0)
        let numItems = treasure.length
    
        console.log(`Average treasure gain: ${(sumOfLetters/numItems).toFixed(2)} pirate credits.`);
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
"Loot Silver Medals Coal",
"Drop -1",
"Drop 1",
"Steal 6",
"Yohoho!"])



