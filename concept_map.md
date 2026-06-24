# Concept Map

> Each row is a concept paired with its key vocabulary term.
> The **Vocabulary Term** column identifies the specific word or phrase to be wrapped with `<Analogy term="...">` in exercise content.
> Not every term needs an analogy — concrete command terms (`mkdir`, `cd`) rarely do; abstract concepts (`argument`, `promise`, `callback`) almost always do.
>
> **Status:** Chapters reviewed are marked. All others are pending and will be added session by session.

---

## Domain: Environment & Tooling

*Setup — Reviewed ✓*

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Terminal / Command Line | `terminal` | The text-based window where you type commands to control your computer | Setup → Installations for Everyone | Every project |
| Terminal / Command Line | `command line` | Same as terminal; the prompt where commands are typed | Setup → Installations for Everyone | Every project |
| Terminal / Command Line | `directory` | A folder on the computer | Setup → Installations for Everyone | Every project setup |
| File System Commands | `mkdir` | Terminal command to create a new directory | Setup → Installations for Everyone | Every project setup |
| File System Commands | `touch` | Terminal command to create a new file | Setup → Installations for Everyone | Every project setup |
| File System Commands | `cd` | Terminal command to navigate into a directory ("change directory") | Setup → Installations for Everyone | Every project setup |
| File System Commands | `code .` | Terminal command to open the current directory in VS Code | Setup → Installations for Everyone | Every project setup |
| VS Code | `extension` | An add-on that gives VS Code extra capabilities | Setup → Installations for Everyone | — |
| Developer Tools | `Developer Tools` | The browser's built-in panel for inspecting and debugging web pages | Setup → Debugging Shortcuts | Books 2–5 |
| Developer Tools | `console` | The DevTools tab where `console.log()` output appears | Setup → Debugging Shortcuts | All books |
| Developer Tools | `breakpoint` | A marker set in DevTools to pause code execution at a specific line | Setup → Debugging Shortcuts | Book 1 |
| Developer Tools | `Event Listeners panel` | A DevTools panel showing all event listeners attached to a selected element | Book 3 → Brewed Awakenings → Displaying Number of Products Sold | — |
| Developer Tools | `Event Listener Breakpoints` | A DevTools setting that automatically pauses code when specific event types fire | Book 3 → Brewed Awakenings → Displaying Number of Products Sold | — |
| Developer Tools | `Network tab` | A DevTools panel for monitoring HTTP requests made by the browser | Book 4 → Fox y Dog → First We "Fetch" | Books 4–5 |
| Developer Tools | `API client` | A standalone tool for sending HTTP requests to and inspecting API responses outside the browser (e.g., Thunder Client, Postman) | Book 4 → Advanced: Holiday Road | — |

---

## Domain: JavaScript Fundamentals

*Book 1 → Queen Bee — Reviewed ✓*
*Book 1 → Surf Shop — Reviewed ✓*
*Book 1 → Björn — Reviewed ✓*
*Book 2 → Dynamite Duo — Pending*
*Book 2 → Movie Majesty — Reviewed ✓*
*Book 2 → Martin's Aquarium — Reviewed ✓*
*Book 3 → DeShawn's Dog Walking — Reviewed ✓*
*Book 3 → Shipping Ship Ships — Reviewed ✓*
*Book 3 → Brewed Awakenings — Reviewed ✓*
*Book 4 → Fox y Dog — Reviewed ✓*
*Book 4 → Indiana Jeans — Reviewed ✓*
*Book 4 → Kneel Diamonds — Reviewed ✓*
*Books 4–5 (remaining) — Pending*

### Variables & Data Types

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Variable Declaration | `variable` | A named container that holds a value | Book 1 → Queen Bee → Introduction to Functions | All books |
| Variable Declaration | `declare` / `declaration` | Creating a variable using `let` or `const` | Book 1 → Queen Bee → Introduction to Functions | All books |
| Variable Declaration | `assign` / `assignment` | Giving a variable a value | Book 1 → Queen Bee → Introduction to Functions | All books |
| Variable Declaration | `let` | A keyword for declaring a variable that can be reassigned | Book 1 → Surf Shop → Constant Tide | All books |
| Variable Declaration | `const` | A keyword for declaring a variable that cannot be reassigned | Book 1 → Surf Shop → Constant Tide | All books |
| Variable Declaration | `reassign` | Changing the value stored in a variable after it was first declared | Book 1 → Surf Shop → Constant Tide | — |
| Data Types | `undefined` | The value JavaScript gives to a variable that has been declared but not yet assigned | Book 1 → Surf Shop → Underwater Undefined | All books |
| Data Types | `NaN` | "Not a Number" — a special value produced when a math operation receives a non-numeric value | Book 1 → Surf Shop → Average Prices | All books |
| Data Types | `string` | A sequence of text characters surrounded by quotes | Book 1 → Queen Bee → Introduction to Functions | All books |
| Data Types | `number` | A numeric value | Book 1 → Queen Bee → Introduction to Functions | All books |
| Data Types | `boolean` | A value that is either `true` or `false` | Book 3 → DeShawn → Adding State to HTML | All books |
| Data Types | `primitive` | A data type stored directly as a simple value (string, number, boolean, null, undefined) | Book 2 → Explorer: Duo → Are you primitive? | — |
| Data Types | `reference type` | A data type (object, array) where the variable stores a pointer to data in memory | Book 2 → Explorer: Duo → Are you primitive? | — |
| Data Types | `pass by value` | When a primitive is copied when assigned to a new variable or passed to a function | Book 2 → Explorer: Duo → Copy me if you can | — |
| Data Types | `pass by reference` | When an object/array shares its memory location rather than being copied | Book 2 → Explorer: Duo → Copy me if you can | — |
| Type Conversion | `parseInt()` | Converts a string to an integer number | Book 4 → Indiana Jeans → Capturing User Choices | Books 4–5 |

