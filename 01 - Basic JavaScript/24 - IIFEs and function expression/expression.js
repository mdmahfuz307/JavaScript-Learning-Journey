// Normal way
function display(message) {
    console.log(message);
}

display("Hello World!");

// Function Expression
let message = function displayMessage(message) {
    console.log(message);
}

message("Hello JavaScript!");