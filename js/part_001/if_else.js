let age = Number(prompt("Enter your age", [0]))

if (age <= 0) {
    alert("You are not born yet.")
} else if (age < 0 && age <= 12) {
    alert("You are a child.")
} else if (age > 12 && age < 18) {
    alert("You are a teen.")
} else if (age >= 18 && age < 60) {
    alert("You are an adult.")
} else if (age >= 60 && age <= 100) {
    alert("You are a senior citizen.")
} else {
    alert("You are not human.")
}
