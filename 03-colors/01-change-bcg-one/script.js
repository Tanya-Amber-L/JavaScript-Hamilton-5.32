/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const red = document.getElementById("red")
    const green = document.getElementById("green")
    const yellow= document.getElementById("yellow")
    const blue = document.getElementById("blue")
    const background = document.querySelector(".content")

    red.addEventListener("click",redback)
    green.addEventListener("click",greenback)
    yellow.addEventListener("click",yellowback)
    blue.addEventListener("click",blueback)

    function redback() {
        background.style.background ="red"
    }
    function greenback() {
        background.style.background ="green"
    }
    function yellowback() {
        background.style.background ="yellow"
    }
    function blueback() {
        background.style.background ="blue"
    }
   
   

})();
