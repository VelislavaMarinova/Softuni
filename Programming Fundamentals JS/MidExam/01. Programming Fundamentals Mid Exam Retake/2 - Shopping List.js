function shoppingList(arr) {
    let initialList = arr.shift().split('!');
   // console.log(initialList);
    let index = 0;
    let command = arr[index];
    while (command !== "Go Shopping!") {
        let commandArr = command.split(" ")
        let item = ""
        if (commandArr.length === 2) {
            item = commandArr[1];
        }
        if (commandArr.includes("Urgent")) {
            if (!initialList.includes(item))
                initialList.unshift(item);

        }
        else if (commandArr.includes("Unnecessary")) {
            if (initialList.includes(item)) {
                let indexOfItem = initialList.indexOf(item);
                initialList.splice(indexOfItem, 1);
            }
        }
        else if (commandArr.includes("Correct")) {
            let oldItem = commandArr[1];
            let newItem = commandArr[2];
            if (initialList.includes(oldItem)) {
                let indexOfItem = initialList.indexOf(oldItem);
                initialList.splice(indexOfItem, 1, newItem)
            }
        }
        else if (commandArr.includes("Rearrange")) {
            if (initialList.includes(item)) {
                let indexOfItem = initialList.indexOf(item);
                initialList.splice(indexOfItem, 1);
                initialList.push(item)
            }
        }
        index++;
        command = arr[index]
    }
    console.log(initialList.join(", "));
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

