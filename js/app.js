document.addEventListener('DOMContentLoaded', () => {
    const newItemForm = document.querySelector('#new-todo-item-form');
    newItemForm.addEventListener('submit', handleNewItemFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllButtonClick);
})

const createNewToDoItem = function(form) {
    const newToDoItem = document.createElement('ul');
    newToDoItem.classList.add('todo-item');

    const title = document.createElement('li');
    title.classList.add('todo-item-title');
    title.textContent = form.title.value;
    newToDoItem.appendChild(title);

    const details = document.createElement('li');
    details.classList.add('todo-item-details');
    details.textContent = form.details.value;
    newToDoItem.appendChild(details);

    const deadline = document.createElement('li');
    deadline.classList.add('todo-item-deadline');
    deadline.textContent = form.deadline.value;
    newToDoItem.appendChild(deadline);

    const category = document.createElement('li');
    category.classList.add('todo-item-category');
    category.textContent = form.category.value;
    newToDoItem.appendChild(category);

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

