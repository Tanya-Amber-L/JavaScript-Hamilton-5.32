/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function matchPassword() {  
        const psw1 = document.getElementById("pass-one").value;  
        const psw2 = document.getElementById("pass-two").value;  
        if(psw1 != psw2) {   
            
            document.getElementById("pass-one").setAttribute("class", "error");
            document.getElementById("pass-two").setAttribute("class", "error");
            
        } else {  
             alert("Password created!");
        };  
      });

})();
