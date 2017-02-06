// function add(a, b) {
//     return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Allen', 'Andrew'];
// var groupB = ['Jon', 'Wyatt'];
// var final = [...groupB, 3, ...groupA];

// console.log(final);

var person = ['Ozzy', 42];
var person2 = ['John', 45];
// Hi Ozzy, you are 42

function doAgeGreeting(name, age) {
    return `Hi ${name}, you are ${age}`;
}

console.log(doAgeGreeting('Dean', 47));
console.log(doAgeGreeting(...person));
console.log(doAgeGreeting(...person2));

var names = ['Jon', 'Wyatt'];
var final = ['Ozzy', ...names];

console.log(final);

function greet(name) {
    return `Hello ${name}`;
}

final.forEach(function(a) {
    console.log(greet(a));
});
