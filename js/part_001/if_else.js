let age = prompt("Enter your age", [0])

var username = prompt("User name", ["Atul"])
var password = prompt("Password")
var rememberMe = confirm("Do you with to be rememebered?")

var message = "Login failed!"
if(username === password){
  message = "Hi "+username+",\nLogin successfull."
}

if(rememberMe){
  message = message + " You have been remembered."
}

alert(message)
