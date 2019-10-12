let firstName = prompt("Enter first name")
let lastName = prompt("Enter last name")
let age = Number(prompt("Enter number"))
let city = prompt("Enter city")

var nameCond = null
var ageCond = null
var cityCond = null

if (firstName[0] === lastName[0]) {
    nameCond = true
} else {
    nameCond = false
}

if (age % 2 !== 0) {
    ageCond = true
} else {
    ageCond = false
}

if (city[city.length - 1] === "u") {
    cityCond = true
} else {
    cityCond = false
}

if (nameCond && ageCond && cityCond) {
    console.log("Personalizing the background color.")
    document.body.style.backgroundColor = "#86BBD8";
} else {
    console.log("No Personalization.")
}
