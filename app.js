import { RenderPage } from "./scripts/renderPage.js";
import { Todo } from "./scripts/manageTodo.js";
import { LocalStorageManager } from "./scripts/manageLocalStorage.js";

// Selectors
const selectorAddBtn = document.getElementById("btn-add-todo");
const selectorDeleteBtn = document.getElementById("btn-delete-todos");
const selectorToDoInput = document.getElementById("input-todo");
const selectorToDoList = document.getElementById("todo-list");

// Instances
const todo = new Todo();
const localStorageManager = new LocalStorageManager();
const renderPage = new RenderPage(selectorToDoList);

// Callbacks
const addTodo = () => {
  const todoInputValue = selectorToDoInput.value;

  if (!todoInputValue) throw new Error("todo is empty");

  const todos = todo.getTodo();

  todo.add({ todo: todoInputValue, id: `${todos.length + 1}-${Math.random()}` });

  renderPage.render(todos);

  localStorageManager.saveToLocalStorage(todos);
  
  selectorToDoInput.value = "";
  selectorToDoInput.focus();
};
const clearTodos = () => {
  localStorageManager.deleteLocalStorage();
  todo.deleteAll();
  selectorToDoInput.value = "";

  renderPage.render();
};
const handleWindowOnLoadEvent = () => {
  const todos = localStorageManager.getFromLocalStorage();

  todos?.forEach((el) => {
    todo.add(el);
  });

  renderPage.render(todo.getTodo());

  window.removeEventListener("load", handleWindowOnLoadEvent);
};
window.removeTodo = (id) => {
  todo.remove(id);

  const todos = todo.getTodo();

  renderPage.render(todos);

  localStorageManager.saveToLocalStorage(todos);
};

// Events
selectorAddBtn.addEventListener("click", addTodo);
selectorDeleteBtn.addEventListener("click", clearTodos);
selectorToDoInput.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) addTodo();
});
window.addEventListener("load", handleWindowOnLoadEvent);
