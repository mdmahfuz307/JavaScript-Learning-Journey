// localStorage vs sessionStorage
// 10mb vs 5mb
// permanent vs session (tab close)

// Storing key-value pairs in sessionStorage
sessionStorage.setItem('user1', 'John');  // Store the first user 'John'
sessionStorage.setItem('user2', 'Jason'); // Store the second user 'Jason'


// Retrieving data from sessionStorage
let user1 = sessionStorage.getItem('user1');  // Get the stored value for 'user1'
console.log(user1);  // Log 'John'


let user2 = sessionStorage.getItem('user2');  // Get the stored value for 'user2'
console.log(user2);  // Log 'Jason'

// Removing specific items from sessionStorage (uncomment to use)
// sessionStorage.removeItem('user1');  // Remove 'user1' from sessionStorage

// Clearing all sessionStorage (uncomment to use)
// sessionStorage.clear();  // Clear all sessionStorage data


// Storing an object in sessionStorage (must be converted to JSON string first)
let user3Data = {
    name: 'Roman',
    age: 42,
    gender: 'Male'
};
sessionStorage.setItem('user3', JSON.stringify(user3Data));  // Convert the object to JSON and store it


// Retrieving and parsing the stored object
let user3 = JSON.parse(sessionStorage.getItem('user3'));  // Parse the JSON string back into an object
console.log(user3);  // Log the 'user3' object (name: Roman, age: 42, gender: Male)