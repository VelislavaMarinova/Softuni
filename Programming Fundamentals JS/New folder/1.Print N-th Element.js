function printNthElement(arr) {
   let step = Number(arr[arr.length - 1])
   let message = ""
   for(let i = 0; i < arr.length - 1; i++){
       if(i%(step) === 0){
           message += ` ${arr[i]}`
       }
      
   }
   console.log(message); 
}
printNthElement(['5', '20', '31', '4', '20', '2']) 
printNthElement(['dsa', 'asd', 'test', 'test', '2'])

