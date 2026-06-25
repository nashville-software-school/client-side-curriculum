# Maps

A `Map` in JavaScript is very similar to an `Object`, but it has some very powerful differences.

Like an <analogy>object</analogy>, a <analogy>map</analogy> is a collection of keys and values. The syntax is quite different, and more verbose. Here's how to define the keys and values for a toy using an <analogy>object</analogy> versus a <analogy>map</analogy>.

## Creating

##### Object Toy

```js
// Object representation of toy
const iPhone = {
    id: 1,
    name: "iPhone",
    maker: "Apple",
    operatingSystem: "iOS",
    price: 900,
    weight: 1.2
}
```

##### Map Toy

```js
// Map representaiton of toy
const iPhone2 = new Map()
iPhone2.set("id", 1)
iPhone2.set("name", "iPhone2")
iPhone2.set("maker", "Apple")
iPhone2.set("operatingSystem", "iOS")
iPhone2.set("price", 900)
iPhone2.set("weight", 1.2)
```

## Reading Values

##### Object

```js
console.log(iPhone.price)
```

##### Map

```js
iPhone2.get(price)
```

## Adding New Key Value Pairs

##### Object

```js
iPhone.color = "yellow"
```

##### Map

```js
iPhone2.set("color", "yellow")
```

## Challenge

Modify the **TransientState** <analogy>module</analogy> in Indiana Jeans to store <analogy>transient state</analogy> as a **<analogy>Map</analogy>** data structure. Also <analogy>update</analogy> the setter functions to <analogy>update</analogy> the <analogy>value</analogy> of the <analogy>key</analogy> instead of updating the <analogy>value</analogy> of an <analogy>object</analogy> <analogy>key</analogy>.

You will also need to <analogy>update</analogy> your code where you use `JSON.stringify()` to turn your <analogy>state</analogy> into a <analogy>string</analogy> before sending to your local <analogy>API</analogy>. You will need to convert the **<analogy>Map</analogy>** into an **<analogy>Object</analogy>** before stringifying it. `JSON.stringify()` does not work with a **<analogy>Map</analogy>**.

Hint: `Object.fromEntries`
