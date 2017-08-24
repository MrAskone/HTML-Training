var btNumber = document.getElementById('numberField')
var btText = document.getElementById('textField')
var btnSendData = document.getElementById('btnSend')


function sendTextToJS(){

  if (btNumber.value.length == 0 || btText.value.length == 0)
  {
    alert("Please complete all fields")
    console.log(btNumber.value);
  }

  else if (isNaN(btNumber.value))
  {
    alert("You must only add numerical characters to the number field")
  }

  else if(!isNaN(btText.value))
  {
    alert("Please enter at least one letter in the text field");
  }

  else
  {
    console.log("all good");

    var myFormData = {"btNumber.id" : btNumber.value, "btText.id" : btText.value}
// console.log(JSON.stringify(myFormData));
    var sendDataToUrl = encodeURI(JSON.stringify(myFormData))

    console.log(sendDataToUrl);

    window.location.assign("exo8_page2.html?" + sendDataToUrl)

  }
}

btnSendData.addEventListener("click", sendTextToJS, false)
