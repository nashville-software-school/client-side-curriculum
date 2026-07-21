Now that you have a visualization of how the project will be presented to the user in the browser, it is time to design the data needed for the project.

1. What are the main resources? For example, one resource is **Guests**.
1. What are the properties of each resource?
1. What are the relationships between the resources?

## Hints

Here are some helpful hints to get you moving if you feel stuck.

<details>
    <summary>Main resources</summary>

These are the main resources, but may not be all of the tables you define in your ERD. That will depend on what you determine their relationships to be.

1. ParkAreas
1. Services
1. Guests

</details>

<details>
    <summary>How to determine relationships</summary>

Pick two resources in your ERD. For example, ParkAreas and Guests. Then ask yourself the following two questions.

1. Can a park area have many guests?
1. Can a guest currently be visiting many park areas?

If the answer to only one of those questions is yes, then you have a one-to-many relationship. You put the foreign key on the correct resource and draw the relationship.

If the answer to both of those questions is yes, then you have a many-to-many relationship. This requires a joining table between the resources which will contain a foreign key to each main resource. Then draw both relationships.
</details>

<details class="cs-theory">
    <summary>🏛️ CS Theory Check-in: Encapsulation, Open/Closed Principle</summary>

Before you write any code, think back to how Shipping Ship Ships organized its modules: one database module per set of related data, an accessor function for each, and a `main.js` that only ever composes the pieces together. As you plan this project's modules, where do you expect that same boundary to fall? Which module should nobody else be allowed to reach into directly?

</details>
