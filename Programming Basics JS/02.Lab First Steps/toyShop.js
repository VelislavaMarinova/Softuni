function toyShop(input){
   // 1.	Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
// 2.	Брой пъзели - цяло число в интервала [0… 1000]
// 3.	Брой говорещи кукли - цяло число в интервала [0 … 1000]
// 4.	Брой плюшени мечета - цяло число в интервала [0 … 1000]
// 5.	Брой миньони - цяло число в интервала [0 … 1000]
// 6.	Брой камиончета - цяло число в интервала [0 … 1000]
// •	Пъзел - 2.60 лв.
// •	Говореща кукла - 3 лв.
//•	Плюшено мече - 4.10 лв.
//•	Миньон - 8.20 лв.
//•	Камионче - 2 лв.
let priceTrip = Number(input[0]);

let numberPuzzles = Number(input[1]);
let numberTalkingDols = Number(input[2]);
let numberBears = Number(input[3]);
let numberMinions = Number(input[4]);
let numberTrucks = Number(input[5]);
let numberToysTotal = numberPuzzles + numberTalkingDols + numberBears + numberMinions + numberTrucks

let pricePuzzles = numberPuzzles*2.6;
let priceTalkingDols = numberTalkingDols*3;
let priceBears = numberBears*4.1;
let priceMinions = numberMinions*8.20;
let priceTrucks = numberTrucks*2;
let priceTotal = (pricePuzzles + priceTalkingDols + priceBears +priceMinions + priceTrucks)

if(numberToysTotal>=50){priceTotal = (priceTotal - 0.25*priceTotal)}
let priceTotalAfterRent = (priceTotal*0.9)

if(priceTotalAfterRent>=priceTrip){console.log(`Yes! ${(priceTotalAfterRent-priceTrip).toFixed(2)} lv left.`);
}
else{console.log(`Not enough money! ${(priceTrip-priceTotalAfterRent).toFixed(2)} lv needed.`);
}

}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

