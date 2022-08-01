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

// Exercise 2

const day = 5;
let text;

switch (day) {
    case 1:
        text = 'Monday'
        break;
    case 2:
        text = 'Tuesday'
        break;
    case 3:
        text = 'Wednesday'
        break;
    case 4:
        text = 'Thursday'
        break;
    case 5:
        text = 'Friday'
        break;
    case 6:
        text = 'Saturday'
        break;
    case 7:
        text = 'Sunday'
        break;
    default:
        text = 'Your day number doesn\'t exist'
        break;
}
console.log(text);

// Ternary operator example

const speed = 150;
let message;

message = speed > 100 ? 'You\'re going very fast' : 'You\'re going at the right speed';
// if (speed > 100) {
//     message = 'You\'re going very fast'
// } else {
//     message = 'You\'re going at the right speed'
// }
console.log(message);

// const isFast = speed > 100 ? true : false;
const isFast = speed > 100;
console.log('Are you really going so fast?', speed, 'km/h,', isFast);