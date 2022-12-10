function trekkingMania(input) {
    let numGroups = Number(input[0]);
    let numPeople = Number(input[1]);

    let allPeople = 0
    let peopleMusala = 0
    let peopleMonblan = 0
    let peopleKilim = 0
    let peopleK2 = 0
    let peopleEverest = 0

    for (let i = 1; i <=numGroups; i++) {
        let currentGroup = Number(input[i]);
        allPeople += currentGroup

        if (currentGroup <= 5) {
            peopleMusala += currentGroup}
        else if (currentGroup <= 5) {
            peopleMusala += currentGroup

        }
        else if (currentGroup > 5 && currentGroup <= 12) {
            peopleMonblan += currentGroup
        }
        else if (currentGroup > 12 && currentGroup <= 25) {
            peopleKilim += currentGroup
        }
        else if (currentGroup > 25 && currentGroup <= 40) {
            peopleK2 += currentGroup
        }
        else if (currentGroup > 40) {
            peopleEverest += currentGroup
        }


        

    }
    console.log(`${(peopleMusala/allPeople*100).toFixed(2)}%`)
    console.log(`${(peopleMonblan/allPeople*100).toFixed(2)}%`)
    console.log(`${(peopleKilim/allPeople*100).toFixed(2)}%`)
    console.log(`${(peopleK2/allPeople*100).toFixed(2)}%`)
    console.log(`${(peopleEverest/allPeople*100).toFixed(2)}%`)

}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
