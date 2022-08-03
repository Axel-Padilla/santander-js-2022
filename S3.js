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

// const john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990
// }
// console.log(john.firstName);
// console.log(john['lastName'])

// john.firstName = 'Jane'
// john['lastName'] = 'Does'
// console.log(john.firstName);
// console.log(john.lastName);

// // Example 1 - Convert an object into an array

// const car = {
//     brand: 'Nissan',
//     model: 'Versa',
//     year: 2020
// }
// // Solution: [['brand', 'Nissan'], ['model', 'Versa'], ['year', 2020]]
// const keys = Object.keys(car); // ['brand', 'model', 'year']
// const pairs = []
// for (let i = 0; i < keys.length; i++){
//     pairs.push( [keys[i], car[keys[i]]] )
// }
// // console.log(pairs)

// // CHALLENGE 2 - Convert pairs to an object
// // Solution: const auto = {
// //     brand: 'Nissan',
// //     model: 'Versa',
// //     year: 2020
// // }
// const auto = {}
// for (let i = 0; i < pairs.length; i++) {
//     auto[pairs[i][0]] = pairs[i][1];
// }
// console.log(auto)

// // Spread Operator
// const colors = ['red', 'blue', 'green'];
// const myColors = [...colors]; //We generate a copy of the VALUES (not references) of colors array 
// console.log('colors', colors);
// console.log('myColors', myColors);

// colors[0] = 'pink'; //This just modify colors, not myColors
// console.log('colors', colors);
// console.log('myColors', myColors);

// // Spreading Operator with an object

// // const auto = {
// //     brand: 'Nissan',
// //     model: 'Versa',
// //     year: 2020
// // }
// const automovil = {...auto};
// console.log('auto', auto);
// console.log('automovil', automovil);

// auto.brand = 'Ford';
// console.log('auto', auto);
// console.log('automovil', automovil);

// // Joining two arrays
// const first = [1, 2, 3]
// const second = [4, 5, 6]
// // const todos = [...first, ...second]
// const todos = [...second, ...first]
// console.log(todos)

// // Joining two objects and overwriting a property

// const dealership = {
//     salesman: 'Jose',
//     office: 'Perisur'
// }
// const result = { //Joining auto and dealership
//     ...auto,
//     ...dealership,
//     year: 2022
// }
// console.log(result)

// -------------------------------------------------------------------------
// Destucturing (Deestrurar)

// const colors = ['red', 'blue', 'green'];
// const [Red, Blue, Green] = colors
// console.log(Red)
// console.log(Blue)
// console.log(Green)

// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     // job: 'Player'
//     job: {
//         type: 'Developer',
//         yearsWorking: 5
//     }
// }

// // const firstName = person.firstName;
// const {firstName: name, lastName, job = 'Developer'} = person;
// console.log('name:', name)
// console.log('lastName:', lastName)
// // console.log('job:', job)
// const working = person.job.yearsWorking
// console.log('yearsWorking:', working)
// const {job: {yearsWorking}} = person
// console.log('añosTrabajando:', yearsWorking)

// CHALLENGE 3 - Get facebook and instagram, and rename to FB and IG

const person = {
    firstName: 'John',
    lastName: 'Doe',
    links: {
      web: {
        blog: 'https://johndoe.com'
      }, 
      social: {
        facebook: 'https://facebook.com/john.doe',
        instagram: 'https://instagram.com/john.doe'
      } 
    }
  }

  const {links: {social: {facebook:FB, instagram:IG}}} = person
  console.log('Instagram:', IG)
  console.log('Facebook:', FB)
