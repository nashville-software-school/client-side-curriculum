## Editing The Employee Profile
In this chapter you will implement the form for the logged in employee to edit their profile.

## 📺 Watch the video

### ⚠️ Note on the video: 
This video instructs you to make the file `components/forms/EmployeeEdit.js`. Make sure your file ends in `.jsx` instead of `.js`.

Watch the **Employee Form** video below and implement the code yourself. Then read the rest of the chapter summarizing what you've learned.

<iframe name="yt-ex13" src="https://www.youtube.com/embed/fg6g5rs5hh4" width="700" height="394" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<details>
<summary>📄 Video Transcript — Employee Form</summary>

### Adding the Profile Link and Route

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=3&autoplay=1" target="yt-ex13">[0:03]</a> Welcome back. In this video we're going to implement the edit profile functionality for an employee. This will be our last view and feature for all of the employee views. Okay, so we have a profile link here in our nav bar, when we click on that we want it to take us to the employee profile edit form. So we want to see their specialty and their hour hourly rate, and we also want to have the ability to change the values for these and save the profile. So the first thing I'm going to do is set up the link for the profile and the navbar component, so I'm going to head to nav navbar.js

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=51&autoplay=1" target="yt-ex13">[0:51]</a> I'm going to add a new link here for profile, the list item, and I'm going to have a link. It's going to say profile. We want this to take the user 2 forward slash profile. Now let's go ahead and add a route to listen for this path. We have, our routes are all inside of application views now. Okay, so I'm going to add a another route here, and I'm just going to make it self-closing. So when the path is at forward slash profile, remember this is a child route of the forward slash route. So forward slash profile, and let's just

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=97&autoplay=1" target="yt-ex13">[1:37]</a> give it something to test out for now, we'll just say profile. Oops, profile. There we go. All right, let's test this out and see if it works. I'm going to head to my browser, give this a refresh. And I'm not serving. Okie doke, there we go. All right, and I think I forgot to add styling for my link there, so, but it does look like it's working. We've got profile, when we click on it it takes us to forward slash profile, and now we're showing that element there. Let me go back and fix my styling for this, where is it, oh here we go. So we want this to have a class name of nav bar, oops, item.

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=142&autoplay=1" target="yt-ex13">[2:22]</a> All right, let's see if that works. There we go, all of our routes still work here. This takes us to forward slash profile, and we just see profile. Now okay, now let's create our employee form component, since we're going to have several more forms in this application that will pretty much share the sim, like, same styling. I'm going to store all of my forms in a forms directory. Alternatively, I could make this form in the employees directory. This is kind of just personal preference, and just another hard part of being a developer is naming things and deciding on your file structure. So for me, I'm just going to make this in a forms directory.

### Building the Employee Form JSX

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=189&autoplay=1" target="yt-ex13">[3:09]</a> So, forms, and I'm going to make an employee form dot JS. And I'm also going to go ahead and make that form CSS and paste in my styles. All right, and since I always, always forget, I'm just going to go ahead and make sure I import that. So we got forms dot, or it's just form dot CSS, right? So let's go ahead and make this component, so export const employee form. All right, and I'm just going to go ahead and start building out this form.

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=234&autoplay=1" target="yt-ex13">[3:54]</a> So let's take a look at the things that we want to have here on the form. Now, for the employee, I'm wanting to be able to edit the specialty and the rate, and we can see that here in our wireframe, that I want to be able to edit the specialty in the hourly rate. So I'm going to go ahead and start building this out. So I'm going to return, and this is going to be inside of a form element. I'm going to give it a class name of profile, and we're going to have an H2 that says update profile. All right, and then I'm going to put all of my functionality for this form inside of

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=281&autoplay=1" target="yt-ex13">[4:41]</a> the field, field set. So we're gonna have a field set for specialty, hourly rate, and then also for the button. So I'm going to do a field set, and inside of here we're going to have the form group. So this is going to be div class name form group. And I'm gonna have a label, so label will be specialty, and then the input for the specialty, which can be self-closing input, and the type for this input is going to be text.

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=329&autoplay=1" target="yt-ex13">[5:29]</a> I'm also going to make it required. I'm going to give it a class name of form control, and I'm gonna, that's all I'm gonna do for now. Okay, so I'm going to do another one of these, it's going to be for our, we're just going to put rate of, that's fine, noble hourly rate, there we go. All right, and this is going to be number, and I think that's all I'm going to put for that woman as well. And then one more of these, this is going to be for the button. So instead of an input and a label, I'm going to have a button here, class name is going to be form

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=375&autoplay=1" target="yt-ex13">[6:15]</a> button, this is going to say save profile. I'll also want to give a color to this button, so I'm going to make it a, the primary color. That's all that we're going to do for now with our form. So let's now render this instead of that profile text. So I want to instead render the employee form component, I think that auto imported it for me, perfect. Okay, let's take a look at our browser and see what we get. There we go, awesome, there it is. So this is a great start, however, I would like to see the current values for the

