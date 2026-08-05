In this chapter you will learn how to render a React component, pass props, use optional chaining, and write ternary statements.

## 📺 Watch The Video

### ⚠️ Note on the video: 
This video instructs you to make the files `components/Ticket.js` and `components/TicketList.js`. Make sure your files end in `.jsx` instead of `.js`.

Watch the **Ticket Assignee** video below and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

<div class="video-transcript-row">

<iframe name="yt-ex06" src="https://www.youtube.com/embed/8s4TQdJ3EBk" width="700" height="394" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details>
<summary>📄 Video Transcript — Ticket Assignee</summary>

### Creating the TicketList Component

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=2&autoplay=1" target="yt-ex06">[0:02]</a> Welcome back. So currently we have all of our logic here in our app component, which isn't really good. Instead, we want to break these views and functionalities into separate components. The app component is where we're going to bring it all together, just like we've done in previous chapters. So we're going to start by creating a folder in our source directory called components, and this is where we're going to put all of our components. I'm also going to create another subdirectory in here called tickets, and this is where I'm going to put all of my components that have to do with tickets. Awesome, all right. So I'm also going to create a new component for my ticket list, so we're going to

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=48&autoplay=1" target="yt-ex06">[0:48]</a> Take all this code out of here and we're going to put it into a new component. So we're going to create ticket list.js. I'm going to go ahead and start this component here. X, I always say expert, export const ticket list. Okay, and with React the naming convention is to name your component and the module that it's in the same name, both starting with a capital letter. So we're using Pascal case here, that's the name of it. Okay, so I'm going to take all of my code out of app.js and put it here in this

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=93&autoplay=1" target="yt-ex06">[1:33]</a> New component. I'm going to take everything out of here, skadoop, and put it here, and take a list. There we go. All right, now we're getting some errors here because we don't have our import statements for our use effect and use state, so it's going to add those, use effect, use state. There we go. And we also need our get all tickets from our services, ticket service, get all tickets. It's cool. All right, so we just made a new

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=139&autoplay=1" target="yt-ex06">[2:19]</a> Component, so I'm going to remove these unused imports here, and then an app I'm just going to for now rebel this in a fragment, right. I'm also going to add a CSS file just for this ticket list, or for all of my tickets here, so it's going to live inside of, let's just, this gets kind of weird whenever we have a subdirectory. I hope that this goes inside of tickets. Okay, there we go. All right, we're gonna have a ticket dot CSS, and this is going to be my styles for, oh no, see, I think it went there inside of the components. Thank you.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=185&autoplay=1" target="yt-ex06">[3:05]</a> All right, you know what, I'm gonna do, I'm going to go ahead and add a customers, just so that's not going to get in the way there. Okay, because I think we're going to have a customer's component anyway. Okey doke. So we got our ticket CSS and I'm going to take my CSS here from apps. Since all this has to do with tickets, take it all out of there, add it to ticket CSS. So all my styles for tickets are going to live here. Now I just need to import it. Ticket, it's ticket. I want that to be tickets though, let me change that name.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=236&autoplay=1" target="yt-ex06">[3:56]</a> There we go, best part about development right there, naming things. Okey-doke. Now when I take a look at my browser, I can see that, well, I can see nothing, right? Because here my code in my app, I'm just returning nothing. But I don't want to return nothing, I want to return our ticket list. So I need to render my ticket list component right here. And here's the syntax for doing that. So in order to render a component, we're just going to type it like it were some, like an HTML element. So ticket list, and if I hit Tab here, it's going to import it for me. That's what this little little pop-up means.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=283&autoplay=1" target="yt-ex06">[4:43]</a> So there we go, we've imported ticket list from components, tickets, ticket list, and now I can just make this a self-closing tag, and there we have it. So now when I look at my browser, there's all my tickets, they're all back, my buttons and tickets and all functionality is still working. And let's just, for uh, for funsies, what if we rendered that again, I don't know, see what happens. All right, if we head back to our browser, make sure I refresh here. Well, here's our tickets and well, here's that same component again. So it was just a component, and that's how we render it.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=328&autoplay=1" target="yt-ex06">[5:28]</a> Well, we don't want two of those, we only want one. All right, so why don't we take a look at our wireframe again. And there's still a lot more that we need to do with these tickets. We want to display the assignee, and eventually once we start getting authentication and routes, we're going to want these buttons here that either display, or button for either claim or close, depending on the ticket, and have some functionality for those things. So our, our tickets are going to get a little bit more complicated. And then also once we get to employees, we go there you are, once you get to employees

