var countries = ["India", "USA", "UK"]
console.log(countries[0])
console.log(countries[1])
console.log(countries[2])
console.log(countries)

countries[1] = "France"
console.log(countries[1])
console.log(countries)

console.log("Array length: "+countries.length)

var person = ["Atul", 23, true, 5.8]
person[4] = "Dwivedi"
console.log(person)



var numbers = ["One", "Two", "Three"]
console.log(numbers)
var lastItem = numbers.pop()
console.log("Last item: " + lastItem)
console.log(numbers)
numbers.push("New_Three")
console.log(numbers)
console.log(numbers[numbers.length - 1])


var matrix = [[1,2,3], [4,5,6], [7,8,9]]
console.log(matrix.length)
console.log(matrix[1][1])

var alphabets = ["A", "B", "C", "D"]
for (var i = 0; i < alphabets.length; i++) {
  console.log(alphabets[i])
}

for (alphabet of alphabets) {
  console.log(alphabet)
}


for (var index in alphabets) {
  console.log(alphabets[index])
}

var languages = ["Java", "Python", "Go", "Kotlin", "JavaScript"]
for (language of languages) {
  alert(language)
}

languages.forEach(alert)

function addAwesome(language) {
  console.log(language + " is awesome!") 
}

languages.forEach(addAwesome)
