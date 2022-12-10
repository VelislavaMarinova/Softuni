function demo(input) {
    let text = input.join(' ')
    //console.log(text);
    let regExpOne = /(\#(?<wordOne>[A-Za-z]{3,})##(?<wordTwo>[A-Za-z]{3,})\#){1}/g;
    let regExpTwo = /(\@(?<wordOne>[A-Za-z]{3,})@@(?<wordTwo>[A-Za-z]{3,})\@){1}/g;

    let validWords = {};
    let valid;
    while ((valid = regExpOne.exec(text)) !== null) {
        validWords[valid.groups.wordOne] = valid.groups.wordTwo
        //console.log(valid.groups.word);
    }
    while ((valid = regExpTwo.exec(text)) !== null) {
        validWords[valid.groups.wordOne] = valid.groups.wordTwo
        //console.log(valid.groups.word);
    }
    let numberWordPairs = Object.keys(validWords).length;


    let mirrorWords = {};
    for (let [wordOne, wordTwo] of Object.entries(validWords)) {
        let reversed = wordOne.split('').reverse().join('')

        if (reversed === wordTwo) {
            mirrorWords[wordOne] = wordTwo
        }
    }



    let splitInput = input.join('').split("#").join(' ').split('@')
    let message = ''
    let wordPairs =[];
    for (let el of splitInput) {
        for (let [wordOne, wordTwo] of Object.entries(mirrorWords)) {

            if (el.includes(wordOne)) {
               wordPairs.push(`${wordOne} <=> ${wordTwo}`)

            }
        }
    }
    if (!Object.keys(validWords).length) {
        console.log(`No word pairs found!`);
        console.log('No mirror words!');
    } else {
        console.log(`${numberWordPairs} word pairs found!`);
        if (Object.keys(mirrorWords).length) {
            console.log(`The mirror words are:`);
            console.log(wordPairs.join(', '));
        }else{
            console.log('No mirror words!');
        }
    }
  
}
demo([
    '#poOl##poOl##poOl##sAw##wAs##sAw#'
]
)
// console.log('-----------------------------')
// demo(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])
// console.log('-----------------------------')
// demo(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])
