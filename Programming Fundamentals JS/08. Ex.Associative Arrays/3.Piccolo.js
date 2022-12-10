function piccolo(arr) {
    let parking = [];
    for (let el of arr) {
        let cars = el.split(", ")
        let command = cars[0];
        let numCar = cars[1]
        if (command === "IN") {
            if(!parking.includes(numCar)){
            parking.push(numCar)}
        }
        else if (command === "OUT") {
            if(parking.includes(numCar)){
            let indexOfNum = parking.indexOf(numCar)
            parking.splice(indexOfNum, 1)}
        }

    }
    let sortedParking = parking.sort((a, b) => a.localeCompare(b))
    if (sortedParking.length === 0) {
        console.log("Parking Lot is Empty");
    } else {

        console.log(sortedParking.join("\n"));
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)