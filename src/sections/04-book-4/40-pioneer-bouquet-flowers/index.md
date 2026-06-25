# Are You Feeling Bouquet?

For this application, there are 4 main resources that interact with each other.

1. Flower retailers
1. Flower distributors
1. Nurseries
1. Flowers

## Nurseries

Nurseries are responsible for growing flowers. A single nursery can grow multiple types of flowers. Any one flower species can be grown by multiple nurseries.

### The Bouquet ERD

Use dbdiagram.io to <analogy>create</analogy> an <analogy>ERD</analogy> that visualizes the **Flowers**resource.

```html
Table Flowers {
    id int pk
    commonName varchar
    color varchar
}
```

### API Resources

<analogy>Create</analogy> a new <analogy>directory</analogy> in your workspace for this application. <analogy>Create</analogy> an `api` and a `database.json` file in it. In your <analogy>JSON</analogy> file, <analogy>create</analogy> the resource that reflects your <analogy>ERD</analogy>. Here's something to get you started, but it's not complete.

```json
{
    "flowers": []
}
```

<analogy>Create</analogy> 5 types of flowers.

### HTML Representations

<analogy>Create</analogy> your data provider, your list <analogy>component</analogy> and your individual item <analogy>component</analogy>. Then display a list of all flowers in your database.