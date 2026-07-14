# List all the tickets
In this chapter you will begin modularizing your code by creating a `services` directory for interacting with the API and you will learn how to use the `useEffect` <analogy>hook</analogy>.

## 📺 Watch The Video
Watch the <a href="https://youtu.be/hoaH8RQjQBo" target="_blank" rel="noopener noreferrer">All Tickets</a> video and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

<details>
<summary>📄 Video Transcript — All Tickets</summary>

[0:03] all right now that we have a basic understanding of use State and writing in the jsx syntax let's begin to start working on the actual functionality of our application so we're not going to need any of this all this was just for learning purposes all right we're just going to start here fresh with just an MD react fragment all right so let's try to get an idea of what we're wanting to build so taking a look at the wireframe in the previous chapter we talked about each one of these views here but we're really just going to focus on this one right here not worrying about who's logged in because we don't have any authentication in our application yet

[0:48] or any views we just want to kind of just kind of create this view here of displaying all the tickets all right so in order to do that we are going to obviously need to fetch our tickets from our database so we've got Json server running here on our localhost 8088 and here's our URL for fetching our service tickets so I'm going to go ahead and copy that so let's head back to our code and what we're going to do is we're going to have a separate directory inside of our source directory and we're going to call services this is going to be for managing all of our interactions with our API

[1:34] so I'm going to create another folder inside of services called ticket service so any fetch calls that we're going to make to our to our API that has to do with tickets is going to go here in our ticket service folder or module all right so I'm going to create a function to get the tickets alrighty paste in that URL

[2:23] and once we get back our response we're going to make it readable for us to be able to interact with there we go all right so let's go ahead and get those tickets in our component so I'm going to create a state variable here for our tickets so we're going to use new state so I'm going to have all tickets and set all tickets oops tickets there we go all right now let's just see what happens if we run this right here so get all tickets

[3:09] and then once we get our tickets back we will oops set all tickets and pass in our tickets array also going to add a console log here for all right let's take a look at the browser and see see if that's working all right well you can see here that we're console logging ticket sets in infinite amount of times just going and going and going and going and going so let's take a look at our Network tab and yeah we've got thousands of network calls to fetch our tickets so something didn't quite go the way we wanted it to

[3:58] all right so let's go ahead and get it to stop doing this here we learned in the first component video that the set function for a state will trigger a re-render of our component so let's think about that if we're setting our tickets here then we are re-rendering our component which is then going to run this code again forget all tickets and then we'll settle tickets which will then trigger reruniver component then we'll get all tickets set all tickets and so on so forth and that's what's happening right now we are having an infinite Loop of setting our tickets so how do we prevent this well that is the first use of the use effect hook that I'm going to teach you so use effect is a hook that we get from

[4:43] react and it already input imported it for me and use in effect takes two arguments a function and an array that we call the dependency array the function is what we want to happen the array is when we want it to happen so you can kind of think of this as sort of an event listener and when we have an empty dependency array this is telling our use effect only run this function on the initial render of our component so runs on initial render of component

[5:33] so what do we want to happen on the initial run of our component well we want this to happen so not only will this cause it to run on the initial render it causes it to not run on any other additional render so we're kind of wrapping it in this special little container here that says only runs on the initial render of the component so that's going to prevent us from having this infinite Loop here all right now let's take a look let's give it a refresh and see what we got to get set it only happened once look at our Network calls we've got a fetch to service tickets now let's take a look at our components and ragdev tools is kind of funky right

[6:19] now so sometimes we have to get a refresh and there's our state so we look at our state we can see there's all of our tickets now let's start building out the jsx for our tickets so looking here I think I'm just going to start with the ticket number the description and whether it's an emergency or not I'm not going to worry about the assignee right now because that's going to take some additional logic considering that an assignee is going to be this employee ticket here and then we're going to be able to get the name we'll worry about that in a later chapter also not going to worry about any of the buttons or not because these buttons are going to have to do with the user being logged in so I'm going to want these service ticket ID the description and the emergency is a

[7:06] Boolean so if it's if it's an emergency that'll be true and if it's not it'll be false so let's start building this out I'm going to start by I'm going to I'm going to want to style my tickets here so I'm going to create a app.css for managing all my Styles here oops that just says CS Dot c s s there we go all right so I'm just going to copy and paste these styles that we provided here we go now back in my app.js I'm going to start flushing this out okay so I'm going to have a div maybe the class name of tickets container

[7:57] and we're going to have an H2 here we go all right this is going to say tickets all right and then I'm going to have an article wrap all of my tickets here so we're gonna say class name is going to be tickets oops I can't spell tickets for some reason there we go all right I'm going to save this just so I can get some formatting better okay so now I'm going to map all of my tickets to create some jsx for each one of them so all tickets dot map so for each ticket I'm going to

