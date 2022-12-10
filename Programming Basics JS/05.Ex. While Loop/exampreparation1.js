function tasks(input) {
    let index = 0
    let legitPoorGrades = Number(input[index]);
    index++
    let poorGrades = 0;
    let goodGrades = 0;
    let taskCounter = 0;
    let taskName = ""

    while (poorGrades < legitPoorGrades) {
        taskName = input[index];
        index++
        if (Number(input[index]) < 4) {
            poorGrades++
        } else {
            goodGrades += Number(input[index]);
        }
        taskCounter++
        index++
        if (input[index] === "Enough") {
            console.log(`Average score: ${(goodGrades / taskCounter).toFixed(2)}`);
            console.log(`Number of problems: ${taskCounter}`);
            console.log(`Last problem: ${taskName}`);
            break;
        }
        if (poorGrades >= legitPoorGrades) {
            console.log(`You need a break, ${poorGrades} poor grades.`);
            break;

        }

    }
}
tasks(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
