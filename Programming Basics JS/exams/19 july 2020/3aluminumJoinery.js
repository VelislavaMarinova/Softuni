function aluminumJoinery(input) {
    let numJoinery = Number(input[0]);
    let sortJoinery = input[1];
    let delivery = input[2]
    let price = 0


    if (numJoinery < 10) {
        console.log(`Invalid order`);
    }
    else {
        switch (sortJoinery) {
            case "90X130":
                if (numJoinery > 60) {
                    price = numJoinery * 110 * 0.92;
                }
                else if (numJoinery > 30) {
                    price = numJoinery * 110 * 0.95;
                }
                break;

            case "100X150":
                if (numJoinery > 80) {
                    price = numJoinery * 140 * 0.90;
                }
                else if (numJoinery > 40) {
                    price = numJoinery * 140 * 0.94;
                }
                break;
            case "130X180":

                if (numJoinery > 50) {
                    price = numJoinery * 190 * 0.88;
                }
                else if (numJoinery > 20) {
                    price = numJoinery * 190 * 0.93;
                }
                break;
            case "200X300":

                if (numJoinery > 50) {
                    price = numJoinery * 250 * 0.86;
                }
                else if (numJoinery > 25) {
                    price = numJoinery * 250 * 0.91;
                }
                break;
        }
        if (delivery === "With delivery") {
            price += 60;
        }
        if (numJoinery > 99) {
            price = 0.96 * price;
        }
        console.log(`${price.toFixed(2)} BGN`);
    }


}
aluminumJoinery(["2",
"130X180",
"With delivery"])


