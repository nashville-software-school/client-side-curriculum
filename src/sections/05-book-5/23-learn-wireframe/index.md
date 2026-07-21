## The Plan
This application will have several views, and just like in Honey Rae Repairs, you will begin to build these views piece by piece. Before you get started, however, having an end product in mind will help with your decision making process as you build. _What components will you build? What will your routes be? What components can you reuse?_ Some guidance will be given for these decisions and others will be left up to you.

Below is a list of user stories describing every feature you will implement in this project. Carefully read the user stories for each view of this application, then, build a wireframe representing each view and its features. Of course, feel free to review your wireframe with a mentor when you are finished.


Revisit the [Honey Rae's Wireframe](/book_5_honey_rae_wireframe) chapter for guidance on building this wireframe.

### The Nav Bar
A navbar will persist in each view, allowing the user to navigate through the views of the application. The links on the navbar are as follows:
  1. **All Posts** > links to the view of all the posts
  2. **My Posts** > links to the view of the logged in user's posts
  3. **Favorites** > links to the view of the logged in user's liked posts
  4. **New Post** > links to the view of the new post form
  5. **Profile** > links to the view of the logged in user's profile
  6. **Logout** > will logout the user

### 🖥 New Post
>A form for the user to create a new post with a title, body, and topic.

<div class="user-story">

**Given** the user wishes to create a new post<br>
**When** the user clicks on ***New Post*** in the Nav Bar<br>
**Then** a form to create a new post will display

</div>

<div class="user-story">

**Given** the user wishes to select a topic for the post<br>
**When** the user clicks on the topic dropdown<br>
**Then** a list of the topics should appear

</div>

<div class="user-story">

**Given** the user has entered a title for the post<br>
**And** the user has entered the body for the post<br>
**And** the user has selected a topic for the post<br>
**When** the user clicks the save button<br>
**Then** the post will save to the database and the application will navigate to the My Posts view

</div>

### 🖥 Home/All Posts
>A view for all the posts.

<div class="user-story">

**Given** the user wishes to view a list of all the posts<br>
**When** the user is at the home route or visits the All Posts view<br>
**Then** the ***title***, ***topic*** and ***number of likes*** will display for each post in the database.

</div>

<div class="user-story">

**Given** the user wishes to filter the posts by topic<br>
**When** the user clicks on the topic dropdown<br>
**And** chooses a topic<br>
**Then** only the posts about the selected topic will display

</div>

<div class="user-story">

**Given** the user wishes to search for a post<br>
**When** the user enters a search term in the search input field<br>
**Then** only the posts with a title that contains the search term will display

</div>

<div class="user-story">

**Given** the user wishes to view a post<br>
**When** the user clicks on the title of a post<br>
**Then** the application will navigate to the Post Details view for the post

</div>

### 🖥 Post Details
>A view for the user to read a post

<div class="user-story">

**Given** the user wishes to read a post<br>
**When** the user has clicked to view a specific post<br>
**Then** the ***title***, ***author***, ***topic***, ***date***, ***body***, and ***number of likes*** should display for the post.

</div>

<div class="user-story">

**Given** the user wishes to view the profile of the author<br>
**When** the user clicks the author's name<br>
**Then** the application will navigate to the Profile View for the author

</div>

<div class="user-story">

**Given** the user ***is not*** the author of the post<br>
**Then** a button to like the post should display<br>
**When** the user clicks the like button<br>
**Then** the like relationship will save to the database and the application will navigate to the Favorites view

</div>

<div class="user-story">

**Given** the user ***is*** the author of the post<br>
**Then** a button to edit the post should display<br>
**When** the user clicks the edit button<br>
**Then** the application will navigate to the Edit Post view for the post

</div>

### 🖥 Edit Post
>A view to edit a post

<div class="user-story">

**Given** the user wishes to edit their post<br>
**When** the user clicks to edit a post<br>
**Then** a form to edit will display, populated with the current values for the post

</div>

<div class="user-story">

**Given** the user wishes to save their changes<br>
**When** the user clicks on the save button<br>
**Then** the post will be updated in the database and the application will navigate to the My Posts view

</div>

### 🖥 My Posts
>A view for all the posts the user has written

<div class="user-story">

**Given** the user wishes to view a list of posts they have written<br>
**When** the user visits the My Posts view<br>
**Then** the ***title*** will display for each post the user has written. A button to delete will display next to each post.

</div>

<div class="user-story">

**Given** the user wishes to view their post<br>
**When** the user clicks on the title of the post<br>
**Then** the application will navigate to the Post Details view for the post

</div>

<div class="user-story">

**Given** the user wishes to delete their post<br>
**When** the user clicks on the delete button<br>
**Then** the post will be deleted from the database and no longer display on the page.

</div>

### 🖥 Favorites
>A view for all the posts the user has liked

<div class="user-story">

**Given** the user wishes to view a list of the posts they have liked<br>
**When** the user visits the Favorites view<br>
**Then** the ***title*** will display for each post the user has liked. A button to remove to post from their favorites will display next to each post

</div>

<div class="user-story">

**Given** the user wishes to view one of their favorite posts<br>
**When** the user clicks on the title of the post<br>
**Then** the application will navigate to the Post Details view for the post

</div>

<div class="user-story">

**Given** the user wishes to unlike a post<br>
**When** the user clicks on the remove button<br>
**Then** the like relationship will be deleted from the database and no longer display on the page.

</div>

### 🖥 User Profile
>A view for the details of a user

<div class="user-story">

**Given** the user wishes to view either their profile or another user's profile<br>
**When** the user visits the User Profile view<br>
**Then** the ***full name***, ***cohort number***, ***number of posts written*** will display for the selected user

</div>

<div class="user-story">

**Given** the user is viewing ***their*** profile<br>
**Then** a button to edit should display<br>
**When** the user clicks the edit button<br>
**Then** the application will navigate to the Edit Profile view

</div>

### 🖥 Edit Profile
>A form for the user to edit their profile

<div class="user-story">

**Given** the user wishes to edit their profile<br>
**When** the user visits the Edit Profile view<br>
**Then** a form will display to edit the user's ***full name*** and ***cohort number***

</div>

<div class="user-story">

**Given** the user wishes to save their changes<br>
**When** the user clicks the save button<br>
**Then** the user will be updated in the database and the application will navigate to the User Profile view for the logged in user

</div>