### Creating the Ticket Component

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=374&autoplay=1" target="yt-ex06">[6:14]</a> It's going to have a delete button, and then this is also going to be a link, right? So things are going to get a little bit more complicated with each one of these tickets. So here's what I suggest: why don't we create a component just for a ticket, that way all the functionality for a ticket can be in its own component. So we're going to do that. I'm going to create a new file here in my tickets module, or directory, and we're just going to call this ticket dot Js. All right, it's going to be a new component.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=419&autoplay=1" target="yt-ex06">[6:59]</a> And we're going to take, just before, we're creating a ticket here from our ticket list component, and we're going to put that into ticket.js. So for each ticket that we're mapping in our tickets array, for each ticket we're going to return a brand new component here. So I'm going to take out all this code and this is what I'm going to return from our ticket component. Now when I want to render this ticket component, I'm just going to render it right here. So take it, there you have it. So we're going to map through our tickets, so for each filtered ticket we are going to return a brand new ticket.

### Passing Props to Child Components

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=465&autoplay=1" target="yt-ex06">[7:45]</a> Component. When we look at our ticket component, we can see we have some errors here, right? Tickets not defined. We need our ticket. So we're mapping our tickets here in ticket list, we have our ticket, we want to return some of this HTML, right, that our ticket component is going to return, but it needs the ticket in order to do so. So we need to pass it, almost like we would pass an argument, but the syntax for that is a little different. Obviously, we can tell that we're not invoking this like we would some other function. So in order to pass what we would actually call a prop to a component, we pass it, we actually are creating a key value pair. So I'm going to call this

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=511&autoplay=1" target="yt-ex06">[8:31]</a> Ticket, and then just to show you that the name, just to show you the difference between the names, I'm actually going to call this ticket object. There we go. So here we are, we're going to pass a ticket here. So ticket is going to be the key and the value is going to be ticket object. So now here in ticket.js, what a component receives is a props object. So anytime we pass a prop to a component, we are creating a key value pair on the props object for that component. So if I were to type in here props, right, this is going to be an object with a key value pair on it.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=556&autoplay=1" target="yt-ex06">[9:16]</a> Well, the key that we defined as ticket, and the value is whatever the value of ticket object is. So that would look something like this, we could just do props.ticket and we would have our ticket. Let's start there and then look in the dev tools and see, see if we can see the value of our props object in our React Dev Tools. That says prompts. So back here in the browser, and oh, there we go, back here in the browser. I'm going to do a refresh real quick, go to my components tab. And I'm here in React Dev Tools as being a little stupid.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=602&autoplay=1" target="yt-ex06">[10:02]</a> Again, there we go. Okay, so if I go to my ticket, remember, we can see, let me go back to my ticket list here. So remember that we can see our state, you know, we can see all the hooks here for a component. We have our state for all tickets, our show emergency, and then for our filter tickets. Well, here we can also take a look at the props that are being passed to a component. In ticket list, we're currently not receiving any props. There's, there's nothing here, we have no key value pairs for the props object. But in ticket we did pass a prop, right, we passed ticket. So here it is, here's the props object, and it has one key value pair.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=647&autoplay=1" target="yt-ex06">[10:47]</a> Ticket being the key, and the value being, well, this object. And then for the next time that we, our next ticket component, because remember we're mapping, um, here's our next ticket object value, and so on so forth. Okay, but you're not going to see the syntax right here very much, you're most likely going to see the props object being destructured. So since we know we're receiving an object, we can open and close some curly braces here, and we can type in what the key of that, what the key, or the keys, of that object are going to be. So we know we're going

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=692&autoplay=1" target="yt-ex06">[11:32]</a> To receive a ticket key. All right, so now we can go ahead and get rid of all this, and I'm going to save myself some time with some command D, uck, there we go. So all I did was destructured that props object to pull out the ticket key, and I can just render it that way, and it's still going to work. So if we head to the browser, there it is, there's each one of my tickets. So just to give you another example of the props object, back in ticket list I'm going to pass another prop here. We're just going to pass a prop that says name, and the value is going to be Joe.

