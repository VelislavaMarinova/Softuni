function travelAgency(input) {
    let nameCity = input[0];
    let option = input[1];
    let vipDiscount = input[2]
    let priceAllDays = 0
    let numDays = Number(input[3])

    if (nameCity === 'Bansko' || nameCity === 'Borovets') {
        if (numDays < 1) {
            console.log(`Days must be positive number!`)
        }
        else {
            switch (option) {
                case 'withEquipment':
                    if (vipDiscount === 'yes') {
                        priceAllDays = 100 * 0.9 * numDays
                        console.log(`The price is ${priceAllDays.toFixed(2)}lv! Have a nice time!`)
                    }
                    else if (vipDiscount === 'no') {
                        priceAllDays = 100 * numDays
                        console.log(`The price is ${priceAllDays.toFixed(2)}lv! Have a nice time!`)
                    }
                    else{console.log(`Invalid input!`)}
                    break;
                case 'noEquipment':
                    if (vipDiscount === 'yes') {
                        priceAllDays = 80 * 0.95 * numDays
                        console.log(`The price is ${priceAllDays.toFixed(2)}lv! Have a nice time!`)
                    }
                    else if (vipDiscount === 'no') {
                        priceAllDays = 80 * numDays
                        console.log(`The price is ${priceAllDays.toFixed(2)}lv! Have a nice time!`)
                    }
                    else{console.log(`Invalid input!`)}
                    break;
                default: console.log(`Invalid input!`)
                    break;
            }
        }

    }
    else if (nameCity === 'Varna' || nameCity === 'Burgas') {
        if (numDays < 1) {
            console.log(`Days must be positive number!`)
        }
        else{switch (option) {
            case 'withBreakfast':
                if (vipDiscount === 'yes') {
                    priceAllDays = 130 * 0.88 * numDays
                    console.log(`The price is ${priceAllDays.toFixed(2)}lv! Have a nice time!`)
                }
                else if (vipDiscount === 'no') {
                    priceAllDays = 130 * numDays
                    console.log(`The price is ${priceAllDays.toFixed(2)}lv! Have a nice time!`)
                }
                else{console.log(`Invalid input!`)}
                break;
            case 'noBreakfast':
                if (vipDiscount === 'yes') {
                    priceAllDays = 100 * 0.93 * numDays
                    console.log(`The price is ${priceAllDays.toFixed(2)}lv! Have a nice time!`)
                }
                else if (vipDiscount === 'no') {
                    priceAllDays = 100 * numDays
                    console.log(`The price is ${priceAllDays.toFixed(2)}lv! Have a nice time!`)
                }
                else{console.log(`Invalid input!`)}
                break;
            default: console.log(`Invalid input!`)
                break;
        }
    }

    }
    else {
        console.log(`Invalid input!`)

    }

}


travelAgency(["Banskos",
"noEquipment",
"no",
"0"])






