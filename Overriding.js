greet() {
    console.log(`Hello ${this.name}.`);
}



// inheriting parent class
class Student extends Person {

    constructor(name) {

        super(name);

        // Overriding property
        this.occupation = 'Intern';
    }

    // overriding method
    greet() {
        console.log(`Hello student ${this.name}.`);
        console.log('occupation: ' + this.occupation);
    }
}

let p = new Student('Prajwal');
p.greet();