### Functions

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Functions | `function` | A reusable, named block of code that performs a specific task | Book 1 → Queen Bee → Introduction to Functions | All books |
| Functions | `function definition` | The code that creates and names a function — it does not run it | Book 1 → Queen Bee → Introduction to Functions | All books |
| Functions | `algorithm` | A step-by-step set of instructions for solving a problem | Book 1 → Queen Bee → Introduction to Functions | All books |
| Functions | `invoke` | To run a function so its code executes | Book 1 → Queen Bee → Her Majesty Function | All books |
| Functions | `invocation` | The act of running a function; a function call | Book 1 → Queen Bee → Her Majesty Function | All books |
| Functions | `parameter` | A named placeholder in a function definition that will receive a value when the function is called | Book 1 → Queen Bee → Her Majesty Function | All books |
| Functions | `argument` | The actual value passed into a function when it is called | Book 1 → Queen Bee → Her Majesty Function | All books |
| Functions | `return` | The value a function sends back to the code that called it | Book 1 → Queen Bee → Her Majesty Function | All books |
| Functions | `return statement` | The line of code that ends a function and sends back its return value | Book 1 → Queen Bee → Her Majesty Function | All books |
| Functions | `callback function` | A function passed as an argument to another function, to be called later | Book 2 → Dynamite Duo → Composing All HTML | Books 2–5 |
| Functions | `arrow function` | A shorter syntax for writing a function: `() => {}` | Book 2 → Dynamite Duo → Composing All HTML | Books 2–5 |
| Functions | `higher-order function` | A function that accepts another function as an argument or returns one | Book 4 → Kneel Diamonds → Building Options with Map | Books 4–5 |

### Debugging

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Debugging | `console.log()` | A function that prints a value to the console for inspection | Book 1 → Queen Bee → Introduction to Functions | All books |
| Debugging | `debugger` | A tool that pauses code execution so you can inspect its state | Book 1 → Queen Bee → Watching Your Code Run | Book 1 |
| Debugging | `debugger` keyword | A JavaScript keyword that triggers a pause in DevTools when code runs | Book 1 → Queen Bee → Watching Your Code Run | — |
| Debugging | `call stack` | A list of all currently running functions, from most recent to the one that started them all | Book 1 → Queen Bee → Watching Your Code Run | — |
| Debugging | `step over` | A debugger action that runs the current line without going inside any function it calls | Book 1 → Queen Bee → Watching Your Code Run | — |
| Debugging | `step into` | A debugger action that enters a called function to step through it line by line | Book 1 → Queen Bee → Watching Your Code Run | — |
| Debugging | `error message` | Text from JavaScript that describes what went wrong and on which line | Book 1 → Queen Bee → Bug Queen | All books |
| Debugging | `stack trace` | The chain of function calls shown in an error that leads to where it occurred | Book 1 → Queen Bee → Bug Queen | All books |
| Debugging | `TypeError` | An error when a value is used in a way that doesn't match its type | Book 1 → Queen Bee → Bug Queen | All books |
| Debugging | `ReferenceError` | An error when code uses a variable name that has not been declared | Book 1 → Queen Bee → Bug Queen | All books |
| Debugging | `SyntaxError` | An error when code violates JavaScript grammar rules | Book 1 → Queen Bee → Bug Queen | All books |

### Objects

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Objects | `object` | A collection of related data stored as key-value pairs | Book 1 → Queen Bee → Queen Colony | All books |
| Objects | `object literal` | Writing an object directly in code using `{}` | Book 1 → Queen Bee → Queen Colony | All books |
| Objects | `property` | A single key-value pair stored inside an object | Book 1 → Queen Bee → Queen Colony | All books |
| Objects | `key` | The name used to look up a value in an object | Book 1 → Queen Bee → Queen Colony | All books |
| Objects | `value` | The data associated with a key in an object | Book 1 → Queen Bee → Queen Colony | All books |
| Objects | `dot notation` | Accessing an object's property with a dot: `object.property` | Book 1 → Queen Bee → Queen Colony | All books |
| Objects | `bracket notation` | Accessing a property using a string key: `object["property"]` | Book 3 → DeShawn → Adding State to HTML | — |
| Objects | `nested object` | An object that contains another object as one of its values | Book 3 → DeShawn → Adding Metadata as State | — |
| Objects | `destructuring` | Extracting values from an object into named variables: `const { key } = obj` | Book 5 → Honey Rae's → Your First Component | Book 5 |

