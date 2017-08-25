var bt1Add = document.getElementById("btnAdd")
var bt2SupLast = document.getElementById("btnRemoveLast")
var bt3SupSelect = document.getElementById("btnRemoveSelected")
var bt4Modif = document.getElementById("btnModifySelected")

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



function editUser(iTab) {
  document.getElementById('nom').value = aOfTablo[iTab]["nom"];
  document.getElementById('prenom').value = aOfTablo[iTab]["prenom"];
  document.getElementById('age').value = aOfTablo[iTab]["age"];
  console.log(iTab);
}

function addUser() {
  var iNewIndice = aOfTablo.length;
  aOfTablo[iNewIndice] = [];
  aOfTablo[iNewIndice]["nom"] = document.getElementById('nom').value;
  aOfTablo[iNewIndice]["prenom"] = document.getElementById('prenom').value;
  aOfTablo[iNewIndice]["age"] = document.getElementById('age').value;

  // Add DUPLICATE CHECK

  buildTableau();
}

function removeLastUser() {
  aOfTablo.pop()
  document.getElementById('mon_tableau').deleteRow(-1)
}

function removeSelected() {

  var lastName = document.getElementById('nom').value
  var firstName = document.getElementById('prenom').value
  var ageOfUser = document.getElementById('age').value;

  for (var i = 0; i < aOfTablo.length; i++)

    if (aOfTablo[i]["nom"] === lastName &&
      aOfTablo[i]["prenom"] === firstName &&
      aOfTablo[i]["age"] === ageOfUser) {
      aOfTablo.splice(i, 1)
      document.getElementById('mon_tableau').deleteRow(i + 1)
      console.log("Row number " + i + " has been deleted")
      i--
    }
}


// function modifySelection() {
// }

bt1Add.addEventListener("click" , addUser, false)
bt2SupLast.addEventListener("click" , removeLastUser, false)
bt3SupSelect.addEventListener("click" , removeSelected, false)
// bt4Modif.addEventListener("click" , addUser, false)
