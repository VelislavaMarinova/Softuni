function easterLunch(input){
    
let numKoz = Number(input[0]);
let numEggs = Number(input[1]);
let kgSweets = Number(input[2]);

//•	Козунак  – 3.20 лв.
//•	Яйца –  4.35 лв. за кора с 12 яйца
//•	Курабии – 5.40 лв. за килограм
//•	Боя за яйца - 0.15 лв. за яйце
let priceKoz = numKoz*3.2
let priceEggs = numEggs*4.35
let priceSweets = kgSweets*5.4
let priceColor = 0.15*numEggs*12

let sum = priceColor + priceEggs + priceKoz + priceSweets
console.log(sum.toFixed(2));

}
easterLunch(["3",
"2",
"3"])

