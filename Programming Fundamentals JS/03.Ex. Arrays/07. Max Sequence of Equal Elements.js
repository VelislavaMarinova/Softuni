function maxSequenceOfEqualElements(arr) {
    let arrOfNumbers = arr;
    let arrOfNumbersLength = arrOfNumbers.length;
    let num = 0
    let numToCompare = 0
    let startSequence = ''
    let sequence = ""
    let maxSequence = ""
    for(let i = 0; i<arrOfNumbersLength;i++){
        num = arrOfNumbers[i];
        numToCompare = arrOfNumbers[i+1]
       
        if(num === numToCompare){
          
            sequence+=`${num} `
        }
       if(num!==numToCompare){
           sequence+=`${num}`
           if(sequence.length>maxSequence.length)
            maxSequence = sequence
            sequence =""
        }
    }
    console.log(maxSequence);
    }


maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])