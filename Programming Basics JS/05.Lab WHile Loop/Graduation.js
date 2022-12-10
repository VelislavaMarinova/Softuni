function graduation(input){
    let index = 0;
    let name = input[index];
    index++;

    let badGrade =1
    let sumGrade = 0;
    let numClass = 1;
    while(numClass <=12){
        let grade =Number(input[index])
        index++;
        if(badGrade>1){
            break;
        }
        if (grade<4){
            continue;
        }
        sumGrade +=grade
        numClass++;
    }
let avgGrade =sumGrade/12
console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`)
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])