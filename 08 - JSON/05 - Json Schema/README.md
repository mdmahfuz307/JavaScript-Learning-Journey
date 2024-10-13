# JSON Schema

**JSON Schema** is a standard for defining the structure of JSON data. It allows you to specify the required properties, their data types, and constraints. Using a JSON Schema ensures that the JSON data conforms to a predefined format, which is essential for validation.

### Main Components of JSON Schema:
1. **$schema**: The schema version being used.
2. **title**: A short description of the schema.
3. **type**: The data type (e.g., object, array, string, number, boolean, etc.).
4. **properties**: The fields or attributes of the object, along with their types and constraints.
5. **required**: An array of required fields.
6. **additionalProperties**: Specifies whether additional properties are allowed in the JSON object.

### Basic JSON Schema Example:
Let's define a JSON schema for a student object:

#### JSON Schema:
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Student",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The student's name"
    },
    "age": {
      "type": "integer",
      "minimum": 0,
      "description": "The student's age"
    },
    "isStudent": {
      "type": "boolean",
      "description": "Whether the person is a student"
    },
    "subjects": {
      "type": "array",
      "items": {
        "type": "string"
      },
      "description": "A list of subjects"
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
  "required": ["name", "age", "isStudent"]
}
```

### Explanation:
- **$schema**: Defines the version of the JSON Schema being used (in this case, draft-07).
- **title**: The name of the schema (e.g., "Student").
- **type**: Declares the type of the main JSON structure (in this case, it's an "object").
- **properties**: Defines the attributes within the object, such as `name`, `age`, `isStudent`, `subjects`, and `address`. Each property has its own type, description, and potential constraints (e.g., `minimum` for numeric values).
- **required**: Lists the fields that must be present in the JSON data (in this case, `name`, `age`, and `isStudent` are required).
- **address**: It's an object itself, which contains `city` and `country`, both of which are required.

### Example JSON Data That Validates Against This Schema:

```json
{
  "name": "Nirob",
  "age": 25,
  "isStudent": true,
  "subjects": ["Math", "Science"],
  "address": {
    "city": "Dhaka",
    "country": "Bangladesh"
  }
}
```

This JSON data includes all the required properties (`name`, `age`, `isStudent`) and follows the schema's type constraints, so it would pass validation.

### Adding Constraints in JSON Schema:
1. **Minimum and Maximum for Numbers:**
   ```json
   {
     "type": "integer",
     "minimum": 0,
     "maximum": 100
   }
   ```

2. **String Length Constraints:**
   ```json
   {
     "type": "string",
     "minLength": 3,
     "maxLength": 50
   }
   ```

3. **Regular Expressions for Strings:**
   ```json
   {
     "type": "string",
     "pattern": "^[a-zA-Z]+$"
   }
   ```
   This pattern ensures that only alphabetic characters are allowed.

4. **Enum for Limited Values:**
   ```json
   {
     "type": "string",
     "enum": ["Math", "Science", "History"]
   }
   ```
   This ensures that only one of the listed values can be used.

### JSON Schema for Arrays:
You can specify arrays of elements and impose constraints on the items.

#### Example:
```json
{
  "type": "array",
  "items": {
    "type": "string"
  },
  "minItems": 1,
  "uniqueItems": true
}
```
- **minItems**: The minimum number of items in the array (e.g., 1).
- **uniqueItems**: Ensures that the array doesn’t contain duplicate values.

### Schema with Conditional Logic:
JSON Schema also supports conditional logic to validate data differently based on certain conditions.

#### Example:
```json
{
  "type": "object",
  "properties": {
    "age": { "type": "integer" },
    "driverLicense": { "type": "string" }
  },
  "if": {
    "properties": { "age": { "minimum": 18 } }
  },
  "then": {
    "required": ["driverLicense"]
  },
  "else": {
    "properties": {
      "driverLicense": { "type": "null" }
    }
  }
}
```
This schema ensures that if `age` is 18 or older, the `driverLicense` property is required. Otherwise, `driverLicense` must be `null`.

### Validating JSON Against a Schema:
To validate JSON data against a schema, you can use libraries like **Ajv** in JavaScript, **Python's jsonschema** library, or online tools like [jsonschemavalidator.net](https://jsonschemavalidator.net/).

#### Example with Ajv (JavaScript):
1. Install **Ajv**:
   ```bash
   npm install ajv
   ```

2. Use it to validate the JSON data:
   ```js
   const Ajv = require("ajv");
   const ajv = new Ajv();

   const schema = {
     "$schema": "http://json-schema.org/draft-07/schema#",
     "title": "Student",
     "type": "object",
     "properties": {
       "name": { "type": "string" },
       "age": { "type": "integer", "minimum": 0 },
       "isStudent": { "type": "boolean" }
     },
     "required": ["name", "age", "isStudent"]
   };

   const data = {
     name: "Nirob",
     age: 25,
     isStudent: true
   };

   const validate = ajv.compile(schema);
   const valid = validate(data);

   if (valid) {
     console.log("Valid data!");
   } else {
     console.log("Invalid data:", validate.errors);
   }
   ```

This will print `Valid data!` if the JSON object matches the schema.

---

### Summary:
- **JSON Schema** defines rules and structures for JSON data.
- It allows validation based on data types, required fields, and additional constraints like string lengths or value ranges.
- It is useful for ensuring consistency and validity in APIs, configuration files, or other JSON-based data exchanges.