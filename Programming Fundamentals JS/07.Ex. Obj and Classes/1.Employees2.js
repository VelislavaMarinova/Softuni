function employees(arr) {
    let listEmployees = {}
    for (const employee of arr) {
        listEmployees.name = employee;
        listEmployees.length = employee.length;
        console.log(`"Name: ${listEmployees.name} -- Personal Number: ${listEmployees.length}" `);
    }
    //console.log(listEmployees);
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)