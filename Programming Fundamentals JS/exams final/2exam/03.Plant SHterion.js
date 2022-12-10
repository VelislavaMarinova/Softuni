function plantDiscovery(input) {
    let num = Number(input.shift())
    let plantsObj = {}
 
    for (let i = 0; i < num; i++) {
        let tokens = input.shift().split("<->")
        let plant = tokens[0]
        let rarity = Number(tokens[1])
 
        plantsObj[plant] = {};
        plantsObj[plant]['rarity'] = rarity;
        plantsObj[plant]['rating'] = [];
        plantsObj[plant]['counter'] = 0;
        plantsObj[plant]['sum'] = 0;
    }
 
    while (input[0] != "Exhibition") {
        let token = input.shift().split(": ")
        let command = token[0];
        let plantInfo = token[1].split(" - ");
 
        let plant = plantInfo[0];
        let tokens = Number(plantInfo[1]);
        switch (command) {
            case "Rate":
 
                if (plantsObj.hasOwnProperty(plant)) {
                    plantsObj[plant]['rating'].push(tokens);
                    plantsObj[plant].counter++
                    plantsObj[plant]['sum'] += tokens
                } else {
                    console.log(`error`);
                }
                break;
 
            case "Update":
                let newRarity = Number(plantInfo[1])
                if (plantsObj.hasOwnProperty(plant)) {
                    plantsObj[plant]['rarity'] = newRarity;
                } else {
                    console.log(`error`);
                }
                break;
            case "Reset":
                if (plantsObj.hasOwnProperty(plant)) {
                    plantsObj[plant]['rating'] = [];
                    plantsObj[plant]['counter'] = 0;
                } else {
                    console.log(`error`);
                    break;
                }
        }
 
    }
    console.log(`Plants for the exhibition:`);
    for (let key in plantsObj) {
        let average = 0;
        if (plantsObj[key]['rating'].length) {
            average = plantsObj[key]['rating'].reduce((a, b) => a + b, 0) / plantsObj[key]['rating'].length;
        } 
        console.log(`- ${key}; Rarity: ${plantsObj[key]['rarity']}; Rating: ${average.toFixed(2)}`)
    }
}
