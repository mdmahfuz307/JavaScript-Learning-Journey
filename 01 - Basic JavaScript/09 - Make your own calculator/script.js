var num1 = prompt("Enter first number: ");
num1 = parseInt(num1, 10);

var num2 = prompt("Enter second number: ");
num2 = parseInt(num2, 10);

if (!isNaN (num1) && !isNaN (num2)) {
    var sum = num1 + num2;
    var sub = num1 - num2;  

    document.body.innerHTML = `<h3>Sum of two numbers: ${sum}</h3>`;
    document.body.innerHTML += `<h3>Sub of two numbers: ${sub}</h3>`;
}
else {
    document.body.innerHTML = "<h3>Please enter valid numbers.</h3>";
}