[8:46] return some jsx I'm going to do a section so each ticket is going to be in a section so we'll call it class name it's going to be ticket all right and I'm going to put the ticket ID in a header I'm just going to do a header here we'll say class name will be ticket info so inside of here I want the number and I want the ticket dot ID all right then I'm going to have a div for the description and that's just going to be ticket dot description

[9:36] and then I'm going to put all the rest of that information in the footer and for styling I'm going to have a div here because all of my all my footer information is going to go here I'm going to create a div for my emergency all right and we're going to give that a class name of ticket info say emergent see and then right here I'm going to have whether or not it's an emergency so if the ticket is an emergency I want the word yes to display and if it's not an emergency I want it to say no so I'm going to write a ternary here so I can say ticket dot emergency

[10:23] I have a kind of a question here oh well I got to do this in the JavaScript brackets here because we're writing a JavaScript script A JavaScript expression all right so ticket dot emergency if so we want yes otherwise we want no let's see what we got head to my browser here give it a good refresh all right there's some tickets except one thing they're not styled and I think that's because I forgot to import my CSS so all I have to do here is type import and I want to I need the from

[11:09] and we're going to do app.css except that didn't quite work maybe we don't need the from oh we don't need the from my bad all right let's take a look again awesome that looks better all right so we've got cracked phone emergency no Xbox has red ring of death emergency yes and we got some more tickets here and they all look great all right as I look here in my Dev tools I can see that I have an error so let's see what that says it says warning each child in a list should have a unique key prop so what that's saying is that react likes to have a way to identify each element here

[11:54] so if we ever update anything or if something does update it knows which one to update so we're going to add a key prop to each one of these elements here so we're gonna head back to the code and we need to add it to the if we're mapping something that's usually when we're going to have this error since we're mapping all these tickets and we're returning some jsx for each one of these tickets we need to add a key prop to the uppermost level or the parent element of this component so we're going to have key right here and we want to give it some unique identifier which in this case would be the ticket ID all right so that should solve our error here let's give it refresh and we're all good okay so now I would like to implement this emergency and show all button so if

[12:42] it's we click on emergency which you know the wireframe doesn't do anything but if we click on emergency we only want the emergency tickets to display which would be these ones here anyone that says yes and if we click on show all then we want it to show all the tickets so I'm going to start by having a state variable all the value of whether or not we want to show emergency or not it's going to act as sort of a toggle for this functionality so const show emergency and set show emergency

[13:32] and we're going to have the initial value for this be false we want to by default not show emergency only actually that's what I'm going to say here emergency only I like that better all right now let's make our emergency button so I'm going to wrap this in a div so I can work on the alignment of these buttons here all right now I'm going to add a button and we're going to give it a class name of filter button and I'm going to make this one button oops button primary alrighty and this is going to be emergency I want that to be capital E there we go

[14:19] no thank you vs code okay so whenever we click on this button we want show emergency to be set to true so I'm going to put an on click right on this button and since I'm not going to have like a bunch of functionality in this in this button or in this in this function I'm just going to go ahead and add it in here so on click I want to set show emergency only to true all right now let's watch the dev tools and see if that works so back here and our components take a look at our app and it's going to be stupid so let's give it a refresh

[15:05] still being stupid there we go okay cool so here's our show emergency only state so if we click on emergency that should change to true it did awesome now we just need a button to say um what was it show all now I just want a button to say show all and when we click on that button we want it to set show emergency only to false so why don't you try to go ahead and give that a go all right did you get it working so if you did get it working you should see something like this

[15:51] when we click on emergency we have true we click on show all false true false true and false okay cool alrighty so what we did was we just added another button here I made mine button info to make it that color and then I added an on click here and on the click I wanted to set show emergency only to false all right so now I want to watch for when the value of show emergency only changes so when this value changes I want to filter the tickets of either just the emergency tickets or all the tickets

[16:36] depending on the value of show emergency only so this is where the use effect comes in again so as I stated before use effect is a function or a hook that takes two arguments a function and an array the function is what we want to happen and what's depending on what's inside the array is when we want it to happen so when the array is empty then this function will run only on the initial render now everything else that we pass into it will run whenever the value of that thing changes so I want this function to run when show emergency only changes

[17:23] so I put show emergency only in the dependency array so whenever show emergency only changes this function will run so let's just start with the console log that says show emergency changed I cannot type today changes changed there we go all right let's see if that works head back to my browser just refresh the page here all right if I click emergency oh not on the console tab show emergency show I can't say that show emergency show emergency changed then change again and again and again and again and again and again awesome so anytime that value

