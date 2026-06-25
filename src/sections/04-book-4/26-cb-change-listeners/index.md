# Storing User Choices as Transient State

1. In each of your <analogy>component</analogy> modules, generate a `<select>` <analogy>element</analogy> that has child `<option>` elements as HTML representation of each <analogy>object</analogy> in the corresponding <analogy>array</analogy> in the database <analogy>module</analogy>.
1. Add an <analogy>event listener</analogy> that reacts to the customer choosing one of the options.
1. When an option is chosen, <analogy>update</analogy> <analogy>transient state</analogy> with the choice.

## Pick Your Style

There are two different ways that you have seen to build up the HTML for each <analogy>select</analogy> <analogy>element</analogy>. Choose the one that makes sense to you right now, but do not be afraid to <analogy>try</analogy> a different style, and talk to your peers to ensure you can use the right vocabulary to explain the code.

### for..of loop

```js
export const Technologies = () => {
    // Get data first

    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    for (const tech of techs) {
        html += `<option value="${tech.id}">${tech.package}</option>`
    }

    html += "</select>"
    return html
}
```

## Using .map() to build a string array

```js
export const Technologies = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = techs.map( (tech) => {
            return `<option value="${tech.id}">${tech.package}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}
```
