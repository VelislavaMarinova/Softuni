function godzillaVsKong(input){
    //Ред 1.	Бюджет за филма – реално число в интервала [1.00 … 1000000.00]
//Ред 2.	Брой на статистите – цяло число в интервала [1 … 500]
//Ред 3.	Цена за облекло на един статист – реално число в интервала [1.00 … 1000.00]
let budget = Number(input[0]);
let numStatists = Number(input[1]);
let priceClothesPerOne = Number(input[2]);
let priceClothes = numStatists*priceClothesPerOne;
//•	Декорът за филма е на стойност 10% от бюджета. 
//•	При повече от 150 статиста,  има отстъпка за облеклото на стойност 10%.
let priceDecor = budget*0.1
if(numStatists>150){
    priceClothes = priceClothes - priceClothes*0.1
}
let totalPrice = priceClothes + priceDecor;
//Not enough money!"
///o	"Wingard needs {парите недостигащи за филма} leva more."
//•	Ако парите за декора и дрехите са по малко или равни на бюджета:
//o	"Action!" 
//o	"Wingard starts filming with {останалите пари} leva left."
if(totalPrice>budget){
    console.log(`Not enough money!`);
    console.log(`Wingard needs ${(totalPrice - budget).toFixed(2)} leva more.`)        
    }
else{ 
    console.log(`Action!`);
    console.log(`Wingard starts filming with ${(budget - totalPrice).toFixed(2)} leva left.`);
}
}
godzillaVsKong(["15437.62", "186", "57.99"])