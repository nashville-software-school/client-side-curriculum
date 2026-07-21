In this chapter you will begin modularizing your code by creating a `services` directory for interacting with the API and you will learn how to use the `useEffect` <analogy>hook</analogy>.

## 📺 Watch The Video
Watch the **All Tickets** video below and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

<iframe name="yt-ex05" src="https://www.youtube.com/embed/hoaH8RQjQBo" width="700" height="394" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details>
<summary>📄 Video Transcript — All Tickets</summary>

### Setting Up Services and Fetching Tickets

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=3&autoplay=1" target="yt-ex05">[0:03]</a> All right, now that we have a basic understanding of use State and writing in the JSX syntax, let's begin to start working on the actual functionality of our application. So we're not going to need any of this — all this was just for learning purposes. All right, we're just going to start here fresh with just an MD react fragment. All right, so let's try to get an idea of what we're wanting to build. So taking a look at the wireframe in the previous chapter, we talked about each one of these views here, but we're really just going to focus on this one right here, not worrying about who's logged in, because we don't have any authentication in our application yet.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=48&autoplay=1" target="yt-ex05">[0:48]</a> Or any views — we just want to kind of just kind of create this view here of displaying all the tickets. All right, so in order to do that, we are going to obviously need to fetch our tickets from our database. So we've got JSON server running here on our localhost 8088, and here's our URL for fetching our service tickets. So I'm going to go ahead and copy that. So let's head back to our code, and what we're going to do is we're going to have a separate directory inside of our source directory, and we're going to call services. This is going to be for managing all of our interactions with our API.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=94&autoplay=1" target="yt-ex05">[1:34]</a> So I'm going to create another folder inside of services called ticket service. So any fetch calls that we're going to make to our API that has to do with tickets is going to go here in our ticket service folder or module. All right, so I'm going to create a function to get the tickets. All righty, paste in that URL.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=143&autoplay=1" target="yt-ex05">[2:23]</a> And once we get back our response, we're going to make it readable for us to be able to interact with. There we go. All right, so let's go ahead and get those tickets in our component. So I'm going to create a state variable here for our tickets, so we're going to use new state. So I'm going to have all tickets and set all tickets. Oops, tickets, there we go. All right, now let's just see what happens if we run this right here. So get all tickets.

### Introducing useEffect to Prevent Infinite Re-renders

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=189&autoplay=1" target="yt-ex05">[3:09]</a> And then once we get our tickets back, we will — oops — set all tickets and pass in our tickets array. Also going to add a console log here for. All right, let's take a look at the browser and see, see if that's working. All right, well, you can see here that we're console logging ticket sets in an infinite amount of times — just going and going and going and going and going. So let's take a look at our Network tab, and yeah, we've got thousands of network calls to fetch our tickets. So something didn't quite go the way we wanted it to.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=238&autoplay=1" target="yt-ex05">[3:58]</a> All right, so let's go ahead and get it to stop doing this. Here we learned in the first component video that the set function for a state will trigger a re-render of our component. So let's think about that. If we're setting our tickets here, then we are re-rendering our component, which is then going to run this code again — forget all tickets — and then we'll settle tickets, which will then trigger reruniver component, then we'll get all tickets, set all tickets, and so on, so forth. And that's what's happening right now — we are having an infinite loop of setting our tickets. So how do we prevent this? Well, that is the first use of the use effect hook that I'm going to teach you. So use effect is a hook that we get from.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=283&autoplay=1" target="yt-ex05">[4:43]</a> React, and it already input imported it for me. And use in effect takes two arguments: a function and an array that we call the dependency array. The function is what we want to happen, the array is when we want it to happen. So you can kind of think of this as sort of an event listener. And when we have an empty dependency array, this is telling our use effect: only run this function on the initial render of our component. So runs on initial render of component.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=333&autoplay=1" target="yt-ex05">[5:33]</a> So what do we want to happen on the initial run of our component? Well, we want this to happen. So not only will this cause it to run on the initial render, it causes it to not run on any other additional render. So we're kind of wrapping it in this special little container here that says only runs on the initial render of the component. So that's going to prevent us from having this infinite loop here. All right, now let's take a look — let's give it a refresh and see what we got to get set. It only happened once! Look at our Network calls — we've got a fetch to service tickets. Now let's take a look at our components, and ragdev tools is kind of funky right.

