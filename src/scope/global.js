// Variables

var a; //declarando
var b = 'b'; //declaramos y asignamos
var b = 'bb'; //reasignación
var a = 'aa'; //redeclaración

//GLOBAL SCOPE
var fruit = 'Apple'; //global

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // Variable asignada pero no declarada es aut. global
    console.log(country);
}

countries();
console.log(country);