const addTodoForm = document.querySelector('.todo-form');
const newTodo = document.querySelector('#new-todo');
const todoList = document.querySelector('.todo-list');
const deleteTodo = document.querySelector('.delete-button');



addTodoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  todoList.innerHTML += `
    <div>
      <p>${newTodo.value}</p>
      <button class="delete-button">delete</button>
    </div>`;
  newTodo.value = '';
})

deleteTodo.addEventListener('click', () => {
  console.log(deleteTodo.parentElement.parentElement.innerHTML);
})