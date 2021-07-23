/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

        const today = new Date() ;
        var day 
        var month 
       const daynumber = today.getDate()
       const year = today.getFullYear()
       const minutes = today.getMinutes()
       const hours = today.getHours()
        
         

        switch(today.getDay()) {
            case 0:
                day = "Sunday";
                break;
              case 1:
                day = "Monday";
                break;
              case 2:
                 day = "Tuesday";
                break;
              case 3:
                day = "Wednesday";
                break;
              case 4:
                day = "Thursday";
                break;
              case 5:
                day = "Friday";
                break;
              case 6:
                day = "Saturday";
          }
          switch(today.getDay()) {
            case 0:
                month = "January ";
                break;
              case 1:
                month = "February";
                break;
              case 2:
                 month = "March";
                break;
              case 3:
                month = "April";
                break;
              case 4:
                month = "May";
                break;
              case 5:
                month = "June";
                break;
              case 6:
                month = "July";
                case 7:
                    month = "August";
                    break;
                  case 8:
                     month = "September";
                    break;
                  case 9:
                    month = "October";
                    break;
                  case 10:
                    month = "November";
                    break;
                  case 11:
                    month = "December";
                   
                 
        
          }
          document.getElementById("target").innerHTML = day + " " +daynumber+ " " +month+ " " +year+ ", " + hours + ":"+ minutes; 


    

})();