### React Dev Tools and the Key Prop Warning

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=739&autoplay=1" target="yt-ex06">[12:19]</a> All right, so now let's take a look back at our React Dev Tools, and we can see, oh, there it is. Now we have two key value pairs on our props object, name and ticket. So name is Joe, and ticket, and then each one of these is going to have Joe as the name, right, because I just hard coded that in there. So if I wanted to access that name inside of the ticket component, I would just access that same key name, and the value of name is going to be what. All right, well, I did notice one little thing, so we are getting an error here. Let's take a look at that.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=784&autoplay=1" target="yt-ex06">[13:04]</a> All right, it's not an error, it is a warning, and it says each child in a list should have a neat key prop. All right, so before we were adding the key here to the section, right, for each ticket, and that was the outermost layer, right, of what we were mapping. But that isn't the case any longer, now it's going to be this ticket component. So we just need to take the key here and instead have it right here on our ticket, and we did change this to ticket object, so make sure that you do that. All right, we shouldn't be getting that

### Fetching Employees: Embed vs Expand

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=830&autoplay=1" target="yt-ex06">[13:50]</a> Error any longer, we're all good to go. Awesome. All right, so now that we got everything working, we've got our code modularized and easy to maintain here. Let's go ahead and add the functionality for displaying the assignee on a ticket. So let's go ahead and take a look at our Json server and let's take a look. So we've got nothing here for the assignee. But if we look at our ERD, and we'll just zoom in here just a little bit, nope, that's zooming out, there we go. If we look at our ERD, the assignee for a ticket is going to be, well, an employee. We want to see which employee is assigned to this service ticket.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=877&autoplay=1" target="yt-ex06">[14:37]</a> So an employee and a service ticket have a relationship by this join table here for employee tickets. So in order to get to the employee, I'm first going to go up to the employee tickets and then be able to get the employee from there. Now you might have learned a little bit about embed or expand with Json server. So here we don't have an employee tickets ID on our service ticket, but service ticket is an ID on employee tickets. So we're going to be using the embed to be able to get all of the employee tickets that we'll display here. Alrighty, so no, I do want this. So service tickets, and I'm going to, oh, look it, it's already filling it out.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=923&autoplay=1" target="yt-ex06">[15:23]</a> For me, embed equals employee ticket. All right, and that didn't work because it actually needs to be employee tickets. Thank you, Json server, there we go. Okay, so if an employee is assigned to a ticket, we will have this employee tickets property and it's going to be an array. And currently, an employee can only be, or currently a ticket can only be, um, you can only have one employee assigned to it. So there's only ever going to be one in here or none. So if there is no employee assigned to this ticket, the array is going to be empty.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=968&autoplay=1" target="yt-ex06">[16:08]</a> Okay, so we do have the employee ID, but we do want the employee name. Unfortunately, with Json server, we can't go from service tickets to employee tickets to employees, we're gonna have to fetch the employees separately. But we can get these employee tickets on, and on a service ticket. So let's go ahead and update our fetch call. Oh goodness, I'm having problems here to have this URL. So back here in my services, I'm going to change this to this URL here, and I'm going to go look back here just to double check. We are getting all of our service tickets.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1016&autoplay=1" target="yt-ex06">[16:56]</a> And our embedded employee tickets for each one of these. But we want to be able to get the employee's name. Currently we only have the employee ID, and unfortunately we can't go from service tickets to employees, or to employee tickets to employees. But we can get all of our employees and then we'll eventually have to compare, well, for each ticket, look at the employee ID, for the inside, for the assigned employee, if there is one for that ticket, and find the employee ID that matches. Now looking at our ERD, let's see if I can try to zoom in a little bit here. There we go. Now looking at our ERD.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1061&autoplay=1" target="yt-ex06">[17:41]</a> An employee object does not have a name on it. The name for the employee belongs to the user object that is tied to that employee. So since the employee object has a user ID as a foreign key, that's where we will use the expand query to then get the user object. So remember, embed is for if the thing that you're looking at is a foreign key on something else, and expand as if you have a foreign key for a thing to somewhere else. In layman terms, I guess. Okie dokie. So we're going to get employees and we're going to expand user.

