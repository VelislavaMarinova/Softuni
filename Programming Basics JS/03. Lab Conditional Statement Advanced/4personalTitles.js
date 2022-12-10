function personalTitles(input){
    //•	"Mr." – мъж (пол 'm') на 16 или повече години
//•	"Master" – момче (пол 'm') под 16 години
//•	"Ms." – жена (пол 'f') на 16 или повече години
//•	"Miss" – момиче (пол 'f') под 16 години
let age = Number(input[0]);
let gender = input[1];
if (age >=16 && gender == "m"){console.log(`Mr.`)}
if (age < 16 && gender == "m"){console.log(`Master`)}
if (age >=16 && gender == "f"){console.log(`Ms.`)}
if (age < 16 && gender == "f"){console.log(`Miss`)}


}
personalTitles(["25","f"]);
