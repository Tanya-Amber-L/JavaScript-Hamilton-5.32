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
<<<<<<< HEAD
    document.getElementById("run").addEventListener("click", function() {
      var year =  document.getElementById("year").value;
      console.log(year);
      for (var month=0; month<12;month++)
      {
          var date= new Date(year,month,13); //get the 13th of the month//
          if(date.getDay()==5) //get fridays//
          {
              console.log(date);
              console.log (date.toLocaleString('eng', {month: 'long'})); //traduire le chiffre du mois en nom
              document.write(date.toLocaleString('eng', {month: 'long'})+"<br>"); //afficher les uns en dessous des autres
          }
      }

     
    });
=======
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
>>>>>>> 8ce3ddbdc15f373f9d4f6f60cdbe31f5509aa08f
    

})();
