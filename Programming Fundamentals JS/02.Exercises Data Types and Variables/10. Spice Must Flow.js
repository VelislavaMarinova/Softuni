function SpiceMustFlow(a) {
    let startingYield = Number(a)

    let consumeYield = 26
    let dayCounter = 0
    let dayYield = 0
    if (startingYield >= 100) {
        while (startingYield >= 100) {

            dayCounter++;
            dayYield += startingYield
            startingYield -= 10
            dayYield -= consumeYield

        }
        console.log(dayCounter);
        console.log(Math.round(dayYield - consumeYield));
    }
    else{
    console.log(0);
    console.log(0);}
}
SpiceMustFlow(99)