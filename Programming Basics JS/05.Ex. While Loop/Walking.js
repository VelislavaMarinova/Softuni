function walking(input) {
    let targetSteps = 10000;
    let stepCounter = 0;

    let index = 0;
    let command = input[index];

    while (command !== "Going home") {
        let steps = Number(command)
        stepCounter += steps
        if (stepCounter >= targetSteps) {
            console.log(`Goal reached! Good job!`);
            console.log(`${stepCounter - targetSteps} steps over the goal!`);break;

        }
        index++;
        command = input[index];

    }
    if (command === "Going home") {
        
        let stepsHome = Number(input[index+1]);
        stepCounter += stepsHome
        if (stepCounter >= targetSteps) {
            console.log(`Goal reached! Good job!`);
            console.log(`${stepCounter - targetSteps} steps over the goal!`);
        }
        else {
            console.log(`${targetSteps - stepCounter} more steps to reach goal.`);
        }


    }
}
walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])
