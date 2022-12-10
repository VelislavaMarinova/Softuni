function demo(search, sentence) {
    let splitSentence = sentence.split(" ")
    let isFound = false
    for (let word of splitSentence) {
        if (word.length === search.length) {
            let lowerCaseWord = word.toLowerCase();
            let lowerCaseSearch = search.toLowerCase();
           if(lowerCaseSearch === lowerCaseWord){
            isFound = true
           }
        }
    }
    if(isFound){
        console.log(search);
    }
    else{
        console.log(`${search} not found!`);
    }
    //console.log(splitSentence);
}
demo('javascrit',
    'JavaScript is the best programming language'
)