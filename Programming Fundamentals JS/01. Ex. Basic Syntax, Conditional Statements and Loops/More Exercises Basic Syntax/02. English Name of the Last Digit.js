function theLastDigit(number){
let num = number
let numToString = String(num);
let numToStringL = numToString.length;
let lastDigit = numToString[numToStringL-1]
let name = ''
switch(lastDigit){
    case '1': name = 'one'; break;
    case '2': name = 'two'; break;
    case '3': name = 'three'; break;
    case '4': name = 'four'; break;
    case '5': name = 'five'; break;
    case '6': name = 'six'; break;
    case '7': name = 'seven'; break;
    case '8': name = 'eight'; break;
    case '9': name = 'nine'; break;
    case '0': name = 'zero'; break;
}
console.log(name);
}
theLastDigit(1238917389)