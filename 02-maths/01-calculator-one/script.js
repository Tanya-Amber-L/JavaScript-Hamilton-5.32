/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var answer 
    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var opone = document.getElementById("op-one").value;
        var optwo = document.getElementById("op-two").value;
        var sum = parseInt(opone) + parseInt(optwo);
        alert(sum);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var opone = document.getElementById("op-one").value;
        var optwo = document.getElementById("op-two").value;
        var sum = parseInt(opone) - parseInt(optwo);
        alert(sum);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var opone = document.getElementById("op-one").value;
        var optwo = document.getElementById("op-two").value;
        var sum = parseInt(opone) * parseInt(optwo);
        alert(sum);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var opone = document.getElementById("op-one").value;
        var optwo = document.getElementById("op-two").value;
        var sum = parseInt(opone) / parseInt(optwo);
        alert(sum);
    });
})();
