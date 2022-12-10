function city(city){
    let cityEntry = Object.entries(city)
    for(let [cityKeys, cityValue] of cityEntry){
        console.log(`${cityKeys} -> ${cityValue}`);
    }
   // console.log(cityEntry);

}
city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)