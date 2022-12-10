function demo(input) {
    let allFlights = input.shift();
    class Flights {
        constructor(num, destination) {
            this.num = num,
                this.destination = destination
        }
    }

    class Cancelled {
        constructor(destination, status) {
            this.destination = destination,
                this.Status = 'Cancelled'

        }
    }
    let newArrAllFlights = []
    allFlights.forEach(flight => {
        let [num, ...destination] = flight.split(' ');
        let newFlight=''
        if (destination[1]) {
            destination = destination[0] + ` ${destination[1]}`
            newFlight = new Flights(num, destination)
        } else {
            destination = destination[0]
            newFlight = new Flights(num, destination)

        }
        newArrAllFlights.push(newFlight);
    });

    let cancelled = []
    function cancelFlighth(numFlight) {
        for (let el of newArrAllFlights) {
            let number = el.num
            if (number === numFlight) {
                let newCancelled = new Cancelled(el.destination);
                cancelled.push(newCancelled)
                let index = newArrAllFlights.indexOf(el);
                newArrAllFlights.splice(index, 1)
            }
        }
        cancelled.sort(compare)
    }
    function compare(a, b) {
        if (a.destination < b.destination) {
            return -1;
        }
        if (a.destination > b.destination) {
            return 1;
        }
        return 0;
    }

    let changeStatus = input.shift();
    changeStatus.forEach(line => {
        let [num, command] = line.split(' ');
        for (let el of newArrAllFlights) {
            if (el.num === num) {
                if (command === 'Cancelled') {
                    cancelFlighth(num);
                }
            }
        }

    })
    let command = input.shift()
    command = command[0]
        ;
    if (command === 'Ready to fly') {
        for (let el of newArrAllFlights) {
            console.log(`{ Destination: '${el.destination}', Status: 'Ready to fly' }`);
        }
    } else {
        for (let el of cancelled) {
            console.log(`{ Destination: '${el.destination}', Status: 'Cancelled' }`);
        }
    }


}
demo([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
)