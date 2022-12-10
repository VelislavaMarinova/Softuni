function houseParty(arr) {
    let command = ""
    let list = [];
    let message = '';
    for (let i = 0; i < arr.length; i++) {
        command = arr[i].split(" ");
        let Name = command[0];
        if (!command.includes('not')) {
            if (!list.includes(Name)) {
                list.push(Name);
            }
            else {
                message = `${Name} is already in the list!`
                console.log(message);
            }
        }
        else {
            if (list.includes(Name)) {
                let indexOfName = list.indexOf(Name);
                list.splice(indexOfName, 1)
            }
            else {
                message = `${Name} is not in the list!`
                console.log(message);
            }
        }
    }
    list.forEach((el) => {
        console.log(el);
    })
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']


)