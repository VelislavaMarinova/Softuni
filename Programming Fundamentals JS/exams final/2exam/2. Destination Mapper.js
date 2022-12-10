function demo(input) {
    let regexpOne = /\/(?<destination>[A-Z][A-Za-z]{2,})\//g
    let regexpTwo = /\=(?<destination>[A-Z][A-Za-z]{2,})\=/g


    let arrValid = [];
    let valid
    while ((valid = regexpOne.exec(input)) !== null) {
        let validDestination = valid.groups.destination
        arrValid.push(validDestination)
        
    }
    while((valid = regexpTwo.exec(input)) !== null){
        let validDestination = valid.groups.destination
        arrValid.push(validDestination)
        
    }
    let objValid = {}
    let arrObj = []
    for(let el of arrValid){
        let index = input.indexOf(el)
       objValid.index = index
       objValid.destination = el
       arrObj.push(Object.entries(objValid))
    }
    // for(let el of arrObj){
    //     console.log(el.index);
    // }
    arrObj.sort()
    let resArr = []
   for(let el of arrObj){
resArr.push(`${el[1][1]}`)
  
   }
   let sum = 0
   for(let el of resArr){
    
    sum+=el.length
   }
   console.log(`Destinations: ${resArr.join(", ")}`);
   console.log(`Travel Points: ${sum}`);
}

demo('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=')