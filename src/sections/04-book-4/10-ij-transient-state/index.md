# Capturing User Choices

## Introduction to State Management

In the previous chapters, we created components with radio buttons for our survey, but they don't actually capture the user's choices yet. When a user clicks a <analogy>radio button</analogy>, we need to store that selection somewhere before eventually saving it to our database.

This is where the concept of **<analogy>state</analogy>** comes into play. In web applications, we have two main types of <analogy>state</analogy>:

1. **<analogy>Permanent State</analogy>**: Data stored in a database that persists between user sessions
2. **<analogy>Transient State</analogy>**: Temporary data stored in memory while the user interacts with the application

## Understanding Transient State

<analogy>Transient state</analogy> is like a shopping cart before checkout. As users make selections, we collect their choices in memory. When they're ready to submit, we take all those choices and save them to the database (<analogy>permanent state</analogy>).

For our Indiana Jeans survey, we need to capture:
- Whether the user owns blue jeans (<analogy>boolean</analogy>)
- What type of area they live in (socioLocationId)

Let's build a <analogy>module</analogy> to manage this <analogy>transient state</analogy>.

## Creating the Transient State Module

First, let's <analogy>create</analogy> a new file called `transientState.js` in your `scripts` <analogy>directory</analogy>. 

Remember our overall goal: we're building a survey application that collects data for Dr. Jones' research on blue jeans. Looking back at our <analogy>ERD</analogy>, we need to <analogy>create</analogy> `submissions` objects that match the structure of our `submissions` table:

```json
{
  "ownsBlueJeans": boolean,
  "socioLocationId": number
}
```

The <analogy>transient state</analogy> <analogy>object</analogy> we're about to <analogy>create</analogy> will temporarily hold these same properties as the user makes selections, and eventually this data will be sent to our database as a new submission.

This <analogy>module</analogy> will:
1. Store the user's current choices in a structure that mirrors our submissions table
2. Provide functions to <analogy>update</analogy> those choices
3. (Later) Provide a <analogy>function</analogy> to save all choices to the database

```javascript
// Set up the transient state data structure and provide initial values
const transientState = {
    ownsBlueJeans: false,
    socioLocationId: 0
}

// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
}
```

Let's break down this code:

1. We <analogy>create</analogy> a `transientState` <analogy>object</analogy> with the same properties as our submissions table and set some default values:
   - `ownsBlueJeans` initialized to `false` 
   - `socioLocationId` initialized to `0` (an invalid ID, indicating no selection)

2. We define two "setter" functions:
   - `setOwnsBlueJeans()`: Updates the jeans ownership status
   - `setSocioLocationId()`: Updates the selected location ID

3. Each <analogy>function</analogy> logs the updated <analogy>state</analogy> to the <analogy>console</analogy> so we can verify it's working

Notice that we don't <analogy>export</analogy> the `transientState` <analogy>object</analogy> directly. This is intentional - we're using the <analogy>module</analogy> pattern to keep the <analogy>state</analogy> <analogy>object</analogy> private and only expose functions to modify it in controlled ways.

## Updating the JeanChoices Component

Now let's <analogy>update</analogy> our `JeanChoices.js` file to capture user selections:

1. <analogy>Import</analogy> the <analogy>setter function</analogy> from the <analogy>transient state</analogy> <analogy>module</analogy>
2. Add an <analogy>event listener</analogy> to detect when radio buttons are clicked
3. <analogy>Update</analogy> the <analogy>transient state</analogy> when a selection changes

Open your `JeanChoices.js` file and modify it to match the following:

```javascript
import { setOwnsBlueJeans } from "./transientState.js"

const handleOwnershipChange = (changeEvent) => {
    if (changeEvent.target.name === "ownJeans") {
        const convertedToBoolean = JSON.parse(changeEvent.target.value)
        setOwnsBlueJeans(convertedToBoolean)
    }
}

export const JeanChoices = () => {
    document.addEventListener("change", handleOwnershipChange)

    let html = `
        <div class='survey-input' id='jeans-choice'>
            <h2>Do you own a pair of blue jeans?</h2>
            <input type='radio' name='ownsJeans' value='true' /> Yes
            <input type='radio' name='ownsJeans' value='false' /> No
        </div>
    `

    return html
}
```

Let's analyze what we've added:

1. We <analogy>import</analogy> the `setOwnsBlueJeans` <analogy>function</analogy> from our <analogy>transient state</analogy> <analogy>module</analogy>
   
2. We <analogy>create</analogy> a new <analogy>function</analogy> `handleOwnershipChange` that:
   - Checks if the changed <analogy>element</analogy> is a <analogy>radio button</analogy> with name "ownJeans"
   - Converts the <analogy>string</analogy> <analogy>value</analogy> ("true" or "false") to an actual <analogy>boolean</analogy> using `JSON.parse()`
   - Calls our <analogy>setter function</analogy> with the <analogy>boolean</analogy> <analogy>value</analogy>
   
