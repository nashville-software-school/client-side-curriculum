# Placing a Car Order

When the user clicks the button to place an order, take their currently chosen options _(which are currently stored as <analogy>transient state</analogy>)_ and construct a new order <analogy>object</analogy> to be sent to the <analogy>API</analogy> to make it permanent.

1. Make sure there is a <analogy>foreign key</analogy> for each options type on the new <analogy>object</analogy>.
2. Ensure that you have properly defined the <analogy>POST</analogy> options for the **fetch**.
3. Make sure you reset <analogy>transient state</analogy> that was being used to store the user options once the order <analogy>state</analogy> is created.
4. Trigger the `stateChanged` <analogy>custom event</analogy> and have the main <analogy>module</analogy> listen for it and regenerate all of the HTML.
5. Once regenerated, the new order should appear in the <analogy>DOM</analogy>. Again, start with displaying a simple message with the order <analogy>number</analogy>. _(Did you <analogy>create</analogy> your **Orders** <analogy>module</analogy> yet to display HTML representations of orders?)__
