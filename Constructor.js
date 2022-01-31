class Employee {
    constructor(id, name, address, phone) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }
}
var emp1 = new Employee(1, "John", "Sangamner", 8390110610);
console.log(emp1.address);