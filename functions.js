'use strict';

const displayTodos = (todoList) => {
    document.querySelector('.todo-list-todos').innerHTML = '';
    todoList.forEach((listTodo) => {
        document.querySelector('.todo-list-todos').
            appendChild(makeTodoHTML(todoList, listTodo));
    });
    if (todoList.length > 0) {
        if (!document.querySelector('#make-todo-form > .todo__delete-button')) {
            // const addButton = document.querySelector('.todo-add-button');

            // addButton.setAttribute('border-right', '1px solid #cba3db');

            $('.todo-add-button').css({
                "border-right-color": "#cba3db",
                "border-right-width": "1px",
                "border-right-style": "solid"
            });

            document.querySelector('#make-todo-form').
                appendChild(makeDeleteCheckButtonHTML(todoList));
        }
    }
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

const checkTodo = (todoList, todo) => {
    const index = todoList.findIndex((listTodo) => {
        return listTodo === todo;
    });
    todoList[index].toggleCheck();
    displayTodos(todoList);
    return todoList;
};

const removeCheckedTodos = (todoList) => {
    todoList = todoList.filter(listTodo => listTodo.getCheck() !== true);
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

    if (todo.getCheck() === true) {
        todoText.innerHTML = `<del>${todo.text}</del>`;
    } else {
        todoText.textContent = todo.text;
    }
    todoDiv.appendChild(todoText);

    checkbox.innerHTML = '<ion-icon md="md-checkmark"></ion-icon>';
    todoDiv.appendChild(checkbox);
    checkbox.addEventListener('click', () => {
        todo.toggleCheck();
        if (todo.getCheck() === true) {
            todoText.innerHTML = `<del>${todo.text}</del>`;
        } else {
            todoText.textContent = todo.text;
        }
    });

    removeButton.innerHTML = '<ion-icon md="md-close"></ion-icon>';
    todoDiv.appendChild(removeButton);
    removeButton.addEventListener('click', () => {
        removeTodo(todoList, todo);
    });

    return todoDiv;
};

// const makeSubmissionTextHTML = () => {

// };

// const makeAddButtonHTML = () => {

// };

const makeDeleteCheckButtonHTML = (todoList) => {
    const deleteCheckButton = document.createElement('button');

    deleteCheckButton.setAttribute('class', 'todo__delete-button');
    deleteCheckButton.style.fontSize = '18px';
    deleteCheckButton.innerHTML = 'Delete Checked';

    deleteCheckButton.addEventListener('click', () => {
        removeCheckedTodos(todoList);
    });

    return deleteCheckButton;
};