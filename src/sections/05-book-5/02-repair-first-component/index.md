## Writing Your First React Component
In this chapter you will learn how to write a basic React functional component, write with the `JSX` syntax, and utilize the `useState` hook. 

## 📺 Watch The Video
### ⚠️ Important note on the videos: 
These videos were recorded before a change to the course. There will be a few differences between your project and the one in the video: 
1. Your javascript files will end in `.jsx` instead of `.js`. 
2. Your `index.html` is in the root of the project instead of in a `public` folder.
3. You have `main.jsx` instead of `index.jsx`
4. Lastly you have two more files in your root that are not in the video: `.eslintrc.cjs` and `vite.config.js`. You will not need to modify or do anything with these.

Keep these differences in mind as you follow along in this course.

Watch the **First Component** video below and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

<div class="video-transcript-row">

<iframe name="yt-ex02" src="https://www.youtube.com/embed/-WMvlULvBeU" width="700" height="394" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details>
<summary>📄 Video Transcript — First Component</summary>

### Introduction and JSX Basics

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=4&autoplay=1" target="yt-ex02">[0:04]</a> Welcome to the first chapter of learning React with Honey Ray Repairs. So today we're going to just take a look at JSX in the syntax for writing it, and we're also going to dive into the importance of you state and how to use it. Alrighty, so let's jump into the code. So in this application you should have a index.js file, index CSS, and an App.js. So we're going to be working in App.js to kind of write some functionality for this component here. Similar to the components that you wrote in vanilla JavaScript, this component just returns some HTML and we use the JSX syntax to write that HTML. All right, and so here we've got just what it what

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=49&autoplay=1" target="yt-ex02">[0:49]</a> the starter code gave us. Let's try, let's try creating some of our own stuff here. So if I want an H1 to be returned here I can just go ahead and type H1 just like you would with HTML, we'll say hello. All right, so now if I take a look at my browser I can see it, there's my hello. And if I look at my elements tab I can also kind of dive in here and see that, yep, there it is, HTML that got rendered from our JSX. Cool. So let's say I want to add another thing here, like um, maybe a div right that says this is amazing. Well, now we're getting some kind of error here.

### JSX Rules: Parent Elements and Fragments

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=94&autoplay=1" target="yt-ex02">[1:34]</a> Let's see, what does it say? It says JSX expressions must have one parent element. Okay, well, similar to other JavaScript functions that return something, you, you wouldn't return two values, right? You wouldn't return three and four, you can only return one thing. That's kind of what's happening here. We can't just have these, these elements, you know, being rowdy without any supervision. We need to wrap it in a parent element. So let's do that. We can go ahead and wrap that in a div. And here we go, oops, there we go, let's wrap that in a div. Cool, and now look at how beautiful and formatted that is. Thank you, format on save.

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=140&autoplay=1" target="yt-ex02">[2:20]</a> All right, so now when I go to my browser I can see, yep, there's my div for the parent element, there's my hello, and there is my div for this is amazing. Okay, well, if I didn't want to have this extra div here, I could also use something called a React fragment in order to wrap all of my other elements. So a React fragment is just an open and close angle bracket like that. So that kind of solves our problem with, with wrapping our elements in a parent element, especially if we didn't, maybe for formatting reasons or styling or, you know, the layout of our page, didn't want to have um an HTML element actually rendered there on the DOM. Okay, the only thing about a React fragment is we can't add any styles to

### Adding a Button with onClick

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=185&autoplay=1" target="yt-ex02">[3:05]</a> it, because of course we can add styles to something that doesn't exist, because when this gets rendered it won't exist. All right, let's add some functionality to this. So I'm going to add a button, and anytime I click on that button I want to see the count for that button to on my page. All right, so let's go ahead and add a button and it'll say click me. Awesome. All right, now back in vanilla JS, maybe we would, in order to do something whenever we clicked on this button, we would add an event listener and listen for a click, and then we'd pass a function, and then whenever that, there was a click, we would do a thing. Well, the awesome thing here with JavaScript is, we, or with JSX is, we can

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=233&autoplay=1" target="yt-ex02">[3:53]</a> just add an event listener right here on our button, so we can just add on click. All right, now I open up some curly braces here because I'm going to be passing in some JavaScript. So I want to run a function whenever this button gets clicked, so I can pass a function or write a function just like this, right, pass an anonymous function here. But I'd like to keep my code clean, so I'm going to actually define a function. So I'm going to say const handle button click, and to start off, why don't we just console log anytime this button is clicked. All right, let's get rid of this, there we go.

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=280&autoplay=1" target="yt-ex02">[4:40]</a> Okie dokies. So anytime this button is clicked I want to run this function here. Now it's important, don't invoke the function when you pass it in here to the on click, because then we'd be passing the return value of this function because we're invoking it. We want to pass the function itself so that it can be invoked when this button is clicked. All right, let's see if this works. Oh, our button's kind of ugly isn't it, why don't we add some styling to it. Okay, well, lucky for us, already got some custom styles built in here, and I think I want to make this button, let's make it blue. So I'm going to add this class to it right here, button secondary. So to do that I just used the class name attribute.

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=326&autoplay=1" target="yt-ex02">[5:26]</a> So the difference here is that instead of class, we're adding class name. All right, now when I head to my browser, awesome, my button looks good, it's even got a nice little hover on it. All right, let's look at the console and see if this works. Clicked, clicked, clicked. Yay, look, it's working, we're getting a count. But we actually want to see it here on the page, so why don't we get that started. Okay, well, what if we just, I don't know, declared a variable here like count and set it equal to zero, and then anytime that count incremented, right, or anytime we clicked on this button we increment that count.

