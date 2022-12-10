function reverseString(str) {
    let stringToreverse = str
    let reversedStr = stringToreverse.split("").reverse().join("")
    console.log(reversedStr);
}
reverseString("Hello")