function towns(arr) {
    let towns = {}
   for(let i = 0; i <arr.length;i++){
    let currentEl = arr[i]
    let splitCurrent = currentEl.split(" | ")
    towns.town = splitCurrent[0];
    towns.latitude =Number( splitCurrent[1]).toFixed(2);
    towns.longitude = Number(splitCurrent[2]).toFixed(2);
    console.log(towns);

   } 

}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
)