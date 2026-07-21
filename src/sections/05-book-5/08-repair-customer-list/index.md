## Listing The Customers
In this chapter you will create a new component for listing the customers.

## 📺 Watch The Video

### ⚠️ Note on the video: 
This video instructs you to make the file `components/customers/CustomerList.js`. Make sure your file ends in `.jsx` instead of `.js`.

Watch the **Customer List** video below and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

<iframe name="yt-ex08" src="https://www.youtube.com/embed/JijX33KjDP4" width="700" height="394" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details>
<summary>📄 Video Transcript — Customer List</summary>

### Overview and Wireframe Review

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=2&autoplay=1" target="yt-ex08">[0:02]</a> Welcome back. We're going to take a break from our tickets list component for now and practice building more components with useState, useEffect, and props. So let's take a look at our wireframe, and we can see here that we're going to need a view for our customers and employees. So since we already made that customer directory, we'll just start there. Okay, so we want to have a list of all of the customers and we just want to display the name and email. Well, looking at our data, and it's always zoomed out, let me zoom back in here, there we go, looking at our data, we want to display our name and email for a customer. We're not actually going

### Building the User Service

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=48&autoplay=1" target="yt-ex08">[0:48]</a> to be displaying anything on the customer object. Rather, we're going to be wanting to display what's on the user object. So what we can do is — so what we'll do is we'll start by adding a new service for our users and add a fetch call just to get the users where staff, or is staff, is false, and that will get us all of our customers. So let's do that. All right, so I'm going to add a new module here called user service, and I'm going to add a fetch call in here

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=94&autoplay=1" target="yt-ex08">[1:34]</a> to get all the users where staff is false. We'll just say get non-staff users. I'll run a fetch. So we're going to — I'm going to copy that URL. So let's see here in our JSON server, we want users. Let's test this out. Where — oops, what just happened there — users where the is staff is equal to false.

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=141&autoplay=1" target="yt-ex08">[2:21]</a> Why are you being this way? Users where is staff is equal to false. Okay, not wanting to run a Google search here. There we go. So here are all our users where is staff is false. All right, so that's the URL we want. So back to the code, I'm going to paste that URL right here. All right, then take the response and run response.json on there. Okey-doke, there is our function. Now I'm going to create a new component in my customers directory. I'm going to call this

### Creating the CustomerList Component

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=186&autoplay=1" target="yt-ex08">[3:06]</a> customer's list. I'm going to make a new component here. Export const customer list. Right, and I'm going to want to get those users into my component, so I'm going to store them in state. So const customers and set customers — I'm gonna give that an initial value of an array because that's what I expect that to be. And now on the initial render of my component, so useEffect

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=234&autoplay=1" target="yt-ex08">[3:54]</a> on the initial render. So I'm going to pass in an empty dependency array. I want to get my non-staff users. Then once I get all those users back — um, let's see, we'll just call this customer array — I'm going to set my customers with the users that I got back. Perfect. All right, so it looks like useState didn't auto-import for me, so I'm going to also import that from React as well. So useState, great. Here's a good point to stop and test our code.

### Testing the CustomerList in the Browser

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=280&autoplay=1" target="yt-ex08">[4:40]</a> Let's head to the browser. Honey Rae's Repairs. If I give it a refresh, I'm still displaying my tickets here, and that's because back in our app component we are rendering ticket list. So I'm just going to comment this out for now, and instead I want to render my customer list. Now I know this is kind of funky, but don't worry about this for now. We're just trying to test out these components that we're building. We'll eventually get routes set up that will dynamically render these components depending on what view we're on, or what URL we are in with our page or our application.

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=326&autoplay=1" target="yt-ex08">[5:26]</a> Okie-doke, so let's go ahead to the browser and let's check our component state to see if we got those customers set. All right, so if we refresh, we should see — there we go — there's app, we're rendering the customer list component. If you click on customer list, we can see our state, and there are the three users that we wanted to fetch from the database. It's working. Okay, so now that we know that we're getting our customers right, let's display these customers in our component. So back in the code, I'm going to start returning some HTML for these customers.

