function theLift(arr) {
    let numPeople = Number(arr.shift());
    let arrOfWagons = arr[0].split(' ').map(Number)
    let arrOfWagonsLength = arrOfWagons.length;
    let message = '';

    if (numPeople) {
        for (let i = 0; i < arrOfWagonsLength; i++) {
            let currentW = arrOfWagons[i]
            while (currentW < 4) {
                numPeople--;
                currentW++

                if (numPeople === 0) {
                    break;
                }

                arrOfWagons[i] === currentW;
            }
            arrOfWagons.splice(i, 1, currentW)
            if (numPeople === 0) {
                break;
            }


        }

    }
    if (arrOfWagons[arrOfWagonsLength - 1] < 4) {
        message = `The lift has empty spots!`
        console.log(message);
        console.log(arrOfWagons.join(" "));

    }
    else if (numPeople) {
        message = `There isn't enough space! ${numPeople} people in a queue!`
        console.log(message);
        console.log(arrOfWagons.join(' '));
    }
    else if (numPeople === 0 && arrOfWagons[arrOfWagonsLength - 1] === 4) {
        console.log(arrOfWagons.join(" "));
    }


}
theLift([
    "3",
    "0 0 0 0 0"
])
theLift([
    "10",
    "0 2 0"
   ]
   )