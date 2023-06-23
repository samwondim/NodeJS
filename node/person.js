class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greetings() {
        console.log(`Hello my name is \n${this.name} and I am ${this.age}`);
    }
}

module.exports = Person;