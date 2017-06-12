/*
//declaration objet
let Dan = {
  age : 17,
  sexe : "femme",
  musiques : ["simply red", "kim,", "lopez"],
  parle : function () {
    console.log("bonjour j'ai " + this.age + " ans");
  }
};
// Boucle For In :

for (let keys in Dan) {
  console.log(keys); //n'affiche que les clés
  console.log(Dan[keys]); // accède aux propriétés des objets
}
Dan.sexe;  // ou
Dan["age"]; // mais pas Dan[age] uniquement dans une boucle
Dan.parle();

//pour connaitre le typage :
typeof

//référence
//let jayce = Dan;
//  jayce.name = "jayce";
  // change le nom de l'ojet de référence.

//l'inverse (exemple du jumeau)
 //avec la création de l'instance
 let jayce = Object.create(Dan);
   jayce.name = "Jayce";
   jayce.age = 10;

jayce.parle();*/

// exercices
// PNJ
let character = {
  name : "Aaricia",
  age : 27,
  items_to_give : [
    "potion de soin",
    "potion de mana",
    "hache",
    "épée"
  ],
  giveItem : function (){
    let hazard = (Math.round(Math.random() * character.items_to_give.length));
    let item =  character.items_to_give[hazard];
    console.log("Le PNJ vous donne une " + item);
  }
}

//inventaire
let epee = {
  title : "final blow",
  physic : 200,
  magic : 270,
  minLevel : 9,
  available : true
}

let hache = {
  title : "the cursed one",
  physic : 10,
  magic : 470,
  minLevel : 50,
  available : true
}

let baton = {
  title : "sonora",
  physic : 2,
  magic : 670,
  minLevel : 50,
  available : true
}

let arc = {
  title : "whistleblower",
  physic : 30,
  magic : 7,
  minLevel : 2,
  available : false
}

let shop = {
  item1 : epee,
  item2 : arc,
  item3 : baton,
  item4 : hache,
  inventaire : function() {
    for (let cle1 in shop) {
       console.log(shop[cle1].title);
      }
    },
  disponibilite : function() {
    for (let cle1 in shop) {
      if (shop[cle1].available) {
       console.log(shop[cle1].title);
        }
      }
    },
  niveau10 : function() {
    for (let cle1 in shop) {
      if (shop[cle1].minLevel >= 10) {
       console.log(shop[cle1].title);
        }
      }
    }
}

//main character
let bow = {
  name : "ygddrasil",
  damage : 50
}

let sceptre = {
  name : "kilnoor",
  damage : 40
}

let mainCharacter = {
  name :"Thorgal",
  level : 50,
  life : 4000,
  weapon : bow,
  attack : function() {
    let damage = this.level * this.weapon.damage;
    console.log(this.name + " attaque avec " + this.weapon.name + ", les dégâts sont de " + damage);
  }
}

let foe = {
  name : "Kriss",
  level : 52,
  life : 4500,
  weapon : sceptre,
  attack : function() {
    let damage = foe.level * foe.weapon.damage;
    console.log(foe.name + " attaque avec " + foe.weapon.name + ", les dégâts sont de " + damage);
  }
}

let opponnentCharacter = Object.create(foe);
let heroCharacter = Object.create(mainCharacter);
console.log(heroCharacter.attack);
heroCharacter.attack = function() {
    let damageHero = heroCharacter.level * heroCharacter.weapon.damage;
    let hpRestant = opponnentCharacter.life - damageHero;
    console.log(heroCharacter.name + " attaque " + opponnentCharacter.name + " avec " + heroCharacter.weapon.name + " et lui inflige " + damageHero + " de dégâts. " + opponnentCharacter.name + " a maintenant " + hpRestant + " de vie. ");
  }

heroCharacter.attack();// dans la fonction dire QUI attaquer

//affichage
console.log(" ***Inventaire*** ");
shop.inventaire();
console.log(" ***Dispo à la vente***");
shop.disponibilite();
console.log(" ***Niveau 10 min***");
shop.niveau10();

console.log("-----------------");
for (let cle in character) {
  console.log(character[cle]);
}
console.log("-----------------");
character.giveItem();

console.log("-----------------");
mainCharacter.attack();