### Fetching the Current User and Employee

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=422&autoplay=1" target="yt-ex13">[7:02]</a> user's profile to display in the form. For that, I'm going to need to fetch the user's profile, so I'm going to need to get the employee here, so I can pull in the specialty and the rate, and populate my specialty and rate with the current values, because I like to see that before I can edit it. Okay, so for that I'm going to need the current user in this component, right, because we do have the current user and the current user's ID, so we'll be able to use that ID to get the employee by the user ID. Okay, so let's do that. Uh, the current user is currently being managed here in the application views component, so we need

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=467&autoplay=1" target="yt-ex13">[7:47]</a> to get this current user, and pass it down to our employee form, current user. So now my employee form, I can grab that current user by destructuring the props object. So let us just test that out really quick, to see if we can confirm that the current user is being passed as a prop. Let's give this a couple refreshes here. There we go, there's our employee form, and there's our props, and here's the current user goal. So we have the ID of the current user, so we're going to want to do is on

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=513&autoplay=1" target="yt-ex13">[8:33]</a> the initial render of this component, we want to get that employee. It looks like we're going to be getting this one here. So we're going to need a function in our employee service to get an employee by the user ID, and luckily for us, when we go there, we already have a function for that. We wrote this when creating the employee details component. Now we are getting some extra information on here, like the employee ticket, um, getting all the employee tickets for that user, but that's fine, we can reuse this function. So let's just, let's just run this real quick, just to remind

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=559&autoplay=1" target="yt-ex13">[9:19]</a> us. Oops, that's not what I want, of what we're getting. Okay, so let's say it's for four, so we're going to get this big old object here, and we'll have the specialty and the rate. Okay, so back in my code, for my employee form, I want to do that, I want to get that, that, um, that employee. Okay, so I'm going to create a use effect here to do that, because I want to do it on the initial render, and we're going to run get employee by user ID, and I'll just pass in the current user dot ID, then

### Storing the Employee in State

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=604&autoplay=1" target="yt-ex13">[10:04]</a> Now let's take a look at this again one more time. So remember that when we run this, we're actually getting back an array, because it's going to find any employee where this condition matches. We're not actually getting like an employee by the employee ID, we're running a query here, so it's going to give us an array of all the results. Now we're only ever expecting one employee to come back, so we can just go ahead and pull that employee out of the array. Okay, so once we get that data back, we'll just call it data for now. We want to get that employee object, so it's going to be data zero

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=650&autoplay=1" target="yt-ex13">[10:50]</a> it's going to be the first and only item in that array. And what do you want to do with it? Well, I need some state, so I'm going to define state for my employee and set employee. There we go, so use state, and I'm gonna give this an initial value of an empty object. And I need to import you state, use state, there we go. Okay, so let's set employee with our employee object. All right, so now let's test this, see if it works, we'll take a look at our dev tools and see if we're getting our employee object, and hmm

