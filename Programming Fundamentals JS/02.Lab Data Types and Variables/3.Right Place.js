function rightPlace(word, replace, ourWord) {

    let wordByLetters = ""
    for (let i = 0; i < word.length; i++) {
       // console.log(word[i]);

        if (word[i] === "_") {
            wordByLetters += replace
        }
        else { wordByLetters += word[i] }
    }
    if (wordByLetters === ourWord) {
        console.log(`Matched`);
    }
    else {
        console.log(`Not Matched`);

    }
}


    rightPlace('Str_ng', 'I', 'Strong');
    rightPlace('Str_ng', 'i', 'String');