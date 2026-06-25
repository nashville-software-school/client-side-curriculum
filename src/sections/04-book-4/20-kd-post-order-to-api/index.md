# Saving Orders to Permanent State

Now it's time to handle making a permanent change to <analogy>state</analogy>.

## Implement "Place Order" Button

<analogy>Create</analogy> a <analogy>module</analogy> that produces HTML for a button labeled **Place Order**. <analogy>Invoke</analogy> that <analogy>function</analogy> in main and interpolate the results inside the article with a class of **"order"**.

```html
<article class="order">
    <!-- Interpolate button HTML here -->
</article>
```

## Storing a Custom Order

When the user clicks on the **Place Order** button in the application, you need to store their choices permanently. You will convert the <analogy>transient state</analogy> into <analogy>permanent state</analogy> by performing a `fetch()` with a method of **<analogy>POST</analogy>**.

In your <analogy>transient state</analogy> <analogy>module</analogy>, <analogy>create</analogy> a <analogy>function</analogy> named `placeOrder()` that stringifies the <analogy>transient state</analogy> and sends it to the <analogy>API</analogy> over <analogy>HTTP</analogy>. Some starter code is provided below. You need to make sure that the options <analogy>object</analogy> is provided as an <analogy>argument</analogy> to the fetch <analogy>function</analogy>.

```js
export const placeOrder = async () => {
    /*
        Add the required keys to the object below that are
        needed for a POST operation.
    */
    const postOptions = {}

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders")

}
```

## Hook 'Em Up

Now you can <analogy>import</analogy> that <analogy>function</analogy> into the <analogy>module</analogy> you created for the order button. Add a click <analogy>event listener</analogy> that invokes the `placeOrder()` <analogy>function</analogy> only when the button is clicked.

