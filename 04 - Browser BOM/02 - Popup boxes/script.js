// popup boxes --> alert, confirm, prompt


// Display an alert message asking if the user is 18+
alert("Hey Nirob, Are You 18+ ?");


// Display a confirmation dialog asking the user to confirm their action
let confirmation = confirm("Are you sure?");


// Check the user's response to the confirmation dialog
if (confirmation == true) {
    // If the user clicked "OK", log "Delete." to the console
    console.log("Delete.");
} else {
    // If the user clicked "Cancel", log "Not delete." to the console
    console.log("Not delete.");
}

// Function to display a welcome message
function welcomeMessage() {
    // Prompt the user to enter their name
    let name = prompt("Enter Your Name: ");
    
    // Create an h1 element
    let h1 = document.createElement('h1');
    let text;

    // Check if the name is null or empty
    if (name == null || name == "") {
        // If no name is entered, set the text to "No Name Entered"
        text = "No Name Entered";
    } else {
        // If a name is entered, set the text to "Welcome" followed by the name
        text = "Welcome " + name;
    }

    // Create a text node with the message
    let textNode = document.createTextNode(text);
    
    // Append the text node to the h1 element
    h1.appendChild(textNode);
    
    // Append the h1 element to the body of the document
    document.body.appendChild(h1);
}

// Call the welcomeMessage function to display the message
welcomeMessage();