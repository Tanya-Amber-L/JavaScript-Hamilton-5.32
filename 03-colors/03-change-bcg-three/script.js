/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    document.getElementById("run").addEventListener("click", function (){
        let r = Math.floor(255*Math.random());
        let g = Math.floor(255*Math.random());
        let b = Math.floor(255*Math.random());
        document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
    })


})();
