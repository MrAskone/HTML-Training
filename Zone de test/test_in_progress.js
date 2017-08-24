// var f2 = function (p){
//  return function(q) {
//  return { somme : q + p, prod : q * p };
//  };
// }
//
// alert(f2(2)(4).somme)
//


// var o = {
//   propriete1 : "valeur1",
//   propriete2 : 2,
//   propriete3 : true,
//   maFonction : function(i){return i+1}
// }
//
//
// for (var t in o) {
//   console.log(t + " # " + o[t]);
// }
//
// console.log(o["propriete1"]);
//
// console.log(o.propriete3);



Array.prototype.chaineEntier = function () {
  var rslt = ""

  for (var t = 0 ; t < this.length ; t++)
  {
    rslt += this[t]
  }
  return rslt
};

var tableau = [2,4,7,8]

var ch = tableau.chaineEntier()
console.log(ch);
