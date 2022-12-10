function journey(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let journeyPrice = 0
    let hotelCamp;

    if (budget <= 100) {
        console.log(`Somewhere in Bulgaria`)
        switch (season) {
            case "summer":
                journeyPrice = 0.3 * budget;
                hotelCamp = "Camp";
                break;
            case "winter":
                journeyPrice = 0.7 * budget;
                hotelCamp = "Hotel";
                break;
            }
    }
    else if (budget <= 1000) {
        console.log(`Somewhere in Balkans`)
        switch (season) {
            case "summer":
                journeyPrice = 0.4 * budget;
                hotelCamp = "Camp";
                break;
            case "winter":
                journeyPrice = 0.8 * budget;
                hotelCamp = "Hotel";
                break;
               }
            }
    else {
        journeyPrice = 0.9 * budget;
        hotelCamp = "Hotel";
        console.log(`Somewhere in Europe`)
        

    }
    console.log(`${hotelCamp} - ${(journeyPrice.toFixed(2))}`)


}
journey(["75", "winter"]);