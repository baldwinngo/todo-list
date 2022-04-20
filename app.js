const addTodoForm = document.querySelector('.todo-form');
const newTodo = document.querySelector('#new-todo');
const todoList = document.querySelector('.todo-list');
const deleteTodo = document.querySelector('.delete-button');
const search = document.querySelector('#search');

addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  todoList.innerHTML += `
    <li>
      <p class="todo-item">${newTodo.value}</p>
      <button class="delete-button">delete</button>
    </li>`;
  newTodo.value = '';
})

todoList.addEventListener('click', (e) => {
  if ((e.target.parentElement.tagName === 'LI') && (e.target.tagName === 'BUTTON')) {
    e.target.parentElement.remove();
  }
})

search.addEventListener('input', (e) => {
  Array.from(document.querySelectorAll('.todo-item'))
    .filter(test => {
      if (!test.textContent.includes(e.target.value)) {
        test.parentElement.style.display = 'none';
      } else {
        test.parentElement.style.display = '';
      }
    });
})
