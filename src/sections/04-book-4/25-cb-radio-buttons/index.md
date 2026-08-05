## Getting Started

1. In your main <analogy>module</analogy>, define your <analogy>render</analogy> <analogy>function</analogy> and design the overall HTML structure you want.
1. <analogy>Create</analogy> four modules in your `scripts` <analogy>directory</analogy>, each being responsible for displaying the four different option groups, just like you did in Kneel Diamonds.
    1. Wheels
    1. Technologies
    1. Paints
    1. Interiors
2. <analogy>Import</analogy> those four modules into the main <analogy>module</analogy> you created in step one. <analogy>Invoke</analogy> them in your <analogy>render</analogy> <analogy>function</analogy> and interpolate the resulting HTML in the appropriate places in the overall structure.
3. <analogy>Create</analogy> a <analogy>module</analogy> to store <analogy>transient state</analogy>. Define the initial <analogy>state</analogy> needed for the application, and write setter functions for each <analogy>state</analogy> <analogy>property</analogy>.

<details class="cs-theory">
    <summary>🏛️ CS Theory Check-in: Single Responsibility, Interface Segregation</summary>

Four modules, one job each: Wheels only knows how to display wheel options, Paints only knows paint options, and so on. Your main module imports only what it needs from each, by name. What would happen to the other three modules if you decided to change how Technologies stores or displays its data?

</details>