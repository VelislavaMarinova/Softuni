function demo(arr) {
    let text = arr.join(" ");
    let sumCal = 0
    let regExp = /([#|]){1}(?<name>[A-Z][a-z]+([\s]?[A-Z][a-z]+)?)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<cal>[\d]+)\1/g
    let valid;
    let food = [];
    while ((valid = regExp.exec(text)) !== null) {
        let validCal = Number(valid.groups.cal);
        food.push(valid.groups);
        sumCal += validCal

    }
    let calForDay = 2000
    let numDaysFood = sumCal / calForDay
    console.log(`You have food to last you for: ${Math.floor(numDaysFood)} days!`);
    food.forEach((el) => {
        console.log(`Item: ${el.name}, Best before: ${el.date}, Nutrition: ${el.cal}`);
    })

}

demo([
    '|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|#Bread#19/03/21#4000#'
])
console.log("---------------------------------------------------");

demo(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'])