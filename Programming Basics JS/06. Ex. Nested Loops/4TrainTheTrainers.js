function trainTheTrainers(input) {
    let index = 0
    let numJury = Number(input[index]);
    index++;
    let command = input[index];
    let nameTask = "";
    let grade = 0
    let sumGrades = 0

    let avg = 0
    let avgSum = 0
    let avgCounter = 0
    let totalAvg = 0
    while (command !== "Finish") {

        nameTask = command;
       
        for (let i = 1; i <= numJury; i++) {
            index++;
            grade = Number(input[index]);
            sumGrades+=grade
            
        }
        
        avg = sumGrades/numJury
        console.log(`${nameTask} - ${avg.toFixed(2)}.`);
        avgSum += avg
        avgCounter++;
        index++;
        command = input[index];
        sumGrades = 0
    }

    if (command === "Finish") {
        console.log(`Student's final assessment is ${((avgSum / avgCounter).toFixed(2))}.`);
    }


}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


