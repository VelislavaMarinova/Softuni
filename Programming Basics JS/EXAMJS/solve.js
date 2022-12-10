function solve(input) {
    let num = input[0];
    let a = num[2];
    let b= num[1];
    let c = num[0]
    for(let i =1; i<=a; i++){
        for(let k = 1; k<=b; k++){
            for(let m = 1; m<=c; m++){
               console.log(`${i} * ${k} * ${m} = ${i*k*m};`);
            }
        }
    }
   // console.log(`${a} ${b} ${c}`);
    
}

solve(["324"])