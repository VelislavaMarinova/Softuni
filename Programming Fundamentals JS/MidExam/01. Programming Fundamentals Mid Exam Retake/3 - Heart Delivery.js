function heartDelivery(arr) {

    let houses = arr.shift();
    let newArrHouses = houses.split('@').map(Number)
    let newArrHousesL = newArrHouses.length
   

    let message = '';



    let index = 0
    let command = arr[index]
    let indexOfCupid = 0
    while (command !== 'Love!') {
        let arrOfCommand = command.split(" ")
        let jumpNum = Number(arrOfCommand.pop())
        newArrHousesL = newArrHouses.length

        for (let i = 0; i < jumpNum; i++) {
            indexOfCupid++
            if (indexOfCupid === newArrHousesL) {
                indexOfCupid = 0
            }
        }
        if (Number(newArrHouses[indexOfCupid]) === 0) {
            message = `Place ${indexOfCupid} already had Valentine's day.`
            console.log(message);
        }
        else {
            let decreacedHouse = Number(newArrHouses[indexOfCupid]) - 2;
            newArrHouses.splice(indexOfCupid, 1, decreacedHouse);
            if (Number(newArrHouses[indexOfCupid]) === 0) {
                message = `Place ${indexOfCupid} has Valentine's day.`
                console.log(message);
            }
        }
        index++;
        command = arr[index]

    }
    let zeroCounter = 0
    for (let i = 0; i < newArrHousesL; i++) {

        if (Number(newArrHouses[i]) === 0) {
            zeroCounter++;
        }
    }
    console.log(`Cupid's last position was ${indexOfCupid}.`);
    if (zeroCounter === newArrHousesL) {
        console.log(`Mission was successful.`);
    }
    else {
        console.log(`Cupid has failed ${newArrHousesL - zeroCounter} places.`);
    }
}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])