### Debugging the Undefined Current User Bug

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=695&autoplay=1" target="yt-ex13">[11:35]</a> So it looks like my state is actually undefined, so I'm expecting to get this employee object here, but I'm actually getting undefined. So let's take a look at our network call to see if we did in fact get this back. If I go to my network tab, I can see there is the call that I made right here to employees, expand user, embed employee tickets, where user ID is equal to, and it looks like I passed undefined. That's interesting, because I know I passed current user.id, and if I look at my components, I can see that I have my current user here, so current user.id would be four. But for some reason, when I make that

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=740&autoplay=1" target="yt-ex13">[12:20]</a> fetch call, it's passing undefined rather than the current user's ID. Yep, and I sure did put current user.id. Well, this is where that little hint that we're getting from ESLint is pretty useful. It warned us, hey, you might want to include current user here, I think that's what it's saying, right. Missing dependency, current user. So saying you might want to include this current user, because I know that you're depending on it to run this functionality here. So let's talk about why current user ID is undefined. Well, application views is what's rendering our employee form, and on the initial render of all this, the current user is an empty object

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=789&autoplay=1" target="yt-ex13">[13:09]</a> so when we rendered this, we're actually passing an empty object for the initial render. So we're going to want to run this again once we get the value of the current user. So up here in application views, we get that honey user object from local storage, and then we set the current user with it. But after we did that, we didn't run this again. So we need it to run again. So instead, we're going to, in our employee form, make sure we include current user here, so that it runs once we get that current user from local storage, and it will run this use effect again. So just another fun example of the life cycle, the life cycle

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=835&autoplay=1" target="yt-ex13">[13:55]</a> of react components and how they render. All right, and just so you know, that might not always cause a problem, right, with the employee form. Like, we could take this out, and it might work some of the time, but it's not going to work at every time, because it just depends on where we are when our application loads, what got rendered first. So we just witnessed that bug there. So that's why ESLint was telling us, hey, you're depending on this current user, you're probably going to want it here in your dependency array, and it was right. We did, because we ended up not getting it. So let's take a look now. If I refresh this, look at my component state, and I see I'm in my employee form, and there it is, my employee object. Okay, so now let's go ahead and populate

### Populating Inputs and Wiring Up onChange Handlers

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=881&autoplay=1" target="yt-ex13">[14:41]</a> our inputs with the value of our employees information here. So to do this, we can use the value attribute for these input elements. We're going to manually set the value of these inputs to the employees values. So here I'm going to add value to my input here, so I'm saying I want the value of this input to always be whatever employee dot specialty is, special T, there we go. So I'm going to say, hey input, your value should always be whatever employee.specialty is. So if we ever update employee.specialty, it's also going to update it here. All right, and then same with the hourly

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=926&autoplay=1" target="yt-ex13">[15:26]</a> rate value is going to be specialty, or sorry, employee dot rate. So now when I look at my browser, I can see MacBook Pros and 100. Cool, now I can go ahead and change this, so we'll just say, oops, actually I can't, it's not even let me change it at all. That's because we said the value is going to be employee.specialty. Well, we want the employee specialty to change when we type in here, when we make, try to make some changes. So in order to do that, we need to add the on changes for these inputs. So let's start with the specialty again. So on change for this

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=972&autoplay=1" target="yt-ex13">[16:12]</a> input, what do we want to do now? I might refactor this and put it in another function, but for now I'm just going to write it in here. So I don't want to, I can't exactly modify this employee object. Let's, let's just see what happens here. Let's say, I say set employee with the, we'll capture the event and we'll get the event dot Target dot value. So here's my employee, so if I change this, well I just set that whole employee object to the event Target value of this input. So I want to preserve that object and

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1017&autoplay=1" target="yt-ex13">[16:57]</a> just update the specialty property of the object. Now remember that when we change State, we can't manually set the state like this, we can't just do employee dot specialty is equal to, you know, whatever we want. We have to use the set State function. So what I'm going to do instead is I'm going to create a copy of my state object here. I'm going to say copy, and I actually need to declare this, so const copy, and I'm going to spread all of the properties of the employee State into this new object here. That's what the spread operator does, it's saying take all the properties of this object and just

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1062&autoplay=1" target="yt-ex13">[17:42]</a> paste them in this new object here. So now I'm going to take that copy, and I'm going to set the specialty to event dot Target dot value. Great, so now we have a copy of our state, we changed the specialty property to be what the user typed in to this input. Now we can set employee with this new employee object that we updated. So let's see if this works, head to the browser, make sure I'm watching my State here. Okay, so I should be able to see specialty change

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1108&autoplay=1" target="yt-ex13">[18:28]</a> so if I just say MacBooks, there we go. So we didn't override this object, we still preserve the rest of the properties here while just changing this one. So let's do the same for hourly rate on change. I'm gonna capture the event here, and this is an input again, so it's going to be the event.target.value. So I'm going to make a copy, so const copy is going to be a copy of the employee object here, and I'm going to set the rate to the event dot Target and the value

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1153&autoplay=1" target="yt-ex13">[19:13]</a> and then we'll set our employee with the copy. So let's watch this now, so we should see the hourly rate change and nothing else. There you have it, cut their pay. So we have fetched our employee, we have populated our inputs with the employee values, we are able to capture the user's changes and save them in state. Now we just need to be able to save this profile, so let's begin writing a function for that. So I'm going to call this const handle save

