var btn1 = document.getElementById('startButton')
var btn2 = document.getElementById('pauseButton')
var btn3 = document.getElementById('stopButton')
var myTimer = document.getElementById('chronoP')

btn1.paramTps = 0
btn2.paramTps = 0



function startTimer() {

  if (btn2.value == "Pause") {
    console.log("Starting Chrono");
  }

  btn1.style.display = "none"
  btn2.style.display = "block"
  btn3.style.display = "block"

  var startTime = new Date();
  decompte = setInterval(function() {
    var seconds = Math.round((new Date().getTime() - startTime.getTime()) / 1000 + btn1.paramTps);
    var hours = parseInt(seconds / 3600);
    seconds = seconds % 3600;
    var minutes = parseInt(seconds / 60);
    seconds = seconds % 60;
    myTimer.innerHTML = ajouteUnZero(hours) +
      ":" + ajouteUnZero(minutes) +
      ":" + ajouteUnZero(seconds);
    btn2.paramTps += 1;
  }, 1000);
}

function ajouteUnZero(unit) {
  var rslt = unit
  if (rslt < 10) {
    rslt = '0' + rslt
  }
  return rslt
}

function pauseTimer() {

  if (btn2.value == "Pause") {
    console.log("Timer paused");
    clearInterval(decompte)
    btn2.value = "Reprendre"
  } else if (btn2.value == "Reprendre") {
    console.log("Timer resumed");
    startTimer()
    btn2.value = "Pause"
    btn1.paramTps = btn2.paramTps
  }
}

function resetTimer() {

  console.log("Timer reset");

  clearInterval(decompte)

  btn1.paramTps = 0
  btn2.paramTps = 0
  myTimer.innerHTML = "--:--:--"

  btn1.style.display = "block"
  btn2.style.display = "none"
  btn3.style.display = "none"

  decompte = 0
}
