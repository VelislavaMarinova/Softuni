function moving(input) {
    let index = 0
    let wide = Number(input[index]);
    index++;
    let heigh = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let freeSpace = wide * heigh * length;
    let busySpace = 0

    let command = input[index];

    while (command !== "Done") {
        command = Number(input[index]);
       busySpace += command;
        index++;
        if (busySpace > freeSpace) {
            console.log(`No more free space! You need ${busySpace - freeSpace} Cubic meters more.`);
            break;
        }
        command = input[index];
    }
    if (command === "Done") {
        console.log(`${freeSpace - busySpace} Cubic meters left.`);
    }
}
moving
(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

