// Js Timing events methods
// setTimeOut(), setInterval

// Use setTimeout to delay the execution of the function by 2 seconds
setTimeout(() => {
  console.log("Hello JavaScript!");  // Log a message to the console after 2 seconds
}, 2000);

// Use setTimeout to call the displayMessage function after 4 seconds
setTimeout(displayMessage, 4000);


// Function to display a message in the console
function displayMessage() {
  console.log("Hello Mr. Nirob");  // Log a personalized message to the console
}


// Select the button element with the class 'btn-1' and the paragraph element with the class 'para-class-1'
let button1 = document.querySelector('.btn-1');
let paragraph1 = document.querySelector('.para-class-1');


// Add a click event listener to the button to trigger the popOut function
button1.addEventListener('click', popOut);


// Function to update the paragraph text and clear it after 3 seconds
function popOut() {
  paragraph1.textContent = "Successfully clicked the button.";  // Update the paragraph text

  
  // Use setTimeout to clear the paragraph text after 3 seconds
  setTimeout(() => {
      paragraph1.textContent = "";  // Clear the paragraph text
  }, 3000);
}

// Select the button element with the class 'btn-2' and the paragraph element with the class 'para-class-2'
let button2 = document.querySelector('.btn-2');
let paragraph2 = document.querySelector('.para-class-2');

// Initialize a count variable to keep track of the number of clicks
let count = 1;

// Add a click event listener to the button to trigger the countButton function
button2.addEventListener('click', countButton);

// Function to start a counter that updates the paragraph text every second
function countButton() {
  paragraph2.textContent = count;  // Set the initial count in the paragraph

  // Use setInterval to increment the count and update the paragraph text every second
  setInterval(() => {
      count++;  // Increment the count
      paragraph2.textContent = count;  // Update the paragraph text with the new count
  }, 1000);
}