function softUniReception(arr){
    let numStudentsByFirstEmployee =Number(arr.shift());
    let numStudentsBySecondEmployee =Number(arr.shift());
    let numStudentsByThirdEmployee =Number(arr.shift());
    let numStudents = Number(arr[0])
    
    let numStudentsPerHour = numStudentsByFirstEmployee+numStudentsBySecondEmployee+numStudentsByThirdEmployee
    let timeForAllStudents =(numStudents/numStudentsPerHour)
    let addedTimeForBreak =Math.floor(timeForAllStudents/3)
    let totalTime = 0
    //let timeTotal = timeForAllStudents+addedTimeForBreak
    for(let i = 1; i<=timeForAllStudents;i++){
        totalTime++
        if(totalTime > 23){
            totalTime++
        }
        else if(totalTime> 19){
            totalTime++
        }
        else if(totalTime>15){
            totalTime++
        }
        else if(totalTime >11){
            totalTime++
        }
        else if(totalTime >7){
            totalTime++
        }
        else if(totalTime >3){
            totalTime++
        }
    }
    let message =`Time needed: ${totalTime}h.`
    
    console.log(message);
    }
//softUniReception(['3', '2', '5', '40'])
// softUniReception(['5','6','4','20'])
 softUniReception(['1','2','3','45'])
// softUniReception(['1','2','3','18'])