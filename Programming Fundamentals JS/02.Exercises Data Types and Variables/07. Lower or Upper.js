function lowerOrUpper(a){
let letter = a;
let message = ""
let res = letter.charCodeAt();
if(res > 96 && res<123){
    message = `lower-case`
}
else{message = `upper-case`}
console.log(message);
}
lowerOrUpper('m')