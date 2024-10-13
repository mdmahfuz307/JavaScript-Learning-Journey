# JSON Data Validation

**JSON data validation** is the process of ensuring that JSON data conforms to a specific structure or format. This helps to ensure that the data is well-formed, meets expectations, and can be processed properly by the application.

### Key Aspects of JSON Validation:
1. **Well-formed JSON:** 
   The JSON data must be syntactically correct (i.e., it must follow JSON syntax rules, such as using double quotes around keys, commas between key-value pairs, etc.).

2. **Schema validation:** 
   You can define a schema to enforce the structure of your JSON data. This checks that the data conforms to an expected format, including:
   - Required fields
   - Data types (string, number, boolean, etc.)
   - Structure (arrays, objects, etc.)

### 1. **Basic Validation (Well-formed JSON)**
You can validate JSON syntax using online tools like [JSONLint](https://jsonlint.com/), or programmatically with `JSON.parse()` in JavaScript.

#### Example:

```json
{
  "name": "Nirob",
  "age": 25,
  "isStudent": true
}
```

To validate JSON syntax in JavaScript:
```js
const jsonString = '{"name": "Nirob", "age": 25, "isStudent": true}';

try {
  const parsedData = JSON.parse(jsonString);
  console.log("Valid JSON:", parsedData);
} catch (error) {
  console.error("Invalid JSON:", error);
}
```

This checks if the string can be parsed into a valid JSON object.

### 2. **JSON Schema Validation**
To enforce structural and content validation beyond syntax, you can use a JSON schema. JSON schema is a specification for validating JSON data by describing the expected structure, types, and properties.

#### Example JSON Schema:
Here's a schema that validates the structure of a student's data:

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Student",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "integer",
      "minimum": 0
    },
    "isStudent": {
      "type": "boolean"
    },
    "subjects": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "address": {
      "type": "object",
      "properties": {
        "city": {
          "type": "string"
        },
        "country": {
          "type": "string"
        }
      },
      "required": ["city", "country"]
    }
  },
  "required": ["name", "age", "isStudent", "address"]
}
```

This schema requires:
- `name` to be a string
- `age` to be a non-negative integer
- `isStudent` to be a boolean
- `subjects` to be an array of strings
- `address` to be an object with `city` and `country` fields (both strings)
- `name`, `age`, `isStudent`, and `address` are mandatory fields

### 3. **Schema Validation in JavaScript**
You can use libraries like **Ajv** to validate JSON data against a schema in JavaScript.

#### Example using Ajv:
1. First, install the Ajv library:

   ```bash
   npm install ajv
   ```

2. Then, use it in your JavaScript code:

   ```js
   const Ajv = require("ajv");
   const ajv = new Ajv();

   const schema = {
     type: "object",
     properties: {
       name: { type: "string" },
       age: { type: "integer", minimum: 0 },
       isStudent: { type: "boolean" },
       address: {
         type: "object",
         properties: {
           city: { type: "string" },
           country: { type: "string" }
         },
         required: ["city", "country"]
       }
     },
     required: ["name", "age", "isStudent", "address"]
   };

   const data = {
     name: "Nirob",
     age: 25,
     isStudent: true,
     address: { city: "Dhaka", country: "Bangladesh" }
   };

   const validate = ajv.compile(schema);
   const valid = validate(data);

   if (valid) {
     console.log("Valid JSON");
   } else {
     console.log("Invalid JSON:", validate.errors);
   }
   ```

This checks if the `data` object conforms to the defined `schema`. If it doesn’t, `validate.errors` will show the validation errors.

### 4. **Manual Validation in Code**
You can also manually check if a JSON object meets specific conditions without a schema, but this can be tedious for complex data structures.

Example:

```js
function validateStudentData(student) {
  if (typeof student.name !== "string") return "Name must be a string";
  if (typeof student.age !== "number" || student.age < 0) return "Age must be a positive number";
  if (typeof student.isStudent !== "boolean") return "isStudent must be a boolean";
  if (!Array.isArray(student.subjects)) return "Subjects must be an array";
  if (typeof student.address.city !== "string" || typeof student.address.country !== "string")
    return "Address must contain city and country as strings";
  return "Valid JSON";
}

const student = {
  name: "Nirob,
  age: 25,
  isStudent: true,
  subjects: ["Math", "Science"],
  address: { city: "Dhaka", country: "Bangladesh" }
};

console.log(validateStudentData(student));
```

### Summary:
- **Basic validation** ensures JSON syntax is correct.
- **Schema validation** ensures that JSON conforms to a specific structure, including required fields, data types, and constraints.
- Use tools or libraries like **Ajv** to simplify schema validation.