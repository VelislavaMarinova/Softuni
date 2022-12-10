function distinctArray(arr) {
   
   
    let newArr = [];
    let arrL = arr.length
    for (let i = 0; i < arrL; i++) {
        let currentEl = arr[i];
        if (!newArr.includes(currentEl)) {
            newArr.push(currentEl)
        }
    }
    console.log(newArr.join(" "));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])