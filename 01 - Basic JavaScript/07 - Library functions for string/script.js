// prompt and length function
let userName = prompt("Enter Your Name : ");
if (userName !== null) {
    let len = userName.length;
    document.write("Length of your name : ",len);
} else {
    document.write("No input provided.")
}

document.write("<br/>");

// concat function
let firstName = "John";
let lastName = "Wick";
let fullName =  firstName.concat(lastName);
document.write("Full name: ",fullName);

document.write("<br/>");

