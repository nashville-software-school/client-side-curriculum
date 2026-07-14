# Listing The Customers
In this chapter you will create a new component for listing the customers.

## 📺 Watch The Video

### ⚠️ Note on the video: 
This video instructs you to make the file `components/customers/CustomerList.js`. Make sure your file ends in `.jsx` instead of `.js`.

Watch the <a href="https://youtu.be/JijX33KjDP4?si=Rj_Pp6-twBP4weVf" target="_blank" rel="noopener noreferrer">Customer List</a> video and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

<details>
<summary>📄 Video Transcript — Customer List</summary>

[0:02] welcome back we're going to take a break from our tickets list component for now and practice building more components with use State use effect and props so let's take a look at our wireframe and we can see here that we're going to need a view for our customers and employees so since we already made that customer directory we'll just start there okay so we want to have a list of all of the customers and we just want to display the name and email well looking at our data and it's always zoomed out let me Zoom back in here there we go looking at our data we want to display our name and email for a customer we're not actually going

[0:48] to be displaying anything on the customer object rather we're going to be wanting to display what's on the user object so what we can do is so what we'll do is we'll start by adding a new service for our users and add a fetch called just to get the users where staff or is staff is false and that will get us all of our customers so let's do that all right so I'm going to add a new module here called user service and I'm going to add a fetch call in here

[1:34] to get all the users where staff is false we'll just say get non staff users I'll run a fetch so we're going to I'm going to copy that URL so let's see here in our Json server we want users Let's test this out where oops what just happened there users where the is staff is equal to false

[2:21] why are you being this way users where is staff is equal to false okay not wanting to run a Google search here we go so here are all our users where is staff is false all right so that's the URL we want so back to the code I'm going to paste that URL right here all right then take the response and run response.json on there okey-doke there is our function now I'm going to create a new component in my customers directory I'm going to call this

[3:06] customer's list I'm going to make a new component here report const customer list right and I'm going to want to get those users into my component so I'm going to store them in state so const customers and set customers I'm gonna give that an initial value of an array because that's what I expect that to be and now on the initial render of my component so use effect

[3:54] on the initial render so I'm going to pass in an empty dependency array I want to get my non-step users then once I get all those users back um let's see we'll just call this customer array I'm going to set my customers with the users that I got back perfect alright so it looks like you state didn't Auto Import for me so I'm going to also import that from react as well so use state great here's a good point to stop and test our code

[4:40] let's head to the browser honey Ray repairs if I give it a refresh I'm still displaying my tickets here and that's because back in our app component we are rendering ticket list so I'm just going to comment this out for now and instead I want to render my customer list now I know this is kind of funky but don't worry about this for now we're just trying to test out these components that we're building we'll eventually get route set up that will dynamically render these components depending on what viewer on or what URL we are in with our page or our application

[5:26] okie doke so let's go ahead to the browser and let's check our component state to see if we got those customers set all right so if we refresh we should see there we go there's app we're rendering the customer list component if you click on customer list we can see our state and there are the three users that we wanted to fetch from the database it's working okay so now that we know that we're getting our customers right let's display these customers in our component so back in the code I'm going to start returning some HTML for these customers

[6:12] so I'm going to wrap all my customers in a div and I'm going to give that a class name of say customers so all my customers are going to go in here there we go so I'm going to map my customers array so customers.map for each customer object I'm going to return some HTML here all right so I'm going to wrap each customer in a div and things are not Auto completing for me here there we go all right so each customer is going to be in a div and then I'm going to have two divs here one for the name and one for the email

[7:00] and wrap the name why am I not having autocomplete it's very frustrating there we go maybe it'll do it for me now okay so one div for the name one dip for the email still not Auto completing make me type everything out by hand okay so here's going to be the label for my name then the value for my name so we're going to put in the customer object Dot full too many else name there we go alrighty and then here is going to be the email so another div

[7:45] I'm going to say email the customer object Dot email maybe do all that by hand okay so I think that's going to work let's take a look awesome well there they are there's our customers the name and the email okay so that's good for now we'll add some more styling here in a minute so looking back at our wire frame we're also going to be doing the same

[8:30] exact thing for the employees and we're just displaying the name in the email so we're just going to be displaying we're just going to be getting users again but this time where the staff is true so basically right here all of this is going to be the same code as all of these let's look at our code here so remember that we're we're our customers array is just going to be an array of of users so all this code is going to be pretty much exactly the same once we do this for the employees so I think I'm going to break this up into its own component so that we can reuse it at that point so I'm going to create a new directory

[9:19] folder or whatever here in my source directory called user or users and I'm going to create a new component for a user so a user dot JS I'm also going to have some custom styles for this so I'm going to do a user.cess all right so I'm going to create a new component for my user so export const user and I'm just going to take all that code that we're mapping or that we're returning in our map

[10:05] each one of these is just going to be a user component I'm going to take that out add it here so I'm going to copy and paste some CSS here in my CSS file for user and user info now back on my user component I'm going to give this a class name of user and then each one of these labels I'm going to give a class name of user info

[10:51] all right so we have a new user component and we are needing the customer object so instead of this being customer object I think I'd actually rather this be user because we're going to use this for the employees as well so that means I'm going to need a prop for the user now why don't you take some time and render this component where we want to for the customer list and pass in a prop for the user okay so the first thing we would need to do would be to import the user component

[11:37] into our customer list component then we would render that user component for each customer and then we said that we needed a user prop on our user so here we're where we are rendering the user we would create user as the key and then the value would be customer object let's see if it's working all right so back here we're going to give it a refresh and it's still working but it doesn't it doesn't look like I have my styles so let's go back to the code I might have forgotten to import it yep I forgot to import my style sheet okay so I'm going to import

[12:35] there we go so we got our users so now when we look at the component tree in our react Dev tools that's currently not loading we will see app customer list and then probably three user components there we go there's app which is rendering customer list and then customer list is rendering three user components because we had three users in our customer array so let's just take that take a look at that in the code so here we have app which is rendering our our customer list component then customer list is getting all of our users from the database that are non-staff then we are mapping for all those users we are going to render a user component

[13:21] and so that is how we understand this component tree here in the dev tools so great job with this move on to the next chapter and we will get the employee list implemented

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
