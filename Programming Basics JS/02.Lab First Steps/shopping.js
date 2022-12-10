function shopping(input){
 //•	Видеокарта – 250 лв./бр.
//•	Процесор – 35% от цената на закупените видеокарти/бр.
//•	Рам памет – 10% от цената на закупените видеокарти/бр.
let budget = Number(input[0]);
let videoCardNumber = Number(input[1]);
let processorNumber = Number(input[2]);
let ramNumber = Number(input[3]);

let priceVideoCard = videoCardNumber*250;
let priceProcessor = processorNumber * priceVideoCard * 0.35;
let priceRam = ramNumber * priceVideoCard * 0.1;
let totalPrice = priceVideoCard + priceProcessor + priceRam;
//console.log(totalPrice)
if (videoCardNumber>processorNumber){
    totalPrice=0.85*totalPrice
}
if (budget>=totalPrice){
    console.log(`You have ${(budget-totalPrice).toFixed(2)} leva left!`)
}
else{
    console.log(`Not enough money! You need ${(totalPrice-budget).toFixed(2)} leva more!`)
}
}
shopping(["920.45","3","1","1"]);

