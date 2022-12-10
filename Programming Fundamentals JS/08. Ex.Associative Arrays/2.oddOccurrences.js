function oddOccurrences(str) {
    let formatTOLowerCase = str.toLowerCase().split(' ')

    let set = new Set(formatTOLowerCase)
    //console.log(set);
    let counter = 0
    let obj = {};
    set.forEach(el => {
        for (let word of formatTOLowerCase) {

            if (el === word) {
                counter++;
            }
        }
        if (counter % 2 !== 0) {
            obj[el] = counter
        }
        counter = 0
    })
    let ourElements = Object.keys(obj)
    let output = []
    for (let el of formatTOLowerCase) {
        if (ourElements.includes(el)) {
            output.push(el)
        }
    }
    let setOutput = new Set(output)
    let print = ""
    for(let el of setOutput){
         print += ` ${el}`
        
    }
 console.log(print);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')