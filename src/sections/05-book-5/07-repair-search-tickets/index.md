In this chapter you will practice what you learned in the previous chapters by implementing a search bar for the tickets.

## 📺 Watch The Video

### ⚠️ Note on the video: 
This video instructs you to make the file `components/TicketFilterBar.js`. Make sure your file ends in `.jsx` instead of `.js`.

Watch the **Search Tickets** video below and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

<div class="video-transcript-row">

<iframe name="yt-ex07" src="https://www.youtube.com/embed/WPG09-cUJYg" width="700" height="394" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details>
<summary>📄 Video Transcript — Search Tickets</summary>

### Adding the Search Input and Filter Bar

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=2&autoplay=1" target="yt-ex07">[0:02]</a> Welcome back. In this video we're going to implement the search tickets input bar right here, so let's get started. Now, the first thing I'm going to want to add is an input right underneath my buttons. So we can see here, I've got my first button display right here for emergency, then my second button displaying right here for show all, and both of them are inside of this div. So I'm going to end up making this my filter bar, so I'm going to add a class name filter bar and I'll copy and paste in my new styles here in a minute. Okay, and then I'm also going to add an input inside of my filter bar div right underneath my last button.

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=47&autoplay=1" target="yt-ex07">[0:47]</a> So we're going to create a new input and this input is going to be of type text. So type, there we go, text. I'm going to give it a placeholder of search tickets, and what else is this filter bar need? Oh, it needs a class name. I didn't mean to make so many spaces there. We're going to give it a class name of ticket search. All right, I'm going to close out this input here and save, and hopefully my format works. There we go.

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=97&autoplay=1" target="yt-ex07">[1:37]</a> Now I'm going to go ahead and copy my styles for my filter bar and for my ticket search. I'm not really sure why this keeps happening, there we go. All right, I'm going to paste those right here inside of my ticket CSS, since these are styles for my tickets. All right, so back in ticket list, we're going to start writing functionality for this input. So the goal of this input will be, whenever the user types in a value here, we want to capture that value, and whenever they type in that value, we want to filter the tickets based off of that

### Capturing the Search Term in State

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=142&autoplay=1" target="yt-ex07">[2:22]</a> value. The first thing I want to do is have a way to capture the user's input. So I'm going to declare a new state variable here, we're going to call it search term, clear it with you state, and it's going to be a string. So I'm going to give it an empty, or an initial value of an empty string. Okay, so now whenever the user types into this input field, I want to capture their input and set my search term with it. So I'm going to add an on change right here, so that's whenever the value of our input changes.

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=188&autoplay=1" target="yt-ex07">[3:08]</a> And since, since I'm just going to be setting the value of search term, I'm not going to create a handler function for this, I'll just put it right in here. So for my change, I'm going to need to capture my event, so thankfully the change event will pass our event to our function. All right, so now I'm going to set my search term with the event dot target dot value. If you ever forget how to access the user's input for an event, just console log this event and just take a look at it and see if you can remember how to find that value there. All right.

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=235&autoplay=1" target="yt-ex07">[3:55]</a> So let's see if that's working, need to refresh here. Sometimes the React Dev Tools can be like this, just needed to give it a good refresh. Okay, on my ticket list I can see my new state that I defined, currently it's an empty string. So when I type in here, I should see the value populate there. Hello! Awesome, it's working. Okay, so whenever the value of search term changes, right, we can listen for the, for when this value changes

### Filtering Tickets with useEffect

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=282&autoplay=1" target="yt-ex07">[4:42]</a> I want to filter my tickets with that search term. So I need to know when this changes, right? So we're setting state here, so what can I do to know when the search term state changes? Why don't you take some time and see if you can implement that by yourself? Okay, how'd you do? Did you write a new use effect? Well, we wanted to watch for whenever these search term state changes, so that's a perfect case for the use effect hook. So we're going to write a use effect, remember a use effect takes two arguments, a function and an array,

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=329&autoplay=1" target="yt-ex07">[5:29]</a> the array we call the dependency array. So since I want to watch for whenever search term state changes, I'm going to pass in search term right here to my use effect, and auto formatting did that for me, we'll put that back. Okay, so whenever search term changes, I want to filter my tickets. So I'm going to clear a new variable here, counts const found tickets, and I'm going to filter my all ticket state, because that's what has all the tickets in it. So all ticket stop filter, and one for each ticket I want the ticket where the ticket dot

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=376&autoplay=1" target="yt-ex07">[6:16]</a> description. And I'm going to, I'm going to two lowercase both the description and the search term, that way if the user types any capitals, or if there's any capitals in the description, that it will match on the whole word regardless of case. So two lowercase dot includes, so I want the ticket description to lowercase includes our search term, so search term dot two lowercase, not lost your case. Okay, so now I'm going to set my filter tickets

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=422&autoplay=1" target="yt-ex07">[7:02]</a> with my found tickets, and filter tickets are the tickets that we are displaying here. Okay, great. Now, if you have ESLint enabled, you might see this green squiggly line here, what's it say? It says React hook use effect has a missing dependency, all tickets. So telling us this, because we are using the all tickets state here in our function, we're referencing it, and it's kind of telling us, hey, if all tickets changes, I don't know, you might want to run this again because could cause a bug. And you know what, I'm going to accept its advice. So I'm going to pass in all tickets here. Now we really care about the search term

