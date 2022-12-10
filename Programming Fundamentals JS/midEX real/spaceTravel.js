function test(arr) {
    let travelRout = arr.shift().split("||");
    let fuel = Number(arr.shift());
    let ammuniton = Number(arr[0]);

    let index = 0
    let arrCommand = travelRout[index].split(' ');


    let travelRoutL = travelRout.length;

    while (!arrCommand.includes("Titan")) {

        let command = arrCommand[0]
        if (command === 'Travel') {
            let distance = Number(arrCommand[1]);
            //fuel -= distance
            if (fuel >= distance) {
                console.log(`The spaceship travelled ${distance} light-years.`)
                fuel -= distance
            }
            else if(fuel<distance) {
                console.log(`Mission failed.`);
                break;
            }

        }
        else if (command === 'Enemy') {
            let enemyArmour = Number(arrCommand[1]);
            if (ammuniton >= enemyArmour) {
                ammuniton -= enemyArmour
                console.log(`An enemy with ${enemyArmour} armour is defeated.`);
            }
            else {

                if (fuel >= 2 * enemyArmour) {
                    fuel -= enemyArmour * 2
                    console.log(`An enemy with ${enemyArmour} armour is outmaneuvered.`);
                }
                else {
                    console.log(`Mission failed.`)
                    break;
                }
            }
        }
        else if (command === "Repair") {
            let addFuel = Number(arrCommand[1])
            let addAmmunition = 2 * Number(arrCommand[1])
            fuel += addFuel;
            ammuniton += addAmmunition
            console.log(`Ammunitions added: ${addAmmunition}.`);
            console.log(`Fuel added: ${addFuel}.`);
        }
        index++;
        arrCommand = travelRout[index].split(' ');
    }
    if (arrCommand.includes("Titan")) {
        console.log(`You have reached Titan, all passengers are safe.`);
    }
}
test([ 'Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', 
'0', 
'0' ])


