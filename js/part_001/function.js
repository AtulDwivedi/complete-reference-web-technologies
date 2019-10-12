// JavaScript function syntax
/*

function name(parameter1, parameter2){
  //code goes here...
}

*/

// hello
// hello()
function hello() {
    console.log("Hello World!")
}


// greetMe() - Good morning, undefined
// greetMe("Atul") - Good morning, Atul
function greetMe(name) {
    console.log("Good morning, " + name)
}


// greetSomeone() - Good morning, Guest
// greetSomeone("Atul") - Good morning, Atul
function greetSomeone(name = "Guest") {
    console.log("Good morning, " + name)
}

// add() - NaN
// add(10) - NaN
// add(10, 20) - 30
// add(10, "Hi") - 10Hi
function add(num1, num2) {
    console.log(num1 + num2)
}

// sum(): NaN
// sum(10): NaN
// sum(10, 20): 30
// sum(10, "20"): "1020"
// var sum = sum(10, 20)
function sum(num1, num2) {
    return num1 + num2;
}

// ----------- Scopes

// console.log(hour) - Uncaught ReferenceError: hour is not defined
// console.log(minute) - Uncaught ReferenceError: minute is not defined
function getTime(hour) {
    var minute = 60;
}


var name = "Java"
var surname = "Script"

console.log("Outside function(before modification by function): " + (name + surname))

function fullName(name) {
    console.log(">> Inside function(before modification): " + (name + surname))
    name = "Live"
    console.log(">> Inside function(after modification): " + (name + surname))
}
fullName()
console.log("Outside function(after modification by function): " + (name + surname))
