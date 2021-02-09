class Person{
    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new Person('Hero','Balam',25000);
console.log(heroPerson);
const firendlyPerson = new Person('hero','Salam',30000);
console.log(firendlyPerson);

function Person1(firstName,lastName,salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person1('Grand','papa',1200);
console.log(oldPerson);