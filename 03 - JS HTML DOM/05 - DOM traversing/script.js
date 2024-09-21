/*

Downwards
---------
--> querySelector() / querySelectorAll()
--> children

Upwards
--------
--> parentELement

Sideways
---------
--> nextElementSibling,
    previousElementSibling
--> parentElement + children + index

*/

let myDiv = document.getElementById("div-id");
let firstChild = myDiv.firstElementChild; // get the first child element
firstChild.style.color = 'red'; // change text color to re