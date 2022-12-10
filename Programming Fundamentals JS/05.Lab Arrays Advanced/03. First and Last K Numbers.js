function firstAndLastKNumbers(arr) {
    let kEl = arr.shift();
    let arrL = arr.length
    //let lastEl = arr[arrL - 1]
    let newArr1 = arr.slice(0,kEl)
    let newArr2 = arr.slice(arrL - kEl,arrL)
    
    
    console.log(newArr1.join(" "));
    console.log(newArr2.join(' '));
   // console.log(kEl);
    //console.log(arr);
}
firstAndLastKNumbers([2, 7, 8, 9])

