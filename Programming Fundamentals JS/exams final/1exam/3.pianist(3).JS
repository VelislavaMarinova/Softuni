function demo(input) {
    let numPieces = input.shift();
    let pieceInfo = {};
    for (let i = 0; i < numPieces; i++) {
        let [name, composer, key] = input[i].split('|')
        pieceInfo[name] = {
            composer: composer,
            key: key
        }

    }
    for (let i = numPieces; i < input.length; i++) {
        if (input[i] === 'Stop') {
            break
        }
        let [command, piece, ...tokens] = input[i].split('|');
        switch (command) {
            case 'Add':
                if (!pieceInfo.hasOwnProperty(piece)) {
                    let [composer, key] = tokens;
                    pieceInfo[piece] = {
                        composer: composer,
                        key: key
                    }
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`);
                } else {
                    console.log(`${piece} is already in the collection!`);
                }
                break;
            case 'Remove':
                if (pieceInfo.hasOwnProperty(piece)) {
                    delete pieceInfo[piece];
                    console.log(`Successfully removed ${piece}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
            case 'ChangeKey':
                let newKey = tokens[0]
                if (pieceInfo.hasOwnProperty(piece)) {
                    pieceInfo[piece].key = newKey //   Object.keys(pieceInfo[piece])[1] = newKey
                    console.log(`Changed the key of ${piece} to ${newKey}!`);
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`);
                }
                break;
        }
    }
    for (let [piece, obj] of Object.entries(pieceInfo)) {
        console.log(`${piece} -> Composer: ${obj.composer}, Key: ${obj.key}`);
    }
}
demo([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)