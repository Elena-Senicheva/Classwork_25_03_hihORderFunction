'use strict';

// const user = {
//   firstName: 'Test',
//   lastName: 'Testovich',
//   age: 18,
//   isMale: true,
//   sayHello: function(){
//     alert(`Hello,my name is ${this.lastName} ${this.firstName}.`);
    
//   },
//   isAdult: function(){
//    return this.age>= 18;
//   }
// }

// user.sayHello();
// console.log(user.isAdult());


// const User = function(firstName, lastName , age, isMale){
// this.firstName = firstName;
// this.lastName = lastName;
// this.age = age;
// this.isMale = isMale;
// this.sayHello = function(){
//   alert(`Hello,my name is ${this.lastName} ${this.firstName}.`);
// }
// this.isAdult = function(){
//   return this.age>= 18;
// }
// }

// let user1 = new User('Ivanov', 'Ivan', 15, true,);
// let user2 = new User('Petrov', 'Petr', 25, true,);

// console.log(user1);
// console.log(user2);
// console.log(user1.sayHello());

// const PROTOKOL = 'http://';
// const SERVER_IP = 'localhost';
// const PORT = 3000;

// function createQuery(absPath) {
//   return `${PROTOKOL}${SERVER_IP}:${PORT}${absPath}`;
  
// }

// console.log(createQuery('/home/opa'));

function createMultiplicationTable(){
  const table = {
       
  }

for(let i=1; i<=10; i++){
  for(let j=1; j<=10; j++){
   table[`${i} * ${j}`] = i + j;
  }
}
return table;
}

console.log(createMultiplicationTable());