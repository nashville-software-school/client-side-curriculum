# Understanding async/await with Promises

## Introduction to async/await

In the previous chapter, we learned about Promises and how to handle them using the `.then()` method. While `.then()` works well, JavaScript offers a more modern and easier-to-<analogy>read</analogy> way to work with Promises: the `async` and `await` keywords.

Think of `async/await` as syntactic sugar - it's a nicer way to write the same <analogy>Promise</analogy>-based code we've already learned, but in a style that looks more like regular <analogy>synchronous</analogy> code.

## What is async/await?

The `async` and `await` keywords provide a cleaner syntax for working with Promises:

- `async` is used to <analogy>declare</analogy> that a <analogy>function</analogy> returns a <analogy>Promise</analogy> and enables the use of `await` inside it
- `await` is used to pause execution until a <analogy>Promise</analogy> is resolved, and then <analogy>return</analogy> its result

## How async/await Works

Let's break down how `async/await` works:

### 1. The `async` Keyword

When you add the `async` keyword before a <analogy>function</analogy> <analogy>declaration</analogy>, two things happen:
- The <analogy>function</analogy> automatically returns a <analogy>Promise</analogy>
- You can use the `await` keyword inside the <analogy>function</analogy>

```javascript
const myFunction = async () => {
    // Function body
}
```

### 2. The `await` Keyword

The `await` keyword can only be used inside an `async` <analogy>function</analogy>. When you put `await` before a <analogy>Promise</analogy>:
- It pauses the execution of the <analogy>function</analogy> until the <analogy>Promise</analogy> resolves
- It then returns the resolved <analogy>value</analogy> of the <analogy>Promise</analogy>

```javascript
const myFunction = async () => {
    const result = await somePromise();
    // Code here waits until somePromise() resolves
    console.log(result);
}
```

## Using async/await with the Random Dog API

Now let's use `async/await` to fetch and display random dog images from the Dog <analogy>API</analogy>. This will help you see the difference between the `.then()` approach we used with the Fox <analogy>API</analogy> and the `async/await` approach:

Let's define a new <analogy>function</analogy> who's responsibility will be to fetch and display a dog image. We'll begin by having our <analogy>function</analogy> fetch a random dog image from the random dog <analogy>api</analogy>.

```javascript
const displayDogImage = () => {
    fetch("https://random.dog/woof.json")
}
```

Remember that `fetch()` returns a <analogy>Promise</analogy>. We'll use the `await` keyword here to *<analogy>await</analogy>* the <analogy>Promise</analogy> and store the <analogy>response</analogy> in a <analogy>variable</analogy> once it has resolved. 

```javascript
const displayDogImage = () => {
    const response = await fetch("https://random.dog/woof.json")
} 
```

Since we are using the `await` keyword here, we *must* define this <analogy>function</analogy> as `async`

```javascript
const displayDogImage = async () => {
    const response = await fetch("https://random.dog/woof.json")
}
```

We have the <analogy>response</analogy> <analogy>object</analogy>, but we don't have direct access to the data. We need to use the `.json()` method on the <analogy>response</analogy> <analogy>object</analogy> to get the data. Remember, the `.json()` method also returns a <analogy>Promise</analogy> so we will have to <analogy>await</analogy> it as well before we can get the converted data. 

```javascript
const displayDogImage = async () => {
    const response = await fetch("https://random.dog/woof.json")
    const dogData = await response.json()
}
```

Now that we have the dog data, let's add functionality to display the image in the browser.

```javascript
const displayDogImage = async () => {
    const response = await fetch("https://random.dog/woof.json")
    const dogData = await response.json()
    const dogImage = document.querySelector("#dog")
    dogImage.src = dogData.url
}
```

Finally, for our dog button <analogy>click event</analogy>, lets pass this <analogy>function</analogy> as the <analogy>function</analogy> we want to run when the button is clicked.

```javascript
dogButton.addEventListener("click", displayDogImage)
```

## Comparing .then() and async/await

Let's compare how we handle the same task using both approaches:

### Fox API using .then()

```javascript
foxButton.addEventListener("click", () => {
    fetch("https://randomfox.ca/floof/")
        .then((response) => {
            return response.json()
        })
        .then((foxData) => {
            const foxImage = document.querySelector("#fox")
            foxImage.src = foxData.image
        })
})
```

### Dog API using async/await

```javascript
const displayDogImage = async () => {
    const response = await fetch("https://random.dog/woof.json")
    const dogData = await response.json()
    const dogImage = document.querySelector("#dog")
    dogImage.src = dogData.url
}

dogButton.addEventListener("click", displayDogImage)
```

<analogy>Key</analogy> differences:
1. With `async/await`, we mark the <analogy>function</analogy> as `async`
2. Instead of chaining `.then()` calls, we use `await` and <analogy>assign</analogy> the result directly to variables
4. The code reads more like <analogy>synchronous</analogy> code, which is more familiar and easier to understand

## Common Mistakes and Rules to Remember

When working with `async/await`, keep these important rules in mind:

### 1. You can only use `await` inside an `async` function

This won't work:
```javascript
// ❌ Incorrect - await outside of async function
const displayDogImage () => {
    const response = await fetch('https://random.dog/woof.json');
    // ...
}
```

You must make the <analogy>function</analogy> async:
```javascript
// ✅ Correct - await inside async function
const displayDogImage = async () => {
    const response = await fetch('https://random.dog/woof.json');
    // ...
}
```

### 2. Forgetting to await a Promise

If you forget the `await` keyword, you'll be working with the <analogy>Promise</analogy> <analogy>object</analogy> itself, not its resolved <analogy>value</analogy>:

```javascript
// ❌ Incorrect - forgetting to await
const displayDogImage = async () => {
    const response = fetch('https://random.dog/woof.json'); // response is a Promise, not the actual response
    console.log(response); // Promise {<pending>}
}
```

## 📓 Key Concepts to Remember

1. **async**: A keyword that makes a <analogy>function</analogy> <analogy>return</analogy> a <analogy>Promise</analogy> and allows the use of <analogy>await</analogy> inside it
2. **<analogy>await</analogy>**: A keyword that pauses execution until a <analogy>Promise</analogy> resolves and returns its <analogy>value</analogy>
4. **<analogy>Function</analogy> requirement**: Any <analogy>function</analogy> that uses `await` must be declared with the `async` keyword
5. **Promises underneath**: `async/await` is just a different way to write <analogy>Promise</analogy>-based code - Promises are still working behind the scenes

## 📝 What We've Learned

In this chapter, we've:
- Learned what `async/await` is and why it's useful
- Understood how to make functions <analogy>asynchronous</analogy> with the `async` keyword
- Used the `await` keyword to pause execution until Promises resolve
- Compared the `.then()` approach with the `async/await` approach
- Built a working application that fetches and displays a dog image using `async/await`
- Learned common mistakes to avoid when using `async/await`

## 🔜 Next Steps

In modern JavaScript, `async/await` is generally preferred for its readability and ease of use, but understanding both approaches will help you <analogy>read</analogy> and work with all kinds of JavaScript code. As we continue in this book we will use the `async/await` approach for the projects. However, you will encounter `.then()` again once you get to the <analogy>React</analogy> coursework as certain <analogy>React</analogy> functions don't allow the `async/await` approach. 

[Table of Contents](../README.md)