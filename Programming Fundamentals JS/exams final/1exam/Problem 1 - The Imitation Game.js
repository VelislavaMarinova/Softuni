function demo(arr) {
    let encryptedMessage = arr.shift();
    let index = 0;
    let command = arr[index]

    while (command !== 'Decode') {

        let splitCommmand = command.split('|');

        if (command.includes('Move')) {
            let numLettersToMove = splitCommmand[1]
            let elToMove = encryptedMessage.slice(0, numLettersToMove);
            let startEl = encryptedMessage.slice(numLettersToMove)
            encryptedMessage = startEl + elToMove

        }
        else if (command.includes('Insert')) {
            let indexToInsert = Number(splitCommmand[1]);
            let elToInsert = splitCommmand[2]
            let firstSlice = encryptedMessage.slice(0, indexToInsert)
            let secondSlice = encryptedMessage.slice(indexToInsert)
            encryptedMessage = firstSlice + elToInsert + secondSlice

        }
        else if (command.includes('ChangeAll')) {
            let searchEl = splitCommmand[1];
            let replaceEl = splitCommmand[2];
            for (let el of encryptedMessage) {
                if (el === searchEl) {
                    encryptedMessage = encryptedMessage.replace(searchEl, replaceEl)
                }
            }
        }
        index++;
        command = arr[index]
    }
    console.log(`The decrypted message is: ${encryptedMessage}`);
}
demo([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
])