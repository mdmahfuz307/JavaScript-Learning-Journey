// toString method it returns thr given number in the from string.
var num1 = 10;
num1 = toString(num1);
console.log(typeof (num1));

// parseFloat method it converts the given string into a floating point number.
var num2 = "10.234";
num2 = parseFloat(num2);
console.log(num2);
console.log(typeof (num2));


// parseInt method it converts the given string into an integer number.
var value = "12";
value = parseInt(value);
console.log(typeof (value));


// toFixed method it returns the string that represents a number with exact digits after a decimal point.
var num3 = 124.456;
newNumber = num3.toFixed(1);
console.log(newNumber);

// toPrecision method
var num4 = 124.456;
console.log(num4.toPrecision(6))

// number method
var newNum = Number("123");
console.log(newNum);