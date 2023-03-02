// STRICT MODE
// Desactiva el Hoisting - Todo debe ser escrito explicitamente

'use strict';
pi = 3.1416;
console.log(pi);

function myFunction() {
    'use strict';
    return pi = 3.1416;
}

console.log(myFunction());