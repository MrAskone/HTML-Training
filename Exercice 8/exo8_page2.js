var myURL = decodeURI(location.search.substring(1))

console.log(myURL);

var textJs = document.getElementById("textReceived")
var numberJs = document.getElementById("numberReceived")

myURL = JSON.parse(myURL)

textJs.innerHTML = "You have entered: " + myURL["btText.id"]
numberJs.innerHTML = "Here is your lucky number: " + myURL["btNumber.id"]
