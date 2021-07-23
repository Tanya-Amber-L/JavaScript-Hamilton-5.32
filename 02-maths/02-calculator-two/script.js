/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        
       console.log()

        
         switch(document.querySelector("button.operator")) {
            case addition:
                var firstop = document.getElementById("op-one").value;
                var secondop = document.getElementById("op-two").value;
                answer=  answer =  parseInt(firstop) + parseInt(secondop) ; 
                alert(answer)
              break;
            case substraction:
                var firstop = document.getElementById("op-one").value;
                var secondop = document.getElementById("op-two").value;
                answer=  answer =  parseInt(firstop) - parseInt(secondop) ; 
                alert(answer)
              break;
              case  multiplication:
                var firstop = document.getElementById("op-one").value;
                var secondop = document.getElementById("op-two").value;
                answer=  answer =  parseInt(firstop) * parseInt(secondop) ; 
                alert(answer)
                break;
              case division:
                var firstop = document.getElementById("op-one").value;
                var secondop = document.getElementById("op-two").value;
                answer=  answer =  parseInt(firstop) % parseInt(secondop) ; 
                alert(answer)
                break;
           
          } 
          
        
      
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
