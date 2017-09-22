// ADDS to a todo list according to user input
// When user presses enter, the todo will be added to the list
function addTodo(e) {
    if(e.keyCode === 13 && input.value != '') {
        let li = document.createElement('li');
        li.className = 'list-group-item justify-content-between';
        li.innerHTML = `<input type="checkbox" class="checkbox">${input.value}<span><i class="fa fa-trash delete" aria-hidden="true"></i>
        </span>`;
        ul.appendChild(li);
    
        // Clear the value after user submits their todo
        input.value = '';
    }
}

// REMOVE a todo from the list when user clicks on trash can icon
// Check if the target has the class name delete, if it does
// remove that todo
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        var li = e.target.parentElement.parentElement;
        todoList.removeChild(li);
    } 
}

/* DOM VARIABLES */
let ul = document.getElementById('list');
let todoList = document.querySelector('#list');
let input = document.querySelector('#todo');

// Listens for the user to press "enter" 
input.addEventListener('keypress', addTodo);
// Listens for when the user clicks on trash icon
todoList.addEventListener('click', removeItem);