### Building the Ticket JSX

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=379&autoplay=1" target="yt-ex05">[6:19]</a> Now so sometimes we have to get a refresh and there's our state. So we look at our state, we can see there's all of our tickets. Now let's start building out the JSX for our tickets. So looking here, I think I'm just going to start with the ticket number, the description, and whether it's an emergency or not. I'm not going to worry about the assignee right now, because that's going to take some additional logic — considering that an assignee is going to be this employee ticket here, and then we're going to be able to get the name. We'll worry about that in a later chapter. Also not going to worry about any of the buttons or not, because these buttons are going to have to do with the user being logged in. So I'm going to want these service ticket ID, the description, and the emergency is a.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=426&autoplay=1" target="yt-ex05">[7:06]</a> Boolean. So if it's an emergency, that'll be true, and if it's not, it'll be false. So let's start building this out. I'm going to start by — I'm going to want to style my tickets here, so I'm going to create a app.css for managing all my styles here. Oops, that just says CS Dot c s s. There we go. All right, so I'm just going to copy and paste these styles that we provided here. There we go. Now back in my app.js I'm going to start flushing this out. Okay, so I'm going to have a div, maybe the class name of tickets container.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=477&autoplay=1" target="yt-ex05">[7:57]</a> And we're going to have an H2. Here we go. All right, this is going to say tickets. All right, and then I'm going to have an article wrap all of my tickets here. So we're going to say class name is going to be tickets. Oops, I can't spell tickets for some reason. There we go. All right, I'm going to save this just so I can get some formatting better. Okay, so now I'm going to map all of my tickets to create some JSX for each one of them. So all tickets dot map. So for each ticket I'm going to.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=526&autoplay=1" target="yt-ex05">[8:46]</a> Return some JSX. I'm going to do a section, so each ticket is going to be in a section. So we'll call it class name, it's going to be ticket. All right, and I'm going to put the ticket ID in a header. I'm just going to do a header here. We'll say class name will be ticket info. So inside of here I want the number and I want the ticket dot ID. All right, then I'm going to have a div for the description, and that's just going to be ticket dot description.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=576&autoplay=1" target="yt-ex05">[9:36]</a> And then I'm going to put all the rest of that information in the footer. And for styling I'm going to have a div here, because all of my footer information is going to go here. I'm going to create a div for my emergency. All right, and we're going to give that a class name of ticket info — say emergent see. And then right here I'm going to have whether or not it's an emergency. So if the ticket is an emergency, I want the word yes to display, and if it's not an emergency, I want it to say no. So I'm going to write a ternary here. So I can say ticket dot emergency.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=623&autoplay=1" target="yt-ex05">[10:23]</a> I have a kind of a question here — oh, well, I got to do this in the JavaScript brackets here because we're writing a JavaScript script, a JavaScript expression. All right, so ticket dot emergency: if so, we want yes, otherwise we want no. Let's see what we got — head to my browser here, give it a good refresh. All right, there's some tickets, except one thing — they're not styled. And I think that's because I forgot to import my CSS. So all I have to do here is type import, and I want to — I need the from.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=669&autoplay=1" target="yt-ex05">[11:09]</a> And we're going to do app.css. Except that didn't quite work. Maybe we don't need the from — oh, we don't need the from, my bad! All right, let's take a look again. Awesome, that looks better. All right, so we've got cracked phone emergency no, Xbox has red ring of death emergency yes, and we got some more tickets here and they all look great. All right, as I look here in my dev tools, I can see that I have an error. So let's see what that says. It says warning: each child in a list should have a unique key prop. So what that's saying is that react likes to have a way to identify each element here.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=714&autoplay=1" target="yt-ex05">[11:54]</a> So if we ever update anything, or if something does update, it knows which one to update. So we're going to add a key prop to each one of these elements here. So we're going to head back to the code, and we need to add it to the — if we're mapping something, that's usually when we're going to have this error. Since we're mapping all these tickets and we're returning some JSX for each one of these tickets, we need to add a key prop to the uppermost level or the parent element of this component. So we're going to have key right here, and we want to give it some unique identifier, which in this case would be the ticket ID. All right, so that should solve our error here. Let's give it a refresh and we're all good. Okay, so now I would like to implement this emergency and show all button. So if.

