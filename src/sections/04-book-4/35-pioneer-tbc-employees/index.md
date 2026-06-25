# Listing Employees

In this first chapter, your task is to <analogy>create</analogy> a list of employees.

## Practice: Small Business Workforce

> <analogy>Create</analogy> a `~/workspace/workforce` <analogy>directory</analogy> for this exercise.

A small software consulting business wants to keep track of its employees and the computers that they use. Each employee is assigned a computer when they join the company.

<analogy>Create</analogy> an <analogy>API</analogy> to be served with `json-server` and <analogy>create</analogy> the following resources in your `database.json` file. **Do not** build the arrays of objects in your JavaScript code.

1. Build arrays of objects that represent _Employees_, and _Computers_ in your `database.json` file.
1. <analogy>Assign</analogy> every resource a unique `id` <analogy>property</analogy>.
1. <analogy>Assign</analogy> each employee a computer using a <analogy>foreign key</analogy>.

Here's some <analogy>JSON</analogy> to get you started. Add at least 4 more computers, and 4 more employees to your database. <analogy>Assign</analogy> each employee a different computer.

> #### `workforce/api/database.json`

```json
{
    "computers": [
        {
            "id": 1,
            "model": "Macbook Pro",
            "year": 2015
        }
    ],
    "employees": [
        {
            "id": 1,
            "firstName": "Rainu",
            "lastName": "Ittycheriah",
            "computerId": 1
        }
    ]
}
```

## HTML Representations

1. Using the strategies that you learned in previous projects in this book, generate the initial modules that you will need to generate HTML representations of employees _(e.g. main.js, employees.js)_.
1. Use the employee and computer data in the employee list <analogy>component</analogy> to display the employee's name, and age. Also display the model and manufacture year for the computer she is using. Remember to use the `_expand` query <analogy>string</analogy> <analogy>parameter</analogy> when fetching employees.

