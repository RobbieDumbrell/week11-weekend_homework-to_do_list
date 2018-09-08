document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-todo-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllButtonClick);
})


const createNewToDoItemProperty = function (form, property, pretext) {
    const newProperty = document.createElement('li');
    newProperty.classList.add(`todo-item-${property}`);
    newProperty.textContent = `${pretext} ${form[property].value}`;

    return newProperty;
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

    return newToDoItem;
}

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

