function filmPremiere(input) {
    let projection = input[0];
    let option = input[1];
    let numTickets = Number(input[2]);
    let price = 0

    if (projection === "John Wick") {
        switch (option) {
            case "Drink": price = 12 * numTickets; break
            case "Popcorn": price = 15 * numTickets; break
            case "Menu": price = 19 * numTickets; break
            console.log(price)
        }
       
    }
    else if (projection === "Star Wars") {
        switch (option) {
            case "Drink": price = 18 * numTickets; break
            case "Popcorn": price = 25 * numTickets; break
            case "Menu": price = 30 * numTickets; break
        }
        if (numTickets >= 4) {
                    price = 0.7 * price
                
        }
    }
    else if (projection === "Jumanji") {
        switch (option) {
            case "Drink": price = 9 * numTickets; break
            case "Popcorn": price = 11 * numTickets; break
            case "Menu": price = 14 * numTickets; break
                
        }
        if (numTickets === 2) {
            price = 0.85 * price
        }
    }

   console.log(`Your bill is ${price.toFixed(2)} leva.`)

}
filmPremiere(['Jumanji','Menu',`2`])