var btn1 = document.getElementById('startButton')
var btn2 = document.getElementById('pauseButton')
var btn3 = document.getElementById('stopButton')

var tpsEcoule = 0
var paramTps = 0

// (function() {
//  console.log('hello world')
// }())


function startTimer(){

  var startTime = new Date();
decompte = setInterval(function() {
 // 1- Convertir en secondes :
var seconds = Math.round(
 (new Date().getTime() - startTime.getTime()) / 1000
 + e.target.paramTps); // e représente l'event déclencheur
 // e.target représente l'objet déclencheur
 // ici : bouton start ou bouton pause
 // (cette prop a été ajoutée aux boutons)
 // 2- Extraire les heures:
var hours = parseInt( seconds / 3600 );
 seconds = seconds % 3600; // secondes restantes
 // 3- Extraire les minutes:
var minutes = parseInt( seconds / 60 );
 seconds = seconds % 60; // secondes restantes
 // 4- afficher dans le span
 chronoP.innerHTML = ajouteUnZero(hours)
 +":"+ajouteUnZero(minutes)
 +":"+ajouteUnZero(seconds);
 // 5- incrémenter le nombre de secondes
 tpsEcoule += 1;

}, 1000); // fin de function anonyme dans setInterval()
}

function ajouteUnZero(unit){
  if (unit.length === 1)
  return '0' + unit
}
