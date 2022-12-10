function demo(str) {
    let modified = ''
  
    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i]
        if (currentSymbol === currentSymbol.toUpperCase(currentSymbol)) {
           modified +=` ${currentSymbol}`

        }
        else{
            modified+=currentSymbol
        }
    }
    let final = modified.trim()
    .split(" ").join(", ")
    console.log(final);
}
demo('SplitMeIfYouCanHaHaYouCantOrYouCan')