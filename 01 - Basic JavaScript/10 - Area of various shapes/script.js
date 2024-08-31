// Area of Square
let base = parseFloat(prompt("Enter Base Value: "));
let height = parseFloat(prompt("Enter Height Value: "));

if (!isNaN (base) && !isNaN(height)) {
    let result = base * height;
    document.body.innerHTML = `<h3>Area of Square: ${result} </h3>`;
}
else {
    document.body.innerHTML = `<h3>Invalid inputs</h3>`;
}