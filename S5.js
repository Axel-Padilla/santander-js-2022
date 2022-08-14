// Session 5 - Scope

// // Global scope using VAR
// if (true) {
//     var foo = 'John Doe'
//     console.log(foo)
// }
// console.log(foo)

// // Local scope with let or const
// var numbers = [1, 2, 3, 4, 5]
// var doubles = []
// for (let i = 0; i < numbers.length; i++) {
//     doubles.push (numbers[i]*2);
// }
// console.log(numbers)
// console.log(doubles)
// console.log(i)

// Exeption to var for global scope - Execution context

// (function prueba (){
//     var foo = 'Hola'
//     console.log(foo)
// })()
// console.log(foo)

// THIS EXAMPLES

// function logThis () {
//     console.log("Is this === window?" + (this === window) )
// }

// const foo = {
//     logThis: logThis // this as a method
// }

// logThis() // Is this === window? true 
// foo.logThis() // Is this === window? false

// const john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     calculateAge: function() {
//         const today = new Date()
//         const year = today.getFullYear()
//         this.age = year - this.birthYear
//     }
// }
// console.log(john)
// john.calculateAge()
// console.log(john)

/* It's not the same to use function expressions or function declarations, because 
    of the hoisting. While in declarations the function is hoisted (which means that we can 
    access even before initialize the function), in expressions we need to initialize at first. 
    NOTE: this happens with function calls, necessarily*/

console.log(power(2,2)) // We get 4
function power (base, exponent) {
    let sum = 1;
    for (let i = 0; i < exponent; i++) {
        sum = sum * base
    }
    return sum;
}
console.log(power(2,2)) // We get 4

// Function expression (arrow function)
console.log(power1(2,2)) // We cannot access before initializing
const power1 = (base, exponent) => {
    let sum = 1;
    for (let i = 0; i < exponent; i++) {
        sum = sum * base
    }
    return sum;
}
console.log(power1(2,2)) // We get 4


