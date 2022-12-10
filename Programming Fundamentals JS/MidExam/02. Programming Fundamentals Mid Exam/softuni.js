function softUniReception(arr) {
    let first = Number(arr[0]);
    let second = Number(arr[1]);
    let third = Number(arr[2]);
    let numSt = Number(arr[3]);
    let breakHour = 0
    

    let stForHour = first + second + third
    let numHours = numSt / stForHour
    let hoursToreduce = numHours
    for (let i = 1; i < numHours; i++)
        if (hoursToreduce > 3) {
            breakHour++
            hoursToreduce-=3
    
}

    //let numBrakes = (numHours / 3)
    let total = (numHours + breakHour)
    console.log(`Time needed: ${Math.ceil(total)}h.`);
}
softUniReception(['1', '2', '3', '18'])
softUniReception(['5', '6', '4', '20'])
softUniReception(['3', '2', '5', '0'])