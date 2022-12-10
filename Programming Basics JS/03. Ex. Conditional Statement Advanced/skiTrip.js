function skiTrip(input) {
    let numDays = Number(input[0]);
    let numNights = numDays - 1;
    let typeRoom = input[1];
    let comment = input[2];

    let priceForAllNigthd;
    let discountPrice = 0

    if (numDays < 10) {

        switch (typeRoom) {
            case 'room for one person': priceForAllNigthd = 18 * numNights;
                discountPrice = priceForAllNigthd;

                break;
            case 'apartment': priceForAllNigthd = 25 * numNights;
                discountPrice = priceForAllNigthd * 0.7;
                //console.log(discountPrice)
                break;
            case 'president apartment': priceForAllNigthd = 35 * numNights;
                discountPrice = priceForAllNigthd * 0.9;
                break;
        }

    }
    else if (numDays >= 10 && numDays <= 15) {
        switch (typeRoom) {
            case 'room for one person': priceForAllNigthd = 18 * numNights;
                discountPrice = priceForAllNigthd;
                break;
            case 'apartment': priceForAllNigthd = 25 * numNights;
                discountPrice = priceForAllNigthd * 0.65;
                break;
            case 'president apartment': priceForAllNigthd = 35 * numNights;
                discountPrice = priceForAllNigthd * 0.85;
                break;
        }
    }
    else {
        switch (typeRoom) {
            case 'room for one person': priceForAllNigthd = 18 * numNights;
                discountPrice = priceForAllNigthd;
                break;
            case 'apartment': priceForAllNigthd = 25 * numNights;
                discountPrice = priceForAllNigthd * 0.50;
                break;
            case 'president apartment': priceForAllNigthd = 35 * numNights;
                discountPrice = priceForAllNigthd * 0.80;
                break;

            //console.log(discountPrice)
        }
    }
    if (comment === "positive") {
        console.log((1.25 * discountPrice).toFixed(2))
    }
    else if (comment === 'negative') {
        console.log((0.9 * discountPrice).toFixed(2))
    }

}
skiTrip(["12",
"room for one person",
"positive"])

