// IIFEs (Immediately Invokeable Function Expressions)

// Normal way
function display() {
    console.log("Hello World!");
}

display();


// IIFE
(function displayMessage(message) {
    console.log(message);
})("Hello JavaScript!");


// Task 7: create an IIFEs that print sum of 2 numbers
(function sumNumbers(num1, num2) {
    console.log(num1 + num2);
})(2, 2);