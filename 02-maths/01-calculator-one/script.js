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
        let firstop = document.getElementById("op-one").value;
        let secondop = document.getElementById("op-two").value;
        console.log(firstop)
        console.log(secondop)
        answer =  parseInt(firstop) + parseInt(secondop) ;  
        alert(answer)
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let firstop = document.getElementById("op-one").value;
        let secondop = document.getElementById("op-two").value;
        console.log(firstop)
        console.log(parseInt(firstop))
        answer =  parseInt(firstop) - parseInt(secondop) ; 
        alert(answer)
    });

    document.getElementById("multiplication").addEventListener("click", function() {
      let firstop = document.getElementById("op-one").value;
      let secondop = document.getElementById("op-two").value;
      answer=  answer =  parseInt(firstop) * parseInt(secondop) ; 
      alert(answer)


    });

    document.getElementById("division").addEventListener("click", function() {
        let firstop = document.getElementById("op-one").value;
        let secondop = document.getElementById("op-two").value;
        answer=  answer =  parseInt(firstop) % parseInt(secondop) ; 
        alert(answer)
    });
})();
