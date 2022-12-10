function movieDestination(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let numDays = input[3];
    
    let priceAllDays = 0
    if (season === "Winter") {
        switch (destination) {
            case "Dubai": priceAllDays = numDays * 45000 * 0.7; break
            case "Sofia": priceAllDays = numDays * 17000 * 1.25; break
            case "London": priceAllDays = numDays * 24000; break
        }

    }
    else if (season === "Summer") {
        switch (destination) {
            case "Dubai": priceAllDays = numDays * 40000 * 0.7; break
            case "Sofia": priceAllDays = numDays * 12500 * 1.25; break
            case "London": priceAllDays = numDays* 20250; break
        }
     }
if(budget >= priceAllDays){
    console.log(`The budget for the movie is enough! We have ${(budget - priceAllDays).toFixed(2)} leva left!`)
    }
    else{
        console.log(`The director needs ${(priceAllDays - budget).toFixed(2)} leva more!`)
    }
    //console.log(priceAllDays)
}
movieDestination(['400000', 'Sofia', 'Winter', '20'])