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

// function logThis () {
//     console.log("Is this === window?" + (this === window) )
// }

// const foo = {
//     logThis: logThis // this as a method
// }

// logThis() // Is this === window? true 
// foo.logThis() // Is this === window? false

const john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990,
    calculateAge: function() {
        const today = new Date()
        const year = today.getFullYear()
        this.age = year - this.birthYear
    }
}
console.log(john)
john.calculateAge()
console.log(john)