### Setting Up State and Finding the Assigned Employee

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1109&autoplay=1" target="yt-ex06">[18:29]</a> All right, so here's all of our employees and each user object for that employee. I'm going to copy this URL, and now we're going to need a new, uh, service in our services for employees, so we're going to call this employee service, and we're going to make a new fetch call. So export const, all right, and then with our response, we will open that with

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1154&autoplay=1" target="yt-ex06">[19:14]</a> response.json. So we've written our function to get all of our employees. Now let's get back to our goal here. So we want to display the assignee here on each ticket. So back in our ticket component, we're going to need a state to hold all these employees. All right, and we're going to give that an initial value of an array, and then I'm also going to create a

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1200&autoplay=1" target="yt-ex06">[20:00]</a> state variable for our assigned employee. Signed, and boy, signed was kind of hard for me to spell. All right, and that's going to be an empty object. We'll just give it an empty object for now. With our ticket, our ticket is going to have, let's take a look here.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1252&autoplay=1" target="yt-ex06">[20:52]</a> is going to be an object with an employee tickets property that is an array with one object in it, if if there is an employee assigned to that ticket, and that will have the employee ID. So we're going to look, we're going to want to loop through all of our employees and compare the ID for that employee to our ticket's employee ID if they have an employee assigned. So if that array has a length is not zero, okie-doke. So the first thing that we'll obviously want to do is get our employees here and populate our employees state with

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1298&autoplay=1" target="yt-ex06">[21:38]</a> the employees from the database. So why don't you take some time to do that on your own? All right, so we wanted to invoke the get all employees function in order to fetch our employees from the database. Once we have those employees, we're going to set our employees array or set our employees state with the employees array that we got from back from the database. Now if you wrote this outside of this use effect that watches only for the initial render, then we would have triggered an infinite loop. Right, set employees would have triggered the component to re-render since state updated, and then we would call this function again and so on so forth. So by putting it in this use effect with the

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1344&autoplay=1" target="yt-ex06">[22:24]</a> MDA dependency array, we have told this use effect only run this function on the initial render of our component. All right, now what we want to do is once the employees have been set. Now remember that set employees, it's not instantaneous. Now, once we know that our employees have a value, once they've been set, we want to search the employees array and find the employee whose ID matches the service ticket. So take a minute to think, how can we know when the employees have their value, when the employee state has a value?

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1402&autoplay=1" target="yt-ex06">[23:22]</a> So this time, with this use effect, we want to watch for whenever employees state changes. Okay, so what we're going to do here, once employees state changes, so that means after they've been set, we're going to try to find our matching employee. We're going to say const found employee is equal to employees dot, we're going to use the find method. We want to find the employee where the employee dot ID is equal to

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1447&autoplay=1" target="yt-ex06">[24:07]</a> the ticket, and we saw that as the ticket, then on there was employee tickets, which was an array, and if there is anything in that array it's going to be at index 0. dot employee, oops, ID. All right, once we've found that employee, we're going to set our assigned employee with our found employee. So let's take a look at the dev tools and see what we get. Okay, so we're getting an error that says cannot read properties of undefined.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1493&autoplay=1" target="yt-ex06">[24:53]</a> reading employee ID. So let's look at what we're trying to do, dot employee ID on — well, that would be right here. So dot employee ID. So remember that if a ticket doesn't have an assigned employee, employee tickets is going to be an empty array, which means employee tickets at index 0, if we were trying to access index 0 on an empty array, we would get undefined. So a way that we can fix this is one, we could wrap this whole, um, this whole functionality right here in an if statement that checks for if employee, or if ticket dot employee tickets dot length. Another thing we could do is have use

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1539&autoplay=1" target="yt-ex06">[25:39]</a> the optional chaining operator. So instead of doing a statement, I'm just going to add a question mark right here. So what that does is going to run ticket, right? It's going to get ticket, then it's going to do dot employee tickets, is going to try to evaluate this. Now if this comes back undefined, this is just all going to return is undefined here, right? So then that would be employee dot ID is equal to undefined, right, and we would never even try to access the employee ID property on it. So just going to kind of stop it right there. All right, so now for found employee, if we don't find our employee, found

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1585&autoplay=1" target="yt-ex06">[26:25]</a> employees just going to be undefined, which means we'll be setting a signed employee to undefined, which in this case I think is actually going to work out in our favor. All right, and now we see here our little green squiggly line again, react hook effect, react hook use effect has a missing dependency, and this time it says ticket dot employee tickets, because that's actually we're trying to use here. Now we'll take its advice, and now it might not cause any problems, but I'm just going to go ahead and add ticket here since we are depending on the ticket. So if the ticket ever did change, if the value of ticket ever changed, we would run this again, and I think that's okay to do because we technically would want to do that again. All right, so we're gonna head to the browser now. Let's take a look at our dev tools. Let me give this a refresh here.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1636&autoplay=1" target="yt-ex06">[27:16]</a> And once again for devtools. Okay, so we're just going to take it this, take a look at this first ticket here. So now we can see our state for all of our employees, and then here's our assigned employee. Awesome! Now let's look at another ticket. I think number three didn't have anybody — no, number three did, or wait, no, I was looking at the wrong place, my bad. All right, so yep, number three did not. We did not find an employee, so we have undefined for our employee. Now I think I'm going to use this undefined in our favor here. So we're going to want to display the assignee right here next to emergency. So if we have an assignee, which in this case we don't with number three, if we do have an assignee

