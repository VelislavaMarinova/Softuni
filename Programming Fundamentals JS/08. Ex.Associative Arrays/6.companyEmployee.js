function demo(arr) {
    let companies = []
    for (let line of arr) {
        let [name, id] = line.split(' -> ')
        if (!companies.includes(name)) {
            companies.push(name);
            companies.push(id)
        } else {
            if (!companies.includes(id)) {
                let index = companies.indexOf(name);
                companies.splice(index + 1, 1, [companies[index + 1] + `, ${id}`])
            }
        }

    }
    let companyObj = {}
    for (let i = 0; i < companies.length; i += 2) {
        let name = companies[i];
        let id = companies[i + 1]
        companyObj[name] = id
       
    }

    let sortKeys = Object.keys(companyObj).sort((a, b) => a.localeCompare(b));
    for (let key of sortKeys) {
        console.log(key);
        if (typeof companyObj[key] === 'string') {
            console.log(`-- ${companyObj[key]}`);
        } else {
            for (let el of companyObj[key]) {
                let splitEL = el.split(', ')
                let setSplitedEl =new Set(splitEL)
                splitEL = Array.from(setSplitedEl)
                //console.log(splitEL);
                for (let element of splitEL) {
                    console.log(`-- ${element}`);
                }
            }
        }
    }
   
    //console.log(companyObj);
}
demo([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    )