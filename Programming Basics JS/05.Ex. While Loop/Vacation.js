function vacation(input) {
    let moneyNeedTrip = Number(input[0]);
    let strartMoney = Number(input[1]);

    let index = 2;
    let command = input[index];
    let totalDays = 0;
    let spendDays = 0;

    while (strartMoney < moneyNeedTrip) {
        totalDays++;
        index++;
        if (command === "spend") {
            spendDays++;
            if (spendDays === 5) {

                console.log(`You can't save the money.`);
                console.log(totalDays);
                break;
            }
            let moneyToSpend = Number(input[index]);
            strartMoney -= moneyToSpend;
            if (strartMoney < 0) {
                strartMoney = 0;
            }
        }
        else if (command === "save") {
            spendDays = 0;
            let moneyTosave = Number(input[index]);
            strartMoney += moneyTosave
        }
        index++;
        command = input[index]
    }
    if (strartMoney >= moneyNeedTrip) {

        console.log(`You saved the money for ${totalDays} days.`);
    }

}
vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])

