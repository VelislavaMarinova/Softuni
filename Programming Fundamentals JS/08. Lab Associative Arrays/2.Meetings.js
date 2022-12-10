function meetings(arr) {
    let res = {};
    for (line of arr) {
        let [day, name] = line.split(' ')

        if (res.hasOwnProperty(day)) {
console.log(`Conflict on ${day}!`);
        } else {
            res[day] = name
            console.log(`Scheduled for ${day}`);
        }
    }
    for(let [day,name] of Object.entries(res)){
        console.log(`${day} -> ${name}`);
    }
//console.log(res);
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)