function demo(input) {
    let like = {}
    let unlikeCount = 0
    for (let line of input) {
        if (line !== "Stop") {
            let [command, name, meal] = line.split('-');
            
            if (command === "Like") {
                if (!like.hasOwnProperty(name)) {
                    like[name] = [meal]
                } else {
                    like[name].push(` ${meal}`)
                }
            }
            else if (command === 'Dislike') {
               
                if (like.hasOwnProperty(name)) {
                    if (like[name].includes(meal)) {
                        unlikeCount++
                        let index = like[name].indexOf(meal)
                        like[name].splice(index, 1)
                        console.log(`${name} doesn't like the ${meal}.`);
                    }else{
                        console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    }
                }else{
                    console.log(`${name} is not at the party.`);
                }
                
            }
            //console.log(like[name].meal);     
        }

    }
for(let[name,meals] of Object.entries(like))
    console.log(`${name}: ${meals}`);
    console.log(`Unliked meals: ${unlikeCount}`);
}


demo(["Like-Krisi-shrimps",
"Dislike-Vili-carp",
"Dislike-Krisi-salad",
"Stop"])




console.log("-----------------");
// demo(["Like-Katy-fish",
//     "Dislike-Katy-fish",
//     "Stop"])
