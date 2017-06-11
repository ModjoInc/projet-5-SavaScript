//charger le fichier "data.json"
let req = new XMLHttpRequest();
req.open('GET', 'data.json');
req.onload = function() {
  if (req.status >= 200 && req.status < 400) {
    var data = JSON.parse(req.responseText);

    //ajouter un score aléatoire (0 -> 1000) à toutes ces personnes
    let data2 = data.map(function () {
      for (let i = 0; i < data.length; i++) {
        data[i].score = (Math.round(Math.random() * 1000));
      };
    });

    //classer l'odre du tableau selon les scores
     data.sort(function (a,b) {
       return a.score - b.score;
     });

    //mettre personnes dans 3 categories (a > 750, b > 500, c < 500 )
      data.categoryA = [];
      data.categoryB = [];
      data.categoryC = [];
      data.forEach(function(a) {
       if (a.score > 700) {
         data.categoryA.push(a);
       } else if (a.score <= 700 && a.score >500) {
         data.categoryB.push(a);
       } else {
         data.categoryC.push(a);
       }
      });

      //compter combien de personne viennent de "Belgique"
      function belgium(a){
        if (a.Pays === "Belgium") {
          return true;
        } else {
          return false;
        }
      }
      let filtre = data.filter(belgium);
      console.log(filtre);

      //afficher le plus grand score dans la console
      function scoreMax(a) {
       if (a === Math.max(a.score)) {
         return true;
       } else {
         return false;
       }
      }
      

    console.log(data);
    } else {
      // We reached our target server, but it returned an error
    }
  };
req.send();
