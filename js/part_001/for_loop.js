alert("Learn for loop")

// simple for loop
for (var i = 0; i < 10; i++) {
  console.log("Currently i is "+i)
}

var word = "ABCDEFGH"
for (var i = 0; i < word.length; i++) {
  console.log(word[i])
}

var repeat = "ABABABABAB"
for (var i = 0; i < repeat.length; i = i + 2) {
  console.log(repeat[i])
}
