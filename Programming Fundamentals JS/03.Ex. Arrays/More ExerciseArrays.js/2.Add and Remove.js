function addAndRemove(arr) {
    let arrCommands = arr;
    let arrCommandsLength = arrCommands.length;
    let newArr = [];
    for (let i = 0; i < arrCommandsLength; i++) {
        let nexElement = Number(i) + 1
        let currentCommand = arrCommands[i]
        if (currentCommand === "add") {
            newArr.push(nexElement)
        }
        else {
            newArr.pop()
        }
    }
    if (!newArr.length) {
        console.log('Empty');
    }
    else {
        console.log(newArr.join(" "));
    }
}
addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])