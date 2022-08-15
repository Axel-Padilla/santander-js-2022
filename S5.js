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

// console.log(power(2,2)) // We get 4
// function power (base, exponent) {
//     let sum = 1;
//     for (let i = 0; i < exponent; i++) {
//         sum = sum * base
//     }
//     return sum;
// }
// console.log(power(2,2)) // We get 4

// // Function expression (arrow function)
// console.log(power1(2,2)) // We cannot access before initializing
// const power1 = (base, exponent) => {
//     let sum = 1;
//     for (let i = 0; i < exponent; i++) {
//         sum = sum * base
//     }
//     return sum;
// }
// console.log(power1(2,2)) // We get 4

// THIS USAGE

const john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990,
    calculateAge: () => {
        const today = new Date()
        const year = today.getFullYear()
        // this.age = year - this.birthYear //this is pointing to window, not to john
        this.age = year - john.birthYear
    }
}
john.calculateAge()
console.log(john)
console.log(window.age) //age lives in window, not in john


// CHALLENGE 1 - Complete the pluck function that extracts a propertys' list from an array with objects

var singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];
  
function pluck(list, propertyName) {
    const result = []
    for (let i = 0; i < list.length; i++) {
        result.push(list[i][propertyName])
    }
    console.log(result)
}
  
  console.log( pluck(singers, 'name') );
  // ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]
  
  console.log( pluck(singers, 'band') );
  // ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]
  
  console.log( pluck(singers, 'born') );
  // [1948, 1950, 1967, 1964]

// CHALLENGE 2 - Create a function that receives a 10 integer numbers array (0 - 9) and returns a string in phone number form

function createPhoneNumber (numbers) {
    phone = '(xxx) xxx - xxxx'
    if (numbers.length > 10) {
        console.log('You put more than 10 numbers, try again.')
    } else {
        let flag = true
        for (const number of numbers) {
            if (isNaN(number)) { //Check using of isNaN() with booleans, true and false are considered as numbers
                console.log('You put something that is not a number.')
                flag = false
                break
            } else if (number < 0 || number > 9) {
                console.log('Your numbers are out of range to be a phone number.')
                flag = false
                break
            } else {
                phone = phone.replace('x', number)
            }
        }
        flag === true ? console.log(phone) : console.log('Try again.')
    }
    
}
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // "(123) 456-7890"


/* CHALLENGE 3 - Create a function that receives an n-integer numbers array (positives) 
that can be messy, the function returns a new array with the missing numbers (1-10) from the first array */

function findMissingNumbers (numbers) { //need to add protection to strings or negative numbers
    const limit = Math.max(...numbers)
    const newArray = [] 
    for (let i = 1; i < limit; i++) {
        let exist = false
        numbers.forEach(number => {
            if (number === i) exist = true
        });
        if (exist === false) newArray.push(i)
    }    
    console.log(newArray)
}
findMissingNumbers([2, 1, 9, 5, 7, 3, 10]) //[4, 6, 8]