### Writing handleSave and Preventing Default Submission

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1205&autoplay=1" target="yt-ex13">[20:05]</a> Okay, and this is what we're going to, I'm just going to say for now, I'm just going to console log clicked, and we're going to pass that as the on click function for this button, so handle save. All right, now this is the fun thing about buttons and forms, they will automatically submit a refresh of our application, which we obviously don't want to do. So let me show you how this happens. So remember, I created this handle save function that showed console log clicked, and that is what I'm passing to the on click of this button here. So when I go to the browser, we're going to look for that console log

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1250&autoplay=1" target="yt-ex13">[20:50]</a> if I click on save profile. I saw clicked for just a second, and then it was gone, let me zoom in so you can see. So watch when I click save, let's get past this error here, it's actually a warning. Save profile, we saw clicked, and then it was gone. And then we're also getting this for some reason, and it's gone. And the reason for that is because buttons in forms, so anything that we do to submit inside of a form here will by default trigger a re-render for application. We don't want that to happen, so what we can do is prevent that default behavior, so for callback functions on events they

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1297&autoplay=1" target="yt-ex13">[21:37]</a> will automatically pass the event to our function, so I'm going to capture that event here, oops, event, and I'm going to prevent that default resubmission. So we're going to do event dot prevent default, just like that. Let's see if that changes anything. So got my console open here, and if I click save profile, there we go, see, didn't trigger that refresh. Okay, now that we have that out of the way, let's edit our profile, so I'm going to want to create a new object to send to the database, so this updated profile object, so I'm going to say const, we'll say up, or edited

### Building and Saving the Updated Employee Object

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1345&autoplay=1" target="yt-ex13">[22:25]</a> employee, we can call it that. And so we want all the properties for the employee to be here on this object, so I'm going to need the ID, and that's going to be, well, we've got our employee state here, so employee dot ID. We also want the specialty, and we are updating that specialty on the employee object on this on change here, so employee dot specialty. We also want the rate, so employee dot great, and the user ID, which is the employee dot user ID

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1392&autoplay=1" target="yt-ex13">[23:12]</a> okay, now you might ask, well, couldn't we have just passed this employee state rather than creating this new object? Remember, we're getting much more than just that object for our employee state, because we embedded those, those employee tickets, and we also embedded the user. So our employee state is actually this giant object with employee tickets and user, and we don't want to post that to the database, because then that's what would show up for our employee here. So we're just going to create an object to hold all those new changes. Okay, so now we want to post this employee to the database. Well, let's head to our employee service and write

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1438&autoplay=1" target="yt-ex13">[23:58]</a> that function. So we're going to create an export by function, so I'm going to call this update employee, and I'm going to return this function, or this fetch call. Oops, press the wrong thing here, there we go, slash employees, and then we also need to add in here the employee ID, employee dot ID, there we go

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1484&autoplay=1" target="yt-ex13">[24:44]</a> all right, now the method for this is going to be a put, going to be set the content type, so the type of content that we're sending over the web is application slash JSON, and now the body is going to be our employee object that we need to stringify, there we go. Okay, now back in our employee form, all we got to do is update that employee edit and play. Then

