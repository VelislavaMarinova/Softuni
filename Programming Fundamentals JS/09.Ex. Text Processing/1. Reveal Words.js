function revealWords(words, template) {
    let splitWords = words.split(', ')
    let wordsTemplate = template.split(' ');
    
  
    for (let word of wordsTemplate) {
        if (word.includes("*")) {
            for (let el of splitWords) {
                if (el.length === word.length) {
                   template = template.replace(word, el)
                }
            }
           // console.log(word.length);
        }


    }
    console.log(template);
}
revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
)