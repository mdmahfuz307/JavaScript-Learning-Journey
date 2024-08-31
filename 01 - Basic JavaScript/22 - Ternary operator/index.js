let num = 0;

// if-else
if (num > 0) {
    console.log(num,"is a Positive Number.")
} else if (num < 0) {
    console.log(num,"is a Negative Number.")
} else {
    console.log(num,"is a Zero.")
}


// ternary operator
let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log(result);