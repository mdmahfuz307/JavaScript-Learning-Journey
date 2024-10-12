// Select the button element with the class 'btn'
let button = document.querySelector('.btn');

// Select the paragraph element where the time will be displayed
let paragraph = document.querySelector('.para-class');

// Initial call to display the time  when the button is click
button.addEventListener('click', getTime);

// Function to get the current time and update the paragraph element
function getTime() {
    // Create a new Date object to get the current date and time
    let date = new Date();

    // Get the current hour, minute, and second
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    // Format the minute and second values to ensure two digits
    minute = formatTime(minute);
    second = formatTime(second);

    // Combine the hour, minute, and second into a time string
    let time = hour + ":" + minute + ":" + second;

    // Update the paragraph element's text to display the current time
    paragraph.innerText = time;

    // Call the getTime function every second to update the time display
    setInterval(getTime, 1000);
}


// Function to format the time values, adding a leading zero if needed
function formatTime(value) {
    if (value < 10) {
        value = "0" + value; // Add a leading zero if the value is less than 10
    }
    return value;
}