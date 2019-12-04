const form = document.querySelector('form');
const ul = document.querySelector('ul');
const clearButton = document.querySelector('button#clear');
const todoList = [];

function manageSubmit(event) {
    event.preventDefault();
    const value = (this.querySelector('[name=task]')).value;
    if (!value) return;
    
    addTodo(value)

    this.reset();
}

function handleClick(event) {
    const {target} = event;
    let liElement;
    if (target.matches('input')) {
        liElement = target.parentElement;
    } else if (target.matches('label')) {
        liElement = target.parentElement;
    } else if (target.matches('li')) {
        liElement = target;
    }
    const {index} = liElement.dataset;
    const value = !todoList[index].checked;
    todoList[index].checked = value;
    (liElement.querySelector('input')).checked = value;
    localStorage.setItem('todoList', JSON.stringify(todoList));
}

function clearList() {
    todoList.splice(0, todoList.length);
    ul.innerHTML = '';
    localStorage.setItem('todoList', todoList);
}

function addTodo(value, checked = false) {
    todoList.push({
        value,
        checked
    });
    localStorage.setItem('todoList', JSON.stringify(todoList));
    
    const index = todoList.length - 1;
    const li = document.createElement('li');
    li.setAttribute('data-index', index);
    li.innerHTML = `<input type='checkbox' ${checked ? 'checked' : ''}/><label>${value}</label>`;
    ul.appendChild(li);
}

function restoreTodoList() {
    const list = JSON.parse(localStorage.getItem('todoList')) || [];
    localStorage.removeItem('todoList');
    list.forEach(({value, checked}) => addTodo(value, checked));
}

restoreTodoList();
form.addEventListener('submit', manageSubmit);
ul.addEventListener('click', handleClick);
clearButton.addEventListener('click', clearList);