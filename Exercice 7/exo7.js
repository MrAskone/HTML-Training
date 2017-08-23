var btn = document.getElementById("btn1")

function afficheTexte() {

  var userText = document.getElementById("enteredText").value
  if(!isNaN(userText))
  {
    alert("Please enter alphabetical characters")
  }
  else {
    alert("Well done!")
  }
}

btn.addEventListener("click", afficheTexte , false)
