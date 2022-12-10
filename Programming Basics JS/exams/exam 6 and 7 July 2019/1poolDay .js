function poolDay(input){
    //1.	Първи ред – брой на хората. Цяло число в интервала [1…100]
//2.	Втори ред – такса вход. Реално число в интервала [0.00…50.00]
//3.	Трети ред – цена един за шезлонг. Реално число в интервала [0.00…50.00]
//4.	Четвърти ред – цена за един чадър. Реално число в интервала [0.00...50.00] 
let numPeople = Number(input[0]);
let entryTax =Number(input[1]);
let priceSunBed = Number(input[2]);
let priceUmbrella = Number(input[3]);
let numUmbrellas =Math.ceil(numPeople/2)
let numSunBeds =Math.ceil (numPeople*0.75)
let priceUmbrellas = priceUmbrella*numUmbrellas
let priceSunBeds = numSunBeds*priceSunBed
let entryTaxTotal = entryTax*numPeople
let totalPrice = (entryTaxTotal + priceUmbrellas + priceSunBeds).toFixed(2)

console.log(`${totalPrice} lv.`)


}
poolDay(["21", "5.50", "4.40", "6.20"])