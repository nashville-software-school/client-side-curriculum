# Adding Foreign Keys as State

In this chapter, you are going to continue to add state to the DOM using data attributes. This part of the project is setting up for the interactivity we want to have in the next chapter for showing a walker when a pet is clicked.

The <analogy>foreign key</analogy> of `walkerId` is on each pet in the database. You will inject this state as a data attribute of each pet. Here's some example code to view.

The foreign key isn't enough to show the walker name, so you will complete this feature in the next chapter.

```js
petHTML += `<li data-walkerforeignkey="${pet.walkerId}">
    ${pet.name}
</li>`
```

Watch the **DeShawn - Add Walker Foreign Key** video to see a walkthrough of the process and then implement it yourself.


<a href="https://watch.screencastify.com/v/PAMYsa0EtwSSRZlmbFVD" target="_blank" rel="noopener noreferrer"><img src="./images/video-play-icon.gif" height="75rem" /></a>
