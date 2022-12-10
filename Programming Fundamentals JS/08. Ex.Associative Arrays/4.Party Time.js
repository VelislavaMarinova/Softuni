function partyTime(arr) {
    let arrOfCommands = arr.slice(0);
    let index = 0
    let command = arr[index];
    let list = [];

    while (command !== 'PARTY') {
        let currentPerson = command;
        if(!list.includes(currentPerson)){
        list.push(currentPerson);
    }
        arrOfCommands.shift()
        index++
        command = arr[index]
    }
    arrOfCommands.shift();
    let listOfGuests = arrOfCommands
    let didntArrived = []
    // let count = 0
    for (let person of list) {
        if (!listOfGuests.includes(person)) {
            didntArrived.push(person)

        }
    }
    console.log(didntArrived.length);
    let vip = []
    let reg = []
    for(let person of didntArrived){
        //console.log(person[0]);
        if(isNaN(person[0])){
            reg.push(person)
        }else{
            vip.push(person)
        }
    }
  
for(let person of vip){
    console.log(person);
}
for(let person of reg){
    console.log(person);
}
//console.log(sorted);
}
partyTime([
'PARTY',

'dziNz78I',
'mdSGyQCJ',
'LjcVpmDL',
'fPXNHpm1',
'HTTbwRmM',
'B5yTkMQi',

'm8rfQBvl',
'fc1oZCE0',
'UgffRkOn',
'7ugX7bm0',
'9CQBGUeJ'
]

)