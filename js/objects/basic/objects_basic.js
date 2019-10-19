console.log("An empty object can be created using one of two syntaxes:");
let user = new Object(); // "object constructor" syntax
let anotherUser = {}; // "object literal" syntax
console.log(user);
console.log(anotherUser);
console.log("--------\n\n\n\n");




console.log("Literals and properties:");
let person = { // an object
    name: "John", // by key "name" store value "John"
    age: 30 // by key "age" store value 30
};
console.log(person);

console.log(person.name);
console.log(person.age);

console.log("Add new property to person object");
person.isAdmin = true;
console.log(person);

console.log("Delete existing property from person object");
delete person.age;
console.log(person);

console.log("Multiword property names");
console.log(">\tmultiword property name must be quoted.");
console.log(">\tlast property in the list may end with a comma, known as \“trailing\” or \“hanging\” comma.");
person = {
    name: "John",
    isAdmin: true,
    "likes coffee": true,
};
console.log(person);
console.log("--------\n\n\n\n");




console.log("Square brackets:");
console.log("\tAccessing multiword propert without quotes(single/double) and Square brackets result in syntax error");
// this would give a syntax error
//user.likes birds = true
user = {}
console.log("Set mulitword property");
user["likes working"] = false
console.log(user);
console.log("Get mulitword property");
console.log(user['likes working']);
console.log("Square brackets also provide a way to obtain the property name as the result of any expression.");
let key = "likes working";
console.log(user[key]);
console.log("Delete mulitword property");
delete user["likes working"]
console.log(user);

user = {
  name: "John",
  age: 30
};
key = prompt("What do you want to know about the user?", "name");
// access by variable
alert( user[key] ); // John (if enter "name")


user = {
  name: "John",
  age: 30
};
key = prompt("What do you want to know about the user?", "name");
alert( user.key ) // undefined
console.log("--------\n\n\n\n");
