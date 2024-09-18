# DOM Traversing and Manipulating

**DOM Traversing and Manipulating** involves navigating through the DOM (Document Object Model) tree to find elements and modify their properties or structure. It allows you to dynamically update content, styles, and structure of a webpage.

### **DOM Traversing Methods**:
- **Parent Nodes:**
  - `.parentNode`: Selects the parent of an element.
  - `.parentElement`: Similar to `.parentNode` but returns `null` if the parent is not an element.
  
- **Child Nodes:**
  - `.children`: Returns all direct child elements.
  - `.firstElementChild`: Selects the first child element.
  - `.lastElementChild`: Selects the last child element.
  
- **Sibling Nodes:**
  - `.nextElementSibling`: Selects the next sibling element.
  - `.previousElementSibling`: Selects the previous sibling element.

### **DOM Manipulation Methods**:
- **Create Elements:**
  - `document.createElement('tagName')`: Creates a new HTML element.
  
- **Append Elements:**
  - `.appendChild()`: Appends a new child to an element.
  - `.insertBefore()`: Inserts a new child before another child.
  
- **Remove Elements:**
  - `.remove()`: Removes the element.
  - `.removeChild()`: Removes a specified child element.

- **Modify Element Content:**
  - `.innerHTML`: Gets or sets the HTML content of an element.
  - `.textContent`: Gets or sets the text content of an element.
