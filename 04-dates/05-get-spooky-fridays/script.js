/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const run = document.getElementById("run"); 
    
   

    run.addEventListener("click",change)
   
   function change() {
     
    const year = document.getElementById("year").value
    
    
    
    function numberOfFridaythe13thsIn(year) {
        var counter = 0;
        for (i = 1; i <= 12; i++) {
            var d = new Date(i + "/13/" + year);                          
            if (d.getDay() == 5) {
                counter++;
            }
        }
        alert(counter);

    }


        numberOfFridaythe13thsIn(year)  
                


   }
    

})();
