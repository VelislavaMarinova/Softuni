function nextDay(num1, num2, num3) {
    let year = Number(num1);
    let month = Number(num2);
    let day = Number(num3);
    let nexDay = 0;
    let messageNextDay = "";

    if (year % 4 === 0 || year % 100 === 0 || year % 400 === 0) {
        if (month === 2 && day <= 28) {
            nexDay = day + 1
        }
        else if (month === 2 && day === 29) {
            nexDay = 1
            month += 1
        }
    }
    else {
        if (month === 2 && day < 28) {
            nexDay === day +
                1
        }
        else if ((month === 2 && day === 28)) {
            nexDay = 1
            month += 1
        }
    }
    if (month === 12 || month === 10 || month === 8 || month === 10 || month === 7 || month === 5 || month === 3 || month === 1) {
        if (month === 12 && day === 31) {
            year += 1;
            month = 1;
            nexDay = 1;
        }
        else if (day === 31) {
            month += 1;
            nexDay = 1;
        }
        else {
            nexDay = day + 1;
        }

    }
    else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (day === 30) {
            month += 1
            nexDay = 1
        }
        else {
            nexDay = day + 1;
        }
    }
    messageNextDay = `${year}-${month}-${nexDay}`
    console.log(messageNextDay);

}
nextDay(2016, 9, 30)
nextDay(2020, 3, 24)