function cats(arr) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.meow = () => {
                console.log(`${name}, age ${age} says Meow`)
            }
        }
    }
    for (let currentEl of arr) {
        let currentArr = currentEl.split(" ")
        let currentCat = new Cat(currentArr[0], currentArr[1])
        currentCat.meow()
        // console.log(currentArr);
    }
}
cats(['Candy 1', 'Poppy 3', 'Nyx 2'])