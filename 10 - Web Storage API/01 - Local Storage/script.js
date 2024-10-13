// Web storage API - allows us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// No expiry date: data never gets lost even if you close the browser (This data is Permanent until the user deletes the data)

// localStorage store data as key value pair - string


console.clear(); // Clear the console for a fresh start

// Storing key-value pairs in localStorage
localStorage.setItem("userName", "Jason Holder");  // Store a username in localStorage
localStorage.setItem("password", "12345678");      // Store a password in localStorage


// Retrieving data from localStorage
const userName = localStorage.getItem("userName");  // Get the stored username
console.log(userName);  // Log the retrieved username


const password = localStorage.getItem("password");  // Get the stored password
console.log(password);  // Log the retrieved password


// Removing items from localStorage
localStorage.removeItem("userName");  // Remove the username from localStorage
localStorage.removeItem("password");  // Remove the password from localStorage


// Storing an array of countries in localStorage
const countries = ["Bangladesh", "Pakistan", "Afghanistan"];
localStorage.setItem("countries", JSON.stringify(countries));  // Convert the array to a JSON string before storing


// Retrieving and parsing the stored array
const countriesList = JSON.parse(localStorage.getItem("countries"));  // Parse the JSON string back into an array
console.log(countriesList);  // Log the array of countries