[18:09] changes that function will run all right so what do I really want to happen when show emergency only changes well we're gonna write a condition here if show emergency only is true so we could either just have if show emergency only or we could say equals true but we can just have it be this way because it's a Boolean right so if show emergency only then we want to filter our tickets for just the emergency ones so I'm going to say const emergency tickets and we're going to say is equal to all tickets we're gonna filter all those tickets

[18:58] and we only want the tickets where the ticket for each ticket wear the ticket dot emergency is equal to true I keep doing that true once again I could just leave off this last part here if ticket.emergency is true there we go all righty so then I want to well we'll set all my tickets set all tickets with e emergency tickets all right and then else so if it's false then we'll set all tickets to be all tickets I guess let's see what happens

[19:44] click emergency there we go we get all the emergency so if we click show all hmm well doesn't like like we're getting all of our tickets back let's watch that again so here's my state for all of my tickets so then when I set show emergency to true it filters those tickets down so now we can see there's this many left right this is our all tickets well then if we click it again it's going to run our use effect again and we're going to set all tickets but the value of all tickets at this point is only the emergency tickets so we're going to want another state to hold our filter tickets because otherwise we're filtering this down and

[20:30] then we're losing all of our other tickets so let's do that all right so we're going to have const we're going to call this filtered tickets and set filtered tickets alrighty and we'll say instead of set all tickets will set filter tickets all right save that and now let's check here again so we'll look at our components one more time so now we have all tickets and we have filtered tickets which is an empty array

[21:16] here okay and so if we click on Emergency looks like we get our filter tickets to be just the ones that are emergency and if we show all tickets then our filtered tickets change and now we have them all right the last step is just to display those filter tickets so we can map them out because currently we're only mapping or currently we are mapping our all tickets so instead of all tickets we want to map our filtered tickets okay let's take a look and give it a refresh uh oh hmm getting cannot read properties of undefined reading map okay remember that's that weird error

[22:03] that means we're trying to map something that is undefined right all right so let's take a look what's happening so obviously that error is this line right here right because this is the only thing that we're mapping is our filter tickets now this is where understanding the life cycle of react is important so our filter tickets is apparently undefined right we refreshed the page we rendered our component and we got cannot read properties of undefined reading map which is meaning that filter tickets is undefined all right so when we render our component on the initial render the component it's going to Define these State variables here Define all of our state and then anywhere we're using

[22:49] State it's going to render with that initial value first until we inevitably or if we ever do change our state value well the initial value for filter tickets is undefined we forgot to pass it an empty array that's why it's important to give your state an initial value of what you expect that state to be right we're expecting filter tickets to be an array right because we're going to map it so we need to give our initial value an empty array if we don't give it that we give it nothing then we get that error cannot read properties of undefined reading map all right so let's give it an empty array now let's go back

[23:35] and while we've got this so we're not breaking our code now but now we're getting nothing on the screen let's see here so if we click on emergency well we we get our emergency tickets so that's interesting we get all of our tickets and now we can go back and forth now but on our initial render we're getting an empty array all right so let's dive into the life cycle and see if we can figure out what's going on our initial render we Define all of our state we render our jsx then we also run all of our use effects so yes both of these will run on the initial render this one will run only on the initial render this one will run on the initial render and whenever show emergency only

[24:21] changes so we run this use effect right to get all of our tickets remember that fetching our tickets is asynchronous right it's this is going to be happening while everything else is happening at the same time all right then in the meantime we're also running this use effect so if show emergency only so on our initial render it's false so let me get to our else and then we set filter tickets with all of our tickets well what is the value of all tickets it's an empty array so until show emergency only changes which is what we saw when we would click the button this won't run again so the way to fix this is to add all tickets here so that way whenever show emergency only changes or whenever all

[25:08] tickets changes then we will run this use this function again and then we will be able to set filter tickets with all the tickets because once once this finishes we set all tickets and get all of our tickets back from our API if we have our all tickets here in the dependency rate it's going to run this again show emergency only will still be false on our initial render right we haven't clicked the button yet and then we'll be able to set this with all the tickets that got back now there is this green squiggly line here that's going to also kind of give us a hint that we want to do this it says react hook of react hook use effect has a missing dependency all tickets either include it or remove the dependency Ray we don't want to remove the dependency array you can also replace multiple blah blah blah blah blah okay so it's telling us