### Arrays

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Arrays | `array` | An ordered list of values | Book 1 → Queen Bee → Queen Colony | All books |
| Arrays | `element` | A single item inside an array | Book 1 → Queen Bee → Queen Colony | All books |
| Arrays | `index` | The position number of an element in an array | Book 1 → Queen Bee → Queen Colony | All books |
| Arrays | `zero-based indexing` | The rule that the first element is at index 0, not 1 | Book 1 → Queen Bee → Queen Colony | — |
| Arrays | `array.length` | The number of elements in an array, accessed via the `.length` property | Book 1 → Surf Shop → Average Prices | All books |
| Arrays | `array of objects` | A list where every item is an object — the most common data pattern | Book 1 → Björn → River Tours | All books |
| Arrays | `iteration` | Repeating an action for each item in a collection | Book 1 → Queen Bee → Iterating the Queens | All books |
| Arrays | `for...of` | A loop that iterates over the elements of an array or other iterable | Book 1 → Queen Bee → Iterating the Queens | Books 2–4 |
| Arrays | `forEach` | An array method that runs a function once for each element | Book 1 → Queen Bee → Iterating the Queens | Books 2–4 |
| Arrays | `push()` | An array method that adds one or more elements to the end of an array | Book 1 → Queen Bee → Paying Tribute | All books |
| Arrays | `nested loop` | A loop written inside another loop — the inner loop completes fully for each iteration of the outer loop | Book 1 → Queen Bee → Show Tribute By Queen | — |
| Arrays | `map` | An array method that transforms each element and returns a new array of the same length | Book 4 → Indiana Jeans → Displaying Submissions with .map() | Books 4–5 |
| Arrays | `filter` | An array method that returns a new array containing only elements that pass a test | Book 2 → Martin's Aquarium → Filtering Fish | Books 2–5 |
| Arrays | `find` | An array method that returns the first element that passes a test | Book 1 → Explorer: Queen Bee → Finding Tribute | Books 3–4 |
| Arrays | `sort()` | An array method that sorts elements in place; pass a comparator function for alphabetical or numeric order | Book 3 → Shipping Ship Ships → Your Learning Goals | Books 3–5 |
| Arrays | `.join()` | An array method that combines all elements into a single string, using the given separator (e.g., `""` to join with nothing) | Book 4 → Indiana Jeans → Displaying Submissions with .map() | Books 4–5 |

### String Methods

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| String Methods | `string method` | A built-in function called on a string value to transform or inspect it: `str.toUpperCase()`, `str.includes()`, etc. | Book 1 → Surf Shop → Sequina's Accounting | All books |
| Object Methods | `structuredClone()` | A built-in function that creates a true deep copy of an object or array, with no shared references | Book 3 → Shipping Ship Ships → Your Learning Goals | Books 3–5 |
| String Methods | `toUpperCase()` | A string method that returns a new string with all characters converted to uppercase | Book 1 → Surf Shop → Sequina's Accounting | — |
| Number Methods | `toLocaleString()` | A number method that formats a number as a locale-aware string — e.g., currency with `{ style: "currency", currency: "USD" }` | Book 4 → Cars 'R Us → Price Quotes | — |

### Modules

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Modules | `module` | A separate JavaScript file that can share code with other files | Book 1 → Surf Shop → Just the Data | All books |
| Modules | `export` | A keyword that makes a value in one file available for import in others | Book 1 → Surf Shop → Just the Data | All books |
| Modules | `import` | A keyword that brings an exported value from another file into the current file | Book 1 → Surf Shop → Just a Function | All books |
| Modules | `data module` | A file dedicated to holding and exporting data | Book 1 → Surf Shop → Just the Data | Books 2–4 |
| Modules | `function module` | A file dedicated to holding and exporting functions | Book 1 → Surf Shop → Just a Function | Books 2–4 |
| Modules | `default export` | A module that exports a single main value without a name | Book 2 → Movie Majesty → Setup ⚠️ | Books 2–5 |
| Modules | `named export` | A module that exports one or more values by name | Book 1 → Surf Shop → Just the Data | Books 2–4 |
| Modules | `dependency diagram` | A visual showing which files import from which other files | Book 1 → Surf Shop → Diagrams: A Visual for Code | Book 1 → Björn → Visualizations for Björn, Book 3 |
| Modules | `sequence diagram` | A diagram showing the sequence of function calls and data exchanges between modules | Book 1 → Surf Shop → Diagrams: A Visual for Code | Book 1 → Björn → Visualizations for Björn, Book 2 → Movie Majesty → Setup |

### Operators

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Operators | `remainder operator` (`%`) | Returns the leftover after dividing two numbers — used to test divisibility | Book 2 → Martin's Aquarium → Filtering Fish | Books 3–5 |
| Operators | `optional chaining` (`?.`) | Accesses an object's property, but returns `undefined` instead of throwing an error if the object is `null` or `undefined` | Book 5 → Honey Rae's → Ticket Assignee | All Book 5 |

### Control Flow

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Control Flow | `conditional` | Code that only runs when a condition is true | Book 1 → Queen Bee → Iterating the Queens | All books |
| Control Flow | `if statement` | A conditional block that executes when its condition is true | Book 1 → Queen Bee → Iterating the Queens | All books |
| Control Flow | `else` | The block of code that runs when the `if` condition is false | Book 1 → Queen Bee → Iterating the Queens | All books |
| Control Flow | `comparison operator` | An operator that compares two values: `===`, `!==`, `<`, `>`, etc. | Book 1 → Queen Bee → Iterating the Queens | All books |
| Control Flow | `ternary operator` | A one-line conditional: `condition ? valueIfTrue : valueIfFalse` | Book 3 → DeShawn → Finding the Walker for a Pet | Books 3–5 |
| Control Flow | `logical AND` (`&&`) | Returns true only when both sides are true | Book 3 → DeShawn → Adding State to HTML | Books 3–5 |
| Control Flow | `logical OR` (`||`) | Returns true when at least one side is true | Book 3 → DeShawn → Adding State to HTML | Books 3–5 |

