//La valeur est égal au chiffre le plus petit dans l'enssemble suivant : 7, 5, -12, 6, 32, 18, 14, -2
let nombreMin = Math.min(7, 5, -12, 6, 32, 18, 14, -2) ;
console.log(nombreMin);

console.log('-------------');

//La valeur est égal au chiffre le plus grand dans l'enssemble suivant : -3, 9, 21, 36, 27, 54, 17, 35
let nombreMax = Math.max(-3, 9, 21, 36, 27, 54, 17, 35) ;
console.log(nombreMax);

console.log('-------------');

//La valeur est égal a l'addition des deux précédentes variables
let result = nombreMax + nombreMin;
console.log(result);

console.log('-------------');

//Faire une variable floatBateau dont la valeur est 10.4
let floatBateau = 10.4;

//Faire une variable couleBateau dont la valeur est floatBateau arrondie vers le bas
let couleBateau = Math.floor(floatBateau);
console.log(couleBateau);

//Faire une variable voleBateau dont la valeur est floatBateau arrondie vers le haut
let voleBateau = Math.ceil(floatBateau);
console.log(voleBateau);

console.log('-------------');

//La valeur aléatoire entre 50 et 100
console.log(Math.floor(Math.random() * 50) + 50);

console.log('-------------');

//La valeur aléatoire peut être seulement 0 ou 1
console.log(Math.round(Math.random()));

console.log('-------------');

//La valeur aléatoire peut aller de 0 à 10 inclus
//let min = 0;
//let max = 10;
//console.log(Math.round(Math.random() * (max - min)) + min);
console.log(Math.round(Math.random() * 10));

console.log('-------------');
