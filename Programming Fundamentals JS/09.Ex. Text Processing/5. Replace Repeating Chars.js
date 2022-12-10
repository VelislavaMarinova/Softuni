function demo(str){
    let splitStr = str.split('')
    let ourArr = []
    
    for(let i = 0;i<splitStr.length;i++){
      
     
       if(splitStr[i] === splitStr[i-1]){
        continue
       }else{
        ourArr.push(splitStr[i])
       }
        
    }
console.log(ourArr.join(''));
}
demo('aaaaabbbbbcdddeeeedssaa')