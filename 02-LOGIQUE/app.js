// exercice 1
let lang = "en";


if (lang === "fr") {
  message_lang = "Bonjour";
}
else if (lang === "es") {
  message_lang = "Hola a todos!";
}
else {
  message_lang = "Hello everybody!";
}

console.log(message_lang);


//exercice 2
let score = 74;

console.log("Le score est de " + score);

if (score >= 90) {
  rang = "A";
}
else if (score < 90 && score >50) {
  rang = "B";
}
else {
  rang = "C";
}
console.log("le rang est de " + rang);

//exercice 3
let mot_sing ="arbre";
let nombre= 1;

if (nombre != 1 && nombre !=0) {
   mot_sing = mot_sing + "s";
}
else {
  mot_sing = mot_sing;
}
console.log("Il y a " + nombre + " " + mot_sing);
