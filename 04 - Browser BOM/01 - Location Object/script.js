// Log the entire window location object, which contains information about the current URL
console.log(window.location);


// Log the full URL of the current page
console.log(location.href);


// Log the protocol used by the current page (E.g., http:, https:)
console.log(location.protocol);


// Log the host of the current page (e.g., www.example.com)
console.log(location.hostname);


// Log the port number used by the server (e.g., 80, 443)
// If no port is specified, this will be an empty string
console.log(location.port);


// Log the path name of the current page (e.g., /path/to/page)
console.log(location.pathname);


// Select the div element with the class "div-class"
let div = document.querySelector('.div-class');


// Set the text content of the first child node of the div to the full URL
let p1 = div.childNodes[0];
p1.textContent = location.href;


// Set the text content of the second child node of the div to the protocol
let p2 = div.childNodes[1];
p2.textContent = location.protocol;


// Set the text content of the third child node of the div to the host
let p3 = div.childNodes[2];
p3.textContent = location.hostname;


// Set the text content of the fourth child node of the div to the port
let p4 = div.childNodes[3];
p4.textContent = location.port;


// Set the text content of the fifth child node of the div to the pathname
let p5 = div.childNodes[4];
p5.textContent = location.pathname;


// Select the button element by its ID 'btn'
let button = document.getElementById('btn');


// Add a click event listener to the button
button.addEventListener('click', function() {
    // When the button is clicked, redirect the browser to "https://mdmahfuz307.github.io/To-Do-List-Website/"
    location.assign("https://mdmahfuz307.github.io/To-Do-List-Website/");
});