function nfs(input) {
    let numCars = input.shift();
    class CarInfo {
        constructor(car, mileage, availableFuel) {
            this.car = car;
            this.mileage = mileage
            this.availableFuel = availableFuel
        }
    }
    let arrOfCarInfo = []
    for (let i = 0; i < numCars; i++) {
        let [car, mileage, availableFuel] = input[i].split('|')
        let newObjCarInfo = new CarInfo(car, mileage, availableFuel)
        arrOfCarInfo.push(newObjCarInfo)
    }

    let arrOfCommandsLine = input.slice(numCars);
    let line = arrOfCommandsLine.shift();

    while (line !== 'Stop') {
        let [command, car, numOne, numTwoo] = line.split(' : ');
        switch (command) {
            case 'Drive':
                let distance = Number(numOne);
                let fuelNeed = Number(numTwoo);
                for (let el of arrOfCarInfo) {
                    if (el.car === car) {
                        if (Number(el.availableFuel) >= fuelNeed) {
                            el.mileage = Number(el.mileage) + distance;
                            el.availableFuel = Number(el.availableFuel) - fuelNeed;
                            console.log(`${car} driven for ${distance} kilometers. ${fuelNeed} liters of fuel consumed.`);
                            if (el.mileage > 100000) {
                                let indexOfEl = arrOfCarInfo.indexOf(el);
                                arrOfCarInfo.splice(indexOfEl, 1)
                                console.log(`Time to sell the ${car}!`);
                                break;
                            }
                        } else {
                            console.log(`Not enough fuel to make that ride`);
                        }
                    }
                }
                break;

            case 'Refuel':
                let fuelToFill = Number(numOne);
                for (let el of arrOfCarInfo) {
                    if (el.car === car) {
                        let oldFuel = el.availableFuel
                        el.availableFuel = Number(el.availableFuel) + fuelToFill
                        if (Number(el.availableFuel) > 75) {
                            el.availableFuel = 75
                        }
                        let addedFuel = el.availableFuel - oldFuel
                        console.log(`${car} refueled with ${addedFuel} liters`);
                    }
                }
                break;
            case 'Revert':
                let kilometres = Number(numOne);
                for (let el of arrOfCarInfo) {
                    if (el.car === car) {
                        el.mileage = Number(el.mileage) - kilometres
                        if (el.mileage < 10000) {
                            el.mileage = 10000;
                            break
                        } else {
                            console.log(`${car} mileage decreased by ${kilometres} kilometers`);
                        }
                    }
                }
                break;
        }
        line = arrOfCommandsLine.shift();
    }
    for (let el of arrOfCarInfo) {
        console.log(`${el.car} -> Mileage: ${el.mileage} kms, Fuel in the tank: ${el.availableFuel} lt.`);
        }
}

nfs([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 13',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 2',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]
)
