function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numberFishermen = input[2];
    let boatPrice = 0

    switch (season) {
        case "Spring": boatPrice = 3000; break
        case "Summer":
        case "Autumn": boatPrice = 4200; break
        case "Winter": boatPrice = 2600; break
    }
    if (numberFishermen <= 6) {
        boatPrice = boatPrice * 0.9
    }
    else if (numberFishermen <= 11) {
        boatPrice = boatPrice * 0.85
    }
    else {
        boatPrice = boatPrice * 0.75
    }
    if (numberFishermen % 2 === 0 && season != "Autumn") {
        boatPrice = boatPrice * 0.95
    }
    if (budget >= boatPrice){
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`)
    }
    else{
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`)
    }
}
fishingBoat(["3000", "Summer", "11"]);