# Showing Custom Jewelry Options

Time to <analogy>create</analogy> all of the <analogy>component</analogy> functions for each of the option groups. Just like the **UrbanDweller** <analogy>function</analogy> in the Indian Jeans project, you will need to fetch the data from your local <analogy>API</analogy> for each of these components since all of the options are in the `database.json` file.

## Learning Objectives

* You should be able to correct use **async** and **<analogy>await</analogy>** keywords to <analogy>request</analogy> data from an <analogy>API</analogy>.
* You should be able to use a `for..of` loop to generate HTML representations of each <analogy>object</analogy> in the <analogy>array</analogy>.
* You should be able to <analogy>import</analogy> the <analogy>component</analogy> functions into the main <analogy>module</analogy>, <analogy>invoke</analogy> them in the correct place, and compose all of the responses into a single HTML <analogy>string</analogy>.
* You should be able to <analogy>update</analogy> the correct <analogy>element</analogy> on the <analogy>DOM</analogy> with your generated HTML.


## Render the Metal Options

<analogy>Create</analogy> a <analogy>module</analogy> to manage the display and selection of a metal by the customer. You can call this <analogy>module</analogy> **Metals**, or **MetalOptions** - whatever name makes sense to you. Then <analogy>create</analogy> your <analogy>component</analogy> <analogy>function</analogy> in that <analogy>module</analogy>. Don't forget to <analogy>export</analogy> the <analogy>function</analogy> for use in the main <analogy>module</analogy>.

Here's a bit of starter code for you.

##### `scripts/MetalOptions.js`

```js
export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
}
```

Once you complete that, <analogy>import</analogy> the <analogy>function</analogy> into **main**, <analogy>invoke</analogy> it to get the generated HTML and use `innerHTML` to inject the HTML into the <analogy>DOM</analogy>. Again, here is some starter code, but it doesn't contain everything you need.

Refer back to the **main** <analogy>module</analogy> in Indiana Jeans to remember what else is needed in this <analogy>module</analogy> to make it all work. In this starter code, we are providing an overall structure for your HTML that you can use.

```js
import { MetalOptions } from './MetalOptions.js'

const render = () => {
    const metalOptionsHTML = await MetalOptions()

    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
            </section>
        </article>

        <article class="order">

        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>

        </article>
    `

    container.innerHTML = composedHTML
}
```

## Render Sizes and Styles

Once you show metals, follow the same process to show the options for diamond sizes and jewelry styles.

##### `scripts/StyleOptions.js`

```js
export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")

    // Fill in the rest


    return optionsHTML
}
```

##### `scripts/SizeOptions.js`

```js
export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")

    // Fill in the rest


    return optionsHTML
}
```
