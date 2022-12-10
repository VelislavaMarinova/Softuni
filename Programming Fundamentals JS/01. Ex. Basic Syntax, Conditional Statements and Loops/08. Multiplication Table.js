function multiplicationTable(num){
let number = Number(num);
let res = 0;
let message = "";
for(i = 1; i<=10;i++){
    res = number*i;
    message = `${number} X ${i} = ${res}`
    console.log(message);
}

}
multiplicationTable(5)