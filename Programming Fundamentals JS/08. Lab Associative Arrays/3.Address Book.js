function addressBook(arr){
let adresBookObj = {};
arr.forEach(element => {
    let [name,adress] = element.split(':')
    adresBookObj[name] = adress;
   // console.log(adress);
});
let entries = Object.entries(adresBookObj)
//console.log(entries);
let sorted = entries.sort(([keyA, valueA],[keyB, valueB] )=>{
    return keyA.localeCompare(keyB)
})

for(let [name,adres] of sorted){
    console.log(`${name} -> ${adres}`)
}
//console.table(sorted);
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)