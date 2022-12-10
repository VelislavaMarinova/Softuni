function cardGame(arr) {
    let nameAndCards = []
    for (let line of arr) {
        let [name, cards] = line.split(": ")

        if (!nameAndCards.includes(name)) {
            nameAndCards.push(name)
            nameAndCards.push(cards)

        } else {
            let index = nameAndCards.indexOf(name);
            nameAndCards.splice(index + 1, 1, nameAndCards[index + 1] + `, ${cards}`)
        }

    }
    let players = {}

    for (let i = 0; i < nameAndCards.length; i += 2) {
        let name = nameAndCards[i]
        let cards = nameAndCards[i + 1].split(", ")
        let setCards = new Set(cards)
        cards = Array.from(setCards)
        //nameAndCards.splice(i+1,1,cards)
        players[name] = cards

    }
    let sum = 0
    for (let [name, cards] of Object.entries(players)) {

        for (let card of cards) {

            let p = '';
            let t = '';

            if (card.length === 3) {

                p = card[0]+card[1];
                t = card[2]

            } else {
                p = card[0];
                t = card[1];
            }
            switch (p) {
                case '1': p = 1; break;
                case '2': p = 2; break;
                case '3': p = 3; break;
                case '4': p = 4; break;
                case '5': p = 5; break;
                case '6': p = 6; break;
                case '7': p = 7; break;
                case '8': p = 8; break;
                case '9': p = 9; break;
                case '10': p = 10; break;
                case 'J': p = 11; break;
                case 'Q': p = 12; break;
                case 'K': p = 13; break;
                case 'A': p = 14; break;
            }
            switch (t) {
                case 'S': t = 4; break;
                case 'H': t = 3; break;
                case 'D': t = 2; break;
                case 'C': t = 1; break;
            }
            sum += p * t
        }
        console.log(`${name}: ${sum}`);
        sum = 0
    }
    //console.log(Object.values(players)[0]);
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD',

])