---

## Domain: HTML & CSS

*Book 2 → Dynamite Duo — Pending*
*Book 2 → Movie Majesty — Reviewed ✓*
*Book 2 → Martin's Aquarium — Reviewed ✓*
*Books 2–5 (remaining) — Pending*

### HTML

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| HTML Structure | `HTML element` | A building block of a web page defined by opening and closing tags | Book 2 → Movie Majesty → Setup | Books 2–4 |
| HTML Structure | `attribute` | Extra information added to an HTML element: `id="..."`, `class="..."` | Book 2 → Movie Majesty → Setup | Books 2–4 |
| HTML Structure | `id attribute` | A unique identifier for a single HTML element | Book 2 → Dynamite Duo → Targeting a DOM Element | Books 2–4 |
| HTML Structure | `class attribute` | A label applied to one or more elements for styling or selection | Book 2 → Movie Majesty → Card Styles | Books 2–4 |
| HTML Structure | `data-* attribute` | A custom attribute for storing extra data on an HTML element | Book 3 → DeShawn → Adding State to HTML | Books 3–4 |
| HTML Structure | `template literal` | A JavaScript string using backticks that can embed expressions: `` `${value}` `` | Book 2 → Dynamite Duo → Composing All HTML | Books 2–4 |
| Form Elements | `radio button` | An `<input type="radio">` element that lets a user select one option from a group | Book 4 → Indiana Jeans → Creating a Radio Button Component | Book 4 |
| Form Elements | `dropdown` / `select` | A `<select>` element that shows a list of options for the user to choose from | Book 4 → Cars 'R Us → Dropdown Controls | Book 4 |

### CSS

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| CSS | `CSS selector` | The part of a CSS rule that targets which elements to style | Book 2 → Movie Majesty → Card Styles | Books 2–4 |
| CSS | `box model` | The concept that every element has content, padding, border, and margin | Book 2 → Movie Majesty → Card Styles | — |
| CSS | `Flexbox` | A CSS layout system for arranging items in a row or column | Book 2 → Movie Majesty → Card Styles | Books 2–3 |
| CSS | `CSS Grid` | A CSS layout system for arranging items in rows and columns simultaneously | Book 2 → Movie Majesty → Grid Layout for Movie Cards ⚠️ | — |

---

## Domain: DOM Manipulation

*Book 2 → Dynamite Duo — Pending*
*Book 2 → Movie Majesty — Reviewed ✓*
*Book 2 → Martin's Aquarium — Reviewed ✓*
*Book 3 → DeShawn's Dog Walking — Reviewed ✓*
*Book 3 → Shipping Ship Ships — Reviewed ✓*
*Book 3 → Brewed Awakenings — Reviewed ✓*
*Book 4 → Indiana Jeans — Reviewed ✓*
*Book 4 → Kneel Diamonds — Reviewed ✓*
*Books 2–4 (remaining) — Pending*

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Selecting Elements | `DOM` | The Document Object Model; the browser's live tree structure of the HTML page | Book 2 → Dynamite Duo → Targeting a DOM Element | Books 2–4 |
| Selecting Elements | `querySelector` | Finds the first HTML element matching a CSS selector | Book 2 → Dynamite Duo → Targeting a DOM Element | Books 2–4 |
| Selecting Elements | `querySelectorAll` | Finds all HTML elements matching a CSS selector | Book 2 → Dynamite Duo → Targeting a DOM Element | — |
| Selecting Elements | `getElementById` | Finds a single HTML element by its `id` attribute | Book 2 → Movie Majesty → Displaying Movies in the Browser | Books 2–3 |
| Updating the DOM | `innerHTML` | Gets or sets the HTML content inside an element | Book 2 → Dynamite Duo → Dynamically Adding HTML to the DOM | Books 2–4 |
| Updating the DOM | `render` | The act of putting HTML into the DOM so it appears on the page | Book 2 → Movie Majesty → Displaying Movies in the Browser | Books 2–4 |
| Events | `event` | Something that happens in the browser that code can respond to | Book 3 → DeShawn → Using State for an Interactive Experience | Books 3–4 |
| Events | `event listener` | A function registered to run when a specific event occurs | Book 3 → DeShawn → Using State for an Interactive Experience | Books 3–4 |
| Events | `event handler` | The function that runs when an event fires | Book 3 → DeShawn → Using State for an Interactive Experience | Books 3–4 |
| Events | `event object` | The data object passed to a handler describing what happened | Book 3 → DeShawn → Using State for an Interactive Experience | Books 3–4 |
| Events | `event.target` | The specific element that triggered the event | Book 3 → DeShawn → Adding State to HTML | Books 3–4 |
| Events | `event.target.value` | The current value of a form input when an event fires | Book 4 → Indiana Jeans → Capturing User Choices | Book 4 |
| Events | `event.target.dataset` | The collection of `data-*` attribute values on the element that triggered the event | Book 3 → DeShawn → Adding State to HTML | Books 3–4 |
| Events | `event bubbling` | The way events travel upward through parent elements after firing | Book 3 → DeShawn → Adding State to HTML | — |
| Events | `event delegation` | Attaching a listener to a parent to catch events from its children | Book 3 → DeShawn → Adding State to HTML | Books 3–4 |
| Events | `click event` | An event that fires when an element is clicked | Book 3 → DeShawn → Using State for an Interactive Experience | Books 3–4 |
| Browser Dialog | `alert()` | A browser function that shows a popup message box | Book 3 → DeShawn → Using State for an Interactive Experience | Book 3 → Brewed Awakenings |
| Events | `change event` | An event that fires when a form input's value changes | Book 4 → Indiana Jeans → Capturing User Choices | Book 4 |
| Events | `custom event` | A programmer-defined event that can be dispatched and listened for | Book 4 → Indiana Jeans → Reacting to State Changes | Book 4 |

