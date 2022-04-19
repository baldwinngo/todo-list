const addTodoForm = document.querySelector('.todo-form');
const newTodo = document.querySelector('#new-todo');
const todoList = document.querySelector('.todo-list');
const deleteTodo = document.querySelector('.delete-button');

addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  todoList.innerHTML += `
    <li>
      <p>${newTodo.value}</p>
      <button class="delete-button">delete</button>
    </li>`;
  newTodo.value = '';
})

todoList.addEventListener('click', (e) => {
  if (e.target.parentElement.tagName === 'LI') {
    e.target.parentElement.remove();
  }
})