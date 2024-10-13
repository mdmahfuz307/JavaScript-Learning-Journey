# Creating Json Data

To create JSON data, you simply structure it as a set of key-value pairs, following the JSON syntax. Here's how to create JSON data and some variations:

### 1. **Basic JSON Object**
A simple JSON object with strings, numbers, and booleans.

```json
{
  "name": "Nirob",
  "age": 25,
  "isStudent": true
}
```

### 2. **JSON Object with an Array**
In this example, the JSON object includes an array of strings.

```json
{
  "name": "Nirob",
  "age": 25,
  "isStudent": true,
  "subjects": ["Math", "Science", "History"]
}
```

### 3. **JSON Object with a Nested Object**
Here’s an example where a JSON object contains another object (nested object).

```json
{
  "name": "Nirob",
  "age": 25,
  "isStudent": true,
  "subjects": ["Math", "Science", "History"],
  "address": {
    "city": "Dhaka",
    "country": "Bangladesh"
  }
}
```

### 4. **JSON Array of Objects**
You can also create JSON data where an array contains multiple objects.

```json
{
  "students": [
    {
      "name": "Nirob",
      "age": 25,
      "isStudent": true
    },
    {
      "name": "Shoshi",
      "age": 22,
      "isStudent": false
    }
  ]
}
```

### 5. **Complex JSON Example**
A more complex example combining arrays, objects, and different data types.

```json
{
  "school": "XYZ University",
  "students": [
    {
      "name": "Nirob",
      "age": 25,
      "isStudent": true,
      "subjects": ["Math", "Science"],
      "address": {
        "city": "Dhaka",
        "country": "Bangladesh"
      }
    },
    {
      "name": "Shoshi",
      "age": 22,
      "isStudent": false,
      "subjects": ["History", "Economics"],
      "address": {
        "city": "Chittagong",
        "country": "Bangladesh"
      }
    }
  ],
  "courseDuration": 4
}
```

### Creating JSON in JavaScript
If you're using JavaScript to create JSON data, you can define a JavaScript object and then convert it to JSON using `JSON.stringify()`:

```js
const studentData = {
  name: "Nirob",
  age: 25,
  isStudent: true,
  subjects: ["Math", "Science"],
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};

const jsonData = JSON.stringify(studentData); // Converts JavaScript object to JSON
console.log(jsonData);
```