function sumFirstAndLast(arr){
let firstNum = Number(arr.shift());
let lastNum = Number(arr.pop());
let sum = firstNum+lastNum;
console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])