### Navigating After Save and Recap

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1533&autoplay=1" target="yt-ex13">[25:33]</a> all right, so what do we want to do next? Well, let's head to our wireframe, and currently I have it so that when I click on save profile I want it to take me back to home, which I've kind of changed my mind on this. I don't think this is a great user experience. I think it would be a lot better as if it took us to the employee details for this logged in employee. So once we click on save profile, I would like it to take me all the way here to employee details. Now, the route that we have set up for that is slash employees slash the employee ID. I believe it's the employee ID, or was it the user ID? Remember that was kind of funky. I think it was actually the user

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1578&autoplay=1" target="yt-ex13">[26:18]</a> ID, yeah, it was the user ID. Note to self, change this to say user ID. Okay, so in our employee form, I want, once we've posted this employee to the database, I want our application to navigate to slash employee slash the current user ID. So we're going to introduce a new hook here from react router dom called use navigate, so news navigate, we're going to import that. We don't have anything from react router dom right now, so import use navigate from react router dom. So in order to use the use navigate hook

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1624&autoplay=1" target="yt-ex13">[27:04]</a> it's going to return to to us a function that allows us to navigate. This is an important step. If you try to navigate with the use navigate hook, it's not going to do what you want. So we first have to define variable to hold this function, so I'm going to call it navigate, is equal to use navigate. So a little funky, but the use navigate hook returns a function to us that allows us to navigate different paths in our application. Now, kind of like use date, remember how you state also returns the function to us, you know, it's just, this function lives inside of an array, all this returns to us is a function, so

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1670&autoplay=1" target="yt-ex13">[27:50]</a> now we can use this function to navigate. We said we wanted to go to forward slash employees slash the current user dot ID. So I'm going to go ahead and make some changes to my employee here. We're going to say it works on MacBook, it's all MacBooks, and since he now can work on more than just MacBook Pros, he can even work on errors, we're going to give him a ten dollar raise. Save profile, and it took us to employee slash four, awesome, and it's actually, oh, girl, sorry

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1717&autoplay=1" target="yt-ex13">[28:37]</a> Helen Elizabeth, she works on MacBooks, she makes an hourly rate of 110, and she's also currently working on three tickets. Good for you, Helen Elizabeth. So there we go, we've, that's what we've got. So to recap what we did, is we added a link to our nav bar to navigate to slash profile. When we navigate to slash profile, we also set up a route to listen for that path that will render the employee form component. Now the simply form component allows us to edit the specialty and the hourly rate of the currently logged in employee, and we can also see the current value for these things. So we ended up fetching that employee by the user ID, and then populating our inputs with the values of

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1763&autoplay=1" target="yt-ex13">[29:23]</a> that employee from the database. Now we can modify these to say different things, like we can modify the specialty, and we can also change the hourly rate. And once we save that profile, we use the use navigate hook that returns to us a function that we stored in a variable called navigate, to navigate to forward slash employee slash the user ID. Now we can see the changes that we made here for that employee, and that concludes all of the views here for our employees. So we have a fully functioning app for one set of users here. So part four, we're going to start working on the views here for customer

<a href="https://www.youtube.com/embed/fg6g5rs5hh4?start=1810&autoplay=1" target="yt-ex13">[30:10]</a> views, and make it so that only a customer can see customer views, and only an employee can see employee views. So congratulations, you did an amazing job, keep it up.

</details>


### 🔸🔻🔹 CSS for this chapter
<details>
  <summary>Form.css</summary>

```css
form {
  margin: 3rem 5rem;
  border: 1px solid var(--outline);
  border-radius: 10px;
  padding: 1rem 0rem 0rem 1rem;
  box-shadow: 1px 2px 5px lightgray;
  background-color: var(--offWhite);
}

fieldset {
  min-width: 0;
  padding-bottom: 1.5rem;
  margin: 0;
  border: 0;
}

.form-control {
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border: 1px solid var(--outline);
  border-radius: 0.25rem;
}

.form-group {
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
}

.form-btn {
  align-self: flex-end;
}

.form-btn:focus {
  box-shadow: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
```
</details>