3. We add an <analogy>event listener</analogy> to the entire document that listens for "change" events and calls our handler <analogy>function</analogy>

## Testing the Code 

> ⚠️ You've just added substantial logic to your program - now it's time to test it thoroughly. But testing is only half the equation. You also need to fully understand what each part of the code does. 
>
> Never let any code in your program remain a mystery. If there's even a single line you're struggling to understand, make use of all available resources to clarify it:
>
> - Step through it with the <analogy>debugger</analogy>
> - Ask an AI assistant to explain the concept
> - Discuss it with teammates 
> - Reach out to your instructors
>
> Building this habit of ensuring understanding will save you countless hours of debugging in the future and make you a more effective developer. Remember: professional developers don't just write code that works - they write code they understand.

Place a <analogy>breakpoint</analogy> or a `debugger` statement on the first line of the `handleOwnershipChange` <analogy>function</analogy>. Refresh the browser and choose an option for "**Do you own a pair of blue jeans?"** Observe and/or confirm the following and make changes if needed. 

1. What is the <analogy>value</analogy> of `changeEvent.target.name`? Does the <analogy>if statement</analogy> pass? 
2. What is the <analogy>value</analogy> of `changeEvent.target.value`? What is the <analogy>value</analogy> after it is converted with `JSON.parse()`? Why is this necessary?
3. Step **into** the `setOwnsBlueJeans` <analogy>function</analogy>. What's the <analogy>value</analogy> of `chosenOwnership`? What is the <analogy>value</analogy> of `transientState`?
4. Step **over**. What is the <analogy>value</analogy> of `transientState` now? What has changed?
5. Choose a location option. Does the same code run? Why or why not? 

## Updating the LocationChoices Component

Time to capture the user's location choice! <analogy>Try</analogy> to implement this code on your own. Expand the hints below if you need some help. 

<details>
  <summary>💡 <analogy>Algorithm</analogy></summary>

  As you might have guessed, the process is similar to what we did with the JeanChoices <analogy>component</analogy>:

   1. <analogy>Import</analogy> the `setSocioLocationId` <analogy>function</analogy>
   2. <analogy>Create</analogy> a `handleLocationChange` <analogy>function</analogy> that:
      - Check if the changed <analogy>element</analogy> is a <analogy>radio button</analogy> with name "location"
      - Convert the <analogy>string</analogy> <analogy>value</analogy> to a <analogy>number</analogy> using `parseInt()`
      - Call the <analogy>setter function</analogy> with the numeric ID
   3. Add an <analogy>event listener</analogy> to the document

   Note that we convert the <analogy>value</analogy> to a <analogy>number</analogy> with `parseInt()` because we need a numeric ID to match our database structure.

</details>

<details>
  <summary>💡 Code</summary>

  ```javascript
  import { setSocioLocationId } from "./transientState.js"

  const handleLocationChange = (changeEvent) => {
      if (changeEvent.target.name === "location") {
          const locationId = parseInt(changeEvent.target.value)
          setSocioLocationId(locationId)
      }
  }

  export const LocationChoices = async () => {
      const response = await fetch("http://localhost:8088/socioLocations")
      const locations = await response.json()

      document.addEventListener("change", handleLocationChange)

      let html = `
          <div class='survey-input' id='location-choice'>
              <h2>What type of area do you live in?</h2>
      `
      
      for (const location of locations) {
          html += `<input type="radio" name="location" value="${location.id}" /> ${location.label}`
      }
      
      html += `
          </div>
      `
      
      return html
  }
  ```
</details>

## 📓 Key Concepts to Remember

1. **<analogy>Transient State</analogy> vs. <analogy>Permanent State</analogy>**: <analogy>Transient state</analogy> is temporary data stored in memory during user interaction. <analogy>Permanent state</analogy> is data stored in a database that persists between sessions.

2. **<analogy>Module</analogy> Pattern**: We keep the <analogy>state</analogy> <analogy>object</analogy> private and only expose functions to modify it in controlled ways.

3. **Type Conversion**: We need to convert <analogy>string</analogy> values from inputs to appropriate data types (<analogy>boolean</analogy>, <analogy>number</analogy>) before storing them.

## 📝 What We've Learned

In this chapter, we've:
- Created a <analogy>module</analogy> to manage <analogy>transient state</analogy>
- Implemented setter functions to <analogy>update</analogy> <analogy>state</analogy>
- Added <analogy>event</analogy> handlers to our components
- Connected <analogy>radio button</analogy> selections to <analogy>state</analogy> updates
- Used the <analogy>console</analogy> to verify our code is working
- Established a pattern for capturing and storing user input

## 🔜 Next Steps

Now that we can capture user choices, our next step is to <analogy>create</analogy> a submission button and a <analogy>function</analogy> to save the <analogy>transient state</analogy> to our database (<analogy>permanent state</analogy>). 
