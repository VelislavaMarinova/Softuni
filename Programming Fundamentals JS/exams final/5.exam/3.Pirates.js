function demo(input) {
    let line = input.shift();
    let sailInfoArr = [];
    class sailInfo {
        constructor(city, population, gold) {
            this.city = city,
                this.population = population,
                this.gold = gold
        }
    }
    while (line !== "Sail") {
        let [city, population, gold] = line.split('||')
        population = Number(population);
        gold = Number(gold);
        let newObj = new sailInfo(city, population, gold);
        if (sailInfoArr) {
            let counter = 0
            for (let el of sailInfoArr) {
                if (el.city !== city) {
                    counter++;
                } else {
                    el.population = Number(el.population) + population
                    el.gold = Number(el.gold) + gold
                }
            }
            if (counter === sailInfoArr.length) {
                sailInfoArr.push(newObj)
            }
        } else {
            sailInfoArr.push(newObj)
        }
        line = input.shift()
    }
    let lineOfEvents = input.shift();

    while (lineOfEvents !== "End") {
        let [event, city, ...tokens] = lineOfEvents.split('=>')
        if (event === 'Plunder') {
            let people = Number(tokens[0]);
            let gold = Number(tokens[1]);

            for (let el of sailInfoArr) {
                if (el.city === city) {
                    el.population = Number(el.population) - people
                    el.gold = Number(el.gold) - gold;
                    console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                }
                if (el.gold <= 0 || el.population <= 0) {
                    let indexOfEl = sailInfoArr.indexOf(el);
                    sailInfoArr.splice(indexOfEl, 1)
                    console.log(`${city} has been wiped off the map!`);
                }

            }
        }
        else if (event === 'Prosper') {
            let gold = Number(tokens[0]);
            for (let el of sailInfoArr) {
                if (el.city === city) {
                    if (gold >= 0) {
                        el.gold = Number(el.gold) + gold;
                        console.log(`${gold} gold added to the city treasury. ${city} now has ${el.gold} gold.`);
                    } else {
                        console.log(`Gold added cannot be a negative number!`);
                    }
                }
            }
        }
        lineOfEvents = input.shift();
    }
    if (sailInfoArr.length) {
        console.log(`Ahoy, Captain! There are ${sailInfoArr.length} wealthy settlements to go to:`);
        if (sailInfoArr.length > 0) {
            for (let el of sailInfoArr) {
                console.log(`${el.city} -> Population: ${el.population} citizens, Gold: ${el.gold} kg`);
            }
        } else {
            console.log(sailInfoArr);
            console.log(); (`{town1} -> Population: {people} citizens, Gold: {gold} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
}
demo((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"])
)
console.log('---------------------------------');;
demo((["Nassau||95000||1000",
    
    "Sail",
   
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    
    "End"])
)