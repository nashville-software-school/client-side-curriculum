# Understanding Promises and .then()

## Introduction to Promises

In the previous chapter, we used the `fetch()` <analogy>function</analogy> to make requests to an <analogy>API</analogy> and observed these requests in the browser's <analogy>Network tab</analogy>. You might have noticed that while we could see the data arriving in the <analogy>Network tab</analogy>, we didn't actually do anything with that data in our JavaScript code.

This is because working with data from APIs involves dealing with **timing issues**. When you <analogy>request</analogy> data from an <analogy>API</analogy>, your code doesn't get that data immediately—it takes time for the <analogy>request</analogy> to travel across the internet, for the <analogy>server</analogy> to process it, and for the <analogy>response</analogy> to travel back.

This is where Promises come in.

## What is a Promise?

A <analogy>Promise</analogy> in JavaScript is exactly what it sounds like: it's a <analogy>promise</analogy> that something will happen in the future. More specifically, a <analogy>Promise</analogy> is an <analogy>object</analogy> that represents the eventual completion (or failure) of an <analogy>asynchronous</analogy> operation and its resulting <analogy>value</analogy>.

Think of a <analogy>Promise</analogy> like ordering pizza at a restaurant:
1. You place your order (make a <analogy>request</analogy>)
2. The waiter gives you a <analogy>number</analogy> for your table (a <analogy>Promise</analogy>)
3. The <analogy>number</analogy> doesn't contain your food, but it's a <analogy>promise</analogy> that food will arrive
4. When your food is ready, the waiter brings it to you (<analogy>Promise</analogy> resolved)
5. If the kitchen can't make your order, the waiter tells you why (<analogy>Promise</analogy> rejected)

### The Three States of a Promise

A <analogy>Promise</analogy> can be in one of three states:
1. **Pending**: The initial <analogy>state</analogy>—the operation hasn't completed yet
2. **Fulfilled**: The operation completed successfully, and the <analogy>Promise</analogy> has a resulting <analogy>value</analogy>
3. **Rejected**: The operation failed, and the <analogy>Promise</analogy> has a reason for the failure. This is not the same as when we made a <analogy>request</analogy> to a nonexistent <analogy>endpoint</analogy>. That promises still fulfilled. It is unlikely that you will run into a rejected <analogy>promise</analogy> until you get to <analogy>server</analogy> side, so we will only talk about pending and fulfilled promises from here on out.

## Fetch Returns a Promise

Let's think back on what we did in the last chapter. We called the `fetch()` <analogy>function</analogy> and passed it the <analogy>endpoint</analogy> (url) for the <analogy>api</analogy> where we wanted to receive some data. `fetch()` is a <analogy>function</analogy>, and all functions <analogy>return</analogy> *something*, so what does `fetch()` <analogy>return</analogy>? If you said it returns the data from our <analogy>endpoint</analogy> you are incorrect. `fetch()` immediately returns a <analogy>promise</analogy>. This <analogy>Promise</analogy> will eventually *resolve* with the *<analogy>response</analogy>* from the <analogy>server</analogy>-our random fox <analogy>object</analogy>.

Let's take a look at this with our own eyes. In `main.js` where you are fetching a random fox, <analogy>assign</analogy> that <analogy>function</analogy> call to a <analogy>variable</analogy> and <analogy>console</analogy> log that <analogy>variable</analogy>. 

```javascript
let responsePromise = fetch('https://randomfox.ca/floof/');
console.log(responsePromise); // Promise object (in pending state)
```

Run the code and open your devtools to the <analogy>console</analogy>. Click on the **<analogy>Get</analogy> Fox** button to run that code and see the output. 

You should see `Promise {<pending>}` in the <analogy>console</analogy>. 

Since `fetch()` returns a <analogy>Promise</analogy>, we need a way to tell our code to wait for the <analogy>Promise</analogy> to be fulfilled before trying to use the <analogy>response</analogy> data. This is where the `.then()` method comes in.

## Using .then() with Promises

