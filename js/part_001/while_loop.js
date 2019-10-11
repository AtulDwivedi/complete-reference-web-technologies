alert("Learn while loops")

// simple while loop
var x = 0;
while (x < 10) {
  console.log("Currently x is "+x)
  x = x + 1
}

// while loop with control flow
var y = 0;
while (y < 10) {
  console.log("Currently y is "+ y)

  if(y === 5){
    console.log("y is 5 so breaking")
    break
  }
  y = y + 1
}

// while loop with control flow
var z = 0;
while (z < 10) {
  console.log("Currently z is "+ z)

  if(z === 5){
    console.log("z is 5 so skipping")
    z = z + 1
    continue
  }
  z = z + 1
}

// while loop print only even numbers from 1 to 10
var num = 1;
while (num < 11) {
  if(num % 2 === 0){
    console.log("Number is: "+num)
  }
  num = num + 1
}
