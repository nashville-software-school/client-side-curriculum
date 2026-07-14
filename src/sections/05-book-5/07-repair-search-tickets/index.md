# Search Tickets
In this chapter you will practice what you learned in the previous chapters by implementing a search bar for the tickets.

## 📺 Watch The Video

### ⚠️ Note on the video: 
This video instructs you to make the file `components/TicketFilterBar.js`. Make sure your file ends in `.jsx` instead of `.js`.

Watch the **Search Tickets** video below and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

<iframe name="yt-ex07" src="https://www.youtube.com/embed/WPG09-cUJYg" width="700" height="394" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details>
<summary>📄 Video Transcript — Search Tickets</summary>

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=2&autoplay=1" target="yt-ex07">[0:02]</a> welcome back in this video we're going to implement the search tickets input bar right here so let's get started now the first thing I'm going to want to add is an input right underneath my buttons so we can see here I've got my first button display right here for emergency then my second button displaying right here for show all and both of them are inside of this div so I'm going to end up making this my filter bar so I'm going to add a class name filter bar and I'll copy and paste in my new Styles here in a minute okay and then I'm also going to add an input inside of my filter bar div right underneath my last button

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=47&autoplay=1" target="yt-ex07">[0:47]</a> so we're going to create a new input and this input is going to be of type text so type there we go text I'm going to give it a placeholder of search tickets and what else is this filter bar need oh it needs a class name I didn't mean to make so many spaces there we're going to give it a class name of ticket search all right I'm going to close out this input here and save and hopefully my format works there we go

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=97&autoplay=1" target="yt-ex07">[1:37]</a> now I'm going to go ahead and copy my styles for my filter bar and for my ticket search I'm not really sure why this keeps happening there we go all right I'm going to paste those right here inside of my ticket CSS since these are styles for my tickets all right so back in ticket list we're going to start writing functionality for this input so the goal of this input will be whenever the user types in a value here we want to capture that value and whenever they type in that value we want to filter the tickets based off of that

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=142&autoplay=1" target="yt-ex07">[2:22]</a> value the first thing I want to do is have a way to capture the user's input so I'm going to declare a new state variable here we're going to call it search term clear it with you state and it's going to be a string so I'm going to give it an empty or an initial value of an empty string okay so now whenever the user types into this input field I want to capture their input and set my search term with it so I'm going to add an on change right here so that's whenever the value of our input changes

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=188&autoplay=1" target="yt-ex07">[3:08]</a> and since since I'm just going to be setting the value of search term I'm not going to create a Handler function for this I'll just put it right in here so for my change I'm going to need to capture my event so thankfully the change event will pass our event to our function all right so now I'm going to set my search term with the event dot Target dot value if you ever forget how to access the user's input for an event just console log this event and just take a look at it and see if you can remember how to find that value there all right

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=235&autoplay=1" target="yt-ex07">[3:55]</a> so let's see if that's working need to refresh here sometimes the react Dev tools can be like this just needed to give it a good refresh okay on my ticket list I can see my new state that I defined currently it's an empty string so when I type in here I should see the value populate there hello awesome it's working okay so whenever the value of search term changes right we can listen for the for when this value changes

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=282&autoplay=1" target="yt-ex07">[4:42]</a> I want to filter my tickets with that search term so I need to know when this changes right so we're setting State here so what can I do to know when the search term State changes why don't you take some time and see if you can Implement that by yourself okay how'd you do did you write a new use effect well we wanted to watch for whenever these search term State changes so that's a perfect case for the use effect hook so we're going to write a use effect remember a use effect takes two arguments a function and an array

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=329&autoplay=1" target="yt-ex07">[5:29]</a> the array we call the dependency array so since I want to watch for whenever search term State changes I'm going to pass in search term right here to my use effect and auto formatting did that for me we'll put that back okay so whenever search term changes I want to filter my tickets so I'm going to clear a new variable here counts const found tickets and I'm going to filter my all ticket state because that's what has all the tickets in it so all Ticket Stop filter and one for each ticket I want the ticket where the ticket dot

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=376&autoplay=1" target="yt-ex07">[6:16]</a> description and I'm going to I'm going to two lowercase both the description and the search term that way if the user types any capitals or if there's any capitals in the description that it will match on the whole word regardless of case so two lowercase dot includes so I want the ticket description to lowercase includes our search term so search term Dot two lowercase not lost your case okay so now I'm going to set my filter tickets

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=422&autoplay=1" target="yt-ex07">[7:02]</a> with my found tickets and filter tickets are the tickets that we are displaying here okay great now if you have eslint enabled you might see this green squiggly line here what's it say it says react hook use effect has a missing dependency all tickets so telling us this because we are using the all tickets State here in our function we're referencing it and it's kind of telling us hey if all tickets changes I don't know you might want to run this again because could cause a bug and you know what I'm going to accept its advice so I'm going to pass in all tickets here now we really care about the search term

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=467&autoplay=1" target="yt-ex07">[7:47]</a> here but at the value of all tickets did ever change we probably would want to run this function again or it could cause a potential bug depending on the life cycle of this component okay so let's see if that's working heading back to the browser I'm just going to give it a refresh for good measure and let's type in phone okay phone phone phone awesome I don't know what about toilet see all the people that drop their phone in the toilet just one that's good and Xbox everything's working case yep all works

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=514&autoplay=1" target="yt-ex07">[8:34]</a> okay so our filter is working but as you can see our code is getting longer and longer and more and more complicated and as we continue on with this project it's only going to get more and more complicated especially here when it comes with the tickets so what I'm going to do is I'm going to take this filter bar and I want to make it its own component so I'm going to take out all this code here I want to create a new module create a new ticket in that module or a new component in that module I'm going to paste this code in here and then I want to render that component right here instead why don't you try doing that

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=565&autoplay=1" target="yt-ex07">[9:25]</a> all right I'm going to walk you through this in case you had any trouble so I'm going to create a new module here so I'm going to call it ticket filter car whatever you named it is fine all right so I'm going to create a new component oops there we go and I'm going to return from this component awesome now back in ticket list I'm going to render the component

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=611&autoplay=1" target="yt-ex07">[10:11]</a> right here and it's going to import it for me when I hit tab so it's imported at the top and I'm rendering the component right here all right but our code is going to be broken because we've got some errors here in the ticket filter bar we're missing some things here we are invoking set show emergency only and set search term State here in this component but it doesn't know what that is because we didn't Define it here in this component it's defined in the parent component up here in ticket list so we want to pass these functions to our ticket filter bar because that's what the filter bar does right

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=658&autoplay=1" target="yt-ex07">[10:58]</a> okay so we're going to pass it as props now here's the thing about passing props I always be saw in was it ticket yes oh by the way I'm going to go ahead and get rid of this we don't need this name anymore let's go ahead and get rid of that where are we rendering our ticket oh I'm in the filter bar there we go we can go ahead and get rid of name equals Joe okay so remember that we saw here when we were passing our props for our ticket we gave it a key of ticket and the value was ticket object well we can name it the same thing and it's not going to hurt anything in fact it can kind of make it easier so with our filter bar we want to pass set show

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=705&autoplay=1" target="yt-ex07">[11:45]</a> emergency only we want to set pass set search term now I don't know about you but naming things is hard enough that I don't want to come up with another name for this thing so I'm just going to give it the key is going to be set show emergency only and the value is going to be the function set show emergency only the important thing to remember here is that when we're destruct when we are destructuring the object the props object in this case like ticket we're passing ticket as the key and ticket object as a value but when we are destructuring the props object and ticket we need to make sure that we are pulling the key here this name does matter

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=751&autoplay=1" target="yt-ex07">[12:31]</a> all right so back in ticket list I've passed set show emergency only and then we're going to pass we're going to pass set term as well set search term all right so now back in my ticket filter I'm going to destructure that props object and pull the keys that we passed said show emergency only and set search term awesome so now this should be working I'm going to go to the browser and check all right so bone Yep looks like it filtered down

<a href="https://www.youtube.com/embed/WPG09-cUJYg?start=797&autoplay=1" target="yt-ex07">[13:17]</a> and we'll say correct yep all good now let's just take a look at our filter bar here so we can see the props so remember that in our react Dev tools we can look at the props and the state for our component so here we can see that we don't have any state declared here in our ticket filter bar but we do have two props so there's the key set search term and then the value is this function and then the key set show emergency only and the value is another function so awesome job with this and I'll see you in the next video

</details>

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
