/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

<<<<<<< HEAD
    // your code here
    document.getElementById("run").addEventListener("click", function() {
        const doublons = [...new Set(fruits)]
        document.getElementById("run").addEventListener("click", console.log(doublons));
    });
    

})();
=======

    const run = document.getElementById("run");

    run.addEventListener("click" , () => {
        let unique = [...new Set(fruits)];
        console.log(unique)

    } )  
    
})();
>>>>>>> 8ce3ddbdc15f373f9d4f6f60cdbe31f5509aa08f
