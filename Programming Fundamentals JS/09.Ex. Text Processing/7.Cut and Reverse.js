function demo(str){
    let strL = str.length
    let firstHalf = str.slice(0,strL/2).split('').reverse().join("")
    let secondHalf = str.slice(strL/2,strL).split('').reverse().join("")
    //let revFirstHalf = firstHalf.reverse()
    console.log(firstHalf);
    console.log(secondHalf);
}
demo('tluciffiDsIsihTgnizamAoSsIsihT')
demo('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')