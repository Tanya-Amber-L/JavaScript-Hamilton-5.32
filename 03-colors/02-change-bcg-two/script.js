/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
   
   const boutton = document.getElementById("run")
   
   const background= document.querySelector(".content")

   
    
    boutton.addEventListener("click",change)
    function change() {
        let input = document.getElementById("color").value
        console.log( input)
        background.style.background =input ;
    }

})();
