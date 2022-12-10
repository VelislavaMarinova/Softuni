function demo(input) {
    let allStops = input.shift()
    let initialString = allStops
    let index = 0
    let command = input[index];

    while (command !== "Travel") {
        let splitCommand = command.split(':')
        let commandWord = splitCommand.shift()
        // console.log(splitCommand);
        if (commandWord === 'Add Stop') {

            const index = splitCommand.shift()
            const elToAdd = splitCommand.join(' ')


            if (index >= 0 && index < allStops.length) {
                let start = allStops.substring(0, index)
                let end = allStops.substring(index)
                allStops = start + elToAdd + end

            }
        }
        else if (commandWord === 'Remove Stop') {
            const startIndex = Number(splitCommand.shift());
            const endIndex = Number(splitCommand)
            if (startIndex >= 0 && startIndex <= endIndex && endIndex < allStops.length) {
                let start = allStops.substring(0, startIndex)
                let end = allStops.substring(endIndex + 1)
                allStops = start + end

            }
        }
        else if (commandWord === 'Switch') {
            let oldStr = splitCommand.shift();
            let newStr = splitCommand.join('')


            allStops = allStops.split(oldStr).join(newStr)


        }

        console.log(allStops);

        index++;
        command = input[index];
    }
    if (command === "Travel") {
        console.log(`Ready for world tour! Planned stops: ${allStops}`);
    }
}
demo((["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"])
)