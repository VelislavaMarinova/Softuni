function reverseAnArrayOfStrings(arr){
for(let i = 0; i<arr.length/2; i++){
    let buff = arr[i];
    arr[i]=arr[arr.length -1-i]
    arr[arr.length -1 -i]=buff
}
console.log(arr.join(' '));
}
reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e'])