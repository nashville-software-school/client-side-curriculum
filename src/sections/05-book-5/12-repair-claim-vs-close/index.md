# Authorizing Users
In this chapter you will set up your Honey Rae's application for user authentication. The authentication functionality is provided for you as it is not a learning objective of this course.

In the root of your project in the terminal, run the script below.
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/nashville-software-school/course-bash-scripts/main/client/repair-auth.sh)"
```

## 📺 Watch the videos

### ⚠️ Note on the video:
This video instructs you to make the file `components/welcome/Welcome.js`. Make sure your file ends in `.jsx` instead of `.js`.

Watch the <a href="https://youtu.be/nDGJUeN1biY?si=HZmcMzjb-7Xu_mzW" target="_blank" rel="noopener noreferrer">authentication setup</a> video and implement the code yourself. Once you have successfully set up authentication for your Honey Rae's project, watch the <a href="https://youtu.be/4OVltZMwbzc?si=oXNsN101p77BTwOB" target="_blank" rel="noopener noreferrer">Claim vs Close</a> video and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

<details>
<summary>📄 Video Transcript — Authentication Setup</summary>

[0:03] okay let's get authentication set up in our our project so make sure you are in the root of your project here in the terminal so not in any subdirectories like source for components or anything like that make sure you're in the root and I'm going to go ahead and run that script so after running that script you should have an auth directory here in your components and inside of there you should have a login CSS with some Styles a login.js component and a register.js component all right we should also have a views

[0:49] folder or directory here this should be just underneath source so not inside of components and it should have application views which is just an empty component and an authorized component okay and then inside of our services in our user service you should have a create user and a get user by email function both of those should have been added to the user service so just confirm that all those things are there and if they're not please reach out to an instructor okay I'm going to briefly cover over What's Happening Here in login and register so login is just another component

[1:34] and it is a form for the user to log in when the user clicks on login we're going to store that user in local storage and that's basically what's what's happening here for the handle login all right so we're going to get that user by email from the database and then we're going to store that user here in local storage and Define that as honey user and then we're just going to navigate back to the home of our application so this is just a simulation this isn't a safe real life solution for authentication we don't cover that here in the client-side portion of the course but this is just a way for us to be able to have different users in our application

[2:19] so this is why we're not going to cover this in great detail because this isn't something that you'll be doing on the job all right and then the register component will get that or we'll create a new user into the in the database and after they create that on that user we're going to store that user in local storage so they can be logged in and once again once that's finished it's going to navigate to the home also don't worry about navigate right now we will cover how navigate Works in a later chapter okay so now I want to add routes for both the login and the register components so I'm going to head to app.js

[3:05] and I'm going to eventually make all of these routes here protected so that the user cannot navigate to any of these unless they are logged in so I'm going to make a couple routes outside of this before I do that so the first one is going to be for logins I want to create a route here path is going to be forward slash login and the element is going to be the login components so login doesn't want to Auto Import it for me okay let's have to do that on my own so I'm going to come up here I'm going to import login still doesn't want to import it for me

[3:50] from okay components off and login there we go all right and I also want one for register so this is going to be at forward slash register and the component for this is going to be the register component there we go cool all right now let's see if this works I'm going to take a look at my browser and I'm going to head to forward slash login awesome there it is here's our login component and if we head to register

[4:36] there's our register component great all right now I'm going to show you what happens when a user user logs in so just for making things easier we already have um an email address for one of the users here just already populated in that input and that is for Helen Elizabeth Helen Elizabeth and she is a staff so we're just going to keep that in mind okey-doke so when I sign in it takes me to the root of the home application and it's also creating in local storage

[5:22] a new object here so here we have honey user and we can see there's the ID for that user and then we also have the is staff property on here for that as well so what we're going to do is we're going to be able to take a look to see if this honey user object exists and that's going to tell our application whether or not a user is logged in okay so let's start adding some of that functionality here okay so here in app.js we only want the user to be able to navigate to any of these routes here if they are logged in

[6:07] so I'm going to take all of these routes out of here and I'm going to put them in another route just to kind of handle it called application views just to kind of clean things up just a little bit so I'm going to take all those out and I'm going to paste them right here in application views and we're missing some imports I'm going to import I need to import the route component and then I'm also going to need to import the nav bar the welcome

[6:53] I'm also going to need outlet from react router Dom Outlet I need employee details customer list and customer details there we go okay now I'm not seeing any problems here right now but if I run my application it's going to get upset with me that I have some routes to find here

[7:39] that are not inside of a routes component so I need to wrap all these in a routes component there we go and now it's imported all right now let me just go ahead and clean up some of these Imports here in app.js that we don't need anymore since we took all those out I can go ahead and get rid of these Imports now if you look at your Imports and there's either green squiggly from eslint or even if they're just kind of this darker gray that's telling you that you're not currently using those Imports and it's best to get rid of imports that you're not using

[8:29] Okay so we've got all of our application views here inside of this big views component application views component and here in app.js we only want to be able to render those routes and allow the user to navigate to those routes if they're authorized so we're going to use this authorized component that we provided for you now once again this is kind of simulation but basically what this component does is it's going to look for that honey user object from local storage so it's going to look for this object right here and if that object exists then it's going to return all of its children component all the children components so we're going to make application views a

[9:16] child component of authorized and I'll show you how we're going to do that now if it doesn't find that honey user object it's going to navigate to the login component so that's just a high overview of what this component is doing once again we provide this for you so it's not important that you understand exactly how all this code works all right so back in app.js I'm going to set up another route and this is going to be for any path so if we try to navigate to any other path besides login or register then we want to do this so I'm going to pass an element here

[10:01] and I just need to make sure I self-close this there we go okay so the element is going to be the authorized so authorized here oops authorized there we go and then the child component of authorize is going to be oops application views there we have it okay so basically What's Happening Here is authorized is going to check if the user is authorized and if the user is authorized then

[10:53] um the application views is the child component of authorized therefore if they do find the honey if authorized finds the honey user object will return these views here because they are the children of authorized so that's just a high level overview of how this works so let's see if this works now I'm going to go ahead and get rid of all of these here so that we can test and see how this works

[11:39] all right so I refresh there and it saw that I am not authorized so there is no honey user object so now I'm going to sign in and once I signed in it navigated me here to the home so now I can actually see these views here now if I'm not logged in let's give it a refresh It Takes Me Away and that's a basic overview of how the login works okay but I want a way to log out rather than having to come in here remove this and refresh the page so we're going to add a log out link to the nav bar

[12:27] okay so I'm going to go to the navbar component which is in nav there we go navbar and I'm going to copy and paste the new nav bar link that we provided for you okay and I need to import so I'll have to do this as well I need to import use navigate from react router Dom and then inside of my component here I need to Define navigate is equal to use navigate so make sure you do that

[13:12] once again we'll cover navigate in a later chapter so basically What's Happening Here is we added a new link to our nav bar that when the user clicks on this link so we're not going to use the two property here we want we want to do some additional functionality so when the user clicks on this link we're going to remove that honey user object from local storage and then we're going to navigate to the Home Route and once again if we navigate to the Home Route and there is no User it's going to take us to the login by default so let's make sure that works so here I am I can see in my application in local storage that I am currently logged in so here's my honey user id4 staff true

[14:01] so when I log out it removes that item from local storage and it takes me back to the login screen here I can click on not in member yet and I can register a new user or I can just go back to the login here and log in once again and there I am as the honey user object in local storage okay so the last thing that I want to do is set up state for our user that will provide to all other components that need it so we're going to handle this in application views so I'm going to head to application views and here I'm going to set up a new state for my current user for the logged in user so I would say const current user

[14:58] I'm going to give this a default value of an object because I'm expecting my current user to be an object representing the logged in user so now on the initial render of my application views component I want to get that user from local storage and store it here in the current user object once again storing your authenticated user in local storage it's not a safe real world solution to authentication but it's great for simulating authentication for beginners okay so you can either type this out like I am or you can copy and paste it because that code is provided for you in the chapter so on the initial render I am going to get

[15:46] my local honey user from local storage I'm going to get the item that's called hun honey user and I want that to be an object So currently it's not gonna it's not gonna return a Json or a JavaScript object to me so I need to parse that so I'm going to say const honey user object oops there we go is equal to Json dot parse and I'm going to parse the local honey user all right so now I'm going to set my current user with the honey user object

[16:39] great so now that we have the current user State managed in our application views component which is the parent component of all of the components here now whenever any of these components need the current user so as we continue to develop this application if any components or any new components need access to the current user we can pass that current user down to the rest of our components as a prop okay so user related data is required in your Capstone and the only way to achieve this is with Authentication however the actual process of authentication is not a learning objective here so just revisit this chapter and watch the video again to get authentication set up for your Capstone

[17:25] everything else we do from here though dealing with the current user and understanding how to pass props understanding how to check for what the current user is and dealing with user data is part of our learning objective but everything that we did here in this video in terms of dealing with local storage and storing the user here is not so feel free to come back to this chapter in the future to set this up for your own projects

</details>

<details>
<summary>📄 Video Transcript — Claim vs Close</summary>

[0:05] okay in this video we're going to add the functionality for a logged in employee to either claim or close a ticket we're still only focusing on the employee views at the moment and not any of the customer views quite yet we'll get into the customer reviews in part four Okay so just gonna be focusing on if an employee is logged in we want to either be able to claim or close the ticket so let's take a look at the ERD here so if a ticket has been claimed then an employee ticket object will have been created in the database for that service ticket and also if a ticket has been completed

[0:52] that means that a date completed will be there on the ticket so we can see here for tickets that haven't been completed date completed is just an MD string alrighty so if the logged in user is an employee and there is no employee ticket associated with the service ticket then we want a button to claim the ticket to appear if the logged in user is the assigned employee for this ticket meaning that an employee ticket exists and the user signed in is an employee with the employee ID then we want a button to close the ticket to appear so let's first make sure that we're logged in as an employee

[1:39] okay so this email address that has already been inserted inside of this input is an email address for an employee so we'll just log in as Helen Elizabeth okay so now let's start getting our buttons to render I'm going to head to ticket.js so we're gonna head to tickets then ticket.js and in my footer I'm going to add a container for my buttons so I can know which button I want to display okay so I'm just going to create a div here called let's see div and we'll give it a class

[2:25] name of button container and I just want this to be inside of the footer here so it's going to render right alongside the assignee in the emergency information here all right now I'm just going to add a couple comments so I can know what I want to render here so I'm going to add a comment just to figure out what my logic is going to be so if the logged in user is an employee and there's no employee ticket this associated with the service ticket

[3:14] then a button to claim the ticket should display and then for our other one we want here we go all right for our other button the logic will be if the logged in user is the signed employee for the ticket and there is no date completed then a button to close the ticket should display

[4:04] okay so for both of these conditions we need to know who the current logged in user is which is currently defined here in application views remember we set up State for the current user and then on the initial render of this component we get that current user from local storage and then we set that current user with our to our state so we need to get this current user because this has the the ID and the is staff on it we need to get this current user down to our ticket component so ticket component is being rendered in the ticket list component we can see here and ticket list component is being

[4:50] rendered here in application views so we need to pass this State down to ticket list and then from ticket list into ticket now when we pass State down multiple levels like this this is something called prop Drilling so let's go ahead and do that all right so I'm not going to want to come up with a new name for current user every time so I'm just going to make the key current user and we'll also make the value current user that's totally fine I could name this something like current user object or something like that but like I said I'm going to be passing this down multiple levels I don't have to come up with a new name for every level so current user works so we're passing current user 2 ticket

[5:35] list so we're going to capture that here in the props so current user and we want to get it down to ticket so we're also going to pass it here in the ticket component so we're going to pass current user so now in the ticket component we are getting both the ticket and the current user okay so now we can take a look at the dev tools and we can see if that is being passed properly okay so here's all of our tickets let's look at the components

[6:23] and we can see that I need a refresh so I'm going to do that oh you know what I don't think I'm actually serving my application okay I fixed that all right so here's each one of our tickets so now we can see the props for this ticket is current user and there's the value is this object which is our current user object and then we also have our ticket here it passes props as well and we can see that is in here for each ticket we have the current user and the ticket passed as props just like we've got here perfect okay well now it is time to make our buttons so it's taking taking a look at the logic for both of these again we need to know the current logged in user so we do

[7:09] have that with the current user and we want to know if there's an employee ticket assigned so the good news is because we need that for both of these we want to know who the assigned employee is here and then we also want to see if there's an assigned employee for this one the good news is that we are already getting the assigned employee we were doing that for this section right here we wanted to display the assigned employee so we're we're pulling in all the employees and then we're looking for the employee where the ticket and if they have some employee tickets dot employee ID is equal to that employee all right awesome so if there is no assigned employee then the value of assigned employee is going

[7:54] to be undefined which is a falsy value which is also good to know and we can see how we're using that here so if there is an assigned employee we want to display the inside the assign employee.user.full name otherwise we want none so we also have the user ID for each inside the user object and the user ID on an assigned employee okay so since we have that we're already sort of a step step ahead for this logic here all right so let's start with the claim button so the first thing we want to know is if the logged in user is an employee so we're going to check if current user dot

[8:40] is staff and we want to know if there is no assigned employee so I'm going to check and uh we're gonna do bang assign employees we want to know is there no assigned employee so if that's the case then we are going to render a button so I'm going to make a button here I'm going to give this button a class name of oops button and button second oops there we go button secondary my mic is always in the way of my keyboard here okay and we want this to say claim

[9:28] otherwise we just want nothing here now I think I need to add some styling for my button container so I'm going to add that to my ticket CSS there we go I had added this class to that div that will contain all of my buttons so I just needed to copy and paste that here into my ticket CSS all right so why don't we test this out and see if it's working so we should be seeing some claim buttons here oh I'm having a hard time with this oh awesome so there's a button to claim and there's a couple more buttons to claim great okay now let's make the close button

[10:13] so for this one we want to know if the logged in user is the assigned employee all right well good news is is that we do have that assigned employees so we're going to check assigned employee and we just want to make sure that we have one before we try to access the user ID because remember that is possible that the assigned employee could be undefined if our find method didn't find one okay so I'm going to check there's an assigned employee dot user ID is equal to the current user dot ID and then we also want to know if there is no date completed right because it's gonna be a button to close it so this ticket is assigned to this user and it hasn't been closed we want

[10:59] to be able to close it so I'm going to look and Bang ticket Dot date completed because if there is no date it's going to be an empty string which is also a falsy value all right so are these conditions true if so we're going to create a new button here and we're going to give it another class name of button and this one's going to be button warning yeah that sounds good all right and this one's going to say close otherwise we want nothing all right let's see if the if that's showing up for us so back in

[11:44] the browser I see number four so it looks like the assignee is Helen Elizabeth and we do have the option to close this ticket and I remember we did sign in as hell and Elizabeth great now it is possible that my data is different than yours so if you're not seeing the buttons on mine that for on yours that you're seeing online just take a look at the data and try to find if you should be seeing a button here or or not try logging into a different user all right now to write the functionality for both of these tickets so I'm going to add an on click to this button here and I could pass an

[12:33] anonymous function right and then write all of my logic in here but there's going to be a few things I'm going to need to do I'm going to need to create a new um or yeah create an object yeah yeah that's right I need to create a new object for the employee ticket because we're going to be posting an employee ticket relationship to the database I'm also going to need to make sure that I get my current employee so I need to get the employee ID for the current user and then we're also going to end up posting that to the database there's going to be quite a few things that we do in this function so I'm not going to want to write all of that in here I'm going to define a function instead we're going to call it handle claim

[13:19] okay I don't think I'd be I don't think I'm going to need to pass any arguments this function so I can just pass it this way so on the click it will invoke this function not invoked yet but when we click it will invoke it all right Let Me Now define that function so const handle claim and let's see the first thing I said we needed to do was to create that employee ticket object now in order to do that I am going to need the current employee ID so it's going to be const new employee ticket

[14:09] which we don't quite have that yet and we're also going to need the service ticket ID ticket ID and just so that you're up to speed with what we're doing here of course I'm getting some errors but that's okay we're in the middle of typing a service ticket nope that's all we're wanting to create we're wanting to create a employee ticket so an employee ticket needs the employee ID and the service ticket ID all right so employee ID surface ticket ID we do have access to the ticket right here so just do ticket dot ID but we need the current employee well the good news is is that we can already have an array of all the employees from the database and we have our current user so all we need to do is take a look at

[14:56] every single one of these employees and find the one whose user ID matches the ID of our current user so I'm going to say const we'll say current employee is equal to employees dot find and I want the employee where the employee dot user ID is equal to our current user dot ID all right so the employee ID for our new employee ticket will be current employee dot ID because taking a look once again at our ERD we are storing the employee ID on an

[15:43] employee ticket not the user ID because remember we have users and we have some users that are employees and some users that are customers so a customer is going to have a user ID and a or sorry an employee is going to have a user ID an employee also has their own employee ID here so we want to store the employee ID on this employee ticket not the user ID of that employee okay so we've got our current employee we've created our new employee ticket object so this is going to create that relationship that assigns the logged in employee to the ticket that they decided to Claim by clicking that button now all that's left to do is to post

[16:29] this to the database the database all right so to do that I'm going to create create a new function in our ticket service for claiming a ticket so I'm going to call this say assign assigned ticket I think that's an okay function all right so we're going to need the employee ticket and I want to post this to the employee tickets

[17:17] all right so now we're going to create our options here the method is going to be post you need to Define our headers here so we're just saying content type so what we're sending in the type of content we're sending is application slash Json and last but not least we need the body the body of our post here that's going to be Json stringify because we can't send JavaScript objects the employee ticket fantastic here's our function all right so now back in ticket all I

[18:05] want to do is have some fun and post this new employee ticket so we need to pass the new employee ticket and we can string a DOT then on this because we return that promise so what do we want to do I'm not quite sure yet dot then what what do we want to do we'll find out let's first check to see if this works so I'm going to head back to my application here and I'm going to try claiming a ticket so I'll try claiming we'll try claiming number five here so I click claim and well nothing happens

[18:51] to confirm that visually here but let's take a look at our Network Tab and see if something got posted okay I see a 201 two employee tickets that's a good sign all right so that's what we sent out was employee ID one and it looks like it was created so there's our post we're getting a 201 that said it created and what we sent out was this object employee ID one and service ticket five okay let's take a look here to make sure that it was created so I'm going to look at employee oops what is it again employee there we go tickets all right employee idea one service ticket five looks good

[19:37] all right but we didn't have any like validation here for the user that that happened if this was claimed then that means the current user does own this ticket and I'm assuming that there is no date on it so we probably want to see that close button appear so in order to do that we actually need to get the latest state of our tickets here from the database because currently we have the old version that doesn't have this assigned with it so we're gonna need a refetch and set our tickets

[20:22] now currently the ticket state is being handled on the ticket list which we we do need that happening here because we also have these filter buttons and we're passing each we're mapping the tickets here in passing each ticket to this ticket component but what we're going to want to do again is like I said we want to fetch all those tickets and set them so we're basically going to want to run this function or run this functionality over again so what I think I'm going to do is Define it in its own function since we're going to be doing this more than once so I'm going to define a function called let's see what I want to call it I'm going to call it get and set tickets

[21:13] and what this function is going to do is this right here all right I'm going to take out this console log so anytime I want to get the tickets and then set the tickets I will just call this function rather than having to write this out over again so I want to get and set the tickets on the initial render so I'm putting that back in here so getting set tickets and then I'm also going to want to get and set the tickets after our new employee ticket has been posted that way we can see that it has already been claimed so we shouldn't see that claim button there anymore in order to do that I'm going to need to pass that function down to this ticket component

[21:58] so let's head back to ticket list we've got get and set tickets I'm gonna pass that as a prop to my ticket now once again I could call this something else like we just call it set tickets or getting set tickets or some other name if we want to come up with a new name but I'm just going to keep the same name so get and set tickets getting set tickets so now on my ticket component I just need to grab that out of the props object so get and set tickets remember that the name is important we defined this property here on ticket list we gave it a name of

[22:44] get and set tickets so this was get and set that's all it was named here then here in the ticket this would have to be get and set okey-doke so we got that function now once we have created this new employee ticket and it's posted in the database then we want to get and set tickets all right so let's see if this is working okay well we can see here that number five now says close so let's test it once again so I can claim number six so if I click on claim it looks like it worked so we can check our Network tab here

[23:30] we posted that employee ticket and then the next thing that happened was we refetched those tickets and then we set them so now we can see that the close button now renders here on the ticket because the ticket list State changed all right so now let's get the close functionality working okay so once again I'm going to create another function so I'm going to pass an on click here for our close and I'm going to write a function called handle close

[24:18] okay so what do we want to happen when we close a ticket well we want to add a date completed value to the ticket so we can see here that tickets that haven't been completed have no date completed and tickets that have been completed have a date completed value there okay so we want to add a date to our ticket so what I'm going to do is I'm going to get a new object here so we're going to say closed

[25:04] ticket there we go and whenever we make a put to the database it needs to be the whole object okay and the only property that we want to change is the date completed so the ID is going to be the same so we're going to make the ID the ticket dot ID the user ID is going to be the same so ticket dot user ID same with the description ticket dot description we don't want to change any of this emergency is going to stay the same emergency but we do want to set the date completed to the current date so we're just going

[25:50] to use new date here and that's going to set it to the current date all right the next thing to do is to send that to the database so once again I'm going to create a new function in my ticket service to update this ticket so I'm going to write a function and we're just going to get the ticket here and I'm going to return this fetch call and so I need to post it to service tickets and it needs to go to service ticket slash and then the ID of the tickets

[26:37] that's going to be the ticket dot ID all right and we also need to add an options object here so the method is going to be put and in the headers once again it's going to be oops the content why don't I just do this content type is application slash Json there we go okay and then for the body you need a Json dot stringify because we can't send JavaScript objects we can send Json over the web all right the ticket okay so back in our ticket component

[27:24] we're going to update this ticket so update ticket we're going to pass our closed ticket then once again once we close this ticket we don't want to see that close button there anymore right so we're going to need to get the new tickets from the database with that updated relationship so we'll need to actually it's not even the relationship it's the actual ticket itself okay so we're going to want to get and set tickets again let's see if it works head to my browser and I've got number four here so let's say close and awesome let's take a look at our Network tab

[28:10] and I can see that yep there it is to ticket number four we can kind of see it there better there's that that's a 204 there we go oh or wait maybe it's all the way down here oh there we go ticket number four this is our put we got a two or 200 which is okay and this is what we sent to the database and we're all good we sent it with the new date here so it looks like it worked awesome let's try closing number five yay so there we have it we've got claim and clothes working for the tickets so if the user is an employee then that'll see claim and close and we can even try logging in as someone that's not an employee and we shouldn't see those at all so let's try

[28:57] that so let's go to spawn a user that isn't an employee so his staff is false we'll log in as this person here we go to tickets and yep we don't see any buttons so that's great now we wanted to display some buttons here on each of our tickets depending on certain criteria so if the user is staff and there is no assigned employee to the ticket we want a button to claim that ticket when the user clicks on that button it will post a new employee ticket

[29:45] relationship to the database with the current user's employee ID and the service ticket ID then once that is posted we are going to refetch those tickets and set our ticket state with them so that we can well once again check this condition and either display the close button or claim button or no button at all right the other button that we wrote was the close button so if the current user is the assigned employee so we check here if the sign employee.userid is the current user's ID and there is no date completed that means we want to have the option for this user to close the ticket

[30:31] okay now our current user is being defined here in application views and we needed to get access to this current user State all the way down from application views to ticket list then from ticket list down to the ticket so we passed the current user we did some prop drilling here so we passed current user down from application views all the way to ticket so that we could check these conditions and render these buttons If the conditions were met there you have it awesome job and I'll see you in the next video

</details>

<details>
  <summary>Logout NavBar item</summary>

  ```jsx
  {localStorage.getItem("honey_user") ? (
    <li className="navbar-item navbar-logout">
      <Link
        className="navbar-link"
        to=""
        onClick={() => {
          localStorage.removeItem("honey_user")
          navigate("/", { replace: true })
        }}
      >
        Logout
      </Link>
    </li>
  ) : (
    ""
  )}
  ```
</details>

### 🔸🔻🔹 CSS for this chapter
<details>
  <summary>Tickets.css</summary>

  ```css
  .btn-container {
    display: flex;
    justify-content: flex-end;
  }
  ```
</details>

## Prop Drilling
In this chapter we defined a new <analogy>state</analogy> variable to hold the logged in user. We defined this state in the `ApplicationViews` component so that we can pass the current user down to any component that needs it. We encountered this when writing the logic for the **Claim** and **Close** buttons for each ticket. We needed to know the `id` and `isStaff` value of the user when deciding which button, if any, the user should see on a ticket.

In order to provide the `currentUser` state to the `Ticket` component, we had to pass it down from `ApplicationViews` to `TicketList` and from `TicketList` to `Ticket`. Passing <analogy>props</analogy> down multiple levels like this is called ***<analogy>prop drilling</analogy>***. It can be messy and hard to follow and there are advanced, better ways around this. But it's likely, if you're working on a legacy React application, that you will run into this on the job.
