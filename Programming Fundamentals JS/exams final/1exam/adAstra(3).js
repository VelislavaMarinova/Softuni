function demo(input) {
    
    let calForDay = 2000
    let text = input.join(' ');

    let regexp = /([#|\|])(?<name>[A-Za-z]+[\s]?[A-Za-z]+)\1(?<date>[\d]{2}\/[\d]{2}\/[\d]{2})\1(?<calories>[\d]+)\1/g

    let match;
    let productInfo = {}
    let sumCal = 0
    let message = ''

    while ((match = regexp.exec(text))) {
        let nameProduct = match.groups.name
        let dateProduct = match.groups.date;
        let calories = match.groups.calories;
        message += `Item: ${nameProduct}, Best before: ${dateProduct}, Nutrition: ${calories}\n`
        productInfo[nameProduct] = {
            date: dateProduct,
            calories: calories
        }
        sumCal += Number(productInfo[nameProduct].calories)
    }
    numDaysWithFood = Math.floor(sumCal / calForDay)
    console.log(`You have food to last you for: ${numDaysWithFood} days!`);
    console.log(message);
}
demo([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])
