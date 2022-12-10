function demo(arr){
    let phoneBook = {};

    arr.forEach(line => {
        let [name,phone] = line.split(' ');
        phoneBook[name]=phone
        
    });
for(let[keys,values] of Object.entries(phoneBook))
console.log(`${keys} -> ${values}`)
}
demo(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)