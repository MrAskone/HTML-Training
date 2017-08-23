
function choix()
{
  var day = document.getElementsByName("week")
  for (var i = 0; i < day.length; i++)

    if (day[i].checked)
    {
       document.getElementById('choisir').value = day[i].value
       console.log(toto);
    }
}
