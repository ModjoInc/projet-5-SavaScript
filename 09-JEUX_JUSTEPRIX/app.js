// Juste Prix
let message = " ";
let essai = 0;
let minValeur = 20;
let maxValeur = 80;
let diffValeur = maxValeur - minValeur;

let nombreAleat = function () {
  let nombre =  Math.round((Math.random() * diffValeur) + minValeur);
  return nombre;
}

let justePrix = nombreAleat();

let test = function(){
  essai++;
  let nombreEntre = prompt ("Entrez un nombre de 20 à 80");
   if ( nombreEntre == justePrix ) {
     alert ("C'est gagné! Tu as trouvé en " + essai + " essais");
   } else if ( nombreEntre > justePrix) {
      confirm ("C'est moins...");
     test();
   } else {
      confirm ("C'est plus...");
     test();
   }
}
test();
