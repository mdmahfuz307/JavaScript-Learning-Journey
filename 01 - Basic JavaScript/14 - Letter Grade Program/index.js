let marks = parseFloat(prompt("Enter marks: "));

if (marks >= 80) {
    document.body.innerHTML = `<h3>A+</h3>`
}

else if (marks >= 70 && marks <= 79) {
    document.body.innerHTML = `<h3>A</h3>`
}

else if (marks >= 60 && marks <= 69) {
    document.body.innerHTML = `<h3>A-</h3>`
}

else if (marks >= 50 && marks <= 59) {
    document.body.innerHTML = `<h3>B</h3>`
}

else if (marks >= 40 && marks <= 49) {
    document.body.innerHTML = `<h3>C</h3>`
}

else if (marks >= 33 && marks <= 39) {
    document.body.innerHTML = `<h3>D</h3>`
}

else {
    document.body.innerHTML = `<h3>F</h3>` 
}