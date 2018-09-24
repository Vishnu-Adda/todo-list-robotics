'use strict';

const displayTodos = (todoList) => {
    document.querySelector('.todo-list-todos').innerHTML = '';
    todoList.forEach((listTodo) => {
        document.querySelector('.todo-list-todos')
        .appendChild(makeTodoHTML(todoList, listTodo));
    });
};

// Fix up soon
const removeTodo = (todoList, todo) => {
    const index = todoList.findIndex((listTodo) => {
        return listTodo === todo;
    });
    todoList.splice(index, 1);
    displayTodos(todoList);
    return todoList;
};

const makeTodoHTML = (todoList, todo) => {
    const todoDiv = document.createElement('div');
    const todoText = document.createElement('div');
    const checkbox = document.createElement('button');
    const removeButton = document.createElement('button');

    todoDiv.setAttribute('class', 'todo-list-todos__todo');
    todoText.setAttribute('class', 'todo__text');
    todoText.setAttribute('contenteditable', 'true');
    checkbox.setAttribute('class', 'todo__check-button');
    removeButton.setAttribute('class', 'todo__delete-button');

    todoText.textContent = todo.text;
    todoDiv.appendChild(todoText);

    checkbox.innerHTML = '<ion-icon md="md-checkmark"></ion-icon>';
    todoDiv.appendChild(checkbox);

    removeButton.innerHTML = '<ion-icon md="md-close"></ion-icon>';
    todoDiv.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(todoList, todo);
    });

    return todoDiv;
};