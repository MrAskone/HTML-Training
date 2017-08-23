var btn = document.getElementById("btn1")

function afficheTexte() {

  var userText = document.getElementById("enteredText").value
  if(!isNaN(userText) && userText.length > 0)
  {
    alert("Please enter alphabetical characters")
  }
  else if (userText.length === 0){
    alert("How about entering some text?")
  }
  else if (userText.length < 2){
    alert("Please enter more than one character")
  }
  else
  {
    alert("You have entered: " + userText)
  }
}

btn.addEventListener("click", afficheTexte , false)
