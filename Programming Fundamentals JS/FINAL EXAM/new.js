function demo(){
    let text =  '7nVal7dpassword4'
    let regex = /(?<validpass>[A-Za-z\d+\_])/g
    let valid 
    let pass =[]
    while((valid=regex.exec(text))!==null){
   pass.push(valid.groups.validpass)
  //console.log(valid.groups.validpass);
    }
    console.log(pass.join(''));
  }
  demo()