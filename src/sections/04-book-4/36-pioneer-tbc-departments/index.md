# Increased Workforce

As your consulting business continues to grow, you <analogy>find</analogy> that you need to hire an accountant, a few more sales people, and one quality assurance person. That means that you need to define departments for your company.

### The Workforce ERD

Add a new table to your <analogy>ERD</analogy> in dbdiagram.io to visualize the departments and <analogy>update</analogy> the employee table to have a <analogy>foreign key</analogy> to the departments table. A department just needs an `id`, and a `name`.

### HTML Representations

1. Add a new resource in your database named `departments` and <analogy>create</analogy> an 4 department objects in the <analogy>array</analogy>.
1. Modify each employee <analogy>object</analogy> to have a <analogy>foreign key</analogy> to one department.
1. Refactor the code the generates the employee HTML to display the department name in each representation.

The final HTML representation should look like this.

```html
<div class="employee">
    <header class="employee__name">
        <h1>Rainu Ittycheriah</h1>
    </header>
    <section class="employee__computer">
        Currently using a 2015 MacBook Pro
    </section>
    <section class="employee__department">
        Works in the IT department
    </section>
</div>
```