### Filtering Tickets with a Toggle

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=762&autoplay=1" target="yt-ex05">[12:42]</a> It's — we click on emergency, which — you know, the wireframe doesn't do anything — but if we click on emergency, we only want the emergency tickets to display, which would be these ones here — anyone that says yes. And if we click on show all, then we want it to show all the tickets. So I'm going to start by having a state variable — all the value of whether or not we want to show emergency or not. It's going to act as sort of a toggle for this functionality. So const show emergency and set show emergency.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=812&autoplay=1" target="yt-ex05">[13:32]</a> And we're going to have the initial value for this be false. We want to by default not show emergency only — actually, that's what I'm going to say here, emergency only. I like that better. All right, now let's make our emergency button. So I'm going to wrap this in a div so I can work on the alignment of these buttons here. All right, now I'm going to add a button, and we're going to give it a class name of filter button. And I'm going to make this one button — oops — button primary. All righty, and this is going to be emergency. I want that to be capital E. There we go.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=859&autoplay=1" target="yt-ex05">[14:19]</a> No thank you, VS Code. Okay, so whenever we click on this button, we want show emergency to be set to true. So I'm going to put an on click right on this button, and since I'm not going to have like a bunch of functionality in this — in this button, or in this — in this function, I'm just going to go ahead and add it in here. So on click, I want to set show emergency only to true. All right, now let's watch the dev tools and see if that works. So back here, and our components — take a look at our app, and it's going to be stupid. So let's give it a refresh.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=905&autoplay=1" target="yt-ex05">[15:05]</a> Still being stupid. There we go. Okay, cool, so here's our show emergency only state. So if we click on emergency, that should change to true. It did! Awesome. Now we just need a button to say — um, what was it — show all. Now I just want a button to say show all, and when we click on that button, we want it to set show emergency only to false. So why don't you try to go ahead and give that a go. All right, did you get it working? So if you did get it working, you should see something like this.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=951&autoplay=1" target="yt-ex05">[15:51]</a> When we click on emergency we have true, we click on show all false, true, false, true, and false. Okay, cool. All righty, so what we did was we just added another button here. I made mine button info to make it that color. And then I added an on click here, and on the click I wanted to set show emergency only to false. All right, so now I want to watch for when the value of show emergency only changes. So when this value changes, I want to filter the tickets of either just the emergency tickets or all the tickets.

