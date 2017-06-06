``` for (var i = 0; i <= 20; i++) {
	if (i%2 == 0) {
       console.log(i + ' est un chiffre pair');
	} else {
       console.log(i + ' est un chiffre impair');
	}
}

// exercice 2

const multi = 9;
for (var i = 0; i <= 10; i++) {
	var result = i * multi;
	//return result;
	console.log( i + "*" + multi + "=" + result);
}

// exercice 3
for (var i = 0; i <= 100; i++) {
	if (i > 90) {
		var grade = "A";
		console.log("Pour " + i + " vous avez obtenu le grade " + grade);
	} else if (i >80 && i<=90) {
		var grade = "B";
		console.log("Pour " + i + " vous avez obtenu le grade " + grade);
	} else if (i >70 && i<=80) {
		var grade = "C";
		console.log("Pour " + i + " vous avez obtenu le grade " + grade);
	} else if (i >65 && i<=70) {
		var grade = "D";
		console.log("Pour " + i + " vous avez obtenu le grade " + grade);
	} else {
		var grade = "F";
		console.log("Pour " + i + " vous avez obtenu le grade " + grade);
	}
}

//exercice 4
  for(var i = 1; i <= 6; i++) {
    console.log(new Array(i).join("*"));
}
