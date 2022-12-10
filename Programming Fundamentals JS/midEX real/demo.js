function demo(arrOne,arrTwo){
let numEl = arrTwo[0];
let numElToDel = arrTwo[1];
let searchNum = arrTwo[2];

let newArr = arrOne.slice(0,numEl)
newArr.splice(0,numElToDel)
//console.log(newArr);

let counter = 0
for(let el of newArr){
    if(el === searchNum){
counter++
    }
}
console.log(`Number ${searchNum} occurs ${counter} times.`);
}
demo([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    
    )