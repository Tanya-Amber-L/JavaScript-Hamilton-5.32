/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

  window.onload = function(){

    let table = document.getElementById("target");
    //aller chercher la cible
    let tableau = document.createElement("table");
    // creer le tableau
    let numbers = 0;
    // valeur des cellules
    tableau.setAttribute("border","1");
    let body = document.createElement("tbody");
    // creer le corps du tableau
    for (let i = 0; i < 10; i++){
        let tr = document.createElement('tr');
        // creer chacune des lignes
        for (let j=0; j<10; j++){
          let td = document.createElement('td');
          td.appendChild(document.createTextNode(((j+1)+(i+numbers))));
          tr.appendChild(td);
          // dans chacune des lignes j'ajoute 10 cellules
          if (j == 9){
            numbers = numbers + 9;
          } // à chaque fois que le nbr de celules atteind 9, il ajoute  9 à numbers 
        }

        body.appendChild(tr);
        //place les <tr> dans le tbody
    }
    tableau.appendChild(body); // met le tbody dans le tableau
    table.appendChild(tableau);// met le tableau dans target
    
  }

})();