### Managing filteredTickets and the Component Lifecycle

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=996&autoplay=1" target="yt-ex05">[16:36]</a> Depending on the value of show emergency only. So this is where the use effect comes in again. So as I stated before, use effect is a function or a hook that takes two arguments: a function and an array. The function is what we want to happen, and what's — depending on what's inside the array — is when we want it to happen. So when the array is empty, then this function will run only on the initial render. Now everything else that we pass into it will run whenever the value of that thing changes. So I want this function to run when show emergency only changes.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1043&autoplay=1" target="yt-ex05">[17:23]</a> So I put show emergency only in the dependency array. So whenever show emergency only changes, this function will run. So let's just start with the console log that says show emergency changed. I cannot type today — changes, changed. There we go. All right, let's see if that works. Head back to my browser, just refresh the page here. All right, if I click emergency — oh, not on the console tab — show emergency, show — I can't say that — show emergency changed, then changed again, and again, and again, and again, and again. Awesome, so anytime that value.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1089&autoplay=1" target="yt-ex05">[18:09]</a> Changes, that function will run. All right, so what do I really want to happen when show emergency only changes? Well, we're going to write a condition here. If show emergency only is true — so we could either just have if show emergency only, or we could say equals true, but we can just have it be this way because it's a Boolean, right. So if show emergency only, then we want to filter our tickets for just the emergency ones. So I'm going to say const emergency tickets, and we're going to say is equal to all tickets. We're going to filter all those tickets.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1138&autoplay=1" target="yt-ex05">[18:58]</a> And we only want the tickets where the ticket — for each ticket — where the ticket dot emergency is equal to true. I keep doing that — true. Once again I could just leave off this last part here — if ticket.emergency is true. There we go. All righty, so then I want to — well, we'll set all my tickets, set all tickets with emergency tickets. All right, and then else — so if it's false then we'll set all tickets to be all tickets. I guess let's see what happens.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1184&autoplay=1" target="yt-ex05">[19:44]</a> Click emergency. There we go, we get all the emergency. So if we click show all — hmm, well, it doesn't look like we're getting all of our tickets back. Let's watch that again. So here's my state for all of my tickets. So then when I set show emergency to true, it filters those tickets down. So now we can see there's this many left, right — this is our all tickets. Well, then if we click it again, it's going to run our use effect again, and we're going to set all tickets. But the value of all tickets at this point is only the emergency tickets. So we're going to want another state to hold our filter tickets, because otherwise we're filtering this down, and.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1230&autoplay=1" target="yt-ex05">[20:30]</a> Then we're losing all of our other tickets. So let's do that. All right, so we're going to have const — we're going to call this filtered tickets and set filtered tickets. All righty, and we'll say instead of set all tickets, we'll set filter tickets. All right, save that. And now let's check here again. So we'll look at our components one more time. So now we have all tickets and we have filtered tickets, which is an empty array.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1276&autoplay=1" target="yt-ex05">[21:16]</a> Here. Okay, and so if we click on emergency, looks like we get our filter tickets to be just the ones that are emergency. And if we show all tickets, then our filtered tickets change, and now we have them. All right, the last step is just to display those filter tickets, so we can map them out. Because currently we're only mapping — or, currently we are mapping our all tickets. So instead of all tickets, we want to map our filtered tickets. Okay, let's take a look and give it a refresh. Uh oh, hmm — getting cannot read properties of undefined reading map. Okay, remember, that's that weird error.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1323&autoplay=1" target="yt-ex05">[22:03]</a> That means we're trying to map something that is undefined, right? All right, so let's take a look at what's happening. So obviously that error is this line right here, right? Because this is the only thing that we're mapping is our filter tickets. Now this is where understanding the life cycle of React is important. So our filter tickets is apparently undefined, right? We refreshed the page, we rendered our component, and we got cannot read properties of undefined reading map — which is meaning that filter tickets is undefined. All right, so when we render our component on the initial render, the component is going to define these state variables here, define all of our state. And then anywhere we're using.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1369&autoplay=1" target="yt-ex05">[22:49]</a> State, it's going to render with that initial value first — until we inevitably, or if we ever do, change our state value. Well, the initial value for filter tickets is undefined. We forgot to pass it an empty array. That's why it's important to give your state an initial value of what you expect that state to be, right? We're expecting filter tickets to be an array, right, because we're going to map it. So we need to give our initial value an empty array. If we don't give it that — we give it nothing — then we get that error: cannot read properties of undefined reading map. All right, so let's give it an empty array. Now let's go back.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1415&autoplay=1" target="yt-ex05">[23:35]</a> And while we've got this — so we're not breaking our code now — but now we're getting nothing on the screen. Let's see here. So if we click on emergency, well, we get our emergency tickets. So that's interesting — we get all of our tickets, and now we can go back and forth now. But on our initial render we're getting an empty array. All right, so let's dive into the life cycle and see if we can figure out what's going on. Our initial render: we define all of our state, we render our JSX, then we also run all of our use effects. So yes, both of these will run on the initial render — this one will run only on the initial render, this one will run on the initial render and whenever show emergency only.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1461&autoplay=1" target="yt-ex05">[24:21]</a> Changes. So we run this use effect right to get all of our tickets. Remember that fetching our tickets is asynchronous, right? It's — this is going to be happening while everything else is happening at the same time. All right, then in the meantime we're also running this use effect. So if show emergency only — so on our initial render it's false — so let me get to our else — and then we set filter tickets with all of our tickets. Well, what is the value of all tickets? It's an empty array. So until show emergency only changes — which is what we saw when we would click the button — this won't run again. So the way to fix this is to add all tickets here. So that way, whenever show emergency only changes, or whenever all.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1508&autoplay=1" target="yt-ex05">[25:08]</a> Tickets changes, then we will run this use this function again. And then we will be able to set filter tickets with all the tickets, because once — once this finishes — we set all tickets and get all of our tickets back from our API. If we have our all tickets here in the dependency rate, it's going to run this again. Show emergency only will still be false on our initial render, right — we haven't clicked the button yet — and then we'll be able to set this with all the tickets that got back. Now there is this green squiggly line here that's going to also kind of give us a hint that we want to do this. It says react hook of react hook use effect has a missing dependency all tickets, either include it or remove the dependency ray. We don't want to remove the dependency array. You can also replace — multiple blah blah blah blah blah. Okay, so it's telling us.

<a href="https://www.youtube.com/embed/hoaH8RQjQBo?start=1554&autoplay=1" target="yt-ex05">[25:54]</a> We have a missing dependency, that's all tickets. And it knows that because, well, here's some state that we're depending on with this function, right? We're depending on all tickets here, we're also depending on emergency only. So we need to add that here. So all tickets. All right, now let's take a look at our browser. Well, there we go! So now we're getting it on our initial render. Now we can click on emergency, we click on show all, everything's working, right? And I know that's a lot to understand, but the more you practice, the more sense it will make. So great job and keep on coding.

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
