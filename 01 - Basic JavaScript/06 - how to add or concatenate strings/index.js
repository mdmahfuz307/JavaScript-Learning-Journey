
var first_name = "Mahfuz";
var last_name = "Nirob";

// concat with + operator
console.log(first_name + " " + last_name)

// concat with concat method
var full_name = first_name.concat(last_name);
console.log(full_name)

// concat with `${}`
let str1 = "Hello";
let str2 = "World!";
let result = `${str1} ${str2}`
console.log(result);

// join method is only used in array
let arr = ["Hello", "JavaScript!"];
let newArr = arr.join(" ");
console.log(newArr);