function sortArrayBy2Criteria(arr) {
    let sortedArr = arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    })
    sortedArr.forEach(element => {
        console.log(element);
    });
   //console.log(sortedArr);
}
sortArrayBy2Criteria(['alpha', 'betar', 'gamma','betar'])