function demo(input) {
    class PoductInfo {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }
    let allProducts = [];
    input.forEach(line => {
        let [name, price] = line.split(" : ")
        let newObj = new PoductInfo(name, price)
        allProducts.push(newObj)
    });

    allProducts.sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    });
    let arrOfLetters = []
    for (let el of allProducts) {
        let firstLetter = el.name[0]
        if (!arrOfLetters.includes(firstLetter)) {
            arrOfLetters.push(firstLetter)
        }

    }
    for (let letter of arrOfLetters) {
        console.log(letter);
        for (let el of allProducts) {
            if (letter === el.name[0]) {
                console.log(`  ${el.name}: ${el.price}`);
            }

        }
    }
}
demo([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)