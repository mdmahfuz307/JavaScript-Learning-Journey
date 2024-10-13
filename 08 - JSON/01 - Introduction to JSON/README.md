# Introduction to JSON

**JSON (JavaScript Object Notation)** is a lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data between a server and a web application as text.

### Key Features of JSON:
1. **Syntax:**
   - JSON data is written in key-value pairs.
   - Keys must be strings, and values can be a string, number, array, object, or boolean.

2. **Data Types:**
   - **String:** Enclosed in double quotes, e.g., `"name": "Nirob"`.
   - **Number:** Can be an integer or float, e.g., `"age": 25`.
   - **Boolean:** True or false, e.g., `"isStudent": true`.
   - **Array:** A collection of values enclosed in square brackets, e.g., `"subjects": ["Math", "Science"]`.
   - **Object:** A collection of key-value pairs enclosed in curly braces, e.g., `"address": { "city": "Dhaka", "country": "Bangladesh" }`.
   - **Null:** Represents an empty value, e.g., `"middleName": null`.

3. **Example:**
   ```json
   {
     "name": "Raiyan",
     "age": 25,
     "isStudent": true,
     "subjects": ["Math", "Science"],
     "address": {
       "city": "Dhaka",
       "country": "Bangladesh"
     }
   }
   ```

### Uses of JSON:
- **Data Exchange:** Used by web applications to communicate with servers.
- **Configuration Files:** Common format for config files (e.g., `package.json` for Node.js).
- **APIs:** Most modern web APIs return JSON data.

### JSON vs. JavaScript Objects:
- JSON is a string format, while JavaScript objects are native to the language.
- JSON can be parsed into JavaScript objects using `JSON.parse()`, and JavaScript objects can be converted to JSON using `JSON.stringify()`.