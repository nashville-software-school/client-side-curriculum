## Modular Intro

In this chapter, you are going to start to split up all of the code that exists in your current <analogy>module</analogy> into multiple modules. This has two side-effects for a beginner.

1. It makes the code in each module easier to read.
2. It taxes your limited working memory to know which module holds which code, and how it works together.

## Learning Objectives and Competencies

At the end of this chapter you should be able to...

* Describe what a JavaScript module is, and why developers modularize their code.
* Understand that each module does not automatically have access to code in other modules.
* Understand that for modules to share code, they must <analogy>export</analogy> and <analogy>import</analogy> their code.

## A Data Module

Your current module of code can be broken down into 3 main sections.

1. Where the data is defined at the top of the module.
2. Where the functions are defined that do operations on the data.
3. Where the logic of your application is defined where the functions are invoked to obtain the required output for the business.

You are going to move the data section into its own module. In that module you will export that data. Lastly, in the `averagePrice.js` module, you will import it.

This will not cause any change in functionality. You are simply splitting up your code into multiple modules for greater readability.

### Creating the Module

In the same directory as `averagePrice.js`, create a new file named `data.js`.

```sh
touch data.js
```

Then open `averagePrice.js`, highlight the entire array of data and cut the code _(i.e. Ctrl+X on Windows and Cmd+X on Mac)_.

Open `data.js` and paste the code in there _(i.e. Ctrl+V on Windows and Cmd+V on Mac)_.

### Exporting the Data

Then below the array, add the following line of code. This exports the data and allows other modules to import it for their own use.

```js
module.exports = { inventory }
```

### Importing the Data

The last step is to import the data back into `averagePrice.js` so that it has data to work with. Put this line of code at the top of the module.

```js
const { inventory } = require("./data.js")
```

Now run your logic with the debugger again and verify that everything works as intended.

Then comment out the first line of code _(i.e. the one you just added to the top of the module for importing)_ and run your code with the debugger.

In this case, since you did not import the data, the following error message will appear at the top of the stack trace in the **Debug Console**.

```sh
Uncaught ReferenceError ReferenceError: inventory is not defined
```

## 🏛️ CS Theory Connection

<details class="cs-theory">
    <summary>🏛️ CS Theory: Encapsulation</summary>

By moving `inventory` into its own `data.js` module, you've created a boundary around that data. Other modules don't need to know how the data is structured internally, or even that it lives in a separate file. They just need to know one thing: `require("./data.js")` gives them access to it. That's the core idea behind encapsulation, bundling data behind a clear access point instead of leaving it loose for any code to reach into however it wants.

</details>

<details class="cs-theory">
    <summary>🏛️ CS Theory: Single Responsibility</summary>

Once you're done, `data.js` has exactly one job: hold the inventory. It doesn't calculate averages and it doesn't run any application logic, it just stores data and exports it. That's the Single Responsibility Principle (the "S" in SOLID): a module should have one reason to change. If the inventory data changes shape, you edit `data.js`. If the math changes, you edit a different module entirely.

</details>
