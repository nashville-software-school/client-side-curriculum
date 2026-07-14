# Writing Your First React Component
In this chapter you will learn how to write a basic React functional component, write with the `JSX` syntax, and utilize the `useState` hook. 

## 📺 Watch The Video
### ⚠️ Important note on the videos: 
These videos were recorded before a change to the course. There will be a few differences between your project and the one in the video: 
1. Your javascript files will end in `.jsx` instead of `.js`. 
2. Your `index.html` is in the root of the project instead of in a `public` folder.
3. You have `main.jsx` instead of `index.jsx`
4. Lastly you have two more files in your root that are not in the video: `.eslintrc.cjs` and `vite.config.js`. You will not need to modify or do anything with these.

Keep these differences in mind as you follow along in this course.

Watch the <a href="https://youtu.be/-WMvlULvBeU" target="_blank" rel="noopener noreferrer">First Component</a> video and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

<details>
<summary>📄 Video Transcript — First Component</summary>

[0:04] welcome to the first chapter of learning react with honey Ray repairs So today we're going to just take a look at jsx in the Syntax for writing it and we're also going to dive into the importance of you state and how to use it alrighty so let's jump into the code so in this application you should have a index.js file index CSS and an app.js so we're going to be working in app.js to kind of write some functionality for this component here similar to the components that you wrote in vanilla JavaScript this component just returns some HTML and we use the jsx syntax to write that HTML all right and so here we've got just what it what

[0:49] the starter code gave us let's try let's try creating some of our own stuff here so if I want an H1 to be returned here I can just go ahead and type H1 just like you would with HTML we'll say hello all right so now if I take a look at my browser I can see it there's my hello and if I look at my elements tab I can also kind of dive in here and see that yep there it is HTML that got rendered from our jsx cool so let's say I want to add another thing here like um maybe a div right that says this is amazing well now we're getting some kind of error here

[1:34] let's see what does it say it says jsx Expressions must have one parent element okay well similar to other JavaScript functions that return something you you wouldn't return two values right you wouldn't return three and four you can only return one thing that's kind of what's Happening Here we can't just have these these elements you know being Rowdy without any supervision we need to wrap it in a parent element so let's do that we can go ahead and wrap that in a div and here we go oops there we go let's wrap that in a div cool and now look at how beautiful and formatted that is thank you format on Save

[2:20] all right so now when I go to my browser I can see yep there's my div for the parent element there's my hello and there is my div for this is amazing okay well if I didn't want to have this extra div here I could also use something called a react fragment in order to wrap all of my other elements so react fragment is just an open and close angle bracket like that so that kind of solves our problem with with wrapping our elements in a parent element especially if we didn't maybe for formatting reasons or styling or you know the layout of our page didn't want to have um an HTML element actually rendered there on the Dom okay the only thing about a react fragment is we can't add any styles to

[3:05] it because of course we can add styles to something that doesn't exist because when this gets rendered it won't exist all right let's add some functionality to this so I'm going to add a button and anytime I click on that button I want to see the count for that button to on my page all right so let's go ahead and add a button and it'll say click me awesome all right now back in vanilla JS maybe we would in order to do something whenever we clicked on this button we would add an event listener and listen for a click and then we'd pass a function and then whenever that there was a click we would do a thing well the awesome thing here with JavaScript is weak or with jsx is we can

[3:53] just add an event listener right here on our button so we can just add on click all right now I open up some curly braces here because I'm going to be passing in some JavaScript so I want to run a function whenever this button gets clicked so I can pass a function or write a function just like this right pass an anonymous function here but I'd like to keep my code clean so I'm going to actually Define a function so I'm going to say const handle button click and to start off why don't we just console log anytime this button is clicked all right let's get rid of this there we go

[4:40] Okie dokies so anytime this button is clicked I want to run this function here now it's important don't invoke the function when you pass it in here to the on click because then we'd be passing the return value of this function because we're invoking it we want to pass the function itself so that it can be invoked when this button is clicked all right let's see if this works Oh Our button's Kind of ugly isn't it why don't we add some styling to it okay well lucky for us already got some custom Styles built in here and I think I want to make this button let's make it blue so I'm going to add this class to it right here button secondary so to do that I just used the class name attribute

