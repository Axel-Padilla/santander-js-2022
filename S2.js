// Exercise 1 - Session 2

const time = 22;
let greeting;

if (time >= 0 && time < 12){
    greeting = 'Good morning!'
} else if (time >= 12 && time < 19){
    greeting = 'Good afternoon!'
} else if (time >= 19 && time <24 ){
    greeting = 'Good evening!'
} else {
    greeting = 'I\'m sorry, I don\'t know that time'
}

console.log(greeting);