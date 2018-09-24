'use strict';

const displayTodo = (todo) => {
    // document.querySelector('.todo-list-todos').innerHTML = '';
    document.querySelector('.todo-list-todos').appendChild(makeTodoHTML(todo));
};

// const removeTodo = (id) => {
//     todos.splice(index, 1);
// };

const makeTodoHTML = (todo) => {
    const todoDiv = document.createElement('div');
    const todoText = document.createElement('div');
    const checkbox = document.createElement('button');
    const removeButton = document.createElement('button');

    todoDiv.setAttribute('class', 'todo-list-todos__todo');
    todoText.setAttribute('class', 'todo__text');
    checkbox.setAttribute('class', 'todo__check-button');
    removeButton.setAttribute('class', 'todo__delete-button');

    todoText.textContent = todo.text;
    todoDiv.appendChild(todoText);

    checkbox.innerHTML = '<ion-icon md="md-checkmark"></ion-icon>';
    todoDiv.appendChild(checkbox);

    removeButton.innerHTML = '<ion-icon md="md-close"></ion-icon>';
    todoDiv.appendChild(removeButton);
    removeButton.addEventListener('click', () => {

    });

    return todoDiv;
};