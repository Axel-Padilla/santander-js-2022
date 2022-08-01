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

// Loop example

// for (let index = 0; index < 200; index++) {
//     if (index === 198) continue
//     console.log('Hello world!', index)
// }

// CHALLENGE 2 - Print 0 - 100 pair numbers

for (let index = 0; index <= 100; index++) {
    // if (index % 2 === 0) console.log('Pair number', index)
    if (!(index % 2)) console.log('Pair number', index)
}

// CHALLENGE 3 - Print 000 primmbers

for (let counter = 2; counter <= 100; counter++) {
    let isPrime = true;
    for (let index = 2; index <= counter; index++){
        if(counter % index === 0 && index !== counter) isPrime = false;
    }
    if (isPrime) console.log('Prime number', counter)
}