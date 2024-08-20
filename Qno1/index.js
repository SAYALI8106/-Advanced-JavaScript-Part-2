// Create an object constructor Person that takes name and age as parameters and initializes them. Also, add
// a method sayHello to greet the person.

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function() {
        console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
    };
}

const person1 = new Person('Alice', 30);
person1.sayHello(); 