[25:54] we have a missing dependency that's all tickets and it knows that because well here's some state that we're depending on with this function right we're depending on all tickets here we're also depending on emergency only so we need to add that here so all tickets all right now let's take a look at our browser well there we go so now we're getting it on our initial render now we can click on emergency we click on show all everything's working right and I know that's a lot to understand but the more you practice the more sense it will make so great job and keep on coding

</details>

### 🔸🔻🔹 CSS for this chapter
<details>
  <summary>App.css</summary>

  ```css
    .tickets {
      display: flex;
      flex-direction: column;
    }

    .tickets-container {
      margin: 1rem 5rem 0rem 5rem;
    }

    .tickets-container > h2 {
      margin-top: 0;
    }

    .ticket {
      background-color: var(--white);
      border: 1px solid var(--outline);
      margin: 0.5rem 0;
      border-radius: 0.5rem;
      padding: 0.5rem;
    }

    /* This targets all the child elements of the element with the .ticket class */
    .ticket > * {
      padding: 0.5rem;
    }

    .ticket-info {
      color: var(--outline);
      font-family: "Roboto", sans-serif;
    }

    /* This targets any footer element that is a child of an element with the .ticket class */
    .ticket > footer {
      display: flex;
      border-top: 1px solid var(--outline);
      align-items: center;
      justify-content: space-between;
    }

    /* This targets any element that is a child of a footer that is a child of an element with the .ticket class */
    .ticket > footer > * {
      flex-basis: 22%;
    }

    .filter-btn {
      margin-right: 2rem;
    }
  ```
</details>

## The services module
There are many ways to structure your code, and React leaves the choice of file organization to you. However, it's important to keep your code organized and maintainable. For this project, we'll adopt a practice of centralizing our `fetch` call functions within a services module. These functions will be divided into separate files for each resource. As we continue to build this application, you'll see why this choice was necessary to maintain a clean, organized codebase.

## useState Initial Value
In the video we saw what happens when we _don't_ set an initial value for our state variable. 

```javascript
export const App = () => {
  const [allTickets, setAllTickets] = useState()
  
  // useEffect to fetch tickets and set to allTickets on initial render

  return (
    <article className="tickets">
      {allTickets.map(ticket => {
        return // JSX for a ticket
      })}
    </article>
  )
}
```

During the <analogy>initial render</analogy> of a <analogy>component</analogy>, the <analogy>state</analogy> is assigned its initial value. In our example, since no initial value is provided for `allTickets`, our code breaks with this error: 

```sh
Uncaught TypeError: Cannot read properties of undefined (reading 'map')
```

Since we did not give an initial value for `allTickets`, the initial value is `undefined`. Therefore, on the initial render of this component, `.map()` is called on `undefined`, which is a big no-no. To fix this, we give the `allTickets` state an initial value of an empty array. This is necessary because, in our JSX, we assume that `allTickets` will always be an array when displaying it.

## The `Key` <analogy>Prop</analogy>
Another issue we encountered was this warning message:

```sh
Warning: Each child in a list should have a unique "key" prop.
```

When mapping an array in JSX, React wants some way to uniquely identify each element. It asks you to provide a `key` <analogy>prop</analogy> to each item returned within your `map`.

```javascript
return (
  <article className="tickets">
    {allTickets.map(ticket => {
      return (
        <section className="ticket" key={ticket.id}>
          // ticket details
        </section>
      )
    })}
  </article>
)
```

The `key` prop value for each ticket should be its unique identifier, in this case, its id. _Be sure to add the `key` <analogy>prop</analogy> to the parent element._ 
## useEffect
### The Anatomy of useEffect
It's easy to be intimidated by `useEffect`, but it's just more Javascript! Remember that `useEffect` is a <analogy>hook</analogy>, which is a function provided by the <analogy>React</analogy> library enabling us to harness the <analogy>state</analogy> and lifecycle capabilities of <analogy>components</analogy>.

Let's dive into useEffect once more:
```javascript
useEffect(() => {}, [])
```

Looking at this we can see that `useEffect` is a function that takes two arguments: A function and an array.

The function is _what_ we want to happen, and the array is _when_ we want it to happen. This function is referred to as a _<analogy>callback function</analogy>_, where it's passed as an argument to another function and invoked within it to perform a specific task. You've used <analogy>callback functions</analogy> before with `addEventListener()`. The array is known as the <analogy>dependency array</analogy>, dictating when the function runs based on changes in the values within the array. With one exception:

### Initial Rendering
In Chapter 2, you learned that invoking the state's setter function triggers a component rerender. However, when calling this function at the component level, it gets triggered during each render leading to excessive rerenders and an infinite loop. You saw this happen in the video with the code below: 

