function sorting(arr) {
   let newArr = [];
   let arrL = arr.length
    for (let i = 0; i < arrL/2; i++) {


        let maxNum = Math.max(...arr)
            if(maxNum === Infinity){
            break;
        }
        newArr.push(maxNum)
        let indexOfMaxNum = arr.indexOf(maxNum);
        arr.splice(indexOfMaxNum,1);
        let minNum = Math.min(...arr);
        if(minNum === Infinity){
            break;
        }
        newArr.push(minNum);
        let indexOfMinNum = arr.indexOf(minNum);
        arr.splice(indexOfMinNum,1);

       
    }
    console.log(newArr.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94, 100])