### Rendering Customers as JSX

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=372&autoplay=1" target="yt-ex08">[6:12]</a> So I'm going to wrap all my customers in a div and I'm going to give that a class name of say customers. So all my customers are going to go in here. There we go. So I'm going to map my customers array — so customers.map — for each customer object I'm going to return some HTML here. All right, so I'm going to wrap each customer in a div, and things are not auto-completing for me here. There we go. All right, so each customer is going to be in a div, and then I'm going to have two divs here: one for the name and one for the email.

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=420&autoplay=1" target="yt-ex08">[7:00]</a> And wrap the name — why am I not having autocomplete? It's very frustrating. There we go, maybe it'll do it for me now. Okay, so one div for the name, one div for the email — still not auto-completing, making me type everything out by hand. Okay, so here's going to be the label for my name, then the value for my name. So we're going to put in the customer object dot full — too many else — name. There we go. Alrighty, and then here is going to be the email. So another div

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=465&autoplay=1" target="yt-ex08">[7:45]</a> I'm going to say email, the customer object dot email — maybe do all that by hand. Okay, so I think that's going to work. Let's take a look. Awesome, well there they are, there's our customers, the name and the email. Okay, so that's good for now. We'll add some more styling here in a minute. So looking back at our wireframe, we're also going to be doing the same

### Creating a Reusable User Component

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=510&autoplay=1" target="yt-ex08">[8:30]</a> exact thing for the employees, and we're just displaying the name and the email. So we're just going to be displaying — we're just going to be getting users again, but this time where the staff is true. So basically right here, all of this is going to be the same code as all of these. Let's look at our code here. So remember that our customers array is just going to be an array of users, so all this code is going to be pretty much exactly the same once we do this for the employees. So I think I'm going to break this up into its own component so that we can reuse it at that point. So I'm going to create a new directory

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=559&autoplay=1" target="yt-ex08">[9:19]</a> folder or whatever here in my source directory called user or users, and I'm going to create a new component for a user. So a user dot js. I'm also going to have some custom styles for this, so I'm going to do a user.css. All right, so I'm going to create a new component for my user. So export const user, and I'm just going to take all that code that we're mapping, or that we're returning in our map

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=605&autoplay=1" target="yt-ex08">[10:05]</a> each one of these is just going to be a user component. I'm going to take that out and add it here. So I'm going to copy and paste some CSS here in my CSS file for user and user info. Now back on my user component, I'm going to give this a class name of user, and then each one of these labels I'm going to give a class name of user info.

### Passing Props and Viewing the Component Tree

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=651&autoplay=1" target="yt-ex08">[10:51]</a> All right, so we have a new user component and we are needing the customer object. So instead of this being customer object, I think I'd actually rather this be user, because we're going to use this for the employees as well. So that means I'm going to need a prop for the user. Now why don't you take some time and render this component where we want to for the customer list and pass in a prop for the user. Okay, so the first thing we would need to do would be to import the user component

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=697&autoplay=1" target="yt-ex08">[11:37]</a> into our customer list component. Then we would render that user component for each customer, and then we said that we needed a user prop on our user. So here, where we are rendering the user, we would create user as the key, and then the value would be customer object. Let's see if it's working. All right, so back here, we're going to give it a refresh, and it's still working, but it doesn't — it doesn't look like I have my styles. So let's go back to the code. I might have forgotten to import it. Yep, I forgot to import my stylesheet. Okay, so I'm going to import

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=755&autoplay=1" target="yt-ex08">[12:35]</a> there we go. So we got our users. So now when we look at the component tree in our React Dev Tools — that's currently not loading — we will see app, customer list, and then probably three user components. There we go. There's app, which is rendering customer list, and then customer list is rendering three user components because we had three users in our customer array. So let's just take — take a look at that in the code. So here we have app, which is rendering our customer list component. Then customer list is getting all of our users from the database that are non-staff. Then we are mapping — for all those users, we are going to render a user component.

<a href="https://www.youtube.com/embed/JijX33KjDP4?start=801&autoplay=1" target="yt-ex08">[13:21]</a> And so that is how we understand this component tree here in the dev tools. So great job with this. Move on to the next chapter and we will get the employee list implemented.

</details>

### 🔸🔻🔹 CSS for this chapter
<details>
  <summary>Customers.css</summary>

  ```css
    .customers {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 3rem;
    }

    .customers > * {
      flex-basis: 31%;
      margin: 0.5rem;
    }
  ```
</details>

<details>
  <summary>User.css</summary>

  ```css
    .user {
      background-color: var(--white);
      border: 1px solid var(--outline);
      border-radius: 0.5rem;
      padding: 1rem;
    }

    .user-info {
      color: var(--info);
      font-family: "Roboto", sans-serif;
    }
  ```
