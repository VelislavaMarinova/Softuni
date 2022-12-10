function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1])
    let toyPrice = Number(input[2])

    let savedMoney = 0
    let stollenMoney = 0
    let numToys = 0
    let addedMoney = 10

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            savedMoney += addedMoney
            addedMoney += 10
            stollenMoney++
        }
        else{
            numToys++
        }
    }
    let moneyFromToys = numToys*toyPrice
    let totalSavedMoney =  moneyFromToys + savedMoney - stollenMoney
    
    if(totalSavedMoney >= washingMachinePrice){
       console.log(`Yes! ${(totalSavedMoney-washingMachinePrice).toFixed(2)}`)
    }
    else{console.log(`No! ${(washingMachinePrice-totalSavedMoney).toFixed(2)}`)}

}

cleverLily(["10", "170.00", "6"])