---

## Domain: Data Modeling

*Book 3 → DeShawn's Dog Walking — Reviewed ✓*
*Book 3 → Shipping Ship Ships — Reviewed ✓*
*Book 3 → Brewed Awakenings — Reviewed ✓*
*Book 4 → Indiana Jeans — Reviewed ✓*
*Book 4 → Kneel Diamonds — Reviewed ✓*
*Book 4 → Cars 'R Us — Reviewed ✓*
*Book 4 → Pioneer Projects — Reviewed ✓*
*Book 4 → Advanced Projects — Reviewed ✓*
*Books 3–5 (remaining) — Pending*

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| ERD | `ERD` | Entity Relationship Diagram — a visual model of data and how it connects | Book 3 → DeShawn → Visualizing Data and Relationships | Books 3–4 |
| ERD | `entity` | A "thing" the application tracks data about (person, product, order, etc.) | Book 3 → DeShawn → Visualizing Data and Relationships | Books 3–4 |
| ERD | `primary key` | A unique identifier field (usually `id`) that identifies each record | Book 3 → DeShawn → Visualizing Data and Relationships | Books 3–4 |
| ERD | `foreign key` | A field that stores another entity's `id` to create a link between them | Book 3 → DeShawn → Adding Foreign Keys to State | Books 3–4 |
| ERD | `one-to-many relationship` | One record in entity A can relate to many records in entity B | Book 3 → DeShawn → Adding Foreign Keys to State | Books 3–4 |
| ERD | `many-to-many relationship` | Records in both entities can relate to many records in the other | Book 3 → Shipping Ship Ships → Your Learning Goals | Books 3–4 |
| ERD | `join table` | An intersection table that stores the relationships between two entities in a many-to-many relationship | Book 3 → Brewed Awakenings → Expand the Business | Books 3–4 |
| ERD | `normalization` | The process of restructuring a database to reduce repeated data, typically by extracting repeated values into their own table | Book 4 → Pioneer: Bouquet → Normalization Challenge | — |
| State | `state` | The current data an application holds that can change over time | Book 3 → DeShawn → Adding State to HTML | Books 3–5 |
| State | `metadata` | Data that describes other data — used in `data-*` attributes to indicate what type of element something is | Book 3 → DeShawn → Adding Metadata as State | Books 3–4 |
| State | `transient state` | Temporary state that lives only in the browser and is not saved | Book 4 → Indiana Jeans → Capturing User Choices | Book 4 |
| State | `permanent state` | State that is saved to a database and persists between sessions | Book 4 → Indiana Jeans → Saving Survey Submissions | Books 4–5 |
| JSON | `JSON` | JavaScript Object Notation — a text format for transmitting data as objects and arrays | Book 4 → Fox y Dog → Introduction to APIs | Books 4–5 |
| JSON | `JSON-Server` | A tool that creates a local REST API from a JSON file | Book 4 → Indiana Jeans → Your own API with JSON-Server | Book 4 |
| JSON | `JSON.parse()` | Converts a JSON string into a JavaScript value (e.g., `"true"` → `true`) | Book 4 → Indiana Jeans → Capturing User Choices | Books 4–5 |
| JSON | `JSON.stringify()` | Converts a JavaScript object or array into a JSON string for sending to a server | Book 4 → Indiana Jeans → Saving Survey Submissions | Books 4–5 |
| State | `setter function` | A function that updates exactly one property of the transient state object, keeping state changes controlled and explicit | Book 4 → Indiana Jeans → Capturing User Choices | Book 4 |

---

## Domain: Async JavaScript & APIs

