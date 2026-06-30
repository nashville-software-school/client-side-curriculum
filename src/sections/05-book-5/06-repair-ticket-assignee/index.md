# Ticket Assignee
In this chapter you will learn how to render a React component, pass props, use optional chaining, and write ternary statements.

## 📺 Watch The Video

### ⚠️ Note on the video: 
This video instructs you to make the files `components/Ticket.js` and `components/TicketList.js`. Make sure your files end in `.jsx` instead of `.js`.

Watch the [Ticket Assignee](https://youtu.be/8s4TQdJ3EBk) video and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

## Rendering the TicketList component
Breaking our code into components to later be rendered as part of one large whole is nothing new to us. Take this code from DeShawn's Dog Walking: 

```javascript 
const applicationHTML = `
  <h1>DeShawn's Dog Walking</h1>
  <article class="details">
      <section class="detail--column list details__cities">
          <h2>Cities with Service</h2>
          ${CityList()}
      </section>
      <section class="detail--column list details__cities">
          <h2>Walkers</h2>
          ${Walkers()}
      </section>
      <section class="detail--column list details__cities">
          <h2>Pets</h2>
          ${RegisteredPets()}
      </section>
  </article>

  <article class="assignments">
      <h2>Current Assignments</h2>
      ${Assignments()}
  </article>
`
```

Here we have four functions that return some html. We're invoking those functions in our main.js module to build the entire html for our application. 

Here's how this code might look in React:

```jsx
export const App = () => {
  
  return (
    <h1>DeShawn's Dog Walking</h1>
    <article class="details">
      <section class="detail--column list details__cities">
          <h2>Cities with Service</h2>
          <CityList />
      </section>
      <section class="detail--column list details__cities">
          <h2>Walkers</h2>
          <Walkers />
      </section>
      <section class="detail--column list details__cities">
          <h2>Pets</h2>
          <RegisteredPets />
      </section>
    </article>

    <article class="assignments">
        <h2>Current Assignments</h2>
        <Assignments />
    </article>
) 
}
```

Just like our components in earlier books of the course, React components are functions that return html markup. The syntax to render them is just a little different. 

```javascript
${CityList()}
```
_vs_
```jsx
<CityList />
```

## <analogy>Props</analogy>
<analogy>Props</analogy> are arguments passed into a <analogy>React</analogy> <analogy>component</analogy>. When we have a child <analogy>component</analogy> that needs access to <analogy>state</analogy> managed in the parent <analogy>component</analogy>, we can pass that <analogy>state</analogy> as <analogy>props</analogy>. 

>_<analogy>Props</analogy>_ stands for _properties_ which refers to the properties of an object. 

When we pass props to a component, we are passing key/value pairs on an object. In the video, you saw this with the `Ticket` component. 

```jsx
  <Ticket ticket={ticketObj} />
```

Here we are passing the prop, `ticket`, to our component. This is just adding a key value pair to our props object that we can access in our component, 
the key being `ticket` and the value being whatever the value of `ticketObj` is. Now we can <analogy>destructure</analogy> that <analogy>props</analogy> object in the `Ticket` <analogy>component</analogy> to have access to the `ticket` property.

```jsx
export const Ticket = ({ ticket }) => {
  return (
    <div>{ticket.description}</div>
  )
```

 We could easily access the `ticket` <analogy>prop</analogy> by using <analogy>dot notation</analogy>.

```jsx
export const Ticket = (props) => {
  return (
    <div>{props.ticket.description}</div>
  )
}
```

But why would we do that when <analogy>destructuring</analogy> is _so much_ cooler? 

<analogy>Destructuring</analogy> is not new with <analogy>React</analogy>, though we do use it with <analogy>destructuring</analogy> our <analogy>props</analogy> object and <analogy>useState</analogy>. You can do this in vanilla js, and it's likely you have! Just another example of how <analogy>React</analogy> is _just_ Javascript!

## 🧭 📺 Explorer Video _(optional)_
If you're feeling comfortable with what we've learned so far and would like to see an alternative solution to what we did in this chapter, watch [this video](https://youtu.be/Sq4CzHMLXTk?si=_PKOdYncLfGx-hHa)! 
>_This is optional and the solution in this video will not be used in the rest of this walkthrough of Honey Rae Repairs._

## ���� Vocabulary
>**Render a <analogy>component</analogy>:** To invoke a <analogy>React</analogy> <analogy>component</analogy> in <analogy>JSX</analogy>, like calling a function, resulting in its display within the rendered user interface.

>**<analogy>Props</analogy>:** Arguments passed to a <analogy>React</analogy> <analogy>component</analogy> in the form of an object.

>**<analogy>Optional Chaining</analogy>:** An operator that accesses an object's property. If the object accessed using this operator is `undefined` or `null`, the expression stops and evaluates to undefined instead of throwing an error.

>**<analogy>Ternary Operator</analogy>:** An operator that provides a way to shorten a _simple_ if else block. The `if` condition is on the left of the `?`. If the condition evaluates to `true`, the statement after the `?` is executed. If the condition evaluates to false, the statement after the `:` is executed.