</details>

## 🎓 Recap Time!
We've reached the end of our learning objectives for parts _one_ and _two_ of this book. In the next chapter, you will implement the `EmployeesList` component on your own. Take some time to review what you've learned so far. Go back and reread the chapters and dig into the code for any of the concepts below if you need more practice. ***Don't be afraid to break something!***

### <analogy>JSX</analogy>
<analogy>JSX</analogy> allows us to write HTML elements in JavaScript and place them in the DOM without any `Document.querySelector` and appending to the `innerHTML` property.

>For more information on JSX, revisit the [Your First Component](/book_5_honey_rae_first_component) chapter.

### <analogy>useState</analogy>
The `useState` <analogy>hook</analogy> allows you to add and manage <analogy>state</analogy> in a functional <analogy>component</analogy>. It takes one argument: the initial value for our state. It returns an array with two values: the current value of the state and a function to update it.

>For more information on how `useState` works, revisit the [Your First Component](/book_5_honey_rae_first_component) chapter.

### <analogy>Destructuring</analogy>
The <analogy>destructuring</analogy> assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

>For more information on how destructuring works, revisit the <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment" target="_blank" rel="noopener noreferrer">mdn web docs</a>. _That "Try it" box is interactive and a great way to learn._

### <analogy>useEffect</analogy>
The `useEffect` <analogy>hook</analogy> will run a function when, and _only_ when we tell it to. It takes two arguments: the function we want to run and an array. 

>For more information on how `useEffect` works, revisit the [List All Tickets](/book_5_honey_rae_all_tickets) chapter.

### <analogy>Event</analogy> Handling
Listening for <analogy>events</analogy> in <analogy>React</analogy> is easy peasy. You can just add the event right on the element you want to listen to!
The two events we've written so far are `onClick` for a button and `onChange` for a text input.

>For more information on event handling, revisit the [Your First Component](/book_5_honey_rae_first_component) chapter.

### <analogy>Optional Chaining</analogy>
The `?.` operator is like the `.` chaining operator, except that instead of causing an error if a reference is `null` or `undefined`, the expression short-circuits with a return value of `undefined.` This is very helpful if our state that were displaying in our JSX contains nested objects but the initial value is an empty object. 

```javascript
export const SomeComponent = () => {
  const [book, setBook] = useState({}) // on the initial render the value of book will be {}

  // fetch book from some database

  return (
    <div>
      <div>Title: {book.title}</div> {/* Doesn't cause problems */}
      <div>Author: {book.author?.name}</div> {/* Would cause problems if not for ?. */}
    </div>
  )
}
```

### <analogy>Ternary Statements</analogy>
A <analogy>ternary statement</analogy> is syntactical shorthand for a simple `if/else` block. 

```javascript
  let answer

  if (condition) {
    answer = 'yes'
  } else {
    answer = 'no'
  }
```
turns to 
```javascript
  let answer = condition ? 'yes' : 'no'
```

It is possible to write nested ternaries. Don't do it. It's like taking the muffler off your vehicle and driving through a neighborhood at 11pm. No one is impressed and they're all just mad that you've woken up their kids. 

### Rendering <analogy>Components</analogy>
Rendering a <analogy>component</analogy> is like invoking a function. Components return HTML, therefore we render our components where we want that html to go. The syntax for rendering a component is:

```jsx
export const ParentComponent = () => {
  return (
    <>
      <h1>Some Header</h1>
      <ChildComponent />
      <footer>Some Footer</footer>
    </>
  )
}
```

>For more information about rendering components, revisit the [Ticket Assignee](/book_5_honey_rae_ticket_assignee) chapter

### <analogy>Props</analogy>
<analogy>Props</analogy> are arguments passed into a <analogy>React</analogy> <analogy>component</analogy>. When a child <analogy>component</analogy> needs access to <analogy>state</analogy> from a parent <analogy>component</analogy>, you can pass <analogy>props</analogy> to the child <analogy>component</analogy>.

```jsx
export const ParentComponent = () => {
  const [state, setState] = useState({})

  return (
    <>
      <h1>Some Header</h1>
      <ChildComponent state={state}/>
      <footer>Some Footer</footer>
    </>
  )
}
```

>For more information for how props work, revisit the [Ticket Assignee](/book_5_honey_rae_ticket_assignee) chapter.
