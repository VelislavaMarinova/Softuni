function formatGrade(num) {
    let grade = Number(num);
    let message = '';
    let textGrade = "";
    if (grade < 3) {
        textGrade = "Fail";
    }
    else if (grade >= 3 && grade < 3.5) {
        textGrade = "Poor";

    }
    else if (grade >= 3.5 && grade < 4.5) {
        textGrade = 'Good'
    }
    else if (grade >= 4.5 && grade < 5.5) {
        textGrade = "Very good"
    }
    else if (grade >= 5.5) {
        textGrade = "Excellent"
    }
    if (grade < 3) {
        
        message = `${textGrade} (${Math.floor(grade)})`
    }
    else {
        message = `${textGrade} (${grade.toFixed(2)})`
    }
    console.log(message);

}
formatGrade(3.49)
