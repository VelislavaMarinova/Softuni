function concatenateNames(firstName, lastName, delim) {
    let first = firstName;
    let last = lastName;
    let delimited = delim;
    let print = `${first}${delimited}${last}`
    console.log(print);
}
concatenateNames('John', 'Smith', '->')
concatenateNames('Jan','White','<->')
concatenateNames('Linda','Terry','=>')