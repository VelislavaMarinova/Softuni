function wordsTracker(arr) {
    let ourWords = arr.shift()
        .split(" ")

    let wordsObj = {};
    for (let word of ourWords) {
        wordsObj[word] = 0;

    }
    for (let word of arr) {
        if (wordsObj.hasOwnProperty(word)) {
            wordsObj[word] += 1
        }

    }
    let sortedEntries = Object.entries(wordsObj).sort(([kA, vA], [kB, vB]) => {
        return vB - vA
    })
    sortedEntries.forEach(el => {
        console.log(`${el[0]} - ${el[1]}`);
    })
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
)