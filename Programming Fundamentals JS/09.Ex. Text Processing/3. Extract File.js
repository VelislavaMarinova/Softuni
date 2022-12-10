function extractFile(str){
let lastIndex = str.lastIndexOf('\\')

let fileNameAndExtention = str.slice(lastIndex+1)

let split = fileNameAndExtention.split('.');
let extention = split.pop();
let fileName = split.join('.')
console.log(`File name: ${fileName}
File extension: ${extention}
`);

}
extractFile('C:\\Projects\\Data-Structures\\LinkedList.LinkedList.cs')