//HOISTING

/* El "código" es elevado- reorganizado para que las variables y funciones 
puedan ser accedidas antes de que sean declaradas */

console.log(nameOfDog);
var nameOfDog = 'Elmo';
console.log(nameOfDog);

dogName();

var elmo = 'Elmito';

function dogName() {
    console.log(`El mejor perrito es ${elmo}`);
}

dogName();