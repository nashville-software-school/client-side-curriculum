Now that you have made all of the changes that Björn wanted for his software program, you need to present it to him. To put your best foot forward, make sure that - if you haven't done so already - that your code is modularized.

You can follow one of two strategies.

* By content type _(i.e. a <analogy>module</analogy> for all trail code, etc.)_
* By function _(i.e. all data in one module, all functions in one module, etc.)_

Then utilize `require()` and `module.exports` correctly make the appropriate code available to other modules. The final result should be that the `adventure.js` module should contain only the code for displaying the information, and should import the data and/or the functions needed from other modules.

<details class="cs-theory">
    <summary>🏛️ CS Theory Check-in: Encapsulation, Single Responsibility</summary>

You made a similar split back in Sequina's Surf Shop's `data.js` and `functions.js`, except there the split was already decided for you. This time you had two valid ways to split this code into modules: by content type (all trail code together, all river code together) or by function (all data in one module, all functions in another). Both choices bundle related code behind clear boundaries, that's encapsulation at work either way. But they draw the "one job" line differently. Which one did you choose, and what's the one job each of your modules ends up doing?

</details>
