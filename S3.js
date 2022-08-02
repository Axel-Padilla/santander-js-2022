// Session 3 - Example 1

// const numbers = [1, 3, 4, 7, 2, 1, 9, 0]
// // RESULT: const doubled = [2, 6, 8, 14, 4, 2, 18, 0]
// const doubled = [];
// for (let index = 0; index < numbers.length; index++) {
//     doubled.push(numbers[index] * 2);
// }

// console.log('Numbers:', numbers)
// console.log('Doubled:', doubled) 

// Example 2

// const numbers = [1, 3, 4, 7, 2, 1, 9, 0]
// const doubled = [];
// for (const number of numbers) {
//     doubled.push(number * 2);
// }

// console.log('Numbers:', numbers)
// console.log('Doubled:', doubled) 

// CHALLENGE 1 - for the given array, get the average

// const numbers = [5, 3, 4, 7, 2, 1, 9, 7, 7];
// let sum = 0;
// for (const num of numbers){
//     sum = num + sum
// }
// const average = sum / numbers.length;
// console.log('The average of the array\'s elements is:', average);
// // Alternative solution
// // for (let index = 0; index < numbers.length; index++) {
// //     sum = sum + numbers[index];
// // }



// OBJECTS - Introduction

const john = {
    firstName: 'John',
    lastName: 'Doe',
    birthYear: 1990
}
console.log(john.firstName);
console.log(john['lastName'])

john.firstName = 'Jane'
john['lastName'] = 'Does'
console.log(john.firstName);
console.log(john.lastName);

// Example 1 - Convert an object into an array

const car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020
}
// Solution: [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
const keys = Object.keys(car); // ['brand', 'model', 'year']
const pairs = []
for (let i = 0; i < keys.length; i++){
    pairs.push( [keys[i], car[keys[i]]] )
}
console.log(pairs)

// CHALLENGE 2 - Convert pairs to an object
// Solution: const auto = {
//     brand: 'Nissan',
//     model: 'Versa',
//     year: 2020
// }
const auto = {}
for (let i = 0; i < pairs.length; i++) {
    auto[pairs[i][0]] = pairs[i][1];
}
console.log(auto)

