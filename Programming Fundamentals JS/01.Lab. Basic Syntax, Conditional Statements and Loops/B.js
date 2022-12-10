function bitcoinMining(arr) {
    let amountOfGold = arr
    let amountOfGoldLength = amountOfGold.length
    const golgAmountToLv = 67.51
    let sum = 0
    let priceForBtcInLv = 11949.16
    let boughtBitcoins = 0
   let dayConter = 0
   let firstDayBuyBtc = 0
   let sumBougthBtc = 0
   let counterTimesBuyBtc = 0
    for (let i = 0; i < amountOfGoldLength; i++) {
        dayConter+=1
        let amountOfGoldToLv = Number(amountOfGold[i]) * golgAmountToLv
        if(dayConter%3 === 0){
            amountOfGoldToLv = 0.7*amountOfGoldToLv
        }
        sum += amountOfGoldToLv
      
        if (sum >= priceForBtcInLv) {
            counterTimesBuyBtc+=1
            boughtBitcoins =Math.floor(sum/priceForBtcInLv)
            sumBougthBtc +=boughtBitcoins
            if(counterTimesBuyBtc ===1){
                firstDayBuyBtc = dayConter
               // console.log(`Day of the first purchased bitcoin: ${firstDayBuyBtc}`);
            }
            sum = sum - boughtBitcoins*priceForBtcInLv

        }
    }
console.log(`Bought bitcoins: ${sumBougthBtc}`);
if(counterTimesBuyBtc !==0){
    console.log(`Day of the first purchased bitcoin: ${firstDayBuyBtc}`);
}

console.log(`Left money: ${sum.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300])