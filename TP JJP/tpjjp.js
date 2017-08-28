
var bt1Add = document.getElementById("btnAdd")
var bt2SupSingle = document.getElementById("btnRemoveSingle")
var bt3SupSelect = document.getElementById("btnRemoveSelected")
var bt4Modif = document.getElementById("btnModifySelected")

bt1Add.addEventListener("click", addUser, false)
bt2SupSingle.addEventListener("click", removeSingleUser, false)
bt3SupSelect.addEventListener("click", removeSelected, false)
bt4Modif.addEventListener("click", modifySelection, false)

var tempIndex = -1;

var aOfTablo = []
aOfTablo[0] = []
aOfTablo[0]["nom"] = "Pagan"
aOfTablo[0]["prenom"] = "JiJou"
aOfTablo[0]["age"] = "28"
aOfTablo[1] = []
aOfTablo[1]["nom"] = "Mas"
aOfTablo[1]["prenom"] = "Dominique"
aOfTablo[1]["age"] = "25"

function emptyTableau() {
  document.getElementById('mon_tableau').innerHTML = "";
}

function buildTableau() {
  var sHTML = "";
  sHTML += "<tr>";
  sHTML += "<td>Nom</td>";
  sHTML += "<td>Prénom</td>";
  sHTML += "<td>Age</td>";
  sHTML += "</tr>";
  for (var i = 0; i < aOfTablo.length; i++) {
    sHTML += "<tr onClick=\"editUser(" + i + ")\">";
    sHTML += "<td>" + aOfTablo[i]["nom"] + "</td>";
    sHTML += "<td>" + aOfTablo[i]["prenom"] + "</td>";
    sHTML += "<td>" + aOfTablo[i]["age"] + "</td>";
    sHTML += "</tr>";
  }
  document.getElementById('mon_tableau').innerHTML = sHTML;
}

(function() {
  buildTableau()
}())

function editUser(iTab) {
  document.getElementById('nom').value = aOfTablo[iTab]["nom"];
  document.getElementById('prenom').value = aOfTablo[iTab]["prenom"];
  document.getElementById('age').value = aOfTablo[iTab]["age"];

  colorChange(iTab);

  console.log(iTab);
  tempIndex = iTab
}

function colorChange(indice) {

  var trs = document.querySelectorAll('tr')

  for (var i = 0; i < trs.length; i++) {
    trs[i].classList.remove('selectedLine')
  }
  trs[indice + 1].classList.add('selectedLine')

}

function addUser() {
  var iNewIndice = aOfTablo.length;

  var duplicate

  for (var i = 0; i < iNewIndice; i++)

    aOfTablo[iNewIndice] = [];
  aOfTablo[iNewIndice]["nom"] = document.getElementById('nom').value;
  aOfTablo[iNewIndice]["prenom"] = document.getElementById('prenom').value;
  aOfTablo[iNewIndice]["age"] = document.getElementById('age').value;


  buildTableau();
}

function removeSingleUser() {

  if (tempIndex >= 0) {
    aOfTablo.splice(tempIndex, 1);
    buildTableau();
  }

  tempIndex = -1;

}

function removeSelected() {

  if (tempIndex >= 0) {

    var lastName = document.getElementById('nom').value
    var firstName = document.getElementById('prenom').value
    var ageOfUser = document.getElementById('age').value;

    for (var i = 0; i < aOfTablo.length; i++) {

      if (aOfTablo[i]["nom"] === lastName &&
        aOfTablo[i]["prenom"] === firstName &&
        aOfTablo[i]["age"] === ageOfUser) {

        aOfTablo.splice(i, 1)
        buildTableau();
        console.log("Row number " + i + " has been deleted")
        i--
      }
    }
  }
  tempIndex = -1;

}

function modifySelection() {

  if (tempIndex >= 0) {

    console.log(tempIndex);
    aOfTablo[tempIndex]["nom"] = document.getElementById('nom').value;
    aOfTablo[tempIndex]["prenom"] = document.getElementById('prenom').value;
    aOfTablo[tempIndex]["age"] = document.getElementById('age').value;

  }

  buildTableau();

}
