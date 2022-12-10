function vacation(num, group, day) {
    let numPeople = Number(num);
    let typeGroup = group;
    let dayWeek = day;
    let priceAllPeople = 0

    let studentPriceFriday = 8.45;
    let studenPriceSaturday = 9.8;
    let studenPriceSunday = 10.46;
    let businessPriceFriday = 10.90;
    let businessPriceSaturday = 15.6
    let businessPriceSunday = 16
    let regularPriceFriday = 15
    let regularPriceSaturday = 20
    let regularPriceSunday = 22.5

    if (typeGroup === "Students") {
        switch (dayWeek) {
            case "Friday": priceAllPeople = numPeople * studentPriceFriday; break;
            case "Saturday": priceAllPeople = numPeople * studenPriceSaturday; break;
            case "Sunday": priceAllPeople = numPeople * studenPriceSunday; break;
        }
        if (numPeople >= 30) {
            priceAllPeople = 0.85 * priceAllPeople
        }
    }
    else if (typeGroup === 'Business') {
        if (numPeople < 100) {
            switch (dayWeek) {
                case "Friday": priceAllPeople = numPeople * businessPriceFriday; break;
                case "Saturday": priceAllPeople = numPeople * businessPriceSaturday; break;
                case "Sunday": priceAllPeople = numPeople * businessPriceSunday; break;
            }
        }
        if (numPeople >= 100) {
            switch (dayWeek) {
                case "Friday": priceAllPeople = (numPeople - 10) * businessPriceFriday; break;
                case "Saturday": priceAllPeople = (numPeople - 10) * businessPriceSaturday; break;
                case "Sunday": priceAllPeople = (numPeople - 10) * businessPriceSunday; break;
            }
        }
    }
    else if (typeGroup === "Regular") {
        switch (dayWeek) {
            case "Friday": priceAllPeople = numPeople * regularPriceFriday; break;
            case "Saturday": priceAllPeople = numPeople * regularPriceSaturday; break;
            case "Sunday": priceAllPeople = numPeople * regularPriceSunday; break;
        }
        if (numPeople >= 10 && numPeople <= 20) {
            priceAllPeople = 0.95 * priceAllPeople
        }
    }

console.log(`Total price: ${priceAllPeople.toFixed(2)}`);

}
vacation(40,
    "Regular",
    "Saturday"
    )