function oldBooks(input) {
    let index = 0
    let annysBook = input[index];
    index++;

    let takenBook = input[index];
    let bookCounter = 0

    while (takenBook !== annysBook) {
        bookCounter += 1;
        index++;
        if (takenBook === "No More Books") {
            console.log(`The book you search is not here!`);
            console.log(`You checked ${bookCounter-1} books.`);
            break;
        }
        takenBook = input[index];
    }
    if (takenBook === annysBook) {
        console.log(`You checked ${bookCounter} books and found it.`);
    }

}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
