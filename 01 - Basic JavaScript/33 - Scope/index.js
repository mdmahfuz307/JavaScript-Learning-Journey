/*

- Scope determines the accessibility (visibility) of variables.

JavaScript variables have 3 types of scope:
    -> Block scope
    -> Function scope
    -> Global scope

*/


/* 
    ->> Block Scrope

    -ES6 introduced two important new JavaScript keywords: let and const.
    -These two keywords provide Block Scope in JavaScript.
*/
{
    let x = 2;
}  // x can NOT be used here {ai braket er bahire access pawya jbe na let jdi use kri}





/*
    - Variables declared with the var keyword can NOT have block scope.
    - Variables declared inside a { } block can be accessed from outside the block.
*/
{
    var x = 2;
}   // x CAN be used here   {ai braket er bahire o access korte prbo}





/* ->> Function scope
    - JavaScript has function scope: Each function creates a new scope.
    - Variables defined inside a function are not accessible (visible) from outside the function.
    - Variables declared with var, let and const are quite similar when declared inside a function.

*/
function myFunction() {
    var carName = "Volvo";   // Function Scope
}

function myFunction() {
    let carName = "Volvo";   // Function Scope
}

function myFunction() {
    const carName = "Volvo";   // Function Scope
}




/*  ->> Global scope
    - A variable declared outside a function, becomes GLOBAL
*/

let carName = "Volvo";
// code here can use carName

function myFunction() {
// code here can also use carName
}


let x = 2;       // Global scope
var x = 2;       // Global scope
const x = 2;     // Global scope




//  ---->>> Automatically Global
myFunction();

// code here can use carName

function myFunction() {
    carName = "Volvo";  //Ai code e variable er name bole dei ne tai ata automatic vabe Global scope dhore nbe
}
