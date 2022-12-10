function inventory(arr) {
    let levelArr = [];
    for (let i = 0; i < arr.length; i++) {
        let splitCurrentEl = arr[i].split(' / ');
        let currentLevel = splitCurrentEl[1]
        levelArr.push(currentLevel)
    }
    let sortedLevel = levelArr.sort((a, b) => {
        return a - b;
    })
    for (let level of sortedLevel) {

        for (let line of arr) {
            let splidedLine = line.split(' / ');
            if (splidedLine.includes(level)) {
                console.log(`Hero: ${splidedLine[0]}`)
                console.log(`level => ${splidedLine[1]}`)
                console.log(`items => ${splidedLine[2]}`)
            }
        }
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)