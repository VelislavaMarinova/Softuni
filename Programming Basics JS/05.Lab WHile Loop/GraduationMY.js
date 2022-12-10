function graduation(input) {
    let index = 0
    let name = input[index];
    index++;
    let yearGrade = Number(input[index]);

    let year = 1
    let sumGrades = 0
    let badGradecounter = 0

    while (year <= 12) {
        sumGrades += Number(yearGrade)
        if (badGradecounter > 1) {
            console.log(`${name} has been excluded at ${year} grade`);
            break;
        }
        if (yearGrade < 4) {
            badGradecounter++;
            continue;
        }
        else if (badGradecounter < 2) {
            year += 1

            index++;
            yearGrade = Number(input[index]);
        }
    }
    
    if(badGradecounter <1){
    let avgGrade = sumGrades / 12
    console.log(`${name} graduated. Average grade: ${(avgGrade).toFixed(2)}`)
}
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
