function partyTime(arr) {
    let guestList = {
        vip: [],
        reg: []
    }
    let guest = arr.shift()
    while (guest !== "PARTY") {
        let firstChar = guest[0];
        if (isNaN(firstChar)) {
            guestList.reg.push(guest)
        } else {
            guestList.vip.push(guest)
        }
        guest = arr.shift()
    }
    for(let guest of arr){
        if(guestList.vip.includes(guest)){
            let index = guestList.vip.indexOf(guest)
            guestList.vip.splice(index,1)
        }else if(guestList.reg.includes(guest)){
            let index = guestList.reg.indexOf(guest)
            guestList.reg.splice(index,1)
        }
    }
    let vipCount = guestList.vip.length;
    let regCount = guestList.reg.length;
    let totalCount = vipCount+regCount
    console.log(totalCount);
    for(let el of guestList.vip){
        console.log(el);
    }for(let el of guestList.reg){
        console.log(el);
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]
)