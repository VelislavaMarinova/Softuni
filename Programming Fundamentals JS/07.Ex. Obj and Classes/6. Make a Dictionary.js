function makeADictionary(arr) {
    let terms = [];
    arr.forEach(element => {
        let object = JSON.parse(element);
        terms.push(object)

    });
    let obj = terms.reduce(function (result, item) {
        let key = Object.keys(item)[0]; //first property: a, b, c
        result[key] = item[key];
        return result;
    }, {});
   
    const sorted = Object.keys(obj)
        .sort()
        .reduce((accumulator, key) => {
            accumulator[key] = obj[key];

            return accumulator;
        }, {});

    let sortedArr = []
    for (let el in sorted) {
        if (!sortedArr.includes(el)) {
            sortedArr.push(el);
            sortedArr.push(sorted[el])
        }
        else {
            let indexDeff = sortedArr.indexOf(el)
            sortedArr.splice(indexDeff + 1, 1, sorted[el])
        }

    }
    for (let i = 0; i < sortedArr.length; i += 2) {
        console.log(`Term: ${sortedArr[i]} => Definition: ${sortedArr[i + 1]}`);
    }
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)