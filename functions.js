'use strict';

// Display the list of todos every time we add or delete a todo
const displayTodos = (todoList) => {
    // Set the html to nothing as we refresh the list
    $('.todo-list-todos').html('');
    todoList.forEach((listTodo) => {
        // Append each todo item to the todo list div
        $('.todo-list-todos').append(makeTodoHTML(todoList, listTodo));
    });
    // If there are todos, and there is no delete button, then style and add buttons accordingly
    if (todoList.length > 0) {
        if (!$('#make-todo-form > .todo__delete-button').length) {

            $('.todo-add-button').css({
                "border-right-color": "#cba3db",
                "border-right-width": "1px",
                "border-right-style": "solid"
            });

            $('#make-todo-form').append(makeDeleteCheckButtonHTML(todoList));
        }
    } 
    // If there are no todos, then revert add button styles, and remove the deletion button
    else if (todoList.length === 0) {

        $('.todo-add-button').css({
            "border": "none"
        });

        if ($('.todo__delete-button')) {
            $('.todo__delete-button').remove();
        }
    }
};

// Finds and removes a given todo from the array of todos
const removeTodo = (todoList, todo) => {
    const index = todoList.findIndex((listTodo) => {
        return listTodo === todo;
    });
    todoList.splice(index, 1);
    displayTodos(todoList);
    return todoList;
};

// Algorithm to remove all checked todos from the array of todos
const removeCheckedTodos = (todoList) => {
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].check === true) {
            removeTodo(todoList, todoList[i]);
            // Stays on the same index once it removes a todo
            i--;
        }
    }
    displayTodos(todoList);
    return todoList;
};

const makeTodoHTML = (todoList, todo) => {
    const todoDiv = document.createElement('div');
    const todoText = document.createElement('div');
    const checkbox = document.createElement('div');
    const checkboxInput = document.createElement('input');
    const removeButton = document.createElement('button');

    todoDiv.setAttribute('class', 'todo-list-todos__todo');
    todoText.setAttribute('class', 'todo__text');
    todoText.setAttribute('contenteditable', 'true');
    checkbox.setAttribute('class', 'todo__checkbox');
    checkboxInput.setAttribute('type', 'checkbox');
    removeButton.setAttribute('class', 'todo__delete-button');

    if (todo.check === true) {
        checkboxInput.checked = true;
        todoText.setAttribute('contenteditable', 'false');
        todoText.innerHTML = `<del>${todo.text}</del>`;
    } else {
        checkboxInput.checked = false;
        todoText.setAttribute('contenteditable', 'true');
        todoText.textContent = todo.text;
    }
    todoDiv.appendChild(todoText);
    todoText.addEventListener('keyup', (e) => {
        todo.text = todoText.textContent;
        if (todo.check === true) {
            todoText.innerHTML = `<del>${todo.text}</del>`;
        }
    });

    checkbox.appendChild(checkboxInput);
    todoDiv.appendChild(checkbox);
    checkboxInput.addEventListener('change', () => {
        todo.toggleCheck();
        if (todo.check) {
            todoText.setAttribute('contenteditable', 'false');
            todoText.innerHTML = `<del>${todo.text}</del>`;
        } else {
            todoText.setAttribute('contenteditable', 'true');
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

const makeDeleteCheckButtonHTML = (todoList) => {
    const deleteCheckButton = document.createElement('button');

    deleteCheckButton.setAttribute('class', 'todo__delete-button');
    deleteCheckButton.style.fontSize = '18px';
    deleteCheckButton.innerHTML = 'Remove Task';

    deleteCheckButton.addEventListener('click', () => {
        removeCheckedTodos(todoList);
    });

    return deleteCheckButton;
};