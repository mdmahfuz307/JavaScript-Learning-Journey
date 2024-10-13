# JSON Path

**JSONPath** is a query language used to extract data from JSON objects, similar to XPath for XML. It allows you to access, modify, and delete specific elements in JSON data.

### Key Operations with JSONPath:
1. **Access Data**
2. **Modify Data**
3. **Delete Data**
4. **Conversion between JSON and JavaScript Objects**

---

### 1. **Accessing Data Using JSONPath**
JSONPath lets you query and access specific elements in a JSON structure. Here’s an example JSON object:

```json
{
  "name": "Niorb",
  "age": 25,
  "isStudent": true,
  "subjects": ["Math", "Science", "History"],
  "address": {
    "city": "Dhaka",
    "country": "Bangladesh"
  }
}
```

Using a JSONPath library (like in JavaScript or online tools), you can extract values:

- `$` refers to the root element.
- `$.name` accesses the `name` key.
- `$.subjects[0]` accesses the first subject in the array.
- `$.address.city` accesses the `city` property in the `address` object.

#### Example in JavaScript:

```js
const json = {
  name: "Nirob",
  age: 25,
  isStudent: true,
  subjects: ["Math", "Science", "History"],
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};

console.log(json.name); // Output: Nirob
console.log(json.subjects[1]); // Output: Science
console.log(json.address.city); // Output: Dhaka
```

### 2. **Modifying JSON Data**
You can directly modify JSON data (which is just a JavaScript object in memory). Simply assign new values to the properties.

#### Example: Modify a property

```js
json.age = 26; // Modifying the age
json.address.city = "Chittagong"; // Changing the city

console.log(json.age); // Output: 26
console.log(json.address.city); // Output: Chittagong
```

#### Example: Add a new property

```js
json.email = "njnirob@example.com";
console.log(json.email); // Output: njnirob@example.com
```

### 3. **Deleting Data in JSON**
You can delete properties from a JSON object using the `delete` keyword in JavaScript.

#### Example: Delete a property

```js
delete json.isStudent; // Deleting the isStudent property
delete json.address.city; // Deleting the city from the address

console.log(json.isStudent); // Output: undefined
console.log(json.address); // Output: { country: "Bangladesh" }
```

### 4. **Conversion Between JSON and JavaScript Objects**
In JavaScript, JSON is treated as an object. However, to convert between JSON strings and JavaScript objects, you use `JSON.parse()` and `JSON.stringify()`.

#### Example: Convert JSON string to JavaScript object

```js
const jsonString = '{"name": "Nirob", "age": 25, "isStudent": true}';
const jsonObject = JSON.parse(jsonString); // Converts string to JavaScript object

console.log(jsonObject.name); // Output: Nirob
console.log(jsonObject.age);  // Output: 25
```

#### Example: Convert JavaScript object to JSON string

```js
const studentObject = {
  name: "Nirob",
  age: 25,
  isStudent: true
};

const jsonString = JSON.stringify(studentObject); // Converts object to JSON string

console.log(jsonString); // Output: '{"name":"Nirob","age":25,"isStudent":true}'
```

---

### Using JSONPath Libraries
For more complex JSONPath queries, you can use JSONPath libraries like [jsonpath-plus](https://github.com/JSONPath-Plus/JSONPath). Here’s an example in Node.js:

#### Installation:
```bash
npm install jsonpath-plus
```

#### Example with JSONPath:

```js
const jp = require('jsonpath');
const data = {
  name: "Raiyan",
  age: 25,
  subjects: ["Math", "Science", "History"],
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};

// Access all subjects
const subjects = jp.query(data, '$.subjects');
console.log(subjects); // Output: [ 'Math', 'Science', 'History' ]

// Access the country in the address object
const country = jp.query(data, '$.address.country');
console.log(country); // Output: ['Bangladesh']
```

### JSONPath Expressions:
- **Root Node**: `$`
- **Dot Notation**: `$.name` (access a property)
- **Bracket Notation**: `$['name']` (access a property using brackets)
- **Array Elements**: `$.subjects[0]` (access array elements)
- **Wildcard**: `$.subjects[*]` (select all items in the array)
- **Recursive Descent**: `$..city` (select all occurrences of a field named `city`)

---

### Summary:
- **Access**: Use dot notation (`json.key`) or JSONPath libraries for more advanced queries.
- **Modify**: Directly assign new values to JSON properties (`json.key = newValue`).
- **Delete**: Use `delete json.key` to remove a key from the JSON object.
- **Convert**: Use `JSON.parse()` to convert a JSON string into a JavaScript object, and `JSON.stringify()` to convert an object into a JSON string.