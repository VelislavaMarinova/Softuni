function multiplicationTable(num){
let ourNum = Number(num);
let res = 0
for(let i = 1; i<=10;i++){
    res = ourNum*i
    console.log(`${ourNum} X ${i} = ${res}`);
}}
multiplicationTable(5)