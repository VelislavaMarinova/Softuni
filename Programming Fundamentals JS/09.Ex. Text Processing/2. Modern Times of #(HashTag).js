function demo(str) {
    let splitStr = str.split(' ')
    for (words of splitStr) {
        if (words.includes('#')) {
            if (words.length > 1) {
                let onlyWord = words.slice(1)
                let counter = 0
                for (let el of onlyWord) {

                    if (!isNaN(Number(el))) {
                        break;
                    } else {
                        counter++;
                        if (counter === onlyWord.length) {
                            console.log(onlyWord);
                        }
                    }
                }

            }

        }
    }
}
demo('The symbol # is known #var5ously in English-speaking #regions as the #number sign')