console.log("hello");
//Destructuring
const student ={
                name:"Helsinki",
                age:24,
                projects:{
                    diceGame:"two player dice game using JavaScript"
                }
}

const{name,age,projects:{diceGame}} = student;
console.log(`Name of person is ${name}, and his age is ${age}.The projects he worked on are : ${diceGame}`);
