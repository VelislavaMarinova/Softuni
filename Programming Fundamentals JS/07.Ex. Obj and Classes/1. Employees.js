function employees(arr) {

    class Employees {
        constructor(name, length) {
            this.name = name,
                this.length = length
        }
    }
    for (let name of arr) {
        let length = name.length
        let currentEmplyee = new Employees(name, length)
        //console.log(currentEmplyee);
        console.log(`Name: ${currentEmplyee.name} -- Personal Number: ${currentEmplyee.length}`);
    }


}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)