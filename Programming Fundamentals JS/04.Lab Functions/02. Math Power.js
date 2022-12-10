function mathPower(num1, num2){
let ourNum = Number(num1);
let power = Number(num2);
let res = 1
for(let i = 1; i<=power;i++){
res *=ourNum
}
console.log(res);
}
mathPower(2,8)