function demo(){
  let text = '7nVal7dpassword4'
  let regex = /(?<validpass>[A-Za-z\d+\_])/g
  let valid 
  console.log(valid);
  let pass=""
  let mutant = pass + "strin"
  console.log({mutant})
  while((valid=regex.exec(text))!==null){
    console.log(typeof valid);
    console.log(typeof pass);
    pass +=valid.groups.validpass
    console.log(typeof pass);
//console.log(valid.groups.validpass);
  }
//   console.log(pass);
}
demo()