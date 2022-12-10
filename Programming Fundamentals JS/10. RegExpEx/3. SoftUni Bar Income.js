function demo(input) {
   
    let text = input.join('-')
  
    let totalsum = 0

     let pattern =/\%(?<name>[A-Z][a-z]+)\%([^$|%.]*)\<(?<product>\w+)\>([^$|%.]*)\|(?<count>\d+)\|([^$|%.0-9]*)(?<price>[\d+\.]+)\$/g
    let valid = pattern.exec(text)
     while (valid) {
     let validPrice = valid.groups.count*valid.groups.price;
     let validName = valid.groups.name;
     let validProduct = valid.groups.product;
      console.log(`${validName}: ${validProduct} - ${validPrice.toFixed(2)}`);
      totalsum+=validPrice
      valid = pattern.exec(text)
    }
console.log(`Total income: ${totalsum.toFixed(2)}`);
}
demo(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']
 


)
demo(
    ['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']

)