[5:26] so the difference here is that instead of class we're adding class name all right now when I head to my browser awesome my button looks good it's even got a nice little hover on it all right let's look at the console and see if this works clicked clicked clicked yay look it's working we're getting a count but we actually want to see it here on the page so why don't we get that started okay well what if we just I don't know declared a variable here like count and set it equal to zero and then anytime that count incremented right or anytime we clicked on this button we increment that count

[6:12] all right now I just need to display my count in our jsx okay so I'm going to create a div here and we'll just say count and now since I want to render this value here this JavaScript value I'm going to open up some curly braces and just write count right here let's take a look cool well there it is there's zero right because that's the initial value that we gave our count um let's see what happens hmm nothing's happening see click is incrementing let's go back here what if we console log our account all right well it looks like our account is

[6:58] incrementing but our count here isn't being updated last because we haven't re-rendered this HTML now on vanilla JavaScript you might have dispatched custom event and then set up an event listener for that event saying hey State changed re-render all the HTML well with react we can actually use the U State hook to handle a lot of that for us so let's try that out all right so we want to store our account in a state variable and we can use the use statehook to do that so use state is a function that we get from react so we have to import it

[7:47] port use state from react awesome and what it returns to us is an array with the index 0 holding the value of our state so we'll just say our state variable and then a function to set our state so Setter function all right I'm just going to use some array just I I'm going to use array deconstruction to pull out those values so we're going to say const I'm going to call my variable count and then my function set count it's usually a good naming convention for state and the setter function first date is

[8:33] just to call it set whatever you named your state so set count awesome so here's my state and then here's my function to set it so instead of incrementing count like this I'm going to set count and I don't want to modify this value directly so I'm just going to pass in count Plus 1. all right now let's take a look okay so we're just currently not seeing anything here but if I count oops looks like we're getting not a number I wonder why that is well let's go back to our code all right so we're saying count plus one but what is the initial value of count

[9:21] well with use date if we want to give our our state variable and initial value we pass that in right here so currently we're not passing in anything so we're actually setting this as undefined to begin with so here we're trying to do undefined plus one which definitely would not be a number that's also why we weren't seeing anything on the page to begin with so let's try passing in 0 here because that's what we want our initial value of count to be all right let's try that again okay I'm going to refresh oh cool now we see there are zero so let's click oh there we go two three four five awesome we just successfully used state

[10:07] all right so why do we need to use the setter function why couldn't we say just increment count like this let's just see what happens if we're going to do that we can't have it a const variable right because we can't change the value so we'll just use let which whenever Define whenever using use state in defining your state you always want to use const but for this example here we'll just Define it as let's see what happens all right so here we've got our account you can click click me and well we can see that it's populating here we can see it incrementing but we're not actually seeing it here on the page that's because the setter function for from you state is what tells react

[10:53] to re-render that component when we invoke the setter function and pass a new value it's saying hey State changed re-rendered the HTML so that's why we want to use the setter function awesome so right now we're const logging to watch the change of our state but instead of doing that we can actually use the react Dev tools so let's do that all right so go to the components tab and here make sure you have apps selected you probably shouldn't have any other components here all right and here we can see our Hooks and we can see state so that's our first state our first and only state that we have defined for this component and currently it's zero so we can actually

[11:38] watch the value increment here one two three it's a little laggy but it's updating awesome so there you have it that is your first component we learned how to render some jsx and we also learned the importance of the use State hook and how we can use it

</details>
 
## Component Structure and <analogy>JSX</analogy>
You've been writing React-like components in vanilla JS, you just didn't know it! Take this code from _Tour Some Sugar On Me_ for example:
```javascript
export const VenuesList = () => {
    const venues = getVenues()

    let html = `
      <ul>
        ${
          venues.map(venue => {
            return `
              <li data-type="venue" 
                data-id="${venue.id}" 
                data-name="${venue.name}" 
                class="venue">${venue.name}
              </li>`
          }).join("")
        }
      </ul>`
    return html
}
```

Here we've written a function that takes some data, `venues`, and converts it into an html string and then returns that html string. Later we invoke this function and render the returned html string in the DOM.

Here's how this code might look as a React functional component:
```jsx
export const VenuesList = () => {
    const [venues, setVenues] = useState([])
    
    /*
      Get the venues and set them using setState
      (We'll cover this in a later chapter)
    */

    return (
      <ul>
        {venues.map(venue => {
          return (
            <li className="venue" key={venue.id}>
              {venue.name}
            </li>
          )
        })}
      </ul>
    )
}
```

