function tradeCommissions(input) {
    let town = input[0];
    let volumeSales = input[1];
    if (volumeSales >= 0 && volumeSales <= 500) {
        switch (town) {
            case "Sofia": console.log((5 * volumeSales / 100).toFixed(2)); break;
            case "Varna": console.log((4.5 * volumeSales / 100).toFixed(2)); break;
            case "Plovdiv": console.log((5.5 * volumeSales / 100).toFixed(2)); break;
        }
    }
    else if (volumeSales > 500 && volumeSales <= 1000) {
        switch (town) {
            case "Sofia": console.log((7 * volumeSales / 100).toFixed(2)); break;
            case "Varna": console.log((7.5 * volumeSales / 100).toFixed(2)); break;
            case "Plovdiv": console.log((8 * volumeSales / 100).toFixed(2)); break;
            default: console.log("error");
        }
    }
    else if (volumeSales > 1000 && volumeSales <= 10000) {
        switch (town) {
            case "Sofia": console.log((8 * volumeSales / 100).toFixed(2)); break;
            case "Varna": console.log((10 * volumeSales / 100).toFixed(2)); break;
            case "Plovdiv": console.log((12 * volumeSales / 100).toFixed(2)); break;
            default: console.log("error");
        }
    }
    else if (volumeSales > 10000) {
        switch (town) {
            case "Sofia": console.log((12 * volumeSales / 100).toFixed(2)); break;
            case "Varna": console.log((13 * volumeSales / 100).toFixed(2)); break;
            case "Plovdiv": console.log((14.5 * volumeSales / 100).toFixed(2)); break;
            default: console.log("error");
        }
    }
    else {
        console.log("error");
    }
}
tradeCommissions(["Varna","3874.50"]);