*Book 4 → Fox y Dog — Reviewed ✓*
*Book 4 → Indiana Jeans — Reviewed ✓*
*Book 4 → Kneel Diamonds — Reviewed ✓*
*Book 4 → Cars 'R Us — Reviewed ✓*
*Book 4 → Pioneer Projects — Reviewed ✓*
*Book 4 → Advanced Projects — Reviewed ✓*

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| HTTP | `HTTP` | The protocol for sending requests and receiving responses between browsers and servers | Book 4 → Fox y Dog → Introduction to APIs | Books 4–5 |
| HTTP | `API` | Application Programming Interface — a service that exposes data or actions over URLs | Book 4 → Fox y Dog → Introduction to APIs | Books 4–5 |
| HTTP | `request` | A message sent from the browser to a server asking for data or an action | Book 4 → Fox y Dog → Introduction to APIs | Books 4–5 |
| HTTP | `response` | The data the server sends back after receiving a request | Book 4 → Fox y Dog → Introduction to APIs | Books 4–5 |
| HTTP | `endpoint` | A specific URL that an API exposes for a particular kind of request | Book 4 → Fox y Dog → Introduction to APIs | Books 4–5 |
| HTTP | `client` | The application (usually a browser) that sends requests to a server | Book 4 → Fox y Dog → Introduction to APIs | Books 4–5 |
| HTTP | `server` | A computer that receives requests and sends back responses | Book 4 → Fox y Dog → Introduction to APIs | Books 4–5 |
| HTTP | `status code` | A number in the HTTP response indicating success (200), not found (404), or server error (500) | Book 4 → Fox y Dog → Introduction to APIs | Books 4–5 |
| HTTP | `GET` | An HTTP method for retrieving data from an API | Book 4 → Fox y Dog → First We "Fetch" | Books 4–5 |
| HTTP | `POST` | An HTTP method for sending new data to an API to be saved | Book 4 → Indiana Jeans → Your own API with JSON-Server | Books 4–5 |
| HTTP | `request body` | Data sent to the server in a POST request, typically serialized as a JSON string | Book 4 → Indiana Jeans → Your own API with JSON-Server | Books 4–5 |
| HTTP | `query parameter` | A key-value pair appended to a URL after `?` to filter or expand a response (e.g., `?_expand=socioLocation`) | Book 4 → Indiana Jeans → Displaying Submissions with .map() | Books 4–5 |
| HTTP | `_expand` | A JSON Server query parameter that tells the server to expand a foreign key field into its full related object (e.g., `?_expand=metal` adds the matched metal object to each order) | Book 4 → Kneel Diamonds → Displaying Prices for Orders | — |
| HTTP | `_embed` | A JSON Server query parameter that embeds a related array of child records into the parent object (e.g., `?_embed=employeeTickets` adds matching tickets to each employee) | Book 5 → Honey Rae's → Customer Details | — |
| HTTP | `third-party API` | A publicly available API provided by an external service (not your own JSON-Server) that returns real-world data | Book 4 → Advanced: Holiday Road | Book 5 |
| HTTP | `PUT` / `PATCH` | HTTP methods for updating existing data on an API | Book 5 → Honey Rae's → Employee Edit | Book 5 |
| HTTP | `DELETE` | An HTTP method for removing data from an API | Book 5 → Chuckle Checklist → Rejected Chuckles | Book 5 |
| Fetch & Promises | `fetch()` | The browser function for making HTTP requests | Book 4 → Fox y Dog → First We "Fetch" | Books 4–5 |
| Fetch & Promises | `Promise` | An object representing a value that will be available in the future | Book 4 → Fox y Dog → "Then" We Display | Books 4–5 |
| Fetch & Promises | `.then()` | A Promise method that runs a function when the Promise resolves successfully | Book 4 → Fox y Dog → "Then" We Display | Books 4–5 |
| Fetch & Promises | `.json()` | A method that parses an HTTP response body as JSON | Book 4 → Fox y Dog → "Then" We Display | Books 4–5 |
| Async/Await | `asynchronous` | Code that starts a task but continues running other code before the task finishes | Book 4 → Fox y Dog → Awaiting Data | Books 4–5 |
| Async/Await | `synchronous` | Code that runs one statement at a time, waiting for each to complete | Book 4 → Fox y Dog → Awaiting Data | — |
| Async/Await | `async function` | A function that returns a Promise and can use the `await` keyword | Book 4 → Fox y Dog → Awaiting Data | Books 4–5 |
| Async/Await | `await` | A keyword that pauses an async function until the awaited Promise resolves | Book 4 → Fox y Dog → Awaiting Data | Books 4–5 |
| Async/Await | `try / catch` | A structure for handling errors that may occur in async code | Book 4 → Fox y Dog → Awaiting Data | — |
| Fetch & Promises | `Promise.all()` | A method that takes an array of Promises and resolves when all of them complete, returning an array of results | Book 4 → Pioneer: Honest Abe → Final Challenge | Book 5 |

---

## Domain: Component Architecture (Vanilla JS)

*Book 2 → Dynamite Duo — Pending*
*Book 2 → Movie Majesty — Reviewed ✓*
*Book 2 → Martin's Aquarium — Reviewed ✓*
*Book 3 → DeShawn's Dog Walking — Reviewed ✓*
*Book 3 → Shipping Ship Ships — Reviewed ✓*
*Book 3 → Brewed Awakenings — Reviewed ✓*
*Book 4 → Indiana Jeans — Reviewed ✓*
*Book 4 → Kneel Diamonds — Reviewed ✓*
*Books 3–4 (remaining) — Pending*

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Signal Flow | `serialization` | Converting a data object into another format (e.g., a JavaScript object → an HTML string) | Book 2 → Movie Majesty → Converting Movie Data to HTML | Books 2–4 |
| Signal Flow | `component` | A function that generates and returns an HTML string for a piece of the UI | Book 2 → Dynamite Duo → Composing All HTML | Books 2–4 |
| Signal Flow | `render` | A function that places generated HTML into the DOM | Book 2 → Movie Majesty → Displaying Movies in the Browser | Books 2–4 |
| Signal Flow | `signal flow` | The sequence: get data → generate HTML → render to DOM | Book 2 → Dynamite Duo → Review of Signal Flow | Books 2–4 |
| Signal Flow | `main algorithm` | The entry-point function that calls all other functions in the correct order | Book 2 → Movie Majesty → The Main Algorithm | Books 2–4 |
| Signal Flow | `dependency graph` | A diagram showing which modules depend on which other modules | Book 3 → Shipping Ship Ships → Designing Dependencies | — |

