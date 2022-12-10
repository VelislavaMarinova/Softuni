function inventory(arr) {

    let heroes = [];

    for (let heroInfo of arr) {
        let [name, level, items] = heroInfo.split(" / ");
        /
        let currentHeroe = {
            name: name,
            level: +level, //(parse to Number)
            items: items
        }
        heroes.push(currentHeroe)
    }
    let sortedHeroes = heroes.sort((a, b) => {
        return a.level - b.level;
    })
    sortedHeroes.forEach((heroe) => {
        console.log(`Hero: ${heroe.name}`);
        console.log(`level => ${heroe.level}`);
        console.log(`items => ${heroe.items}`);
    })
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)