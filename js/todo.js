const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-form input');
const todoList = document.querySelector('.todo-list');

let toDos = [];

function onTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodo();
}

function saveTodo() {
  localStorage.setItem('toDos',JSON.stringify(toDos));
}

function paintTodo(newTodo) {
  if(todoList.childElementCount > 12) {
    return;
  } else {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerHTML = newTodo.text;
    const button = document.createElement('button');
    button.innerHTML = '✔'
    button.addEventListener('click', deleteTodo)
    li.append(span);
    li.append(button);
    todoList.append(li);
  } 
}

function deleteTodo(event) {
  const li = event.target.parentNode;
  li.remove();
  toDos = toDos.filter(todo => todo.id !== parseInt(li.id))
  saveTodo()
}

todoForm.addEventListener('submit', onTodoSubmit);

const savedTodos = localStorage.getItem('toDos');

if(savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  parsedTodos.forEach(todo => paintTodo(todo));
  toDos = parsedTodos;
} 

