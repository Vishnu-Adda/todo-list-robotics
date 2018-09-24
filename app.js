'use strict';

// Bug here, can't do const
var todos = [];

var el = document.getElementById('make-todo-form');
if (el !== null) {
    document.querySelector('#make-todo-form').addEventListener('submit', (e) => {
        e.preventDefault();
        let todo = new Todo(e.target.elements.text.value);
        todos.push(todo);
        displayTodos(todos);
        // todos.forEach((listTodo) => {
        //     displayTodo(listTodo);
        // });
        // displayTodo(todo);
        e.target.elements.text.value = '';
    });
}