### Rendering the Assignee Name

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1683&autoplay=1" target="yt-ex06">[28:03]</a> We want to display the assignee's name, so that's going to be our assigned employee dot user dot full name, and if there isn't an assigned employee, then we'll just display none. So let's head back here to the code. All right, so I want that to live in the footer. All right, so I'm going to create a new div for this, and inside of here I'm going to have my another div for the assignee header, so class name is going to be ticket info, we're going to say assignee here.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1734&autoplay=1" target="yt-ex06">[28:54]</a> And now here's where the bump art comes in. We're going to write another ternary, just like we did with the emergency. So we're going to see here signed employee, okay. So remember that if we found our assigned employee, it's going to be an object, and if we didn't find our employee, assigned employees is going to be undefined. Now undefined is a falsy value, so we can check here, assigned employee, huh? Then we want to render assign employee dot user dot full name, otherwise we want to display, not name, none. My muscle memory is crazy.

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1780&autoplay=1" target="yt-ex06">[29:40]</a> Fingers will just type whatever they want to type. All right, let's take a look what we got. Okay, awesome, oh no, not awesome, what happened? We're getting cannot read properties of undefined reading fold name. Ah, okay, okay. So back here in the code, we've got assign employee dot user dot full name. Hmm, now remember on our initial render of this component, we gave assigned employee a value of an empty object, right? So if we access dot user on assign employee, that's legal, right, because we can access any property we want on an object. It's

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1825&autoplay=1" target="yt-ex06">[30:25]</a> just going to be if that property doesn't exist on that object, we're going to get undefined. But what we can't do is try to access a property on undefined. So when we access user here, because we get assigned employee right now, an empty object is a truthy value, so that does equate to false on our initial render. So we got this empty object here, we're accessing the dot user property on our MD object, so we're getting undefined here, then we're trying to access dot full name on undefined. So there's two ways we can fix this: one, we could just go in here and add a user property and make it an empty object, which I think is

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1870&autoplay=1" target="yt-ex06">[31:10]</a> kind of messy and not a great way to go. Or since we will expect this to be undefined at some point, we can just add the optional chaining to the end of that there. Now I do want to point out that it's not good practice just to add question marks before every single dot notation that you have. I do expect this to be undefined at some point, I expect it to be undefined on my initial render. Now if you don't expect something to be undefined and you are getting undefined, don't just throw an option, or I don't know why I can't say this word, but don't just throw the optional chaining operator on your dot notation just to fix the problem. If you expect it to be undefined at some

