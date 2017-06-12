/* declaration fonction
toujours déclarer la fonction via une var:
  var myfunction = function (prenom) {
  var pays= prenom + "belgique";
  return pays;
  }
  console.log(myfunction());
  -stocker la fonction:
    var monPays = myfunction("habib");
  */
  //fonction soustraction
  var soustraction = function(nombre1,nombre2){
    var calcul = nombre1 - nombre2;

    return calcul;
  }
  console.log(soustraction(10,5));

//fonction division
  var division = function(nombre1,nombre2){
    var calcul2 = nombre1 / nombre2;
    return calcul2;
  }
  console.log(division(10,5));

//fonction multiplication
  var multi = function(nombre1,nombre2){
    var calcul3 = nombre1 * nombre2;
    return calcul3;
  }
  console.log(multi(10,5));

//fonction pourcentage
  var pourcent = function (nombre1, nombre2) {
    var calcul4 = (nombre1 * nombre2)/100;
    return calcul4;
  }
console.log(pourcent(100,10));

//fonction qui fait des calculs de vitesse (2 arguments : distance, temps en heure)
var vitesse = function(distance, temps){
  var calcul5 = (distance/temps);
  return calcul5;
}
console.log(vitesse(200,2) + " km/h");
