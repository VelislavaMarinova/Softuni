function demo(input) {
    class Students {
        constructor(name, grade, avgScore, avgClassScore) {
            this.name = name,
                this.grade = grade,
                this.avgScore = avgScore
            this.avgClassScore = avgClassScore
        }
    }
    let studentsInfo = [];
    for (let i = 0; i < input.length; i++) {
        let line = input[i].split(', ');

        let name = (line[0].split(': '))[1];
        let grade = Number((line[1].split(': '))[1]) + 1;
        let avgScore = (line[2].split(': '))[1];
        if (avgScore > 3) {
            let newStud = new Students(name, grade, avgScore)
            studentsInfo.push(newStud)
        }
    }
    studentsInfo.sort(compare)
    // console.log(studentsInfo);
    function compare(a, b) {
        if (a.grade < b.grade) {
            return -1;
        }
        if (a.grade > b.grade) {
            return 1;
        }
        return 0;
    }
    let gradeArr = [];
    for (let el of studentsInfo) {
        if (Number(el.avgScore) < 3) {
            let index = studentsInfo.indexOf(el);
            studentsInfo.splice(index, 1)
            // console.log(el);
        } else {
            if (!gradeArr.includes(el.grade)) {
                gradeArr.push(el.grade)
            }
        }

    }
    gradeArr.sort((a, b) => {
        return a - b;
    })
    // console.log(gradeArr);

    let avgClassScore = 0
    let passedStudents = {};
    for (let grade of gradeArr) {
        let sumScores = 0
        let studentCounter = 0
        for (let el of studentsInfo) {
            if (el.grade === grade) {
                studentCounter++;
                sumScores += Number(el.avgScore);
            }
        }
        avgClassScore = (sumScores / studentCounter).toFixed(2)
        for (let el of studentsInfo) {
            if (el.grade === grade) {
                if (!passedStudents.hasOwnProperty(grade)) {
                    passedStudents[grade] = {
                        name: [el.name],
                        avgClassScore: avgClassScore
                    }
                } else {
                    passedStudents[grade].name.push(el.name);
                }
            }
        }
    }

    for (let [grade, info] of Object.entries(passedStudents)) {
        console.log(`${grade} Grade
List of students: ${passedStudents[grade].name.join(', ')}
Average annual score from last year: ${passedStudents[grade].avgClassScore}`);
        console.log('');

    }
}
demo([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
])
