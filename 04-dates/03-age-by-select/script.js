/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const run = document.getElementById("run")
    const active = () =>  {
        const year = document.getElementById("dob-year").value
        const month = document.getElementById("dob-month").value
        const day = document.getElementById("dob-day").value
        const date = new Date(year,month,day);
        const today = new Date() ;
        const ydate = ((((date.getTime()/1000)/60)/60)/24)/365
        const ytoday = ((((today.getTime()/1000)/60)/60)/24)/365
        console.log(ydate)
        console.log(Math.abs(Math.trunc(ydate)))
        console.log(Math.abs(Math.trunc(ytoday)))

        if (Math.trunc(ydate) < 0 ) {
            let answer = Math.abs(Math.trunc(ydate)) + Math.trunc(ytoday)
            alert (" you are " + answer ) 
        }
        else {
            let answer =   Math.trunc(ytoday) - Math.abs(Math.trunc(ydate))
            alert (" you are " + answer ) 
        }

        
    }
    run.addEventListener("click",active)

})();
