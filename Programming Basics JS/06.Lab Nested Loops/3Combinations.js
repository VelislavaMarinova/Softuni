function combinations(input){
    let n = Number(input[0]);
    isFound = false
    let counter = 0
   
    for(let a=0; a<=n; a++){
        for(let b=0; b<=n; b++){
            for(let c=0; c<=n; c++){
                if(a+b+c === n){
                    isFound = true;
                    counter++;

                }
            }
        }
    }
console.log(counter);
}
combinations(["25"])