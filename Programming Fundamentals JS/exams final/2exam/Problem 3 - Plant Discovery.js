function demo(input) {
    let n = Number(input.shift());
    let plantArr = [];


    for (let i = 0; i < n; i++) {
        let [plant, rarity] = input.shift().split('<->');

        let store = {}

        if (plantArr.length > 0) {
            for (let el of plantArr) {
                if (el.name !== plant) {
                    store.name = plant
                    store.rarity = rarity
                    plantArr.push(store)
                    break;
                } else {
                    el.rarity = rarity
                    break;
                }
            }
        } else {
            store.name = plant
            store.rarity = rarity
            plantArr.push(store)
        }
    }

    // //   или с мап:  for (let i = 0; i < n; i++) {
    // //         let [plant, rarity] = input.shift().split("<->");
    // //         let map = new Map()
    // //         map.set('name', plant);
    // //         map.set('rarity', rarity)
    // //         plantArr.push(map)
    // // }

    let line = input.shift();

    while (line !== "Exhibition") {
        let currentLine = line.split(': ')
        let command = currentLine[0]
        let [plant, number] = currentLine[1].split(' - ');
        let errorCounter = 0
        for (let el of plantArr) {

            if (el.name === plant) {
                switch (command) {
                    case "Rate": let rating = number
                        if (!el.rating) {
                            el.rating = rating
                        } else {
                            el.rating += `, ${rating}`
                        }
                        //"Rate: {plant} - {rating}" – add the given rating to the plant (store all ratings)
                        break;
                    case "Update":
                        let newRarity = number
                        el.rarity = newRarity
                        //"Update: {plant} - {new_rarity}" – update the rarity of the plant with the new one
                        break;
                    case 'Reset':
                        el.rating = null;
                        break;
                }
            } else {
                errorCounter++
                if (errorCounter === plantArr.length) {
                    console.log('error');
                }
            }
        }
        line = input.shift();
    }
    console.log(`Plants for the exhibition:`);
    let averageRating = 0
    for (let el of plantArr) {
        if (!el.rating) {
            averageRating = 0
        } else {
            let splitRating = el['rating'].split(',')
            let sumRatings = 0
            let countRatings = 0
            for (let num of splitRating) {
                num = Number(num)
                sumRatings += num
                countRatings++
                averageRating = sumRatings / countRatings
            }

        }
        console.log(`- ${el.name}; Rarity: ${el.rarity}; Rating: ${Number(averageRating).toFixed(2)}`);
    }
}
demo(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oatrrrryrthu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])
console.log("-------------------");
demo((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
)

