function mobileOperator(input) {
    let contract = input[0];
    let typeContract = input[1];
    let addNet = input[2];
    let numMonths = Number(input[3]);
    let priceContract = 0
    {

    }

    if (contract === "one") {
        switch (typeContract) {
            case "Small": priceContract = 9.98; break;
            case "Middle": priceContract = 18.99; break;
            case "Large": priceContract = 25.98; break;
            case "ExtraLarge": priceContract = 35.99; break;
        }
    }
    else if (contract === "two") {
        switch (typeContract) {
            case "Small": priceContract = 8.58; break;
            case "Middle": priceContract = 17.09; break;
            case "Large": priceContract = 23.59; break;
            case "ExtraLarge": priceContract = 31.79; break;
        }
        
    }
    if (addNet === "yes") {
        if (priceContract <= 10) {
            priceContract += 5.50
        }
        else if (priceContract > 10 && priceContract <= 30) {
            priceContract += 4.35
        }
        else if (priceContract > 30) {
            priceContract += 3.85
        }

    }
    let priceForMonths = priceContract * numMonths
    if (contract === "two") {
        priceForMonths = 0.9625 * priceForMonths
    }
    console.log(`${priceForMonths.toFixed(2)} lv.`);
}
mobileOperator(["one",
    "Small",
    "yes",
    "10"])