<a href="https://www.youtube.com/embed/8s4TQdJ3EBk?start=1916&autoplay=1" target="yt-ex06">[31:56]</a> point, great. If you don't, don't do it. Okay, so let's take a look at our browser. So if we refresh here, we can see we have an assignee, we have an assignee here, assignee is none, assignee, and we're doing great, awesome. So awesome job, hope you're having fun, and always be coding.

</details>

</div>

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
    <>
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
    </>
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
}
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
If you're feeling comfortable with what we've learned so far and would like to see an alternative solution to what we did in this chapter, watch the **Alternative Solution** video below! 

<div class="video-transcript-row">

<iframe name="yt-ex06b" src="https://www.youtube.com/embed/Sq4CzHMLXTk" width="700" height="394" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details>
<summary>📄 Video Transcript — Alternative Solution</summary>

### Overview: Fetching an Employee by ID

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=2&autoplay=1" target="yt-ex06b">[0:02]</a> Let's talk about another way we could have got our assigned employee. Now remember that for each ticket there's going to be an employee tickets property that will be either an empty array if there is no assigned employee for this ticket, or an array with one employee object inside of it. Now for that, we got all of our employees from the database, and then once those employees have been set, we then filtered through all those employees to find the employee whose ID matches the ticket dot employee tickets employee object dot employee ID. Now alternatively, we could just.

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=48&autoplay=1" target="yt-ex06b">[0:48]</a> Did I just say that right? Alternatively, alternatively, we could just make a fetch call to get an employee by their ID. So let's take a look at our JSON Server. Now remember, we do have access to an employee ID here for tickets, so let's just take one of these tickets for example, heading to the components tab. All right, so this ticket has an assigned employee because this array is full of one object, and it looks like that employee ID is employee three. So if we wanted to get that specific employee, well, I've already got it written here, but we could search employees forward slash three.

### Building the getEmployeeById Service

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=95&autoplay=1" target="yt-ex06b">[1:35]</a> Awesome, now we still want the user object so that we can have access to this employee's full name, so we're going to use the query to search, where, you um, or not where, sorry, we're going to expand the user. So here we have it, we can get an employee by their ID and expand on the user to get their full name, so we're going to do this instead. I'm going to copy this URL. Now back in the code I'm going to add a function to my employees service to get an employee by their ID. Constant get employee

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=141&autoplay=1" target="yt-ex06b">[2:21]</a> By ID is going to take an employee ID, going to paste in that URL, and instead of hard coding three here I'm going to pass my employee ID. Oops, get the response. Awesome, now back in my ticket component, like I said, instead of getting all the employees here into this ticket, we're going to get the employee by the ID. So I'm going to get rid of this state because I don't need all of my tickets, I'm not going to need to get all my or

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=190&autoplay=1" target="yt-ex06b">[3:10]</a> not all my tickets, sorry, all my employees, don't need to do that. I also don't need this anymore. All right, but I do want to fetch the employee for this ticket. Now I am going to be setting assigned employee once I get that ticket back from the database, so if I'm going to set assign employee, I don't want to put this out here on the component level, because that would trigger a re-render, which would then cause me to run it over and over and over again with an infinite loop. So I'm going to wrap this in a use effect, because I only want to do this on my initial render. So use effect takes two arguments: the function, so the thing I want to happen, and the array, when I want it to happen. Now I only want this to happen on the initial render, so I am passing it an empty dependency array.

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=235&autoplay=1" target="yt-ex06b">[3:55]</a> All right, so we're going to get not all employees, get employee by ID, and I'm going to pass in the ticket dot employee tickets. Employee tickets, now here's what we should probably think about before we continue: that if an employee doesn't have an, or if a ticket does not have an assigned employee, we probably don't want to do this, right? And the way that we know that a ticket does not have an assigned employee is that this employee tickets array is going to be empty. So I'm actually going to wrap this in a conditional first, so if ticket dot employee tickets dot length

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=283&autoplay=1" target="yt-ex06b">[4:43]</a> so if there is an employee object in that array, then we want to fetch our employee. All right, so we're going to get our employee by ID, we're going to pass in the employee, so that means there's going to be an object in here dot employee ID, then we're going to get back our employee, and we want to set a sign employee with our employee object. Cool, so we are getting a green squiggly here in our dependency array, it says that we're missing a dependency for ticket dot employee tickets. All right, so this functionality is dependent upon the

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=329&autoplay=1" target="yt-ex06b">[5:29]</a> value of ticket, right, because we're looking at ticket dot employee tickets here, so I — we know that the value of ticket is probably very likely not going to change here inside of this component, so we really don't need to add ticket here, but it is, if you have ESLint enabled, that that would be showing, but ESLint is kind of telling us, like, hey, this might cause a bug, you probably want to add ticket here, so it's not going to hurt to add it. I'm just going to add it. All right, so we've got ticket in there, so let's take a look and see if this is working. Okay, well, looks like we're still getting our assigned employees, which is great.