---

## Domain: React

*Book 5 → Honey Rae's Repair Shop — Reviewed ✓*
*Book 5 → Chuckle Checklist — Reviewed ✓*
*Book 5 → Learning Moments — Reviewed ✓*

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| React Fundamentals | `React` | A JavaScript library for building component-based user interfaces | Book 5 → Honey Rae's → Getting Started with React | All Book 5 |
| React Fundamentals | `JSX` | A syntax extension that lets you write HTML-like code inside JavaScript | Book 5 → Honey Rae's → Your First Component | All Book 5 |
| React Fundamentals | `component` | A React function that returns JSX describing a piece of the UI | Book 5 → Honey Rae's → Your First Component | All Book 5 |
| React Fundamentals | `Fragment` | `<>...</>` syntax that groups elements without adding an extra DOM node | Book 5 → Honey Rae's → Your First Component | All Book 5 |
| React Fundamentals | `props` | Data passed from a parent component to a child component | Book 5 → Honey Rae's → Ticket Assignee | All Book 5 |
| React Fundamentals | `prop drilling` | Passing props through multiple component layers to reach a deeply nested child | Book 5 → Honey Rae's → Claim vs Close | — |
| React Fundamentals | `controlled input` | An input whose `value` attribute is tied to state, so the displayed value always matches the current state and can be reset by updating state | Book 5 → Chuckle Checklist → New Chuckles | Book 5 |
| React Fundamentals | `re-render` | When React automatically updates the UI because state has changed | Book 5 → Honey Rae's → Your First Component | All Book 5 |
| React Fundamentals | `key prop` | A required prop on each element in a `.map()` list that helps React track which items changed | Book 5 → Honey Rae's → List All Tickets | All Book 5 |
| React Hooks | `hook` | A special React function that lets a component tap into React features | Book 5 → Honey Rae's → Your First Component | All Book 5 |
| React Hooks | `useState` | A hook that declares a state variable and a function to update it | Book 5 → Honey Rae's → Your First Component | All Book 5 |
| React Hooks | `useEffect` | A hook that runs code after the component renders | Book 5 → Honey Rae's → List All Tickets | All Book 5 |
| React Hooks | `initial render` | The first time a component renders; state variables hold their initial values at this point | Book 5 → Honey Rae's → List All Tickets | All Book 5 |
| React Hooks | `dependency array` | The list passed to `useEffect` that controls when it re-runs | Book 5 → Honey Rae's → List All Tickets | All Book 5 |
| React Hooks | `useCallback` | A hook that memoizes a function so it is not recreated on every render | — ⚠️ | — |
| React Router | `client-side routing` | Navigation that happens in the browser without requesting a new page from the server | Book 5 → Honey Rae's → Intro to Routes | All Book 5 |
| React Router | `BrowserRouter` | A react-router-dom component that wraps the app to keep UI in sync with the browser URL | Book 5 → Honey Rae's → Intro to Routes | All Book 5 |
| React Router | `route` | A mapping between a URL path and a React component | Book 5 → Honey Rae's → Intro to Routes | All Book 5 |
| React Router | `Outlet` | A react-router-dom component that marks where a child route's element should render | Book 5 → Honey Rae's → Intro to Routes | All Book 5 |
| React Router | `Link` | A react-router-dom component that navigates to a new URL when clicked | Book 5 → Honey Rae's → Intro to Routes | All Book 5 |
| React Router | `index route` | The default child route rendered when the parent path matches exactly | Book 5 → Honey Rae's → Customer Details | All Book 5 |
| React Router | `route params` | Placeholders in a URL (prefixed with `:`) that capture dynamic values like IDs | Book 5 → Honey Rae's → Customer Details | All Book 5 |
| React Router | `useNavigate` | A hook for programmatically changing the current route | Book 5 → Honey Rae's → Employee Edit | All Book 5 |
| React Router | `useParams` | A hook for reading dynamic path segments from the current URL | Book 5 → Honey Rae's → Customer Details | All Book 5 |
| CRUD | `CRUD` | Create, Read, Update, Delete — the four fundamental operations on persistent data | Book 5 → Chuckle Checklist → Chuckle Setup | Book 5 |
| CRUD | `Create` | Adding a new record to the database (POST request) | Book 5 → Chuckle Checklist → New Chuckles | Book 5 |
| CRUD | `Read` | Fetching and displaying data from the database (GET request) | Book 5 → Honey Rae's → List All Tickets | Book 5 |
| CRUD | `Update` | Modifying an existing record in the database (PUT or PATCH request) | Book 5 → Chuckle Checklist → Fulfilled Chuckles | Book 5 |
| CRUD | `Delete` | Removing a record from the database (DELETE request) | Book 5 → Chuckle Checklist → Rejected Chuckles | Book 5 |
| Authentication | `localStorage` | A browser API for storing persistent key-value string pairs that survive page reloads, used here to remember who is logged in | Book 5 → Learning Moments → Auth & Routes | — |
| Authentication | `authentication` | The process of verifying that a user is who they claim to be before granting access to protected content | Book 5 → Learning Moments → Auth & Routes | — |
| Authentication | `protected route` | A route wrapped in an auth check that redirects unauthenticated users to the login page | Book 5 → Learning Moments → Auth & Routes | — |

---

## Domain: Professional Skills

