// // Session 4 - Example 1
// function calculateAge(birthYear) {
//     const age = 2022 - birthYear;
//     return age;
// }
// const johnAge = calculateAge(1969);
// console.log('The John\'s age is', johnAge);

// function yearsUntilRetirement (yearOfBirth, name) {
//     const age = calculateAge(yearOfBirth);
//     const retirement = 65 - age;
//     console.log(`${name} retires in ${retirement} years`);
//     // console.log(name + ' retires in ' + retirement + ' years');
// }
// yearsUntilRetirement(1969, 'John')

// // CHALLENGE 1 - create a function to calculate the power of a number

// function power (base, exponent) {
//     let sum = 1;
//     for (let i = 0; i < exponent; i++) {
//         sum = sum * base
//     }
//     return sum;
// }
// const result = power(3,0)
// console.log(result)

// FUNCTION EXPRESSION

// const whatDoYouDo = function(job, name) { // without name
//     switch (job) {
//         case 'developer':
//             return name + ' develops cool apps...'
        
//         case 'developer':
//             return name + ' designs awesome websites...'
            
//         default:
//             return name + ' does something else'
//     }
// }
// console.log(whatDoYouDo('developer', 'Axel'))

// const factorial = function fact(num) {
//     return num < 2 ? 1 : num * fact(num - 1)
// }
// console.log(factorial(5))

// IIFE - Inmediately Invoked Function Expression

// (function() {
//     const name = 'John Doe';
//     console.log(name);
// })()

// Arrow function

// Function example
// const firstNames = ['John', 'Jane', 'Mark'];
// function getFullNames(names){
//     const fullNames = [];
//     for (const name of names) {
//         fullNames.push(`${name} Doe`)
//     }
//     return fullNames
// }

// const fullNames = getFullNames(firstNames)
// console.log(fullNames)

// Arrow function example
// const firstNames = ['John', 'Jane', 'Mark'];

// const getFullNames = (names) => {
//     const fullNames = [];
//     for (const name of names) {
//         fullNames.push(`${name} Doe`)
//     }
//     return fullNames
// }

// const fullNames = getFullNames(firstNames)
// console.log(fullNames)

// // Arrow function without return

// const logName = name => console.log(`Hello ${name}`)
// logName('Axel');

// CHALLENGE 2 - return the bigger number

// Sol. 1
// function getBiggerInt(number1, number2) {
//     if (number1 > number2) {
//         console.log(`${number1} es mayor que ${number2}`)
//     } else {
//         console.log(`${number2} es mayor que ${number1}`)
//     }
// }

// Sol. 2 
// const getBiggerInt = (number1, number2) => number1 > number2 ? console.log(number1) : console.log(number2)

// Sol. 3
// const getBiggerInt = (number1, number2) => console.log(`The bigger number is ${number1 > number2 ? number1 : number2}`)
// getBiggerInt(14,9)

// // and, what if we have an array in the call? that will be a parameter
// const getBiggerInt2 = (number) => console.log(`The bigger number is ${number[0] > number[1] ? number[0] : number[1]}`)
// getBiggerInt2([15,9])

// CHALLENGE 3 - Create a function that let us calculate the Fibonacci number

// Sol. 1 - I created 3 bound functions
function f3(num) {
    if (num > 1){
        return f1(num-1) + f1(num-2)
    } else {
        return 'I don\'t know how to calculate it.'
    }
} 

function f2(num) {
    if (num === 1){
        return 1
    } else {
        return f3(num)
    }
}

function f1(num){
    if (num === 0){
        return num
    } else {
        return f2(num)
    }
}
const limit = 8
const result = f1(limit)
console.log(result) //21

// Fibonacci serie
const serie = [];
for (let i = 0; i <= limit; i++) {
    serie.push(f1(i))
}
console.log(`La serie de Fibbonaci desde el 0 hasta el ${limit} es ${serie}`)

// Solution 2 - Optimized sol. 1 with a recurrent function expression

const fibonacci = function fib(num) {
    if (num === 0) {
        return num;
    } else if (num === 1) {
        return num;
    } else if (num > 1) {
        return fib(num - 1) + fib(num - 2)
    }
}
const limit1 = 4
const result1 = fibonacci(limit1)
console.log(result1) 

const serie1 = [];
for (let i = 0; i <= limit1; i++) {
    serie1.push(fibonacci(i))
}
console.log(`Serie de Fibonacci desde el 0 hasta el ${limit1} es ${serie1}`)

// Solution 3 - The most optimized

function fibonacci1(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fibonacci1(num-1) + fibonacci1(num-2);
}
function secuence(limit2) {
    if (limit2 < 1) return console.log('limit debe ser mayor que 0');
    for (let i = 0; i <= limit2; i++) {
        console.log(fibonacci1(i));
    } 
}
secuence(5)