### Debugging the Empty Object Bug

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=375&autoplay=1" target="yt-ex06b">[6:15]</a> Scroll down here and, hmm, now that's no longer displaying none if we don't have an assigned employee. So let's take a look at our conditional logic for displaying the employee name and see if we can figure out what's going on. Okay, so here on line 26 is wear worse we have our ternary statement for what we're going to display right here. If assigned employee, so it's checking to see if this is truthy or falsy. So if assigned employee is truthy, then we will display assign employee.user.full name. Otherwise if assigned, the assigned employee is falsey, we'll display none.

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=422&autoplay=1" target="yt-ex06b">[7:02]</a> So here I'm learning that a sign employee must never be falsy. Now I know that we're only fetching our employee if the ticket dot employee tickets has a length. Now if it doesn't have length and we're not, we're not going to set aside employee, so that means that the for the tickets that don't have an assigned employee, right here is going to be the initial value that we've given a sign employee. And the initial value that we've given a sign employee is an empty object. Well, an empty object is not a falsy value. The only falsy values are undefined, null, and empty string, zero, and not a number. I'm pretty sure that's all

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=469&autoplay=1" target="yt-ex06b">[7:49]</a> of them. Well, we, we don't, so we don't really want to give it an empty object because we, I would really like to keep this logic here. I guess technically we could check to see if this object has any properties on it, or we could just leave it undefined, or possibly even give it an empty string. Either one of these works, all three of those options work really. So let's see if that solves our problem. All right, and here we have it, now assignee is none if that ticket does not have an assigned employee. So this was the other way of doing this. Now the reason that I didn't do this in the original chapter, or original video for this chapter, is because, well for, it's twofold. One, I

<a href="https://www.youtube.com/embed/Sq4CzHMLXTk?start=515&autoplay=1" target="yt-ex06b">[8:35]</a> am going to eventually want the employees here in this ticket component for future logic, and two, I wanted to be able to come up with some more examples of why we needed to use use effect. But I did want to make this video to show you that you can fetch an item by its ID from JSON server, so this could be useful for you in your Capstone.

</details>

</div>
>_This is optional and the solution in this video will not be used in the rest of this walkthrough of Honey Rae Repairs._

## 📓 Vocabulary
>**Render a <analogy>component</analogy>:** To invoke a <analogy>React</analogy> <analogy>component</analogy> in <analogy>JSX</analogy>, like calling a function, resulting in its display within the rendered user interface.

>**<analogy>Props</analogy>:** Arguments passed to a <analogy>React</analogy> <analogy>component</analogy> in the form of an object.

>**<analogy>Optional Chaining</analogy>:** An operator that accesses an object's property. If the object accessed using this operator is `undefined` or `null`, the expression stops and evaluates to undefined instead of throwing an error.

>**<analogy>Ternary Operator</analogy>:** An operator that provides a way to shorten a _simple_ if else block. The `if` condition is on the left of the `?`. If the condition evaluates to `true`, the statement after the `?` is executed. If the condition evaluates to false, the statement after the `:` is executed.
