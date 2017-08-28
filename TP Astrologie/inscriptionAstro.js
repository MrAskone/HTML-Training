var lastName = document.getElementById('userLastName')
var firstName = document.getElementById('userFirstName')
var dateOfBirth = document.getElementById('userDob')
var pseudo = document.getElementById('userPseudo')
var reset = document.getElementById('effacer')


reset.addEventListener("click", affiche)


function toAscii(chainePetit) {
  var chaine = chainePetit.toUpperCase();
  var valeurNum
  var rslt = 0

  for (var i = 0; i < chaine.length; i++) {
    valeurNum = chaine.charCodeAt(i);
    rslt += valeurNum;
  }
  console.log(rslt);
}

(function() {
  console.log("initialisation terminée");
}())


// function signeAstro() {
//
//
//   var monSigne = "";
//
//   if (mois == 1){
//     monSigne = "Verseau";
//   }
//
//   else if (mois == 2){
//     monSigne = "Poisson";
//   }
//
//   else if (mois == 3){
//     monSigne = "Bélier";
//   }
//
//   else if (mois == 4){
//     monSigne = "Taureau";
//   }
//
//   else if (mois == 5){
//     monSigne = "Gémeaux";
//   }
//
//   else if (mois == 6){
//     monSigne = "Cancer";
//   }
//
//   else if (mois == 7){
//     monSigne = "Lion";
//   }
//
//   else if (mois == 8){
//     monSigne = "Vierge";
//   }
//
//   else if (mois == 9){
//     monSigne = "Balance";
//   }
//
//   else if (mois == 10){
//     monSigne = "Scorpion";
//   }
//
//   else if (mois == 11){
//     monSigne = "Sagittaire";
//   }
//
//   else (mois == 12){
//     monSigne = "Capricorne";
//   }
//
// }

// function verifComplet() {
//   var verif = -1;
//   if( lastName != "" && firstName != "" && dateOfBirth != ""){
//     verif = 1;
//   }
//   else {
//     verif = 0;
//   }
// return verif;
// }

// function monPseudo(){
//
//   pseudo =
//
//
// }







function affiche() {

  console.log(lastName.value);
  console.log(firstName.value);
  var myDate = 0;
  console.log(dateOfBirth.value.substr(5, 2));
  console.log(pseudo.value);
}
