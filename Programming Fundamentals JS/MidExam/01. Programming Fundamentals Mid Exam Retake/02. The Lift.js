function theLift(arr) {
    let arrOfEl = arr;
    let numPeople = Number(arrOfEl[0]);
    let numPeopleToTakeLift = numPeople
    let liftCapacityEl = arrOfEl[1];
    let liftCapacityElLength = liftCapacityEl.length;
    let freePlacesOnLift = 0;
    let arrOfWagons = [];
    let messageFirstLine = "";
    let messageSecondLine = "";
    let arrOfBissyLift = [];

    for (let i = 0; i < liftCapacityElLength; i++) {
        let currentEl = liftCapacityEl[i]
        if (currentEl !== " ") {
            arrOfWagons.push(currentEl)
            if (Number(currentEl) === 0) {
                freePlacesOnLift += 4
            }
            else if (Number(currentEl) === 1) {
                freePlacesOnLift += 3
            }
            else if (Number(currentEl) === 2) {
                freePlacesOnLift += 2
            }
            else if (Number(currentEl) === 3) {
                freePlacesOnLift += 1
            }
        }
    }

    let arrOfWagonsLength = arrOfWagons.length;
    for (let i = 0; i < arrOfWagonsLength; i++) {
        let currentWagoonPlaces = Number(arrOfWagons[i])
        while (currentWagoonPlaces < 4) {
            if (numPeopleToTakeLift > 0) {
                currentWagoonPlaces++;
                numPeopleToTakeLift = numPeopleToTakeLift - 1
               // if (currentWagoonPlaces === 4 || numPeopleToTakeLift === 0) {
                  //  arrOfBissyLift.push(currentWagoonPlaces);
//break;
              //  }
                

            }
            else if(numPeopleToTakeLift === 0){
                arrOfBissyLift.push(currentWagoonPlaces)
            }
            else {
                arrOfBissyLift.push(currentWagoonPlaces)
            }

        }
        if(currentWagoonPlaces === 4){
            arrOfBissyLift.push(currentWagoonPlaces)
        }
        // let currentWagonCapacity = 4 - Number(arrOfWagons[i]);
        //if (numPeopleToTakeLift === 0) {
        //   arrOfBissyLift.push(arrOfWagons[i])
        // }
        // else if (numPeopleToTakeLift > currentWagonCapacity) {
        // //  arrOfBissyLift.push(4)
        //   numPeopleToTakeLift -= currentWagonCapacity
        // }
        // else if (currentWagonCapacity >= numPeopleToTakeLift) {
        //arrOfBissyLift.push(numPeopleToTakeLift)
        //numPeopleToTakeLift = 0
        // }
    }
    if (freePlacesOnLift > numPeople) {
        messageFirstLine = `The lift has empty spots!`
        messageSecondLine = `${arrOfBissyLift.join(" ")}`
    }
    else if (numPeople > freePlacesOnLift) {
        messageFirstLine = `There isn't enough space! ${numPeople - freePlacesOnLift} people in a queue!`
        messageSecondLine = `${arrOfBissyLift.join(" ")}`
    }
    else if (numPeople === freePlacesOnLift) {
        messageFirstLine = `${arrOfBissyLift.join(" ")}`
    }
    console.log(messageFirstLine);
    console.log(messageSecondLine);
}


theLift([
    "2",
    "2 4 0"
]
)

