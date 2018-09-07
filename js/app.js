document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-todo-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllButtonClick);
})


const createNewToDoItemProperty = function(form, property) {
    const newProperty = document.createElement('li');
    newProperty.classList.add(`todo-item-${property}`);
    newProperty.textContent = form[property].value;

    return newProperty;
}

const createNewToDoItem = function(form) {
    const newToDoItem = document.createElement('ul');
    newToDoItem.classList.add('todo-item');

    const newTitle = createNewToDoItemProperty(form, 'title')
    newToDoItem.appendChild(newTitle);

    const newDetails = createNewToDoItemProperty(form, 'details')
    newToDoItem.appendChild(newDetails);

    const newDeadline = createNewToDoItemProperty(form, 'deadline')
    newToDoItem.appendChild(newDeadline);

    const newCategory = createNewToDoItemProperty(form, 'category')
    newToDoItem.appendChild(newCategory);

    return newToDoItem;
}

const handleNewItemFormSubmit = function(event) {
    event.preventDefault();

    const toDoList = document.querySelector('#todo-list');
    const newToDoItem = createNewToDoItem(event.target);

    toDoList.appendChild(newToDoItem);
    event.target.reset();
}

const handleDeleteAllButtonClick = function(event) {
    event.preventDefault();
    const toDoList = document.querySelector('#todo-list');

    toDoList.innerHTML = "";
}

