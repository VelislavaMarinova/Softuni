function minerTask(arr) {
    let sum = {
        resource: [],
        quontity: []
    }
    for (let i = 0; i < arr.length; i += 2) {
        let currentResource = arr[i];
        let currentQuontity = arr[i + 1];
        if (!sum.resource.includes(currentResource)) {
            sum.resource.push(currentResource);
            sum.quontity.push(currentQuontity);
        }else{
            let index = sum.resource.indexOf(currentResource);
            sum.quontity.splice(index,1, Number(sum.quontity[index])+Number(currentQuontity))
        }
    }
    console.log(sum.quontity);
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