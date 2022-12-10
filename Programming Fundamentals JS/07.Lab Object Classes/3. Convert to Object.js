function stringInJSON(string){
   let object = JSON.parse(string);
  let objEnties = Object.entries(object)

  for(let [key, value] of objEnties){
    console.log(`${key}: ${value}`);
  }
   //console.log(objEnties);
    
} 
stringInJSON('{"name": "George", "age": 40, "town": "Sofia"}')