See? <analogy>React</analogy> is just Javascript. Just some new, slightly different syntax and much faster to implement! Notice how we don't have to add the `.join("")` to the end our `.map()` method. That's because with <analogy>JSX</analogy> we don't have to convert that returned array to a string!

> Don't worry about trying to understand every bit of the code above, we'll continue to draw comparisons between what we already know and what we're learning in later chapters. 
> 
## <analogy>Event listener</analogy>
<analogy>React</analogy> makes it easy to listen to user-triggered <analogy>events</analogy>.
In the video, you saw an <analogy>event listener</analogy> added right on the element!
In vanilla JS we would have had to write something like this:
```javascript
document.addEventListener('click', (event) => {
  const itemClicked = event.target

  if (itemClicked.dataset.type === "button") {
    console.log("Clicked!")
  }
})

export const App = () => {
  return `<button data-type="button">Click me!</button>`
}
```

But in React, we can add the `onClick` right on the element. All we need to do is give the `onClick` the function we want to run.
```jsx
export const App = () => {

  const handleBtnClick = () => {
    console.log("Clicked!")
  };

  return (
      <button onClick={handleBtnClick}>Click me!</button>
  );
}
```

_Goodbye addEventListener!_

Instead of predefining a function, we could just give our `onClick` an anonymous function like so:

```javascript
export const App = () => {

  return (
      <button onClick={() => { console.log("Clicked!") }}>Click me!</button>
  );
}
``` 

For functions that are single, small operations such as only setting <analogy>state</analogy>, an anonymous function works fine. But if your function is multiple lines of code, it's much cleaner to define a function instead in order to keep our JSX readable and tidy.

## State Changed
Remember back in Book 4 when the <analogy>state</analogy> changed? Think about the times when the user placed a new order or saved a submission, and you had to dispatch a <analogy>custom event</analogy> to notify your application about it. Afterward, you had to write an <analogy>event listener</analogy> for that <analogy>custom event</analogy>, allowing you to update your HTML with the new state. 

That's where the magic of the `useState` <analogy>hook</analogy> comes in. When it comes to defining and managing <analogy>state</analogy> within our <analogy>components</analogy>, `useState` streamlines the process.

```javascript
const [count, setCount] = useState(0) // returns [value, setValueFunction]
```

With `useState`, all we need to do is declare our <analogy>state</analogy> using the <analogy>hook</analogy>. The `useState` function takes a single argument: the initial value we want for our state variable. It then returns an array that we destructure into two parts: our state variable and a function to update that state variable.

When we want to display our state within the JSX, we simply wrap it with curly braces:
```javascript
return (
  <div>Count: {count}</div>
)
```

Now, here's the exciting part. In vanilla JavaScript, whenever we changed the value of state, we'd have to dispatch an event to signal the state change, set up an event listener to catch that event, and then pass a function to update our HTML. However, the `useState` hook provides us with a more elegant solution. When we use the function provided by `useState` to update our state, <analogy>React</analogy> automatically detects the <analogy>state</analogy> change behind the scenes. As a result, <analogy>React</analogy> takes care of <analogy>re-rendering</analogy> our <analogy>component</analogy> for us!

In essence, `useState` simplifies and streamlines the way we handle <analogy>state</analogy> changes, making our <analogy>components</analogy> more efficient and our code more readable.


## 📓 Vocabulary
> **<analogy>React</analogy> Components:**  Independent and reusable blocks of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

> **<analogy>JSX</analogy>:** A JavaScript syntax extension that enables you to write HTML-like markup within a JavaScript file.

> **<analogy>Fragment</analogy>:** Used via `<>...</>` syntax, lets you group elements without a wrapper node. It has no effect on the resulting DOM; it is the same as if the elements were not grouped. 

> **<analogy>React</analogy> Hooks:** Functions provided by the <analogy>React</analogy> library (prefixed with "use") that allow you to "<analogy>hook</analogy>" into <analogy>state</analogy> and lifecycle features of <analogy>components</analogy>.

> **<analogy>useState</analogy>:** A crucial <analogy>React</analogy> Hook that empowers you to introduce <analogy>state</analogy> to a <analogy>component</analogy>. It takes an initial value as its argument and returns an array. This array contains the state value (index 0) and a function (index 1) to modify that state.
