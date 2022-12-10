function manOWar(arr) {
    let statusOfPirateShip = arr.shift().split(">").map(Number);

    let statusForWarship = arr.shift().split(">").map(Number);
    let maximumHealthCapacity = Number(arr.shift());
    let index = 0
    let command = arr[index];

    let counterOfGoodElPiratShip = 0;
    for (let i = 0; i < statusOfPirateShip.length; i++) {

        if (statusOfPirateShip[i] > 0) {

            counterOfGoodElPiratShip++;
        }
    }

    let counterOfGoodElWarShip = 0;
    for (let i = 0; i < statusForWarship.length; i++) {

        if (statusForWarship[i] > 0) {

            counterOfGoodElWarShip++;
        }
    }
    if (counterOfGoodElPiratShip === statusOfPirateShip.length &&
        counterOfGoodElWarShip === statusForWarship.length) {



        while (command !== "Retire") {
            let arrCommand = command.split(" ")
            let statusForWarshipL = statusForWarship.length - 1;
            let statusOfPirateShipL = statusOfPirateShip.length - 1;
            if (arrCommand.includes('Fire')) {
                let indexOfDamage = Number(arrCommand[1]);
                let damage = Number(arrCommand[2]);

                let isIndexValid = indexOfDamage < statusForWarshipL && indexOfDamage >= 0;
                if (isIndexValid) {
                    statusForWarship.splice(indexOfDamage, 1, (Number(statusForWarship[indexOfDamage])) - damage)
                    if (Number(statusForWarship[indexOfDamage]) <= 0) {
                        console.log(`You won! The enemy ship has sunken.`)
                        break;
                    }
                }

            }
            else if (arrCommand.includes('Defend')) {
                let startIndex = Number(arrCommand[1]);
                let endIndex = Number(arrCommand[2]);
                let damage = Number(arrCommand[3]);
                if (startIndex <= endIndex) {
                    let isStrartIndexValid = startIndex <= statusOfPirateShipL && startIndex >= 0;
                    let isEndIndexValid = endIndex <= statusOfPirateShipL && endIndex >= 0;
                    if (isEndIndexValid && isStrartIndexValid) {

                        let damagedSection = statusOfPirateShip.slice(startIndex, endIndex + 1).map((el) => {
                            return (el - damage);

                        });

                        for (let i = damagedSection.length - 1; i >= 0; i--) {
                            statusOfPirateShip.splice(i, 1, damagedSection[i])
                        }

                        for (el of statusOfPirateShip) {
                            if (el <= 0) {
                                console.log(`You lost! The pirate ship has sunken.`)
                                break;
                            }
                        }

                    }
                }
            }
            else if (arrCommand.includes('Repair')) {
                let indexToAddHealth = Number(arrCommand[1]);
                let healthToAdd = Number(arrCommand[2]);
                let isIndexValid = indexToAddHealth < statusOfPirateShipL && indexToAddHealth >= 0;
                if (isIndexValid) {
                    let sumHealth = healthToAdd + statusOfPirateShip[indexToAddHealth];
                    if (sumHealth > maximumHealthCapacity) {
                        sumHealth = maximumHealthCapacity
                        statusOfPirateShip.splice(indexToAddHealth, 1, sumHealth)
                    }
                    else {
                        statusOfPirateShip.splice(indexToAddHealth, 1, sumHealth)
                    }

                }

            }
            else if (arrCommand.includes('Status')) {
                let minHealthCapacity = 0.2 * maximumHealthCapacity
                let needToRepair = 0
                for (el of statusOfPirateShip) {
                    if (el < minHealthCapacity) {
                        needToRepair++;
                    }
                }
                console.log(`${needToRepair} sections need repair.`)
            }
            index++;
            command = arr[index]
        }
        let sumStatusOfPirateShip = 0;
        counterOfGoodElPiratShip = 0;
        for (let i = 0; i < statusOfPirateShip.length; i++) {

            if (statusOfPirateShip[i] > 0) {
                sumStatusOfPirateShip += (statusOfPirateShip[i]);
                counterOfGoodElPiratShip++;
            }
        }
        let sumStatusForWarShip = 0;
        counterOfGoodElWarShip = 0;
        for (let i = 0; i < statusForWarship.length; i++) {

            if (statusForWarship[i] > 0) {
                sumStatusForWarShip += (statusForWarship[i]);
                counterOfGoodElWarShip++;
            }
        }
        if (counterOfGoodElPiratShip === statusOfPirateShip.length &&
            counterOfGoodElWarShip === statusForWarship.length) {
            console.log(`Pirate ship status: ${sumStatusOfPirateShip}`);
            console.log(`Warship status: ${sumStatusForWarShip}`);
        }
    }

}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    //"Fire 1 -32",
    // "Fire 8 100",
    // "Defend 3 6 11",
    // "Defend 0 3 5",
     "Repair 1 33",
    // "Status",
    "Retire"])



