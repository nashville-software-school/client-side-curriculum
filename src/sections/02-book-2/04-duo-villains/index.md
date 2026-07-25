In your `database.js` <analogy>module</analogy>, add a new villains key that is an <analogy>array</analogy> of fun villain names that you come up with.

```js
const database = {
    heroes: [
        {
            id: 1,
            name: "Dynoguy",
            power: "Fire blasts"
        },
        {
            id: 2,
            name: "Hyperspeed",
            power: "Super speed"
        }
    ],
    villains: [
        // Remove this comment and create some villain objects
    ]
}
```

Then write a function to export a copy of that villain data.

```js
export const getVillains = () => {
    return structuredClone(database.villains)
}
```

Notice that `database` itself is no longer exported directly — only `getVillains` is. This keeps the raw data private to the module.

## Updating the Heroes Module

Now that `database` is no longer exported, your `heroes.js` module won't work — it still imports `{ database }` directly, which no longer exists.

- How would you apply the same getter pattern to heroes?
- What would you need to add to `database.js`?
- What would you need to change in `heroes.js`?

Try to make the update yourself. If you get stuck, the hints below walk you through it.

<details>
<summary>Hint 1 — What to add to database.js</summary>

Add a `getHeroes` getter function alongside `getVillains`:

```js
export const getHeroes = () => {
    return structuredClone(database.heroes)
}
```

</details>

<details>
<summary>Hint 2 — What to change in heroes.js</summary>

Replace the direct `database` import with the new getter function:

```js
import { getHeroes } from "./database.js"

const heroes = getHeroes()
```

</details>
```

### What is structuredClone?
`structuredClone` is a built-in JavaScript function that creates a deep copy of a value. This means it duplicates objects, arrays, and even complex data structures without keeping any references to the original.

## Importing the Data

Now create a new file in your scripts directory named `villains.js`.

Then import the function reference and then invoke it to get a copy of the villain array.

```js
import { getVillains } from "./database.js"

const villains = getVillains()
```

Now you have a copy stored in the `villains` variable.

## Generate Villain HTML

Now you can write a function that can turn those ugly objects into beautiful HTML that you can display in the browser to your users. This function will also be exported for use in other modules.

```js
export const VillainList = () => {
    let villainHTML = "<ul>"

    for (const villain of villains) {
        villainHTML += `<li>${villain.name}</li>`
    }

    villainHTML += "</ul>"

    return villainHTML
}
```

This function, when invoked, will generate a string of HTML that looks like this.

```html
<ul>
    <li>Villain 1</li>
    <li>Villain 2</li>
    <li>Villain 3</li>
    <li>Villain 4</li>
</ul>
```

You haven't invoked it yet. You'll get to that later.
