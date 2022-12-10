function schoolGrades(arr) {
    let resMap = new Map();
    arr.forEach(line => {
        let split = line.split(" ");
        let name = split.shift();
        let avgGrade = 0
        let setOfGrade = split
     
        for (let grade of split) {
            grade = Number(grade);
            
           
            
        }
        if(!resMap.has(name)){
            resMap.set(name, setOfGrade);

        }else{
           
            let oldSet = resMap.get(name);
            
            for(let grade of setOfGrade){
                oldSet.push(grade)
            }
            resMap.set(name,oldSet);
        }

        
    });
    let sortResMap = Array.from(resMap.entries())
    .sort(([keyA,valA], [keyB,valB])=>{
        return keyA.localeCompare(keyB)
    })
    for(let [key,val] of sortResMap){
        console.log(`${key}: ${Number(val)}`);
    }
   // console.log(sortResMap[0]);
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)