```javascript
export const App = () => {
  const [allTickets, setAllTickets] = useState([])

  getAllTickets().then(ticketsArr => {
    setAllTickets(ticketsArr)
  })

  return // JSX to display allTickets
}
```

In order to prevent this from happening, we can use `useEffect` to run this code _**only** on the <analogy>initial render</analogy>_ of the <analogy>component</analogy>. To do this, we pass an **empty** dependency array to the `useEffect`. This tells the `useEffect`, "Only run this function on the **initial render** of this component."

```javascript
export const App = () => {
  const [allTickets, setAllTickets] = useState([])

  useEffect(() => {
    getAllTickets().then(ticketsArr => {
      setAllTickets(ticketsArr)
    })
  }, []) // When the dependency array is empty, the useEffect is only watching for the initial render of this component.

  return // JSX to display allTickets
}
```

### Watching for State Change
Now, when we include a <analogy>state</analogy> variable in the <analogy>dependency array</analogy>, the `useEffect` <analogy>callback function</analogy> gets executed on **two occasions**. First, on the initial render of the component, and second, whenever the state variable is updated.

```javascript
export const App = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmergency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])

  // useEffect to fetch tickets and set to allTickets on initial render

  useEffect(() => {
    if (showEmergency) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      )
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergency]) // When the dependency contains a state variable, the useEffect is watching for any time the value of that variable changes.

  return // JSX to display emergency toggle buttons and filteredTickets
}
```

Here we added a useEffect to watch for any time the value of `showEmergency` changes. If the value of `showEmergency` changes, the callback function executes. That being said, take a closer look at the code. There's a potential bug here that we witnessed and fixed in the video. Considering this callback function runs on **two** occasions, the first being on the initial render of the component, what issue does this pose for our `filteredTickets` on the initial render? **Hint:** The _initial_ value for `allTickets` is an empty array.

<details>
  <summary>See Answer Below</summary>

  During the initial render of our component, the state variables contain the initial value passed to the `useState` hook. Therefore, the first time the above `useEffect` runs _(during the initial render of the component)_, the value of `allTickets` is an empty array. So when we use `setFilteredTickets` to assign the value of `allTickets`, it's set to an empty array.
</details>

### Watching for multiple state changes
The solution to this problem is to listen for both `showEmergency` _and_ `allTickets` in our `useEffect`. 

```javascript
export const App = () => {
  const [allTickets, setAllTickets] = useState([])
  const [showEmergency, setShowEmergency] = useState(false)
  const [filteredTickets, setFilteredTickets] = useState([])

  // useEffect to fetch tickets and set to allTickets on initial render

  useEffect(() => {
    if (showEmergency) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      )
      setFilteredTickets(emergencyTickets)
    } else {
      setFilteredTickets(allTickets)
    }
  }, [showEmergency, allTickets]) // When the dependency contains multiple state variables, the useEffect is watching for any time any of the values change.

  return // JSX to display emergency toggle buttons and filteredTickets
}
```

Now, with allTickets included in the dependency array, if the value of `showEmergency` ***or*** `allTickets` changes, the callback function gets executed. Once `allTickets` receives its value from the api, this useEffect will execute the callback function, setting `filteredTickets` with the populated array from `allTickets`.

That's a lot, I know. But the more you practice, the more sense it will make. Continue progressing through the course and feel free to revisit this chapter if you need a refresher on how `useEffect` operates.
## 📓 Vocabulary
> **<analogy>Initial Render</analogy>:**
The _first_ time a <analogy>React</analogy> <analogy>component</analogy> renders. On the <analogy>initial render</analogy> of a <analogy>component</analogy>, the <analogy>component</analogy>'s <analogy>state</analogy> variables contain the initial values passed to <analogy>useState</analogy>.

> **<analogy>useEffect</analogy>:**
The <analogy>hook</analogy> that manages the side-effects in functional <analogy>components</analogy>.
It accepts two arguments, a <analogy>callback function</analogy> and a <analogy>dependency array</analogy>. It can watch for the <analogy>initial render</analogy> of the <analogy>component</analogy> or for any changes in <analogy>state</analogy>.

> **<analogy>Dependency Array</analogy>:** 
The second argument passed to the <analogy>useEffect</analogy> <analogy>hook</analogy>. If the array is empty, the <analogy>callback function</analogy> passed to <analogy>useEffect</analogy> executes only on the <analogy>initial render</analogy> of the <analogy>component</analogy>. If the array contains <analogy>state</analogy> variables, the <analogy>callback function</analogy> will execute anytime the value of the passed <analogy>state</analogy> variables change.

> **<analogy>Callback Function</analogy>:**
A function passed as an argument to another function to be later executed.
