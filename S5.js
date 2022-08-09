// Session 5 - Scope

// Scope global using VAR
if (true) {
    var foo = 'John Doe'
    console.log(foo)
}
console.log(foo)

var numbers = [1, 2, 3, 4, 5]
var doubles = []
for (let i = 0; i < numbers.length; i++) {
    doubles.push (numbers[i]*2);
}
console.log(numbers)
console.log(doubles)
console.log(i)