The `.then()` method tells JavaScript what to do after a <analogy>Promise</analogy> is fulfilled (when the data has successfully arrived). Think of `.then()` as saying "when you've got the data, *then* do this next."
The `.then()` method takes one <analogy>argument</analogy>: a <analogy>function</analogy> that contains the code you want to run once the <analogy>Promise</analogy> is complete. This <analogy>function</analogy> will automatically receive the result of the <analogy>Promise</analogy> (in this case, the <analogy>response</analogy> from the <analogy>API</analogy>). 

Make the following changes to your fox fetch call:
```javascript
fetch('https://randomfox.ca/floof/')
  .then((response) => {
    // This code runs when the Promise is fulfilled
    console.log('Response received!');
    console.log(response);
  });

console.log('This code runs immediately!');
```

If you click the **<analogy>Get</analogy> Fox** button, you'll notice that "This code runs immediately!" is logged to the <analogy>console</analogy> before "<analogy>Response</analogy> received!". This is because the `.then()` callback only executes after the <analogy>Promise</analogy> is fulfilled, which happens when the <analogy>server</analogy> responds to our <analogy>request</analogy>. 

### Accessing the Response Data

The <analogy>response</analogy> <analogy>object</analogy> we get from a fetch <analogy>request</analogy> contains the <analogy>server</analogy>'s <analogy>response</analogy>, but it doesn't give us direct access to the <analogy>JSON</analogy> data. To access the data, we need to call the `.json()` method on the <analogy>response</analogy> <analogy>object</analogy>.

Importantly, the `.json()` method ***also*** returns a <analogy>Promise</analogy>, because parsing the <analogy>JSON</analogy> data can take time for large responses. This means we need to use *another* `.then()` to access the actual data. 

Make the following adjustments to your code:

```javascript
fetch('https://randomfox.ca/floof/')
  .then((response) => {
    console.log('Response received!');
    // Parse the JSON in the response
    return response.json();
  })
  .then((foxData) => {
    // This code runs when the JSON parsing is complete
    console.log('Data parsed!');
    console.log(foxData);
  });

console.log('This code runs immediately!');
```

This is called "chaining Promises" because we're connecting multiple <analogy>asynchronous</analogy> operations together.

## Displaying Fox Images Using Promises and .then()

Now let's put it all together to display the random fox image on the webpage. 

1. Use `document.querySelector` to get the fox `img` <analogy>element</analogy>. 
    ```javascript
    const foxImage = document.querySelector("#fox")
    ```
2. Set the image `src` to our foxData image
    ```javascript
    foxImage.src = foxData.image
    ```
3. Run the code and see what happens!


## 📓 Key Concepts to Remember

1. **<analogy>Asynchronous</analogy> Operations**: Operations like <analogy>API</analogy> calls don't complete immediately—they take time.
2. **Promises**: Objects that represent the eventual completion or failure of an <analogy>asynchronous</analogy> operation.
3. **States of a <analogy>Promise</analogy>**: Pending (initial), Fulfilled (success), or Rejected (failed).
4. **`.then()`**: A method to specify what to do when a <analogy>Promise</analogy> is fulfilled.
5. **Chaining**: You can chain multiple `.then()` calls to <analogy>create</analogy> a sequence of <analogy>asynchronous</analogy> operations.

## 🎓 Practice Exercise: Displaying a Random Dog

Now it's your turn to practice! Use what you've learned to display the random dog image you get back from the Random Dog <analogy>api</analogy>. 

>💡 Make sure you look at the <analogy>response</analogy> in the <analogy>network tab</analogy> so that you know what <analogy>property</analogy> to target to get the dog image.

## 📝 What We've Learned

In this chapter, we've:
- Learned what Promises are and why they're important in JavaScript
- Understood how `fetch()` returns a <analogy>Promise</analogy>
- Used `.then()` to work with the data when a <analogy>Promise</analogy> is fulfilled
- Built a working application that fetches and displays a fox image

## 🔜 Next Steps

In the next chapter, we'll explore a more modern way to work with Promises: the `async` and `await` keywords. These provide a cleaner, more readable syntax for working with <analogy>asynchronous</analogy> operations.

Up Next [Awaiting Data](./FD_INTRO_TO_ASYNC.md)