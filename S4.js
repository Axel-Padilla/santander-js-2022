// Session 4 - Example 1
function calculateAge(birthYear) {
    const age = 2022 - birthYear;
    return age;
}
const johnAge = calculateAge(1969);
console.log('The John\'s age is', johnAge);

function yearsUntilRetirement (yearOfBirth, name) {
    const age = calculateAge(yearOfBirth);
    const retirement = 65 - age;
    console.log(`${name} retires in ${retirement} years`);
    console.log(name + ' retires in ' + retirement + ' years');
}
yearsUntilRetirement(1969, 'John')