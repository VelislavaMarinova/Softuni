function arrayRotation(arr, num) {
    let strartArr= arr
    let lastElement = arr.length - 1;
    
    let numRotation = Number(num);
    
    for (let i = 0; i < numRotation; i++) {
        let elementToMove = strartArr.shift()
        strartArr.push(elementToMove)
    }
    let res = strartArr.join(" ")
    console.log(res);
}

arrayRotation([51, 47, 32, 61, 21], 2)
arrayRotation([32, 21, 61, 1], 4)