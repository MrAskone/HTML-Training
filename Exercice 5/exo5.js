
function cache(id)
{
  document.getElementById(id).style.visibility = "hidden"
  document.getElementById(id).innerHTML = "invisible"
}

function affiche(id)
{
  document.getElementById(id).style.visibility = "visible"
  document.getElementById(id).innerHTML = "Vous avez rendu la boite visible"
}

function textHover(id)
{
  document.getElementById(id).innerHTML = "Abracadabra! Quand on survole le paragraphe, un nouveau texte s'affiche!"
}

function textHoverEnd(id)
{
  document.getElementById(id).innerHTML = "Bye bye!"
}
