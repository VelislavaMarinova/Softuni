function race(arr) {
    let list = arr.shift().split(', ');
    let map = new Map();

    list.forEach(person => {
        map.set(person, 0)
    });
    let letterPattern = /[A-Za-z]+/g;
    let digitsPattern = /\d/g;
    let arrL = arr.length;

    for (let i = 0; i < arrL; i++) {
        let currentLine = arr[i];
        if (currentLine === 'end of race') {
            break;
        }
        let name = currentLine.match(letterPattern).join('');
        let distance = currentLine.match(digitsPattern).reduce((a, b) => {
            return Number(a) + Number(b)
        }, 0);
        if (map.has(name)) {
            let lastDistance = map.get(name);
            lastDistance += distance

            map.set(name, lastDistance)
        }
     
    }
    let sortedArrOfMap = Array.from(map).sort((a, b) => {
        return b[1] - a[1];
    })
    let top3 = sortedArrOfMap.slice(0, 3)
    console.log(`1st place: ${sortedArrOfMap[0][0]}\n2nd place: ${sortedArrOfMap[1][0]}\n3rd place: ${sortedArrOfMap[2][0]}
    `);
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
)