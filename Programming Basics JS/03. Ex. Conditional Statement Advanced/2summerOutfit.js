function summerOutfit(input) {
    let t = Number(input[0]);
    let partDay = input[1];
    let outfit;
    let shoes;
    if (t >= 10 && t <= 18) {
        switch (partDay) {
            case "Morning": outfit = "Sweatshirt"; shoes = "Sneakers"; break;
            case "Afternoon":
            case "Evening":outfit = "Shirt"; shoes = "Moccasins"; break;
        }
    }
    else if (t <= 24) {
        switch (partDay) {
            case "Morning": outfit = "Shirt"; shoes = "Moccasins"; break;
            case "Afternoon":outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Evening":outfit = "Shirt"; shoes = "Moccasins"; break;
        }
        

    }
    else if (t >= 25) {
        switch (partDay) {
            case "Morning": outfit = "T-Shirt"; shoes = "Sandals"; break;
            case "Afternoon":outfit = "Swim Suit"; shoes = "Barefoot"; break;
            case "Evening":outfit = "Shirt"; shoes = "Moccasins"; break;
        }

    }
    console.log(`It's ${t} degrees, get your ${outfit} and ${shoes}.`)


}
summerOutfit(["22",
"Afternoon"])
;
