# Document Object Model

The **Document Object Model (DOM)** represents the structure of an HTML document as a tree of objects. It allows you to interact with and manipulate the HTML and CSS of a webpage using JavaScript. Understanding the DOM is essential for creating dynamic and interactive web pages.

### Key Concepts of the DOM:

1. **DOM Structure:**
   - **Document:** The root node representing the entire HTML document.
   - **Element Nodes:** Represent HTML tags (e.g., `<div>`, `<p>`, `<a>`).
   - **Text Nodes:** Represent the text within elements.
   - **Attribute Nodes:** Represent the attributes of HTML elements (e.g., `class`, `id`).

2. **Accessing DOM Elements:**
   - **`document.getElementById(id)`**: Selects an element by its `id` attribute.
   - **`document.getElementsByClassName(className)`**: Selects elements by their class name.
   - **`document.getElementsByTagName(tagName)`**: Selects elements by their tag name.
   - **`document.querySelector(selector)`**: Selects the first element that matches a CSS selector.
   - **`document.querySelectorAll(selector)`**: Selects all elements that match a CSS selector.

3. **Manipulating DOM Elements:**
   - **Changing Content:** Modify the `innerHTML` or `textContent` of elements.
   - **Changing Attributes:** Use `setAttribute()` and `getAttribute()` to modify attributes.
   - **Changing Styles:** Modify the `style` property or use `classList` to add/remove classes.
   - **Creating/Removing Elements:** Use `createElement()`, `appendChild()`, `removeChild()`, and `replaceChild()`.

4. **Handling Events:**
   - **Adding Event Listeners:** Use `addEventListener()` to respond to events (e.g., `click`, `submit`).
   - **Event Handling Functions:** Define functions to execute when events occur.

### Examples:

#### 1. **Accessing DOM Elements**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Example</title>
</head>
<body>
  <div id="myDiv" class="container">Hello World</div>
  <button id="myButton">Change Text</button>

  <script>
    // Access elements
    const myDiv = document.getElementById('myDiv');
    const myButton = document.getElementById('myButton');

    // Access using querySelector
    const container = document.querySelector('.container');

    console.log(myDiv.textContent); // Output: Hello World
    console.log(container.innerHTML); // Output: Hello World
  </script>
</body>
</html>
```

#### 2. **Manipulating DOM Elements**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Example</title>
</head>
<body>
  <div id="myDiv" class="container">Hello World</div>
  <button id="myButton">Change Text</button>

  <script>
    const myDiv = document.getElementById('myDiv');
    const myButton = document.getElementById('myButton');

    // Change text content
    myButton.addEventListener('click', () => {
      myDiv.textContent = 'Text Changed!';
      myDiv.style.color = 'blue'; // Change style
    });
  </script>
</body>
</html>
```

#### 3. **Creating and Removing Elements**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Example</title>
</head>
<body>
  <div id="container"></div>
  <button id="addElement">Add Element</button>
  <button id="removeElement">Remove Element</button>

  <script>
    const container = document.getElementById('container');
    const addButton = document.getElementById('addElement');
    const removeButton = document.getElementById('removeElement');

    addButton.addEventListener('click', () => {
      const newElement = document.createElement('p');
      newElement.textContent = 'New Element';
      container.appendChild(newElement);
    });

    removeButton.addEventListener('click', () => {
      if (container.lastChild) {
        container.removeChild(container.lastChild);
      }
    });
  </script>
</body>
</html>
```

#### 4. **Event Handling**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DOM Example</title>
</head>
<body>
  <button id="alertButton">Click Me!</button>

  <script>
    const alertButton = document.getElementById('alertButton');

    alertButton.addEventListener('click', () => {
      alert('Button was clicked!');
    });
  </script>
</body>
</html>
```

### Summary:

- **Accessing Elements:** Use methods like `getElementById`, `getElementsByClassName`, `querySelector`, etc.
- **Manipulating Elements:** Change content, attributes, and styles using properties and methods.
- **Handling Events:** Use `addEventListener` to respond to user interactions.
- **Creating/Removing Elements:** Use `createElement`, `appendChild`, and `removeChild` to manage DOM nodes.