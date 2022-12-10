function huntingGames(arr) {
    let daysOfAdventure = Number(arr.shift());
    let numPlayers = Number(arr.shift());
    let groupEnergy = Number(arr.shift());
    let waterPerDayForOne = Number(arr.shift());
    let foodPerDayForOne = Number(arr.shift());

    let totalWater = daysOfAdventure * numPlayers * waterPerDayForOne
    let totalFood = daysOfAdventure * numPlayers * foodPerDayForOne

    
    let index = 0
    let energyLoss = Number(arr[index]);
    let dayCounter = 0
    for(let i=0;i<arr.length;i++) {
        dayCounter++;
        
        let totalFoodBeforeCurrentDay = totalFood
        let totalWaterBeforeCurrentDay = totalWater

        groupEnergy -= energyLoss
        if(dayCounter%2 === 0){
            groupEnergy+=groupEnergy*0.05
            totalWater-=totalWater*0.3
        }
        if(dayCounter%3==0){
            totalFood-=totalFood/numPlayers
            groupEnergy+=groupEnergy*0.1
        }
        if(groupEnergy<=0){
            console.log(`You will run out of energy. You will be left with ${totalFoodBeforeCurrentDay.toFixed(2)} food and ${totalWaterBeforeCurrentDay.toFixed(2)} water.`)
            break;
        }
        index++;
        energyLoss = arr[index]
    }
    if(groupEnergy>0){
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`)
    }

    //console.log(totalFood);
}
huntingGames(["12",
"6",
"4430",
"9.8",
"5.5",
"620.3",
"840.2",
"960.1",
"220",
"340",
"674",
"365",
"345.5",
"212",
"412.12",
"258",
"496"])

