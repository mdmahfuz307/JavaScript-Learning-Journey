const studentObject = {  // Define a JavaScript object
  name: "Mahfuz Nirob",
  age: 33
};

const jsonString = JSON.stringify(studentObject);  // Convert the object to a JSON string
console.log(jsonString);  // Log the JSON string

const jsonObject = JSON.parse(jsonString);  // Parse the JSON string back into an object
console.log(jsonObject);  // Log the resulting JavaScript object