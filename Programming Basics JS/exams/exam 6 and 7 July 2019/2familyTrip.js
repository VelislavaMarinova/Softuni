function familyTrip(input){
//•	Бюджетът, с който разполагат – реално число в интервала [1.00 … 10000.00]
//•	Брой нощувки – цяло число в интервала [0 … 1000]
//•	Цена за нощувка – реално число в интервала [1.00 … 500.00]
//•	Процент за допълнителни разходи – цяло число в интервала [0 … 100]
let budget = Number(input[0]);
let numOvernight = Number(input[1]);
let priceOneOvernight = Number(input[2]);
let percentMoreCost = Number(input[3]);
let moreCost = percentMoreCost*budget/100;
//ако броят на нощувките е по-голям от 7, цената за нощувка се намаля с 5%.

if(numOvernight > 7){priceOneOvernight = priceOneOvernight*0.95
}
let priceOvernight = priceOneOvernight*numOvernight;//!!!след If
let tripPrice = priceOvernight+moreCost;
//•	Ако сумата е достатъчна:
//o	"Ivanovi will be left with {останали пари след почивката} leva after vacation."
//•	Ако НЕ е достигната сумата:
//o	"{парите нужни до достигане на целта} leva needed."
if(budget>=tripPrice){
    console.log(`Ivanovi will be left with ${(budget - tripPrice).toFixed(2)} leva after vacation.`)
}
else{
    console.log(`${(tripPrice-budget).toFixed(2)} leva needed.`)
}
}
familyTrip(["800.50", "8", "100","2"]);

