function demo(input) {
    let text;
    if (typeof input === 'object') {
        text = input.join('')
    } else if (typeof input === 'string') {
        text = input
    }

    let patternOne = /(?<word>\:\:[A-Z][a-z]{2,}\::)/g;
    let patternTwo = /(?<word>\*\*[A-Z][a-z]{2,}\*\*)/g;
    let valid;
    let validWords = []

    while ((valid = patternOne.exec(text)) !== null) {
        validWords.push(valid.groups.word)
    }
    while ((valid = patternTwo.exec(text)) !== null) {
        validWords.push(valid.groups.word)
    }
    let splitText = text.split(' ');
    let arrangedValidWords = []

    for (let el of splitText) {
        for (let word of validWords) {
            if (el.includes(word)) {
                arrangedValidWords.push(word)
            }
        }

    }
    text = text.split(' ').join('')

    let multiply = 1
    for (let el of text) {
        if (!isNaN(Number(el))) {
            multiply *= Number(el)
        }
    }
    console.log(`Cool threshold: ${multiply}`);
    console.log(`${arrangedValidWords.length} emojis found in the text. The cool ones are:`);
    let sum = 0
    if (arrangedValidWords.length > 0) {
        for (let word of arrangedValidWords) {
            let correctWord = word.slice(2, word.length - 2)
            for (let letter of correctWord) {
                let num = letter.charCodeAt()
                sum += num

            }

            if (sum > multiply) {
                console.log(word);
            }
            //console.log(sum);
            sum = 0
        }
    } else {

        let word = arrangedValidWords.join('');
        let correctWord = word.slice(2, word.length - 2)
        for (let letter of correctWord) {
            let num = letter.charCodeAt()
            sum += num

        }
        if (sum > multiply) {
            console.log(word);
        }
    }

    //console.log(multiply);
}
demo("In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**")
console.log('=============================='); ('---------------')
demo(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."])