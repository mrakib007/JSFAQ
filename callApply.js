const normalPerson = {
    firstName : 'Rahim',
    lastName : 'Uddin',
    salary : 15000,
    getFullName : function(){
       console.log(this.firstName,this.lastName); 
    },
    chargeBill : function(amount,tax,tips){
        console.log(this);
        this.salary = this.salary - amount -tax - tips;
        return this.salary;
    }
}

const heroPerson = {
    firstName : 'hero',
    lastName : 'Balam',
    salary : 25000
}
const friendlyPerson = {
    firstName : 'hero',
    lastName : 'Salam',
    salary : 25000
}
//normalPerson.chargeBill();

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);

//  //normalPerson.chargeBill(150);
//  console.log(normalPerson.salary);
// // console.log(normalPerson.firstName);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);
// console.log(friendlyPerson.salary);


// normalPerson.chargeBill.call(heroPerson,900,100,50);
// normalPerson.chargeBill.call(heroPerson,3000,300,70);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson,5000,500,50);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[3000,300,30]);
console.log(heroPerson.salary);