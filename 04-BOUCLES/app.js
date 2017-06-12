//Exercice : Pair et impair
for (var i = 0; i <= 20; i++) {
  if (i%2) {
    console.log(i + " est impair");
  } else {
    console.log(i + " est pair");
  }
}

// exercice 2

const multi = 9;
for (var i = 0; i <= 10; i++) {
	var result = i * multi;
	console.log( i + "*" + multi + "=" + result);
}

// exercice 3
for (var i = 0; i <= 100; i++) {
	if (i > 90) {
		var grade = "A";
	} else if (i >80 && i<=90) {
		var grade = "B";
	} else if (i >70 && i<=80) {
		var grade = "C";
	} else if (i >65 && i<=70) {
		var grade = "D";
	} else {
		var grade = "F";
	}
  console.log("Pour " + i + " vous avez obtenu le grade " + grade);
}

/* autre résolution (de Santi) possible avec fonction
var x=function première
if (true) {

}
var y = function seconde
for var resultat

var = function première
*/

/* autre résolution de Gabi
var grade;
for (i=) {
if a>90
if a>80
if a>70
else
}
*/

//exercice 4
  for(var i = 1; i <= 6; i++) {
    console.log([(i).join(" * ")]);
}

//autre résolution d'exercice:
var star= " ";
for (var i = 0; i <=5; i++) {
 star =  star + " * ";
 console.log(star);
}
