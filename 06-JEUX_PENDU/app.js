/*
window.prompt();
window.alert();
window.confirm();
*/

let tabPendu = ['B', 'O', 'N', 'J', 'O', 'U', 'R'];
let tabProp = ['', '', '', '', '', '', '_'];

let guessLetter = function(motPropose) {
  if (tabPendu.toString() === tabProp.toString()) {
     let win = alert("Vous avez gagné");
     } else {
       let motProp = prompt ("Entrez votre lettre", motPropose);
       motProp = motProp.toUpperCase();
       for (let i=0; i <= tabPendu.length; i++) {
         if (motProp === tabPendu[i]) {
           // alternative tabProp[i]= motProp;

            tabProp.splice(i,1,motProp);
            console.log(tabProp);
         } else {
           let loose = alert("Bazinga!");
           guessLetter();
         }
       }
    }
  }

/* correction de l'exercice
let essai = [];
let chances = 10;


for let dejaEssaye = true
*/
