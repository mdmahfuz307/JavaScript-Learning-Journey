// Formula -> (20°C × 9/5) + 32

let celsius = parseInt(prompt("Enter Celsius: "));

if (!isNaN (celsius)) {
    let fahrenheit =  (celsius * 9/5) + 32;
    document.body.innerHTML = `<h3>Celsius to Fahrenheit ${fahrenheit}</h3>`;
}
else {
    document.body.innerHTML = `<h3>Invalid inputs</h3>`;
}