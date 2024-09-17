# Query Selector

The `querySelector` method in JavaScript is used to select elements in the DOM. It allows you to select the first element that matches a CSS selector. If no element matches the selector, it returns `null`. Here's a basic overview of how to use it:

### Syntax:
```javascript
document.querySelector(selector);
```

- **`selector`**: A string representing a CSS selector (such as element type, class, ID, or any combination).

### Examples:

1. **Selecting an element by tag name:**
   ```javascript
   const element = document.querySelector('p'); // Selects the first <p> element
   ```

2. **Selecting an element by class:**
   ```javascript
   const element = document.querySelector('.my-class'); // Selects the first element with the class 'my-class'
   ```

3. **Selecting an element by ID:**
   ```javascript
   const element = document.querySelector('#my-id'); // Selects the element with the ID 'my-id'
   ```

4. **Selecting a nested element:**
   ```javascript
   const element = document.querySelector('div .my-class'); // Selects the first element with class 'my-class' inside a <div>
   ```

5. **Selecting using an attribute:**
   ```javascript
   const element = document.querySelector('input[type="text"]'); // Selects the first <input> element with type="text"
   ```

### Selecting Multiple Elements: 
If you want to select **all** elements that match a selector, use `querySelectorAll` instead. It returns a **NodeList** of all matching elements.

```javascript
const elements = document.querySelectorAll('p'); // Selects all <p> elements
```