## The `useNavigate` <analogy>hook</analogy>
In this chapter you were introduced to another <analogy>hook</analogy> we get from the **react-router-dom** library called `useNavigate`. This hook returns a function that allows us to navigate to a different url, much like the `Link` component. 

```javascript
const navigate = useNavigate() // returns a function
```

We stored that function in a variable called ***navigate***. In order to use that function, we just pass the path we want it to navigate to.

```javascript
navigate(`/employee/${currentUser.id}`)
```

## Prevent Default for Forms
Forms are a special element in HTML. If you have a `button` inside of a `form` element, when you click on that button it will submit the form. On the form's submission, the page will refresh. To prevent this from happening, you can capture the event in the `onClick` function for the button and call `preventDefault()` on the event. This will prevent the page from refreshing.

## What's up with that warning?
After creating the form and populating the inputs with the values from our employee state, we got this warning in the console: 

```sh
Warning: A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components
```

The reason for this warning is the values we passed to the inputs:

```jsx
<input
  type="text"
  value={employee.specialty}
  required
  className="form-control"
/>

<input
  type="number"
  value={employee.rate}
  required
  className="form-control"
/>
```

The initial value for `employee` when the component renders is an empty object. Therefore, on the initial render, `employee.specialty` and `employee.rate` are `undefined`. Take a look at that error one more time. It doesn't like when we set the value of an input to undefined. So how do we get rid of this error? Two ways. We could add `specialty` and `rate` as properties with `''` and `0` as values to the initial object we give our `employee` state. This way way `specialty` and `rate` will never be undefined. Or we could use a <analogy>ternary statement</analogy> when setting the value of the input.

```jsx
<input
  type="text"
  value={employee.specialty ? employee.specialty : ''}
  required
  className="form-control"
/>

<input
  type="number"
  value={employee.rate ? employee.rate : 0}
  required
  className="form-control"
/>
```

This way we're first checking if `employee.specialty` and `employee.rate` are defined before setting them as the values for our inputs.

## Refactoring the `onChange` functions
Let's try to simplify our code a bit by writing a function we can use for any `onChange` that updates our state. Here's the way we're currently handling the `onChange` of our inputs.

```jsx
<input
  type="text"
  value={employee.specialty ? employee.specialty : ""}
  onChange={(event) => {
    const copy = { ...employee }
    copy.specialty = event.target.value
    setEmployee(copy)
  }}
  required
  className="form-control"
/>

<input
  type="number"
  value={employee.rate ? employee.rate : 0}
  onChange={(event) => {
    const copy = { ...employee }
    copy.rate = event.target.value
    setEmployee(copy)
  }}
  required
  className="form-control"
/>
```

This works, but we have some redundant code. We've also written quite a bit of logic in these `onChange` functions which makes our jsx long and difficult to read. Let's write ***one*** function that can handle both of these `onChange` events. We'll start by adding a `name` attribute to our `input` elements. 

```jsx
<input
  type="text"
  name="specialty"
  value={employee.specialty ? employee.specialty : ""}
  onChange={}
  required
  className="form-control"
/>

<input
  type="number"
  name="rate"
  value={employee.rate ? employee.rate : 0}
  required
  onChange={}
  className="form-control"
/>
```

Now for the function: 

```javascript
const handleInputChange = (event) => {
  const stateCopy = { ...employee }
  stateCopy[event.target.name] = event.target.value
  setEmployee(stateCopy)
}
```

By adding the `name` attribute to our input, we were able to define which property this input will change. In our function, we target that property by accessing the name via `event.target.name`. Now we can use this function for any input that modifies our employee state object.


```jsx 
<input
  type="text"
  name="specialty"
  value={employee.specialty ? employee.specialty : ""}
  onChange={handleInputChange}
  required
  className="form-control"
/>

<input
  type="number"
  name="rate"
  value={employee.rate ? employee.rate : 0}
  required
  onChange={handleInputChange}
  className="form-control"
/>
```
