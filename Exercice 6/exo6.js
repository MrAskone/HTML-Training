(function() {
  console.log("loading phase completed");
})();









var timer = 1

var secondesPassees = 0


function startClick()
{

  // function startChrono()
  // {
  //   secondesPassees = setInterval(function(){
  //     console.log(timer++);
  //   }, 1000)
  // }
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

   ajouteUnZero(a)
   {
     if (a.length == 1)
     {
       a.push('0')
     }
     return a
   }

  }, 1000); // fin de function anonyme dans setInterval()

document.getElementById('startButton').style.display = "none"
document.getElementById('pauseButton').style.display = "block"
document.getElementById('stopButton').style.display = "block"

}

function pauseClick()
{
  if(document.getElementById('pauseButton').innerHTML == "Pause")
  {
    document.getElementById('pauseButton').innerHTML = "Reprendre"
  }

  if(document.getElementById('pauseButton').innerHTML === "Reprendre")
  {
    document.getElementById('pauseButton').innerHTML = "Pause"
  }
}

function stopClick()
{
  document.getElementById('startButton').style.display = "block"
  document.getElementById('pauseButton').style.display = "none"
  document.getElementById('stopButton').style.display = "none"
}

function afficheTimer()
{

}
//
// function
// {
//
// }
