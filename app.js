'use strict';

var todos = [];

// Chance that this form might not exist
var el = document.getElementById('make-todo-form');
if (el !== null) {
    document.querySelector('#make-todo-form').addEventListener('submit', (e) => {
        // Prevents the refresh and request
        e.preventDefault();
        if(e.target.elements.text.value !== '') {
            const todo = new Todo(e.target.elements.text.value);
            todos.push(todo);
            displayTodos(todos);

            // Clear the form after submission
            e.target.elements.text.value = '';
        }
    });
}
