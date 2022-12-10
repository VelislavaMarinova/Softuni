function minerTask(arr) {
    let sum = []
    for (let i = 0; i < arr.length; i += 2) {
        let resource = arr[i];
        let quantity = arr[i + 1];
        if (!sum.includes(resource)){
            sum.push(resource);
            sum.push(quantity)
        }else{
            let index = sum.indexOf(resource)
            sum.splice(index+1,1,(Number(sum[index+1])+Number(quantity)))
        }
        
    }
    for(let i = 0; i < sum.length; i += 2){
        console.log(sum[i]+' -> '+sum[i+1]);
        
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]

)