### Tracking State with useState

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=372&autoplay=1" target="yt-ex02">[6:12]</a> All right, now I just need to display my count in our JSX. Okay, so I'm going to create a div here and we'll just say count, and now since I want to render this value here, this JavaScript value, I'm going to open up some curly braces and just write count right here. Let's take a look. Cool, well, there it is, there's zero, right, because that's the initial value that we gave our count. Um, let's see what happens. Hmm, nothing's happening. See, click is incrementing. Let's go back here. What if we console log our account? All right, well, it looks like our account is

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=418&autoplay=1" target="yt-ex02">[6:58]</a> incrementing, but our count here isn't being updated last because we haven't re-rendered this HTML. Now on vanilla JavaScript you might have dispatched custom event and then set up an event listener for that event saying hey, state changed, re-render all the HTML. Well, with React we can actually use the U State hook to handle a lot of that for us. So let's try that out. All right, so we want to store our account in a state variable and we can use the use state hook to do that. So use state is a function that we get from React, so we have to import it.

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=467&autoplay=1" target="yt-ex02">[7:47]</a> Port use state from React. Awesome. And what it returns to us is an array with the index 0 holding the value of our state, so we'll just say our state variable, and then a function to set our state, so setter function. All right, I'm just going to use some array, just I, I'm going to use array deconstruction to pull out those values. So we're going to say const, I'm going to call my variable count and then my function set count. It's usually a good naming convention for state and the setter function, first date is

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=513&autoplay=1" target="yt-ex02">[8:33]</a> just to call it set whatever you named your state, so set count. Awesome. So here's my state and then here's my function to set it. So instead of incrementing count like this I'm going to set count, and I don't want to modify this value directly so I'm just going to pass in count plus 1. All right, now let's take a look. Okay, so we're just currently not seeing anything here, but if I count, oops, looks like we're getting not a number. I wonder why that is. Well, let's go back to our code. All right, so we're saying count plus one, but what is the initial value of count?

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=561&autoplay=1" target="yt-ex02">[9:21]</a> Well, with use date if we want to give our, our state variable an initial value, we pass that in right here. So currently we're not passing in anything, so we're actually setting this as undefined to begin with. So here we're trying to do undefined plus one, which definitely would not be a number. That's also why we weren't seeing anything on the page to begin with. So let's try passing in 0 here because that's what we want our initial value of count to be. All right, let's try that again. Okay, I'm going to refresh. Oh cool, now we see there are zero. So let's click. Oh, there we go, two, three, four, five. Awesome, we just successfully used state.

### The Setter Function and React Dev Tools

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=607&autoplay=1" target="yt-ex02">[10:07]</a> All right, so why do we need to use the setter function? Why couldn't we say just increment count like this? Let's just see what happens. If we're going to do that, we can't have it a const variable, right, because we can't change the value, so we'll just use let. Which, whenever, whenever using use state in defining your state you always want to use const, but for this example here we'll just define it. Let's see what happens. All right, so here we've got our account. You can click, click me. And well, we can see that it's populating here, we can see it incrementing, but we're not actually seeing it here on the page. That's because the setter function from you state is what tells React

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=653&autoplay=1" target="yt-ex02">[10:53]</a> to re-render that component. When we invoke the setter function and pass a new value it's saying hey, state changed, re-render the HTML. So that's why we want to use the setter function. Awesome. So right now we're console logging to watch the change of our state, but instead of doing that we can actually use the React Dev Tools. So let's do that. All right, so go to the components tab and here, make sure you have Apps selected. You probably shouldn't have any other components here. All right, and here we can see our Hooks, and we can see state. So that's our first state, our first and only state that we have defined for this component, and currently it's zero. So we can actually

<a href="https://www.youtube.com/embed/-WMvlULvBeU?start=698&autoplay=1" target="yt-ex02">[11:38]</a> Watch the value increment here, one, two, three. It's a little laggy but it's updating. Awesome, so there you have it, that is your first component. We learned how to render some JSX and we also learned the importance of the use State hook and how we can use it.

</details>

</div>
 
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
