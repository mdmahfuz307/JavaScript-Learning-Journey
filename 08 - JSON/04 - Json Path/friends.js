const data = require('./friends_data.json'); // Load the JSON file data
console.log(data);  // Log the entire data object


// Access the properties of the first friend
let name1 = data.friends[0].name;  // Get the name of the first friend
console.log(name1);  // Log the name of the first friend


let age1 = data.friends[0].age;  // Get the age of the first friend
console.log(age1);  // Log the age of the first friend


// Access the properties of the second friend
let name2 = data.friends[1].name;  // Get the name of the second friend
console.log(name2);  // Log the name of the second friend


let age2 = data.friends[1].age;  // Get the age of the second friend
console.log(age2);  // Log the age of the second friend


// Modifying the values (This only changes local variables, not the JSON object itself)
name1 = "Mahfuz Nirob";  // Update the name of the first friend
console.log("New Name For Friend 1:", name1);  // Log the new name for the first friend


age1 = 52;  // Update the age of the first friend
console.log("New Age For Friend 1:", age1);  // Log the new age for the first friend


name2 = "Roman Reigns";  // Update the name of the second friend
console.log("New Name For Friend 2:", name2);  // Log the new name for the second friend


age2 = 38;  // Update the age of the second friend
console.log("New Age For Friend 2:", age2);  // Log the new age for the second friend


// You cannot delete local variables, so using `delete` on these won't work
// To demonstrate deleting properties, you could do this:
delete data.friends[0].name;  // This would remove the name property from the first friend
delete data.friends[0].age;   // This would remove the age property from the first friend


console.log(data.friends[0].name);  // This would now be undefined
console.log(data.friends[0].age);   // This would now be undefined