| Concept | Vocabulary Term | Definition | First Introduced | Reinforced In |
|---------|----------------|------------|------------------|---------------|
| Soft Skills | `growth mindset` | The belief that abilities can be developed through effort and learning | Setup → Core Professional Skills | All books |
| Soft Skills | `wireframe` | A simple sketch or diagram of a UI before any code is written | Book 2 → Martin's Aquarium → Styling and Layout | Book 5 → Honey Rae's → Repair Wireframe |
| Soft Skills | `MVP` | Minimum Viable Product — the simplest version of a feature that still works | Book 5 → Learning Moments → MVP and Wireframe | — |

---

## Concept Coverage by Chapter

| Chapter | Env | JS Fund | HTML/CSS | DOM | Data | Async | Components | React |
|---------|-----|---------|----------|-----|------|-------|------------|-------|
| Setup | ✓✓✓ | | | | | | | |
| Queen Bee | | ✓✓✓ | | | ✓ | | | |
| Sequina's Surf Shop | | ✓✓ | | | ✓ | | ✓ | |
| Björn's Wilderness Adventures | | ✓✓ | | | ✓✓ | | ✓✓ | |
| Dynamite Duo | | ✓ | ✓✓ | ✓✓ | | | ✓ | |
| Movie Majesty | ✓ | ✓ | ✓✓ | ✓✓ | | | ✓✓ | |
| Martin's Aquarium | | ✓ | ✓✓ | ✓✓ | | | ✓✓ | |
| DeShawn's Dog Walking | | ✓ | | ✓✓ | ✓✓✓ | | ✓ | |
| Shipping Ship Ships | | | | ✓ | ✓✓✓ | | ✓ | |
| Brewed Awakenings | | ✓ | | ✓✓ | ✓✓ | | ✓ | |
| Fox y Dog | | ✓ | | | | ✓✓✓ | | |
| Indiana Jeans | | ✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ | |
| Kneel Diamonds | | ✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ | |
| Cars 'R Us | | ✓ | ✓✓ | ✓✓ | ✓✓ | ✓ | ✓✓ | |
| Pioneer: The Big Company | | | | | ✓✓✓ | ✓ | | |
| Pioneer: Bouquet | | | | | ✓✓✓ | ✓ | | |
| Pioneer: Honest Abe | | | | | ✓✓✓ | ✓✓ | | |
| Advanced: Pen Pal Society | | | | ✓ | ✓✓ | ✓✓ | | |
| Advanced: Giffygram | | | | ✓ | ✓✓ | ✓✓ | ✓✓ | |
| Advanced: Truncheons & Flagons | | | | ✓✓ | ✓✓ | ✓ | ✓✓ | |
| Advanced: Holiday Road | | | | ✓ | ✓✓ | ✓✓✓ | | |
| Group Project: Exomine | | | | ✓ | ✓✓✓ | ✓✓ | ✓✓ | |
| Honey Rae's Repair Shop | | | ✓ | | ✓✓ | ✓✓ | | ✓✓✓ |
| Chuckle Checklist | | | | | ✓ | ✓ | | ✓✓✓ |
| Learning Moments | | | | | ✓✓ | ✓ | | ✓✓✓ |
| Explorer: Deploy API | ✓ | | | | | | | ✓ |
| Explorer: Deploy Client | ✓ | | | | | | | ✓ |
| Capstone Resources | | | | | | | | |
| Group Project: Book 5 | | | | | ✓ | ✓ | | ✓✓ |

*✓ = touched, ✓✓ = core focus, ✓✓✓ = primary emphasis*

---

## Flagged Issues ⚠️

Inconsistencies found during chapter reviews. To be resolved in a dedicated refactor phase.

| Flag | Entry | Issue |
|------|-------|-------|
| ⚠️ | `default export` → Book 2 → Movie Majesty → Setup | Movie Majesty exercises only use named exports (`export const`). No student-facing content introduces `default export` here. Verify where this term is actually first taught, or remove if only present in platform scaffolding. |
| ⚠️ | `CSS Grid` → Book 2 → Movie Majesty → Grid Layout for Movie Cards | Exercise 15 uses Flexbox (`display: flex; flex-wrap: wrap`), not CSS Grid. The exercise title says "Grid Layout" but the implementation is entirely Flexbox. Either re-attribute `CSS Grid` to where it is actually taught, or correct the entry to point to Flexbox. |
| ⚠️ | `filter` → Book 2 → Martin's Aquarium → Filtering Fish | Exercise 20 (Martin's Aquarium) teaches filtering with `for...of` + `if` (manual), not `.filter()`. Exercise 05 (Honey Rae's → List All Tickets) is the first core chapter to use `.filter()` explicitly. Decision pending: update First Introduced to Book 5, or find an earlier mandatory chapter that teaches the array method. |
| ⚠️ | `try / catch` → Book 4 → Fox y Dog → Awaiting Data | Exercise 05 covers `async/await` syntax but never introduces or shows `try/catch`. The "First Introduced" attribution is incorrect. Identify where `try/catch` is actually first taught and update accordingly, or remove the entry if it isn't covered in the curriculum. |
| ⚠️ | `useCallback` → Book 5 → Honey Rae's → Search Tickets | Exercise 07 (Search Tickets) teaches filtering with `.filter()` inside a `useEffect` and discusses the ESLint missing-dependency warning, but never introduces or demonstrates `useCallback`. The "First Introduced" attribution is incorrect. Identify where (or if) `useCallback` is actually taught, or remove the entry. |
