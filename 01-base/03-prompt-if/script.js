/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

<<<<<<< HEAD
  

  var questions = () => {
    const Age = prompt("Please enter your age");
      const Gender = prompt("Please enter your age (male or female) ?");
      const Adress = prompt("In which town do you live in ? ");
      const Rez = confirm('Do you confirm those informations     Age = '+ Age +' Gender= ' + Gender + 'Adresse =' + Adress);

      if (Rez == true ) {
          alert("well bravo");
      }
      else {
          questions () 
      }
  }

  questions() 
=======
  var person = prompt("Do you want some cake", "");
  if (person != null) {
    alert ( "More cake for me then :p !")}
>>>>>>> 8ce3ddbdc15f373f9d4f6f60cdbe31f5509aa08f

})();