function test(arr) {
    let list = arr.shift().split(", ");

    let index= 0;
    let command = arr[index].split(' - ');


    while (!command.includes("End")) {

        let currentCommand = command[0];
        let phone = command[1];

        if (currentCommand === 'Add') {
            if (!list.includes(phone)) {
                list.push(phone)
            }
        }
        else if (currentCommand === 'Remove') {
            if (list.includes(phone)) {
                let phoneIndex = list.indexOf(phone)
                list.splice(phoneIndex, 1)
            }
        }
        else if (currentCommand === 'Bonus phone') {
            let phoneArr = phone.split(':')
            let phoneOne = phoneArr[0];
            let phoneTwo = phoneArr[1]
            if (list.includes(phoneOne)) {
                let indexPhoneOne = list.indexOf(phoneOne);
                list.splice(indexPhoneOne + 1, 0, phoneTwo)
            }
        }
        else if (currentCommand === 'Last') {
            if (list.includes(phone)) {
                let phoneIndex = list.indexOf(phone);
                list.splice(phoneIndex,1)
                list.push(phone)
            }
        }
        index++;
        command = arr[index].split(' - ');
    }

    console.log(list.join(', '));
}
test(["SamsungA50, MotorolaG5, HuaweiP10",
"Last - SamsungA50",
"Add - MotorolaG5",
"End"])

