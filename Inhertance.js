class Person {
    constructor(name) {
        this.name = name;
    }

    Greetings() {
        console.log(`Hello and ${this.name}`);
    }
}

// inheriting parent class
class Student extends Person {

}

let student1 = new Student('Welcome to emtec');
student1.Greetings();