document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-todo-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllButtonClick);

    const deleteAllDoneButton = document.querySelector('#delete-all-done');
    deleteAllDoneButton.addEventListener('click', handleDeleteAllDoneButtonClick);
})

// CREATE NEW ELEMENTS FUNCTIONS:

const createNewToDoItemProperty = function (form, property, pretext) {
    const newProperty = document.createElement('li');
    newProperty.classList.add(`todo-item-${property}`);
    newProperty.textContent = `${pretext} ${form[property].value}`;

    return newProperty;
}

const createNewToDoItemButton = function (cssClass, buttonText) {
    const newButton = document.createElement('button');
    newButton.classList.add(`${cssClass}`);
    newButton.textContent = `${buttonText}`;

    return newButton;
}

const createNewToDoItem = function (form) {
    const newToDoItem = document.createElement('ul');
    newToDoItem.classList.add('todo-item');

    const newTitle = createNewToDoItemProperty(form, 'title', '')
    newToDoItem.appendChild(newTitle);

    const newDetails = createNewToDoItemProperty(form, 'details', '')
    newToDoItem.appendChild(newDetails);

    const newDeadline = createNewToDoItemProperty(form, 'deadline', 'Due: ')
    newToDoItem.appendChild(newDeadline);

    const newCategory = createNewToDoItemProperty(form, 'category', 'Category: ')
    newToDoItem.appendChild(newCategory);

    // MARK TO DONE BUT DON'T DELETE

    const newDoneButton = createNewToDoItemButton('done-button-item', 'DONE!');
    newToDoItem.appendChild(newDoneButton);
    newDoneButton.addEventListener('click', handleDoneItemButtonClick);

    // MARK AS IMPORTANT
    const newImportantButton = createNewToDoItemButton('important-button-item', 'IMPORTANT!');
    newToDoItem.appendChild(newImportantButton);
    newImportantButton.addEventListener('click', handleImportantItemButtonClick);

    // DELETE A SINGLE ITEM IN TO DO LIST
    const newDeleteItemButton = createNewToDoItemButton('delete-item', 'DELETE');
    newToDoItem.appendChild(newDeleteItemButton);
    newDeleteItemButton.addEventListener('click', handleDeleteItemButtonClick);

    return newToDoItem;
}

// REMOVE THE TO DO LIST DIV IF IT IS EMPTY OF TO DO ITEMS.

const removeListIfEmpty = function(){
    const toDoList = document.querySelector('#todo-list');

    if (toDoList.childNodes.length === 0) {
        const body = document.querySelector('body');
        body.removeChild(toDoList);
    }
}

// HANDLE EVENTS FUNCTIONS:

const handleNewItemFormSubmit = function (event) {
    event.preventDefault();

    if (document.querySelector('#todo-list')) {
        const newToDoItem = createNewToDoItem(event.target);
        const toDoList = document.querySelector('#todo-list');
        toDoList.appendChild(newToDoItem);
    } else {
        const toDoList = document.createElement('div')
        toDoList.id = 'todo-list';
        const newToDoItem = createNewToDoItem(event.target);
        toDoList.appendChild(newToDoItem);
        const body = document.querySelector('body');
        body.appendChild(toDoList);
    }

    event.target.reset();
}

const handleDeleteAllButtonClick = function (event) {
    event.preventDefault();
    const toDoList = document.querySelector('#todo-list');
    const body = document.querySelector('body');
    body.removeChild(toDoList);
}

const handleDeleteAllDoneButtonClick = function (event) {
    event.preventDefault();
    const toDoList = document.querySelector('#todo-list');
    const doneToDoItems = document.querySelectorAll('.done-todo-item');

    for (const toDoItem of doneToDoItems) {
        toDoList.removeChild(toDoItem);
    }

    removeListIfEmpty();
}

const handleDeleteItemButtonClick = function (event) {
    event.preventDefault();
    const deletingToDoItem = this.parentElement;
    const toDoList = document.querySelector('#todo-list');

    toDoList.removeChild(deletingToDoItem);

    removeListIfEmpty();
}

const handleDoneItemButtonClick = function (event) {
    event.preventDefault();
    const doneToDoItem = this.parentElement;
    if (doneToDoItem.classList.contains('done-todo-item')) {
        doneToDoItem.classList = 'todo-item';
    } else {
        doneToDoItem.classList = 'done-todo-item';
    }
}

const handleImportantItemButtonClick = function (event) {
    event.preventDefault();
    const importantToDoItem = this.parentElement;
    if (importantToDoItem.classList.contains('important-todo-item')) {
        importantToDoItem.classList = 'todo-item';
    } else {
        importantToDoItem.classList = 'important-todo-item';
    }
}

