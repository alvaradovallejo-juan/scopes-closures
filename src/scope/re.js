//VAR
//Se puede reasignar y redeclarar

var firstName; //Undefined
firstName = 'Oscar';
console.log(firstName);

var lastName = "David"; //Declarar y asignar
lastName = 'Ana'; //Reasignar
console.log(lastName);

var secondName = 'David'; //Declarar y asignar
var secondName = 'Ana'; //Reasignar
console.log(secondName);

//LET
//Se puede reasignar pero no redeclarar

let fruit = 'Apple'; //Declarar y asignar
fruit = 'Kiwi'; //Reasignar
// let fruit = 'Banana';

//CONST
//No se puede reasignar ni redeclarar

const animal = 'dog'; //Declarar y asignar
animal = 'cat';
console.log(animal);


//Los arrays guardados en const pueden modificarse si se usan los métodos de array
const vehicles = [];
vehicles.push("BMW");
console.log(vehicles);