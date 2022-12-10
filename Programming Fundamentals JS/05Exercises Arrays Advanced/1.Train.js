function train(arr) {
    let trainWagons = arr.shift().split(' ');
    let maxCapacityEachWagon = Number(arr.shift());
    let arrL = arr.length;
    let command = ""
    let numPeopleToAdd = 0
    for (let i = 0; i < arrL; i++) {
        command = arr[i].split(" ");
        if (command.includes("Add")) {
            trainWagons.push(command[1])
        }
        else {
            numPeopleToAdd = Number(command[0])
            for (let j = 0; j < trainWagons.length; j++) {
                let numPeopleCurrentWagon = Number(trainWagons[j]);
                if (numPeopleCurrentWagon <= maxCapacityEachWagon) {
                    numPeopleCurrentWagon += numPeopleToAdd
                    if (numPeopleCurrentWagon <= maxCapacityEachWagon) {
                        trainWagons.splice(j, 1, numPeopleCurrentWagon)
                        break;
                    }
                }
            }
        }
        //console.log(command);

    }

    console.log(trainWagons.join(" "));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6'])