### Testing the Search Filter

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=467&autoplay=1" target="yt-ex07">[7:47]</a> here. But at the value of all tickets did ever change, we probably would want to run this function again, or it could cause a potential bug depending on the life cycle of this component. Okay, so let's see if that's working. Heading back to the browser, I'm just going to give it a refresh for good measure, and let's type in phone. Okay, phone, phone, phone, awesome. I don't know, what about toilet, see all the people that drop their phone in the toilet, just one, that's good. And Xbox, everything's working. Case, yep, all works.

### Extracting the TicketFilterBar Component

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=514&autoplay=1" target="yt-ex07">[8:34]</a> Okay, so our filter is working, but as you can see, our code is getting longer and longer and more and more complicated, and as we continue on with this project, it's only going to get more and more complicated, especially here when it comes with the tickets. So what I'm going to do is, I'm going to take this filter bar and I want to make it its own component. So I'm going to take out all this code here, I want to create a new module, create a new ticket in that module, or a new component in that module, I'm going to paste this code in here, and then I want to render that component right here instead. Why don't you try doing that?

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=565&autoplay=1" target="yt-ex07">[9:25]</a> All right, I'm going to walk you through this in case you had any trouble. So I'm going to create a new module here, so I'm going to call it ticket filter car, whatever you named it is fine. All right, so I'm going to create a new component, oops, there we go, and I'm going to return from this component. Awesome, now back in ticket list I'm going to render the component

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=611&autoplay=1" target="yt-ex07">[10:11]</a> right here, and it's going to import it for me when I hit tab, so it's imported at the top, and I'm rendering the component right here. All right, but our code is going to be broken, because we've got some errors here in the ticket filter bar. We're missing some things here, we are invoking set show emergency only and set search term state here in this component, but it doesn't know what that is, because we didn't define it here in this component, it's defined in the parent component up here in ticket list. So we want to pass these functions to our ticket filter bar, because that's what the filter bar does, right?

### Passing State Setters as Props

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=658&autoplay=1" target="yt-ex07">[10:58]</a> Okay, so we're going to pass it as props. Now here's the thing about passing props, I always be saw in, was it ticket, yes. Oh, by the way, I'm going to go ahead and get rid of this, we don't need this name anymore, let's go ahead and get rid of that. Where are we rendering our ticket? Oh, I'm in the filter bar, there we go, we can go ahead and get rid of name equals Joe. Okay, so remember that we saw here, when we were passing our props for our ticket, we gave it a key of ticket and the value was ticket object. Well, we can name it the same thing, and it's not going to hurt anything, in fact it can kind of make it easier. So with our filter bar we want to pass set show

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=705&autoplay=1" target="yt-ex07">[11:45]</a> emergency only, we want to set, pass set search term. Now I don't know about you, but naming things is hard enough that I don't want to come up with another name for this thing, so I'm just going to give it, the key is going to be set show emergency only, and the value is going to be the function set show emergency only. The important thing to remember here is that, when we're destruct, when we are destructuring the object, the props object, in this case like ticket, we're passing ticket as the key and ticket object as a value. But when we are destructuring the props object and ticket, we need to make sure that we are pulling the key, here, this name does matter.

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=751&autoplay=1" target="yt-ex07">[12:31]</a> All right, so back in ticket list, I've passed set show emergency only, and then we're going to pass, we're going to pass set term as well, set search term. All right, so now back in my ticket filter, I'm going to destructure that props object and pull the keys that we passed, said show emergency only and set search term. Awesome, so now this should be working, I'm going to go to the browser and check. All right, so bone, yep, looks like it filtered down.

### Testing the Completed Filter Bar and Recap

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=797&autoplay=1" target="yt-ex07">[13:17]</a> And we'll say correct, yep, all good. Now let's just take a look at our filter bar here, so we can see the props. So remember that in our React Dev Tools we can look at the props and the state for our component. So here we can see that we don't have any state declared here in our ticket filter bar, but we do have two props. So there's the key set search term, and then the value is this function, and then the key set show emergency only, and the value is another function. So awesome job with this, and I'll see you in the next video.

</details>

</div>

### 🔸🔻🔹 CSS for this chapter
<details>
  <summary>Tickets.css</summary>

  ```css
    .ticket-search {
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      border: 1px solid var(--outline);
      border-radius: 0.25rem;
      margin-left: auto;
    }

    .filter-bar {
      display: flex;
    }
  ```
</details>

## Missing Dependencies
When we created the useEffect to watch for the searchTerm <analogy>state</analogy> change, we saw a green squiggly (if Eslint is installed) under our dependency array. This isn't an error but more of a warning that this code _might_ cause a bug. 
```sh
React Hook useEffect has a missing dependency: 'allTickets'. 
```
The reason for this warning is that in our callback function we're using a variable that is not in our <analogy>dependency array</analogy>. 
```javascript
useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    )
    setFilteredTickets(foundTickets)
  }, [searchTerm])
```
Though the point of this useEffect is to _watch_ for whenever the searchTerm changes so that we can filter our tickets, we are _depending_ on the allTickets <analogy>state</analogy>. 

Not including `allTickets` in the dependency array may not cause any problems, but Eslint sees it as a potential bug. What if the value of allTickets changes? You may want to rerun this function if it does. 

The “React Hook useEffect has a missing dependency” error is a common issue faced by React developers when working with the useEffect hook.

When fixing the error, it’s important to consider your specific use case. Try to address the issue by including the missing dependency in the dependency array or ignore it if you're certain it's not needed. 

However, if you run into some tricky bugs while developing your react application, it's very likely you do have a missing dependency. Try installing <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noopener noreferrer">Eslint</a> if you haven't already to help you find these tricky bugs.
