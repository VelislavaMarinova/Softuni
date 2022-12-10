function examPreparation(input) {
    let index = 0;
    let numBadRating = Number(input[index]);

    let taskName = "";

    let rating = 0;
    let sumRating = 0;

    let badRatingCounter = 0;
    let numberTasks = 0;


    while (numBadRating > badRatingCounter) {
        
        index++;
        taskName = input[index];
        if (taskName === "Enough") {

            console.log(`Average score: ${(sumRating / numberTasks).toFixed(2)}`);
            console.log(`Number of problems: ${numberTasks}`);
            console.log(`Last problem: ${input[index - 2]}`);
            break;
        }

        numberTasks += 1;
        index++;
        rating = Number(input[index]);
        sumRating += Number(rating);
        if (rating <= 4) {
            badRatingCounter += 1;
        }
        
        
        
    }
    if (badRatingCounter >= numBadRating) {
        console.log(`You need a break, ${numBadRating} poor grades.`);
    }   
   
}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
