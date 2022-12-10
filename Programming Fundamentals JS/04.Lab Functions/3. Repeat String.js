function repeatString(firstInput, num) {
    let stringToRepeat = firstInput;
    let numRepeat = num;
    let newString = "";
    for (let i = 0; i < numRepeat; i++) {
        newString += stringToRepeat
    }
   return newString
}
repeatString("abc", 3)