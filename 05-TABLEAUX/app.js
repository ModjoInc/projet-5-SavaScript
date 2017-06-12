/*// les tableaux
var liste = ["pommes", "poires", "prunes"]; // déclaration du tableau

liste.pop(); //retire le dernier élèment;
liste.push("fraises"); // ajoute un élèment en fin de tableau
liste.shift(); //retire un élèment en début de tableau
liste.unshift("banane"); // ajoute un élèment en début de tableau

console.log(liste);*/


/*var nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var j = nombres[i]+1;
for (var i = 0; i < nombres.length; i++) {
  var calcul = j + nombres[i];
console.log(calcul);
}*/
// solution exercice 1
var nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var j = 0;
for (var i = 0; i < nombres.length; i++) {
  j = j + nombres[i];
  console.log(j);
}

//exercice 2
var acteurs = ["Gosling", "Bardem", "Hardy"];
for (var i = 0; i < acteurs.length; i++) {
  if (acteurs[i] === "Hardy") {
    var num1 = acteurs[i];
  } else if (acteurs[i] === "Bardem") {
    var num2 = acteurs[i];
  } else {
    var num3 = acteurs[i];
  }
}
console.log("Le premier est " +  num1);
console.log("Le deuxième est " +  num2);
console.log("Le troisième est " +  num3);

//exercice 3
var my_hero = ["Mario", "Luigi", "Peach"];
var my_hero2 = my_hero.slice();
my_hero2.push("Bowser")
console.log(my_hero);
console.log(my_hero2);

//autre résolution
let marioArray = ['Mario', 'Luigi', 'Peach'];
let bowserArray = [];

for (var i = 0; i < marioArray.length; i++) {
  //bowserArray[i].push(marioArray[i]);
        bowserArray[i] = marioArray[i];
}

bowserArray.push('Bowser');
console.log( marioArray );
console.log( bowserArray );


/* en JS tout est Objet, les fonctions sont des méthodes
POO réussir à abstraire son code pour les utiliser sur des objets...
instanciation: création d'un  objet *new*

*/
